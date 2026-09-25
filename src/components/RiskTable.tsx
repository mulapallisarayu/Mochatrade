import { useMemo, useState } from 'react'
import type { MarketRisk, RiskSeverity } from '../types'

const filters: Array<'All' | RiskSeverity> = ['All', 'Low', 'Medium', 'High', 'Critical']

const severityTone: Record<RiskSeverity, string> = {
  Low: 'bg-teal-soft text-teal',
  Medium: 'bg-amber-50 text-amber-800',
  High: 'bg-orange-50 text-orange-800',
  Critical: 'bg-red-50 text-red-800',
}

export function RiskTable({ risks }: { risks: MarketRisk[] }) {
  const [severity, setSeverity] = useState<(typeof filters)[number]>('All')
  const rows = useMemo(
    () => (severity === 'All' ? risks : risks.filter((r) => r.severity === severity)),
    [risks, severity],
  )

  return (
    <div className="rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4">
        <p className="text-[12px] text-slate-body">
          Prototype findings for the selected market. Filter by severity.
        </p>
        <div className="flex flex-wrap gap-1.5">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setSeverity(f)}
              className={`rounded-full px-3 py-1 text-[12px] font-medium transition ${
                severity === f ? 'bg-navy text-white' : 'bg-mist text-slate-body hover:text-navy'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[760px] w-full border-collapse text-left text-[13px]">
          <thead>
            <tr className="border-b border-line bg-mist/80">
              {['Risk', 'Severity', 'Potential Impact', 'Mitigation', 'Status', 'Source'].map((h) => (
                <th key={h} className="px-5 py-3.5 font-semibold text-navy">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-5 py-8 text-center text-slate-body">
                  No risks match this filter.
                </td>
              </tr>
            ) : (
              rows.map((r) => (
                <tr key={r.id} className="border-b border-line last:border-0">
                  <td className="px-5 py-4 font-medium text-navy">
                    {r.risk}
                    {r.frameworkExample ? (
                      <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-slate-body">
                        Example
                      </span>
                    ) : null}
                  </td>
                  <td className="px-5 py-4">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${severityTone[r.severity]}`}>
                      {r.severity}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-slate-body">{r.impact}</td>
                  <td className="px-5 py-4 text-slate-body">{r.mitigation}</td>
                  <td className="px-5 py-4 text-navy">{r.status}</td>
                  <td className="px-5 py-4 text-slate-body">{r.source ?? '—'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
