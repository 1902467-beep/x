'use client'

import { useEffect, useRef, useState } from 'react'
import { TASKS } from '@/lib/data'

function useCountUp(target: number, start: boolean, duration = 1100) {
  const [value, setValue] = useState(0)
  const frame = useRef<number>(0)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()
    function tick(now: number) {
      const p = Math.min(1, (now - startTime) / duration)
      // easing suave no final
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.floor(eased * target))
      if (p < 1) frame.current = requestAnimationFrame(tick)
      else setValue(target)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [target, start, duration])

  return value
}

export function Hero({ started }: { started: boolean }) {
  const count = useCountUp(TASKS.length, started)
  const categories = new Set(TASKS.map((t) => t.cat)).size

  const stagger = (i: number) =>
    ({
      opacity: started ? 1 : 0,
      transform: started ? 'translateY(0)' : 'translateY(28px)',
      transition: `opacity 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s, transform 0.9s cubic-bezier(0.22,1,0.36,1) ${i * 0.12}s`,
    }) as React.CSSProperties

  return (
    <section className="mx-auto max-w-3xl px-8 pt-20 pb-16 md:pt-24">
      <h1
        className="max-w-[15ch] font-serif text-5xl leading-[1.1] font-normal tracking-tight text-balance md:text-6xl"
        style={stagger(0)}
      >
        Inteligência,
        <br />
        <em className="text-accent">catalogada.</em>
      </h1>

      <p
        className="mt-8 max-w-[46ch] text-[17px] leading-relaxed text-muted-foreground text-pretty"
        style={stagger(1)}
      >
        Sistemas de IA já leem, escrevem, calculam, enxergam, ouvem, compõem e
        decidem — ao mesmo tempo, em qualquer idioma, sem parar. Um recorte do
        que já está em uso hoje, com exemplos reais de aplicação, os marcos que
        trouxeram o campo até aqui e os limites que ainda permanecem.
      </p>

      <div className="mt-12 flex flex-wrap gap-x-14 gap-y-8 border-t border-border pt-7" style={stagger(2)}>
        <div className="flex items-baseline gap-3.5">
          <span className="min-w-[2ch] font-serif text-3xl tabular-nums">{count}</span>
          <span className="max-w-[18ch] text-[13px] leading-snug text-muted-foreground">
            tarefas distintas registradas neste catálogo
          </span>
        </div>
        <div className="flex items-baseline gap-3.5">
          <span className="min-w-[2ch] font-serif text-3xl tabular-nums">
            {started ? categories : 0}
          </span>
          <span className="max-w-[18ch] text-[13px] leading-snug text-muted-foreground">
            campos de capacidade documentados
          </span>
        </div>
      </div>
    </section>
  )
}
