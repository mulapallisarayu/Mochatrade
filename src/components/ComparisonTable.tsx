import type { Market } from '../types'

const columns: { key: keyof Market['comparison']; label: string }[] = [
  { key: 'regulatoryRisk', label: 'Regulatory Risk' },
  { key: 'entryComplexity', label: 'Entry Complexity' },
  { key: 'licensing', label: 'Licensing' },
  { key: 'productRestrictions', label: 'Product Restrictions' },
  { key: 'kycAml', label: 'KYC / AML' },
  { key: 'localRequirements', label: 'Local Requirements' },
  { key: 'entryApproach', label: 'Entry Approach' },
  { key: 'keyRiskAreas', label: 'Key Risk Areas' },
]

export function ComparisonTable({ markets }: { markets: Market[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line bg-white shadow-[var(--shadow-card)]">
      <table className="min-w-[920px] w-full border-collapse text-left text-[13px]">
        <thead>
          <tr className="border-b border-line bg-mist/80">
            <th className="px-5 py-3.5 font-semibold text-navy">Market</th>
            {columns.map((c) => (
              <th key={c.key} className="px-4 py-3.5 font-semibold text-navy">
                {c.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {markets.map((m) => (
            <tr key={m.id} className="border-b border-line last:border-0">
              <td className="whitespace-nowrap px-5 py-4 font-medium text-navy">
                {m.flag} {m.name}
              </td>
              {columns.map((c) => (
                <td key={c.key} className="px-4 py-4 text-slate-body">
                  {m.comparison[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
