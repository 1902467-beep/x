import { LIMITS } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Limits() {
  return (
    <section className="mx-auto max-w-3xl px-8 py-20" aria-labelledby="limits-heading">
      <Reveal>
        <span className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
          Contraponto
        </span>
        <h2 id="limits-heading" className="mt-3 font-serif text-3xl text-balance md:text-4xl">
          O que ainda <em className="text-accent">não sabem fazer</em>
        </h2>
        <p className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted-foreground">
          Um catálogo honesto registra também as páginas em branco. Estes são
          limites conhecidos e documentados — e o motivo de a supervisão humana
          continuar no circuito.
        </p>
      </Reveal>

      <ol className="mt-12">
        {LIMITS.map((limit, i) => (
          <Reveal key={limit.title} as="li" delay={Math.min(i * 60, 240)}>
            <div className="grid grid-cols-1 gap-2 border-t border-border py-6 md:grid-cols-[150px_1fr] md:gap-6">
              <span className="pt-1 font-mono text-xs tracking-wide text-muted-foreground">
                Limite {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-lg font-medium">{limit.title}</h3>
                <p className="mt-1.5 max-w-[52ch] text-[14.5px] leading-relaxed text-muted-foreground">
                  {limit.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
