import { DashboardCard } from '../components/DashboardCard'
import { MarketCard } from '../components/MarketCard'
import { MarketSelector } from '../components/MarketSelector'
import { WorkflowStrip } from '../components/WorkflowStrip'
import { useApp } from '../context/AppContext'

export function DashboardPage() {
  const { markets, selectedMarketId, setSelectedMarketId, analyzeMarket } = useApp()

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-[32px] text-navy sm:text-[36px]">Global Market Entry Readiness</h1>
        <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-slate-body">
          Evaluate regulatory complexity, identify compliance requirements, and compare market-entry
          approaches.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <DashboardCard label="Markets Evaluated" value={String(markets.length)} />
        <DashboardCard
          label="Candidate Markets"
          value={markets.map((m) => m.name).join(' • ')}
        />
        <DashboardCard label="Assessment Framework" value="Regulatory + Product + Compliance" />
      </div>

      <MarketSelector
        markets={markets}
        value={selectedMarketId}
        onChange={setSelectedMarketId}
        onAnalyze={() => analyzeMarket(selectedMarketId)}
      />

      <div className="grid gap-4 lg:grid-cols-3">
        {markets.map((m) => (
          <MarketCard key={m.id} market={m} onAnalyze={() => analyzeMarket(m.id)} />
        ))}
      </div>

      <WorkflowStrip />
    </div>
  )
}
