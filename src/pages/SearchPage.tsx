import { Link, useSearchParams } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { searchHits } from "../data/search";

export function SearchPage() {
  const [params] = useSearchParams();
  const query = params.get("q") ?? "";
  const results = query.trim() ? searchHits(query) : [];

  return (
    <>
      <PageHeader
        kicker="Recherche"
        title="Cherchez."
        lede="La recherche parcourt les personnes, les institutions, les démarches et les numéros."
      />
      <div className="px-4 py-8 md:px-10">
        <form className="flex flex-col gap-2 sm:flex-row" action="/recherche">
          <label className="sr-only" htmlFor="global-q">Votre recherche</label>
          <input
            id="global-q"
            name="q"
            defaultValue={query}
            className="min-h-12 flex-1 border border-line bg-white px-4 text-[16px] outline-none"
          />
          <button className="min-h-12 bg-deep px-5 text-[16px] font-semibold text-white" type="submit">
            Chercher
          </button>
        </form>
        <p className="mt-5 text-[15px] text-muted">
          {query.trim() ? `${results.length} résultat${results.length > 1 ? "s" : ""}` : "Saisissez un mot."}
        </p>
        <ul className="mt-3">
          {results.map((hit) => (
            <li key={`${hit.kind}-${hit.id}`} className="border-t border-line">
              <Link to={hit.to} className="block py-5">
                <span className="text-[14px] font-semibold uppercase tracking-[0.14em] text-palm-ink">{hit.kind}</span>
                <span className="mt-1 block text-[20px] font-medium text-deep">{hit.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
