'use client'

import { useState } from 'react'
import { Intro } from '@/components/intro'
import { Hero } from '@/components/hero'
import { Catalog } from '@/components/catalog'
import { Timeline } from '@/components/timeline'
import { Limits } from '@/components/limits'
import { Reveal } from '@/components/reveal'
import { TASKS } from '@/lib/data'

export default function Page() {
  const [introDone, setIntroDone] = useState(false)

  return (
    <>
      {!introDone && <Intro onDone={() => setIntroDone(true)} />}

      <header className="mx-auto flex max-w-3xl items-baseline justify-between px-8 pt-12 text-[13px] tracking-wide text-muted-foreground">
        <span className="text-foreground">Índice&nbsp;IA</span>
        <span>Catálogo aberto</span>
      </header>

      <main>
        <Hero started={introDone} />

        <Catalog />

        <Timeline />

        <Limits />

        <section className="mx-auto max-w-3xl px-8 pt-4 pb-28">
          <Reveal>
            <p className="max-w-[28ch] font-serif text-2xl leading-normal italic text-balance md:text-3xl">
              O catálogo nunca fecha.{' '}
              <span className="not-italic text-accent">Cada mês, novas fichas se abrem.</span>
            </p>
          </Reveal>
        </section>
      </main>

      <footer className="mx-auto flex max-w-3xl justify-between border-t border-border px-8 pt-5 pb-12 text-xs text-muted-foreground">
        <span>Índice IA — protótipo</span>
        <span>{TASKS.length} fichas no catálogo</span>
      </footer>
    </>
  )
}
