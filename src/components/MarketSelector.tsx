import type { Market, MarketId } from '../types'

export function MarketSelector({
  markets,
  value,
  onChange,
  onAnalyze,
}: {
  markets: Market[]
  value: MarketId
  onChange: (id: MarketId) => void
  onAnalyze: () => void
}) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">
        Select Target Market
      </p>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="market-select">
          Target market
        </label>
        <select
          id="market-select"
          value={value}
          onChange={(e) => onChange(e.target.value as MarketId)}
          className="h-11 min-w-0 flex-1 rounded-xl border border-line bg-mist px-3 text-[14px] text-navy outline-none transition focus:border-teal"
        >
          {markets.map((m) => (
            <option key={m.id} value={m.id}>
              {m.flag} {m.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onAnalyze}
          className="h-11 rounded-xl bg-teal px-5 text-[13px] font-semibold text-white transition hover:bg-[#186e6c]"
        >
          Analyze Market
        </button>
      </div>
    </section>
  )
}
