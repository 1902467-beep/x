import { MILESTONES } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Timeline() {
  return (
    <section className="mx-auto max-w-3xl px-8 py-20" aria-labelledby="timeline-heading">
      <Reveal>
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          Linha do tempo
        </span>
        <h2 id="timeline-heading" className="mt-3 font-serif text-3xl text-balance md:text-4xl">
          Como chegamos <em className="text-accent">até aqui</em>
        </h2>
        <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
          Setenta anos separam a pergunta de Turing dos agentes de hoje. Alguns
          marcos que mudaram o que as máquinas conseguem fazer.
        </p>
      </Reveal>

      <ol className="mt-12">
        {MILESTONES.map((m, i) => (
          <Reveal key={m.year + m.title} as="li" delay={Math.min(i * 60, 240)}>
            <div className="grid grid-cols-1 gap-2 border-t border-border py-6 md:grid-cols-[150px_1fr] md:gap-6">
              <span className="font-serif text-xl text-accent tabular-nums">{m.year}</span>
              <div>
                <h3 className="font-serif text-lg font-medium">{m.title}</h3>
                <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-relaxed text-muted-foreground">
                  {m.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
