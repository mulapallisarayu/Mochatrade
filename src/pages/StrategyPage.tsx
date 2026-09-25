import { ComplianceChecklist } from '../components/ComplianceChecklist'
import { EntryStrategyCard } from '../components/EntryStrategyCard'
import { MarketSelector } from '../components/MarketSelector'
import { useApp } from '../context/AppContext'

export function StrategyPage() {
  const {
    markets,
    selectedMarket,
    selectedMarketId,
    setSelectedMarketId,
    analyzeMarket,
    complianceItems,
    completedIds,
    toggleCompliance,
  } = useApp()

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[13px] text-slate-body">
          {selectedMarket.flag} {selectedMarket.name}
        </p>
        <h1 className="mt-1 font-serif text-[32px] text-navy">Entry Strategy</h1>
        <p className="mt-2 text-[14px] text-slate-body">
          {selectedMarket.sequence}. Approach follows the Round 1 regulatory assessment for this
          market. Prototype recommendation only — not a licence or approval.
        </p>
      </header>

      <MarketSelector
        markets={markets}
        value={selectedMarketId}
        onChange={setSelectedMarketId}
        onAnalyze={() => analyzeMarket(selectedMarketId)}
      />

      <EntryStrategyCard
        approach={selectedMarket.entryApproach}
        reasons={selectedMarket.whyThisApproach}
        timeline={selectedMarket.targetTimeline}
        sequence={selectedMarket.sequence}
      />

      <ComplianceChecklist
        items={complianceItems}
        completedIds={completedIds}
        onToggle={toggleCompliance}
        caption={`Priority actions for ${selectedMarket.name} from the Round 1 entry plan. Progress is stored in this browser.`}
      />
    </div>
  )
}
