import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";

export function NotFoundPage() {
  return (
    <>
      <PageHeader
        kicker="Adresse inconnue"
        title="Revenez à l’accueil."
        lede="Cette adresse ne correspond à aucune section du portail."
      />
      <div className="px-4 py-8 md:px-10">
        <Link to="/" className="inline-flex min-h-12 items-center bg-deep px-5 text-[16px] font-semibold text-white">
          Accueil
        </Link>
      </div>
    </>
  );
}
