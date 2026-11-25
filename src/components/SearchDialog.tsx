import { useEffect, useId, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { searchHits, type Hit } from "../data/search";

type SearchDialogProps = {
  open: boolean;
  query: string;
  onQuery: (value: string) => void;
  onClose: () => void;
};

const kindTone: Record<Hit["kind"], string> = {
  Personne: "text-palm-ink",
  Institution: "text-lagoon",
  Agence: "text-lagoon",
  Démarche: "text-deep",
  Numéro: "text-signal",
};

export function SearchDialog({ open, query, onQuery, onClose }: SearchDialogProps) {
  const inputId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const results = query.trim() ? searchHits(query).slice(0, 12) : [];

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const go = (hit: Hit) => {
    onClose();
    navigate(hit.to);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-deep/70 px-4 pt-16 md:pt-24" role="presentation" onMouseDown={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={inputId}
        className="w-full max-w-2xl border border-line bg-paper shadow-none"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <label className="sr-only" htmlFor={inputId}>
          Rechercher dans le portail
        </label>
        <input
          ref={inputRef}
          id={inputId}
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Un nom, une démarche, un numéro"
          className="w-full border-0 bg-transparent px-5 py-5 text-[18px] text-ink outline-none placeholder:text-muted"
        />
        <ul className="max-h-[60dvh] overflow-auto border-t border-line">
          {query.trim() && results.length === 0 ? (
            <li className="px-5 py-6 text-[16px] text-muted">Aucun résultat pour cette recherche.</li>
          ) : null}
          {results.map((hit) => (
            <li key={`${hit.kind}-${hit.id}`}>
              <button
                type="button"
                className="flex w-full flex-col gap-1 px-5 py-4 text-left transition-colors duration-200 hover:bg-sand"
                onClick={() => go(hit)}
              >
                <span className={`text-[14px] font-semibold uppercase tracking-[0.14em] ${kindTone[hit.kind]}`}>
                  {hit.kind}
                </span>
                <span className="text-[17px] font-medium text-deep">{hit.title}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between border-t border-line px-5 py-3 text-[14px] text-muted">
          <span>Recherche dans les quatre sections</span>
          <button type="button" className="font-semibold text-deep" onClick={onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}
