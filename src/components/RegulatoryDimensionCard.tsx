import type { RegulatoryDimension } from '../types'

const statusStyles: Record<string, string> = {
  LOW: 'bg-teal-soft text-teal',
  MODERATE: 'bg-amber-50 text-amber-800',
  HIGH: 'bg-orange-50 text-orange-800',
  CRITICAL: 'bg-red-50 text-red-800',
}

export function RegulatoryDimensionCard({ dimension }: { dimension: RegulatoryDimension }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[15px] font-semibold text-navy">{dimension.name}</h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide ${statusStyles[dimension.status]}`}
        >
          {dimension.status}
        </span>
      </div>
      <p className="mt-3 text-[12px] text-slate-body">
        Score <span className="font-semibold text-navy">{dimension.score}</span>
      </p>
      <p className="mt-3 text-[13px] leading-relaxed text-ink">{dimension.explanation}</p>
      <p className="mt-auto pt-4 text-[12px] text-slate-body">
        Required action: <span className="text-navy">{dimension.requiredAction}</span>
      </p>
      {dimension.source ? (
        <p className="mt-2 text-[11px] leading-relaxed text-slate-body">Source: {dimension.source}</p>
      ) : null}
    </article>
  )
}
