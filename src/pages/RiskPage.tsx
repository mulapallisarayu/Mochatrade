import { MarketSelector } from '../components/MarketSelector'
import { RiskTable } from '../components/RiskTable'
import { useApp } from '../context/AppContext'

export function RiskPage() {
  const { markets, selectedMarket, selectedMarketId, setSelectedMarketId, analyzeMarket } = useApp()

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[13px] text-slate-body">
          {selectedMarket.flag} {selectedMarket.name}
        </p>
        <h1 className="mt-1 font-serif text-[32px] text-navy">Risk & Mitigation</h1>
        <p className="mt-2 max-w-2xl text-[14px] text-slate-body">
          Key risks for {selectedMarket.name} ({selectedMarket.sequence}) on the prototype rubric.
          Sources are public regulator frameworks and the Round 1 strategy — not legal advice.
        </p>
      </header>

      <MarketSelector
        markets={markets}
        value={selectedMarketId}
        onChange={setSelectedMarketId}
        onAnalyze={() => analyzeMarket(selectedMarketId)}
      />

      <RiskTable risks={selectedMarket.risks} />
    </div>
  )
}
