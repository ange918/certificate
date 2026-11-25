import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { Pressable } from "../components/Pressable";
import { Reveal } from "../components/Reveal";
import { StatusBadge } from "../components/StatusBadge";
import { matchesQuery } from "../data/search";
import { serviceCategories, services } from "../data/services";

export function ServicesPage() {
  const [params, setParams] = useSearchParams();
  const query = params.get("q") ?? "";
  const category = params.get("cat") ?? "Toutes";
  const ministry = params.get("min") ?? "Tous";

  const ministries = useMemo(
    () => ["Tous", ...Array.from(new Set(services.map((service) => service.ministry)))],
    [],
  );

  const visible = services.filter((service) => {
    const categoryOk = category === "Toutes" || service.category === category;
    const ministryOk = ministry === "Tous" || service.ministry === ministry;
    return categoryOk && ministryOk && matchesQuery(query, `${service.title} ${service.summary} ${service.category} ${service.ministry}`);
  });

  const write = (next: { q?: string; cat?: string; min?: string }) => {
    const following = new URLSearchParams(params);
    const q = next.q ?? query;
    const cat = next.cat ?? category;
    const min = next.min ?? ministry;
    if (q) following.set("q", q);
    else following.delete("q");
    if (cat !== "Toutes") following.set("cat", cat);
    else following.delete("cat");
    if (min !== "Tous") following.set("min", min);
    else following.delete("min");
    setParams(following, { replace: true });
  };

  return (
    <>
      <PageHeader
        kicker="Services publics numériques"
        title="Lancez la démarche."
        lede="Annuaire des plateformes officielles. Le lien ouvre le site de l’administration, jamais une copie."
      />
      <div className="px-4 py-8 md:px-10">
        <form
          className="border border-line bg-white p-4"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="svc-search" className="text-[14px] font-semibold uppercase tracking-[0.14em] text-palm-ink">
            Recherche plein texte
          </label>
          <div className="mt-3">
            <input
              id="svc-search"
              value={query}
              onChange={(event) => write({ q: event.target.value })}
              placeholder="Visa, casier, entreprise, impôts…"
              className="min-h-12 w-full bg-paper px-4 text-[16px] outline-none"
            />
          </div>
          <fieldset className="mt-5">
            <legend className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">Catégorie</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {["Toutes", ...serviceCategories].map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={category === item}
                  onClick={() => write({ cat: item })}
                  className={`min-h-11 px-3 text-[15px] font-medium transition-colors duration-200 ${category === item ? "bg-deep text-white" : "bg-sand text-deep"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset className="mt-5">
            <legend className="text-[14px] font-semibold uppercase tracking-[0.14em] text-muted">Ministère ou administration</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {ministries.map((item) => (
                <button
                  key={item}
                  type="button"
                  aria-pressed={ministry === item}
                  onClick={() => write({ min: item })}
                  className={`min-h-11 px-3 text-left text-[15px] font-medium transition-colors duration-200 ${ministry === item ? "bg-lagoon text-white" : "bg-sand text-deep"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </fieldset>
        </form>

        <p className="mt-5 text-[15px] text-muted">{visible.length} démarche{visible.length > 1 ? "s" : ""}</p>
        <ul className="mt-3">
          {visible.map((service, index) => (
            <Reveal key={service.id} delay={(index % 5) * 0.06}>
              <li id={service.id} className="scroll-mt-24 border-t border-line py-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="max-w-3xl">
                    <p className="text-[14px] font-semibold uppercase tracking-[0.14em] text-palm-ink">
                      {service.category}
                    </p>
                    <h2 className="mt-2 font-display text-[32px] leading-none tracking-[-0.03em] text-deep">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[16px] leading-relaxed">{service.summary}</p>
                    <p className="mt-3 text-[15px] text-muted">{service.ministry}</p>
                    {service.check.status !== "vérifié" && service.check.note ? (
                      <p className="mt-3 text-[15px] leading-relaxed text-muted">{service.check.note}</p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 flex-col items-start gap-3">
                    <StatusBadge check={service.check} />
                    <Pressable href={service.href} external className="inline-flex min-h-12 items-center bg-deep px-5 text-[16px] font-semibold text-white">
                      Ouvrir le service
                    </Pressable>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        {visible.length === 0 ? <p className="mt-8 text-[16px]">Aucune démarche ne correspond. Élargissez la catégorie ou le ministère.</p> : null}
      </div>
    </>
  );
}
