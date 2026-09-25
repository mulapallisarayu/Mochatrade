export function ProgressBar({
  value,
  max,
  label,
}: {
  value: number
  max: number
  label?: string
}) {
  const pct = max === 0 ? 0 : Math.round((value / max) * 100)
  return (
    <div>
      {label ? (
        <div className="mb-2 flex items-baseline justify-between gap-3">
          <p className="text-[13px] font-semibold text-navy">{label}</p>
          <p className="text-[13px] text-slate-body">
            {value} / {max} Complete
          </p>
        </div>
      ) : null}
      <div className="h-2 overflow-hidden rounded-full bg-mist">
        <div
          className="h-full rounded-full bg-teal transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
