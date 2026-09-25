import type { Market } from '../types'

export function MarketCard({ market, onAnalyze }: { market: Market; onAnalyze: () => void }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(11,31,51,0.08)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-3xl" aria-hidden>
            {market.flag}
          </p>
          <h3 className="mt-3 font-serif text-[22px] text-navy">{market.name}</h3>
          <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-slate-body">
          {market.countryCode} · {market.sequence}
          </p>
        </div>
        <span className="rounded-full bg-mist px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-body">
          {market.assessmentLabel}
        </span>
      </div>

      <dl className="mt-6 space-y-3 text-[13px]">
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt className="text-slate-body">Regulatory Risk</dt>
          <dd className="font-medium text-navy">{market.riskScore}</dd>
        </div>
        <div className="flex justify-between gap-4 border-b border-line pb-3">
          <dt className="text-slate-body">Entry Complexity</dt>
          <dd className="font-medium text-navy">{market.complexity}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-body">Readiness Status</dt>
          <dd className="font-medium text-navy">{market.readiness}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={onAnalyze}
        className="mt-6 rounded-xl bg-navy px-4 py-2.5 text-[13px] font-semibold text-white transition hover:bg-navy-800"
      >
        Analyze Market
      </button>
    </article>
  )
}
