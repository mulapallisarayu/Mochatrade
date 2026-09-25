export function DashboardCard({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">{label}</p>
      <p className="mt-2 font-serif text-[26px] leading-tight text-navy">{value}</p>
      {hint ? <p className="mt-2 text-[13px] text-slate-body">{hint}</p> : null}
    </div>
  )
}
