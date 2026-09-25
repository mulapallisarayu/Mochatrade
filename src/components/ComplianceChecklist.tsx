import { Check } from 'lucide-react'
import type { ComplianceItem } from '../types'
import { ProgressBar } from './ProgressBar'

export function ComplianceChecklist({
  items,
  completedIds,
  onToggle,
  caption = 'Market-specific preparation items from the Round 1 entry plan.',
}: {
  items: ComplianceItem[]
  completedIds: string[]
  onToggle: (id: string) => void
  caption?: string
}) {
  const done = completedIds.length

  return (
    <section id="required-before-entry" className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-[22px] text-navy">Required Before Entry</h2>
          <p className="mt-1 text-[13px] text-slate-body">{caption}</p>
        </div>
      </div>

      <div className="mt-5">
        <ProgressBar value={done} max={items.length} label="Compliance Preparation" />
      </div>

      <ul className="mt-5 divide-y divide-line">
        {items.map((item) => {
          const checked = completedIds.includes(item.id)
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onToggle(item.id)}
                className="flex w-full items-center gap-3 py-3.5 text-left transition hover:bg-mist/70"
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded border text-white ${
                    checked ? 'border-teal bg-teal' : 'border-[#c5ced8] bg-white'
                  }`}
                  aria-hidden
                >
                  {checked ? <Check size={12} strokeWidth={3} /> : null}
                </span>
                <span className={`text-[14px] ${checked ? 'text-slate-body line-through' : 'text-navy'}`}>
                  {item.label}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
