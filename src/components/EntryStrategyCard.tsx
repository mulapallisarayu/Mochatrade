import { entryPath } from '../data/markets'
import type { TimelineMilestone } from '../types'

export function EntryStrategyCard({
  approach,
  reasons,
  timeline,
  sequence,
}: {
  approach: string
  reasons: string[]
  timeline: TimelineMilestone[]
  sequence: string
}) {
  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">
          Recommended Entry Approach
        </p>
        <p className="mt-3 font-serif text-[26px] text-navy">{approach}</p>
        <p className="mt-2 text-[12px] text-slate-body">
          {sequence}. Options in this framework: Direct Entry · Partner-led Entry · Controlled /
          Limited MVP · Phased Entry · Licensed / Controlled Entry
        </p>
        <h3 className="mt-6 text-[14px] font-semibold text-navy">Why this approach?</h3>
        <ul className="mt-2 space-y-2">
          {reasons.map((reason) => (
            <li key={reason} className="flex gap-2 text-[13px] leading-relaxed text-slate-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              {reason}
            </li>
          ))}
        </ul>
        <h3 className="mt-6 text-[14px] font-semibold text-navy">Target timeline</h3>
        <ul className="mt-2 space-y-2">
          {timeline.map((step) => (
            <li key={`${step.period}-${step.milestone}`} className="flex gap-2 text-[13px] leading-relaxed text-slate-body">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
              <span>
                <span className="font-medium text-navy">{step.period}:</span> {step.milestone}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-line bg-navy p-6 text-white shadow-[var(--shadow-card)]">
        <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55">
          Market Entry Path
        </h3>
        <ol className="mt-6 grid gap-0 sm:grid-cols-3 lg:grid-cols-6">
          {entryPath.map((step, i) => (
            <li key={step.id} className="relative flex flex-col items-center px-2 text-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal text-[13px] font-bold">
                {i + 1}
              </div>
              <p className="mt-3 text-[13px] font-semibold">{step.label}</p>
              <p className="mt-1 text-[12px] text-white/55">{step.detail}</p>
              {i < entryPath.length - 1 ? (
                <span className="pointer-events-none absolute top-[22px] left-[calc(50%+28px)] hidden h-px w-[calc(100%-56px)] bg-white/20 sm:block" />
              ) : null}
            </li>
          ))}
        </ol>
        <div className="mt-6 space-y-1 text-center text-[11px] uppercase tracking-[0.2em] text-white/40 sm:hidden">
          {entryPath.map((s) => (
            <p key={s.id}>↓ {s.label}</p>
          ))}
        </div>
      </section>
    </div>
  )
}
