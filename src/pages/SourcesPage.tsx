import { PageHeader } from "../components/PageHeader";
import { openPoints } from "../data/audit";
import { unconfirmedShortCodes } from "../data/hotlines";
import { VERIFIED_ON_LABEL } from "../data/types";

export function SourcesPage() {
  const points = openPoints().filter((point) => point.status !== "vérifié");
  const notes = openPoints().filter((point) => point.status === "vérifié" && point.note);

  return (
    <>
      <PageHeader
        kicker={`Relecture du ${VERIFIED_ON_LABEL}`}
        title="Vérifiez les sources."
        lede="Les fichiers de données citent la page officielle et la date. Voici ce qui reste ouvert."
      />
      <div className="px-4 py-8 md:px-10">
        <ol className="max-w-3xl">
          {points.map((point, index) => (
            <li key={point.id} className="border-t border-line py-5">
              <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-signal">
                {String(index + 1).padStart(2, "0")} · {point.status}
              </p>
              <h2 className="mt-2 text-[20px] font-semibold text-deep">{point.title}</h2>
              <p className="mt-2 text-[16px] leading-relaxed">{point.note}</p>
            </li>
          ))}
        </ol>
        <h2 className="mt-12 font-display text-[36px] tracking-[-0.03em] text-deep">Précisions déjà sourcées</h2>
        <ul className="mt-4 max-w-3xl">
          {notes.map((point) => (
            <li key={point.id} className="border-t border-line py-4">
              <h3 className="text-[18px] font-semibold text-deep">{point.title}</h3>
              <p className="mt-2 text-[16px] leading-relaxed">{point.note}</p>
            </li>
          ))}
        </ul>
        <h2 className="mt-12 font-display text-[36px] tracking-[-0.03em] text-deep">Numéros sans motif publié</h2>
        <p className="mt-3 max-w-3xl text-[16px] leading-relaxed text-muted">
          Attribués par l’ARCEP le 1er juin 2026. Le motif d’appel n’est pas dans la liste, donc aucun bouton d’appel n’est proposé.
        </p>
        <ul className="mt-5 max-w-3xl">
          {unconfirmedShortCodes.map((item) => (
            <li key={item.number} className="flex gap-4 border-t border-line py-3 text-[16px]">
              <span className="w-14 font-semibold text-deep">{item.number}</span>
              <span>{item.holder}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
