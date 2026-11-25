import { PageHeader } from "../components/PageHeader";
import { Pressable } from "../components/Pressable";
import { Reveal } from "../components/Reveal";
import { StatusBadge } from "../components/StatusBadge";
import { executives, ministers, type Official } from "../data/government";
import { photos } from "../data/photos";

function PersonBlock({ person, large = false }: { person: Official; large?: boolean }) {
  return (
    <article id={person.id} className="scroll-mt-24 border-t border-line py-8 md:py-10">
      <div className={`grid gap-6 ${large ? "md:grid-cols-[280px_1fr]" : "md:grid-cols-[160px_1fr]"}`}>
        <img
          src={person.portrait}
          alt={`Portrait de ${person.name}`}
          className={`w-full object-cover object-top ${large ? "aspect-[4/5]" : "aspect-[4/5] md:max-w-[160px]"}`}
          loading={large ? undefined : "lazy"}
        />
        <div>
          {person.sigle ? (
            <p className="text-[14px] font-semibold uppercase tracking-[0.16em] text-palm-ink">{person.sigle}</p>
          ) : null}
          <h2 className={`mt-2 font-display leading-[0.95] tracking-[-0.03em] text-deep ${large ? "text-[clamp(2.2rem,5vw,4.2rem)]" : "text-[clamp(1.7rem,3vw,2.4rem)]"}`}>
            {person.name}
          </h2>
          <p className="mt-4 max-w-3xl text-[17px] leading-relaxed text-ink">{person.role}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <StatusBadge check={person.check} />
            {person.href ? (
              <Pressable
                href={person.href}
                external
                className="inline-flex min-h-12 items-center border border-deep px-4 text-[15px] font-semibold text-deep"
              >
                {person.linkLabel}
              </Pressable>
            ) : (
              <p className="text-[15px] text-muted">Site du ministère non publié sur gouv.bj.</p>
            )}
          </div>
          {person.publicNote ? <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">{person.publicNote}</p> : null}
          {person.check.status !== "vérifié" && person.check.note ? (
            <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-muted">{person.check.note}</p>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function GovernmentPage() {
  return (
    <>
      <PageHeader
        kicker="Exécutif · entrée en fonction le 24 mai 2026"
        title="Rencontrez l’exécutif."
        lede="Le président, la vice-présidente et les ministres publiés sur gouv.bj, avec le lien du ministère lorsqu’il existe."
      />
      <div className="px-4 md:px-10">
        <Reveal>
          <img
            src={photos.marina}
            alt="Jardins et bâtiment institutionnel au Bénin"
            className="mt-8 aspect-[16/8] w-full object-cover"
          />
        </Reveal>
        {executives.map((person, index) => (
          <Reveal key={person.id} delay={index * 0.07}>
            <PersonBlock person={person} large />
          </Reveal>
        ))}
        <h2 className="mt-12 font-display text-[clamp(2rem,4vw,3.2rem)] tracking-[-0.03em] text-deep">
          Les ministres
        </h2>
        <p className="mt-3 max-w-2xl text-[16px] text-muted">
          Vingt-quatre portefeuilles, dans l’ordre publié sur gouv.bj/membres.
        </p>
        {ministers.map((person, index) => (
          <Reveal key={person.id} delay={(index % 4) * 0.06}>
            <PersonBlock person={person} />
          </Reveal>
        ))}
      </div>
      <div className="h-8" />
    </>
  );
}
