import { useMemo, useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { Pressable } from "../components/Pressable";
import { Reveal } from "../components/Reveal";
import { StatusBadge } from "../components/StatusBadge";
import { bodies } from "../data/institutions";
import { matchesQuery } from "../data/search";

const filters = [
  { id: "toutes", label: "Tout" },
  { id: "institution", label: "Institutions" },
  { id: "agence", label: "Agences" },
] as const;

export function InstitutionsPage() {
  const [kind, setKind] = useState<(typeof filters)[number]["id"]>("toutes");
  const [query, setQuery] = useState("");

  const visible = useMemo(
    () =>
      bodies.filter((body) => {
        const kindOk = kind === "toutes" || body.kind === kind;
        const text = `${body.name} ${body.sigle ?? ""} ${body.category} ${body.mission} ${body.leader ?? ""}`;
        return kindOk && matchesQuery(query, text);
      }),
    [kind, query],
  );

  return (
    <>
      <PageHeader
        kicker="République"
        title="Situez l’État."
        lede="Institutions prévues par la Constitution et organismes publics dont le site a pu être ouvert. Chaque fiche indique sa source."
      />
      <div className="px-4 py-8 md:px-10">
        <div className="flex flex-col gap-4 border border-line bg-white p-4 md:flex-row md:items-center">
          <label className="sr-only" htmlFor="inst-search">
            Filtrer les institutions
          </label>
          <input
            id="inst-search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Assemblée, ANIP, impôts…"
            className="min-h-12 flex-1 bg-paper px-4 text-[16px] outline-none"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Catégorie">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                aria-pressed={kind === filter.id}
                onClick={() => setKind(filter.id)}
                className={`min-h-12 px-4 text-[15px] font-semibold transition-colors duration-200 ${kind === filter.id ? "bg-deep text-white" : "bg-sand text-deep"}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-4 text-[15px] text-muted">{visible.length} fiche{visible.length > 1 ? "s" : ""}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {visible.map((body, index) => (
            <Reveal key={body.id} delay={(index % 4) * 0.06}>
              <article id={body.id} className="scroll-mt-24 flex h-full flex-col border border-line bg-paper p-5">
                <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-palm-ink">
                  {body.sigle ? `${body.sigle} · ` : ""}
                  {body.category}
                </p>
                <h2 className="mt-3 font-display text-[30px] leading-[1.05] tracking-[-0.03em] text-deep">{body.name}</h2>
                {body.leader ? (
                  <p className="mt-3 text-[15px] text-ink">
                    <span className="text-muted">{body.leaderLabel} · </span>
                    {body.leader}
                  </p>
                ) : null}
                <p className="mt-4 flex-1 text-[16px] leading-relaxed text-ink">{body.mission}</p>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <StatusBadge check={body.check} />
                  {body.href ? (
                    <Pressable href={body.href} external className="inline-flex min-h-12 items-center bg-deep px-4 text-[15px] font-semibold text-white">
                      {body.linkLabel}
                    </Pressable>
                  ) : null}
                </div>
                {body.check.status !== "vérifié" && body.check.note ? (
                  <p className="mt-4 text-[15px] leading-relaxed text-muted">{body.check.note}</p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
        {visible.length === 0 ? <p className="mt-8 text-[16px]">Aucune fiche ne correspond.</p> : null}
      </div>
    </>
  );
}
