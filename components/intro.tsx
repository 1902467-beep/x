'use client'

import { useEffect, useState } from 'react'

// Cortina de abertura: palavra a palavra, linha que cresce, e a cortina sobe.
export function Intro({ onDone }: { onDone: () => void }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2100)
    const doneTimer = setTimeout(() => onDone(), 2900)
    return () => {
      clearTimeout(exitTimer)
      clearTimeout(doneTimer)
    }
  }, [onDone])

  const words = ['Inteligência,', 'catalogada.']

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background ${
        exiting ? 'intro-exit' : ''
      }`}
    >
      <div className="flex flex-col items-start gap-1 px-8">
        <span className="intro-meta font-mono text-xs tracking-widest text-muted-foreground uppercase">
          Índice IA — catálogo aberto
        </span>

        <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <span
                className={`intro-word block ${i === 1 ? 'italic text-accent' : 'text-foreground'}`}
                style={{ animationDelay: `${0.2 + i * 0.18}s` }}
              >
                {word}
              </span>
            </span>
          ))}
        </h2>

        <div className="intro-line mt-6 h-px w-56 bg-accent md:w-80" />
      </div>
    </div>
  )
}
