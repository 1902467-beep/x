'use client'

import { useEffect, useMemo, useState } from 'react'
import { TASKS } from '@/lib/data'

const CATS = ['Todas', ...Array.from(new Set(TASKS.map((t) => t.cat)))]

const PLACEHOLDER_HINTS = ['tradução', 'código', 'imagem', 'música', 'diagnóstico', 'resumo']

// Placeholder com efeito de máquina de escrever, alternando sugestões.
function useTypewriterPlaceholder(hints: string[]) {
  const [text, setText] = useState('')
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setText(hints[0])
      return
    }

    let hintIndex = 0
    let charIndex = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    function tick() {
      const hint = hints[hintIndex]
      if (!deleting) {
        charIndex++
        setText(hint.slice(0, charIndex))
        if (charIndex === hint.length) {
          deleting = true
          timer = setTimeout(tick, 1600)
          return
        }
        timer = setTimeout(tick, 70)
      } else {
        charIndex--
        setText(hint.slice(0, charIndex))
        if (charIndex === 0) {
          deleting = false
          hintIndex = (hintIndex + 1) % hints.length
          timer = setTimeout(tick, 350)
          return
        }
        timer = setTimeout(tick, 35)
      }
    }

    timer = setTimeout(tick, 600)
    return () => clearTimeout(timer)
  }, [hints, paused])

  return { text, setPaused }
}

export function Catalog() {
  const [activeCat, setActiveCat] = useState('Todas')
  const [query, setQuery] = useState('')
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())
  const { text: hint, setPaused } = useTypewriterPlaceholder(PLACEHOLDER_HINTS)

  // chave que muda quando o filtro muda — remonta a lista e reanima a entrada das fichas
  const listKey = `${activeCat}|${query.trim().toLowerCase()}`

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TASKS.filter((item) => {
      const matchCat = activeCat === 'Todas' || item.cat === activeCat
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.example.toLowerCase().includes(q) ||
        item.cat.toLowerCase().includes(q)
      return matchCat && matchQuery
    })
  }, [activeCat, query])

  function toggleRow(title: string) {
    setOpenRows((prev) => {
      const next = new Set(prev)
      if (next.has(title)) next.delete(title)
      else next.add(title)
      return next
    })
  }

  return (
    <>
      {/* Controles fixos */}
      <div className="sticky top-0 z-10 border-b border-border bg-background px-8 pt-4">
        <div className="mx-auto max-w-3xl">
          <label htmlFor="search" className="sr-only">
            Buscar uma tarefa
          </label>
          <input
            id="search"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            placeholder={`Buscar uma tarefa — ex: ${hint}`}
            className="w-full border-b border-border bg-transparent py-2.5 text-[15px] text-foreground outline-none transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent"
          />

          <div className="flex flex-wrap gap-2 py-4" role="group" aria-label="Filtrar por categoria">
            {CATS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                aria-pressed={activeCat === cat}
                className={`cat-chip px-3 py-1.5 font-mono text-xs tracking-wide ${
                  activeCat === cat
                    ? 'border border-foreground bg-foreground text-background'
                    : 'border border-border text-muted-foreground hover:border-muted-foreground hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <p className="pb-3.5 font-mono text-xs text-muted-foreground" aria-live="polite">
            <b className="font-medium text-foreground">{filtered.length}</b> de {TASKS.length}{' '}
            tarefas correspondem ao filtro atual
          </p>
        </div>
      </div>

      {/* Lista de fichas */}
      <section className="mx-auto max-w-3xl px-8 pt-2 pb-8">
        {filtered.length === 0 ? (
          <p className="row-enter py-16 text-center text-sm text-muted-foreground">
            Nenhuma tarefa corresponde à busca. Tente outro termo.
          </p>
        ) : (
          <div key={listKey}>
            {filtered.map((item, i) => {
              const isOpen = openRows.has(item.title)
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => toggleRow(item.title)}
                  aria-expanded={isOpen}
                  data-open={isOpen}
                  style={{ '--row-i': Math.min(i, 10) } as React.CSSProperties}
                  className={`row-card row-enter grid w-full grid-cols-1 gap-2.5 border-t border-border py-7 text-left hover:bg-card md:grid-cols-[150px_1fr] md:gap-6 ${
                    i === filtered.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <span className="pt-0.5 font-mono text-xs tracking-wide text-accent">
                    {item.cat}
                  </span>
                  <span className="block">
                    <span className="flex items-baseline justify-between gap-3">
                      <h3 className="font-serif text-lg font-medium md:text-xl">{item.title}</h3>
                      <span
                        aria-hidden="true"
                        className="row-toggle shrink-0 font-mono text-sm text-muted-foreground"
                      >
                        +
                      </span>
                    </span>
                    <span className="mt-2.5 block max-w-[52ch] text-[14.5px] leading-relaxed text-muted-foreground">
                      {item.desc}
                    </span>
                    <span className="row-example block" data-open={isOpen}>
                      <span className="block">
                        <span className="mt-4 block border-t border-border pt-4">
                          <span className="mb-1.5 block font-mono text-[11px] tracking-widest text-muted-foreground uppercase">
                            Exemplo de uso
                          </span>
                          <span className="block max-w-[52ch] text-[13.5px] leading-relaxed text-foreground">
                            {item.example}
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        )}
      </section>
    </>
  )
}
