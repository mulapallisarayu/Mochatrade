export function RiskScoreCard({
  label,
  value,
  footnote = 'Internal prototype assessment — not an official government rating',
}: {
  label: string
  value: string
  footnote?: string
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">{label}</p>
      <p className="mt-3 font-serif text-[28px] leading-none text-navy">{value}</p>
      <p className="mt-3 text-[12px] text-slate-body">{footnote}</p>
    </div>
  )
}
