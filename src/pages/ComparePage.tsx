import { ComparisonTable } from '../components/ComparisonTable'
import { DecisionSummary } from '../components/DecisionSummary'
import { MarketComparisonChart } from '../components/MarketComparisonChart'
import { EXPANSION_RATIONALE, laterExpansionMarkets, phaseMarkets } from '../data/markets'
import { useApp } from '../context/AppContext'

export function ComparePage() {
  const { markets } = useApp()
  const phases = phaseMarkets()
  const later = laterExpansionMarkets()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-[32px] text-navy">Compare Markets</h1>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-body">
          All five candidate markets on the same framework. Values are internal prototype
          assessments, not official government ratings.
        </p>
      </header>

      <ComparisonTable markets={markets} />
      <MarketComparisonChart markets={markets} />

      <section id="expansion-sequencing" className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <h2 className="font-serif text-[22px] text-navy">Expansion Sequencing</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {phases.map((m) => (
            <div key={m.id} className="rounded-xl bg-mist p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">
                Phase {m.sequenceOrder}
              </p>
              <p className="mt-3 font-serif text-[22px] text-navy">{m.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {later.map((m) => (
            <div key={m.id} className="rounded-xl bg-mist p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">
                Later expansion
              </p>
              <p className="mt-3 font-serif text-[22px] text-navy">{m.name}</p>
            </div>
          ))}
        </div>
        <h3 className="mt-6 text-[14px] font-semibold text-navy">Strategic Rationale</h3>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-body">{EXPANSION_RATIONALE}</p>
      </section>

      <div>
        <h2 className="mb-4 font-serif text-[22px] text-navy">Decision summary</h2>
        <DecisionSummary markets={markets} />
      </div>
    </div>
  )
}
