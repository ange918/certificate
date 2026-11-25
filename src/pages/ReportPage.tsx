import { PageHeader } from "../components/PageHeader";
import { Pressable } from "../components/Pressable";
import { Reveal } from "../components/Reveal";
import { StatusBadge } from "../components/StatusBadge";
import { extraCalls, hotlines } from "../data/hotlines";

export function ReportPage() {
  return (
    <>
      <PageHeader
        kicker="Numéros utiles"
        title="Signalez."
        lede="Chaque carte dit quoi dénoncer, et compose le numéro. Seuls les motifs confirmés par une source officielle sont proposés."
      />
      <div className="grid gap-4 px-4 py-8 md:grid-cols-2 md:px-10">
        {hotlines.map((line, index) => {
          const extras = extraCalls.filter((call) => call.parent === line.id);
          return (
            <Reveal key={line.id} delay={(index % 4) * 0.07}>
              <article id={line.id} className="scroll-mt-24 flex h-full flex-col border border-line bg-white p-5">
                <p className="font-display text-[64px] leading-none tracking-[-0.04em] text-signal">{line.number}</p>
                <h2 className="mt-3 font-display text-[32px] leading-[1.05] tracking-[-0.03em] text-deep">
                  {line.title}
                </h2>
                <p className="mt-3 flex-1 text-[16px] leading-relaxed">{line.detail}</p>
                <p className="mt-3 text-[15px] text-muted">
                  {line.free ? "Appel gratuit depuis le Bénin. " : "Numéro long, non annoncé comme gratuit. "}
                  {line.hours ?? ""}
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Pressable href={`tel:${line.tel}`} className="inline-flex min-h-12 items-center justify-center bg-signal px-4 text-[16px] font-semibold text-white">
                    Appeler le {line.number}
                  </Pressable>
                  {extras.map((call) => (
                    <Pressable
                      key={call.tel}
                      href={`tel:${call.tel}`}
                      className="inline-flex min-h-12 items-center justify-center border border-signal px-4 text-[16px] font-semibold text-signal"
                    >
                      Appeler le {call.number}
                    </Pressable>
                  ))}
                  {line.href ? (
                    <a href={line.href} target="_blank" rel="noopener noreferrer" className="text-[15px] font-medium text-deep underline underline-offset-4">
                      {line.linkLabel}
                    </a>
                  ) : null}
                  <StatusBadge check={line.check} />
                </div>
                {line.check.note ? <p className="mt-4 text-[15px] leading-relaxed text-muted">{line.check.note}</p> : null}
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}
