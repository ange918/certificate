import { Link } from "react-router-dom";
import { Pressable } from "../components/Pressable";
import { Reveal } from "../components/Reveal";
import { photos } from "../data/photos";
import { VERIFIED_ON_LABEL } from "../data/types";

const entries = [
  { to: "/gouvernement", index: "01", title: "Rencontrer l’exécutif", text: "Le président, la vice-présidente et les ministres." },
  { to: "/institutions", index: "02", title: "Situer les institutions", text: "Cours, assemblées, autorités et agences." },
  { to: "/demarches", index: "03", title: "Lancer une démarche", text: "Les plateformes officielles, avec recherche et filtres." },
  { to: "/signaler", index: "04", title: "Signaler", text: "Le numéro à appeler, selon le fait à dénoncer." },
];

const places = [
  { src: photos.ouidah, label: "Littoral" },
  { src: photos.abomey, label: "Abomey" },
  { src: photos.pendjari, label: "Pendjari" },
  { src: photos.ganvie, label: "Ganvié" },
];

export function HomePage() {
  return (
    <>
      <section className="bg-deep text-white">
        <div className="grid gap-10 px-4 py-12 md:grid-cols-[1.1fr_0.9fr] md:px-10 md:py-20">
          <Reveal>
            <p className="text-[14px] font-semibold uppercase tracking-[0.18em] text-gold">
              République du Bénin
            </p>
            <h1 className="mt-4 font-display text-[clamp(3.4rem,11vw,7.5rem)] leading-[0.86] tracking-[-0.04em] text-balance">
              Orientez-vous.
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-white/90">
              Quatre portes vers l’État : l’exécutif, les institutions, les démarches en ligne et les numéros pour signaler.
            </p>
            <p className="mt-8 text-[14px] uppercase tracking-[0.16em] text-white/75">
              Fraternité · Justice · Travail
            </p>
          </Reveal>
          <Reveal delay={0.07} className="flex items-end">
            <form action="/recherche" className="w-full border border-white/20 bg-white p-2">
              <label htmlFor="home-search" className="px-3 pt-3 text-[14px] font-semibold uppercase tracking-[0.14em] text-palm-ink">
                Recherche globale
              </label>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <input
                  id="home-search"
                  name="q"
                  type="search"
                  placeholder="Wadagni, casier, 114, ANIP…"
                  className="min-h-12 flex-1 bg-paper px-4 text-[16px] text-ink outline-none"
                />
                <button type="submit" className="min-h-12 bg-palm px-5 text-[16px] font-semibold text-white">
                  Chercher
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      <figure className="relative">
        <img
          src={photos.amazone}
          alt="Statue de l’Amazone sur l’esplanade en front de mer, à Cotonou"
          className="aspect-[16/10] w-full object-cover md:aspect-[21/8]"
        />
        <figcaption className="absolute bottom-0 left-0 bg-paper px-4 py-3 text-[14px] font-medium text-deep">
          Cotonou, esplanade de l’Amazone
        </figcaption>
      </figure>

      <section className="px-4 py-12 md:px-10 md:py-16">
        <ol>
          {entries.map((entry, index) => (
            <Reveal key={entry.to} delay={index * 0.07}>
              <li className="border-t border-line">
                <Link
                  to={entry.to}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 md:gap-8 md:py-8"
                >
                  <span className="font-display text-[28px] text-palm-ink md:text-[40px]">{entry.index}</span>
                  <span>
                    <span className="block font-display text-[28px] leading-none tracking-[-0.03em] text-deep md:text-[40px]">
                      {entry.title}
                    </span>
                    <span className="mt-2 block text-[16px] text-muted">{entry.text}</span>
                  </span>
                  <span aria-hidden="true" className="text-[24px] text-deep">
                    →
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="grid gap-2 px-4 pb-12 md:grid-cols-4 md:px-10">
        {places.map((place, index) => (
          <Reveal key={place.label} delay={index * 0.06}>
            <figure>
              <img src={place.src} alt={place.label} className="aspect-[4/5] w-full object-cover" loading="lazy" />
              <figcaption className="mt-2 text-[14px] font-medium text-deep">{place.label}</figcaption>
            </figure>
          </Reveal>
        ))}
      </section>

      <footer className="border-t border-line px-4 py-10 md:px-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-[32px] leading-none text-deep">Sources tenues à jour.</p>
            <p className="mt-3 max-w-xl text-[16px] text-muted">
              Noms, liens et numéros relus le {VERIFIED_ON_LABEL}. Ce qui n’a pas pu être confirmé est marqué « à vérifier ».
            </p>
          </div>
          <Pressable href="/sources" className="inline-flex min-h-12 items-center bg-deep px-5 text-[16px] font-semibold text-white">
            Lire les points ouverts
          </Pressable>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[15px]">
          <a className="underline decoration-line underline-offset-4" href="https://presidence.bj/" target="_blank" rel="noopener noreferrer">presidence.bj</a>
          <a className="underline decoration-line underline-offset-4" href="https://www.gouv.bj/" target="_blank" rel="noopener noreferrer">gouv.bj</a>
          <a className="underline decoration-line underline-offset-4" href="https://service-public.bj/" target="_blank" rel="noopener noreferrer">service-public.bj</a>
        </div>
      </footer>
    </>
  );
}
