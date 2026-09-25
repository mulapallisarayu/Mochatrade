import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import type { Market } from '../types'

const metrics = [
  { key: 'licensing', label: 'Licensing' },
  { key: 'productRestrictions', label: 'Product restrictions' },
  { key: 'kycAml', label: 'KYC / AML' },
  { key: 'localRequirements', label: 'Local requirements' },
  { key: 'overallComplexity', label: 'Overall complexity' },
] as const

const BAR_COLORS = ['#1d4e89', '#1b7a78', '#0b1f33', '#5b7c99', '#8a9a7b']

export function MarketComparisonChart({ markets }: { markets: Market[] }) {
  const data = metrics.map((metric) => {
    const row: Record<string, string | number> = { metric: metric.label }
    for (const m of markets) {
      const value = m.chartScale[metric.key]
      row[m.name] = value ?? 0
    }
    return row
  })

  return (
    <section className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-[22px] text-navy">Visual comparison</h2>
          <p className="mt-1 max-w-2xl text-[13px] text-slate-body">
            Chart values are read from the local market data layer. Illustrative scale — based on the
            project’s regulatory assessment. Not an official government rating. This chart does not
            rank later-expansion markets against each other.
          </p>
        </div>
        <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-body">
          Internal prototype assessment
        </span>
      </div>
      <div className="mt-6 h-[320px] w-full min-w-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6}>
            <CartesianGrid stroke="#e4e9ee" vertical={false} />
            <XAxis dataKey="metric" tick={{ fill: '#4a5564', fontSize: 11 }} interval={0} />
            <YAxis domain={[0, 10]} tick={{ fill: '#4a5564', fontSize: 11 }} />
            <Tooltip formatter={(value) => String(value)} />
            <Legend />
            {markets.map((m, i) => (
              <Bar
                key={m.id}
                dataKey={m.name}
                fill={BAR_COLORS[i % BAR_COLORS.length]}
                radius={[4, 4, 0, 0]}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-[12px] text-slate-body">
        Describe relative results as lower, moderate, or higher assessed complexity — not as an
        objective ranking.
      </p>
    </section>
  )
}
