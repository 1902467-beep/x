'use client'

import { useMemo, useState } from 'react'
import { TASKS } from '@/lib/data'

const CATS = ['Todas', ...Array.from(new Set(TASKS.map((t) => t.cat)))]

export function Catalog() {
  const [activeCat, setActiveCat] = useState('Todas')
  const [query, setQuery] = useState('')
  const [openRows, setOpenRows] = useState<Set<string>>(new Set())

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
            placeholder="Buscar uma tarefa — ex: tradução, código, imagem..."
            className="w-full border-b border-border bg-transparent py-2.5 text-[15px] text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
          />

          <div className="flex flex-wrap gap-2 py-4" role="group" aria-label="Filtrar por categoria">
            {CATS.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCat(cat)}
                aria-pressed={activeCat === cat}
                className={`px-3 py-1.5 font-mono text-xs tracking-wide transition-colors ${
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
          <p className="py-16 text-center text-sm text-muted-foreground">
            Nenhuma tarefa corresponde à busca. Tente outro termo.
          </p>
        ) : (
          <div>
            {filtered.map((item, i) => {
              const isOpen = openRows.has(item.title)
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => toggleRow(item.title)}
                  aria-expanded={isOpen}
                  className={`grid w-full grid-cols-1 gap-2.5 border-t border-border py-7 text-left transition-colors hover:bg-card md:grid-cols-[150px_1fr] md:gap-6 ${
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
                        className="shrink-0 font-mono text-sm text-muted-foreground"
                      >
                        {isOpen ? '–' : '+'}
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
