import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { demoSteps, useApp } from '../context/AppContext'

export function DemoOverlay() {
  const { demoActive, demoIndex, nextDemo, prevDemo, exitDemo } = useApp()
  if (!demoActive) return null

  const step = demoSteps[demoIndex]
  const last = demoIndex === demoSteps.length - 1

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div className="pointer-events-auto w-full max-w-xl rounded-2xl border border-white/10 bg-navy p-5 text-white shadow-[0_16px_48px_rgba(11,31,51,0.35)]">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Demo {demoIndex + 1} / {demoSteps.length}
            </p>
            <h2 className="mt-1 font-serif text-[20px]">{step.title}</h2>
          </div>
          <button
            type="button"
            onClick={exitDemo}
            className="rounded-lg p-1 text-white/60 transition hover:bg-white/10 hover:text-white"
            aria-label="Exit demo"
          >
            <X size={18} />
          </button>
        </div>
        <p className="mt-2 text-[13px] leading-relaxed text-white/70">{step.body}</p>
        <div className="mt-4 flex items-center justify-between">
          <button
            type="button"
            onClick={prevDemo}
            disabled={demoIndex === 0}
            className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium text-white/80 disabled:opacity-30"
          >
            <ChevronLeft size={16} /> Back
          </button>
          <button
            type="button"
            onClick={last ? exitDemo : nextDemo}
            className="inline-flex items-center gap-1 rounded-lg bg-teal px-4 py-2 text-[13px] font-semibold"
          >
            {last ? 'Finish' : 'Next'}
            {last ? null : <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}
