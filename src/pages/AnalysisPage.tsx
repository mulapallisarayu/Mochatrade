import { DashboardCard } from '../components/DashboardCard'
import { MarketSelector } from '../components/MarketSelector'
import { RegulatoryDimensionCard } from '../components/RegulatoryDimensionCard'
import { RiskScoreCard } from '../components/RiskScoreCard'
import { INTERNAL_ASSESSMENT } from '../data/markets'
import { useApp } from '../context/AppContext'

export function AnalysisPage() {
  const { markets, selectedMarket, selectedMarketId, setSelectedMarketId, analyzeMarket } = useApp()

  return (
    <div className="space-y-6">
      <header>
        <p className="text-[13px] text-slate-body">
          {selectedMarket.flag} {selectedMarket.name}
        </p>
        <h1 className="mt-1 font-serif text-[32px] text-navy">Market Entry Assessment</h1>
        <p className="mt-2 text-[14px] text-slate-body">
          {selectedMarket.sequence}. {selectedMarket.assessmentLabel}. {INTERNAL_ASSESSMENT}
        </p>
      </header>

      <MarketSelector
        markets={markets}
        value={selectedMarketId}
        onChange={setSelectedMarketId}
        onAnalyze={() => analyzeMarket(selectedMarketId)}
      />

      <div className="grid gap-4 md:grid-cols-3">
        <RiskScoreCard
          label="Regulatory Risk"
          value={selectedMarket.riskScore}
          footnote={INTERNAL_ASSESSMENT}
        />
        <RiskScoreCard
          label="Entry Complexity"
          value={selectedMarket.complexity}
          footnote={INTERNAL_ASSESSMENT}
        />
        <RiskScoreCard
          label="Readiness"
          value={selectedMarket.readiness}
          footnote="Location → eligibility → product permission → controls. Prototype gate only."
        />
      </div>

      <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <DashboardCard label="Location" value={selectedMarket.location} />
          <DashboardCard label="Customer Eligibility" value={selectedMarket.customerEligibility} />
          <DashboardCard label="Product Permission" value={selectedMarket.productPermission} />
          <DashboardCard label="Risk Controls" value={selectedMarket.riskControls} />
          <DashboardCard
            label="Entry decision"
            value={selectedMarket.entryDecision}
            hint={selectedMarket.entryDecisionNote}
          />
        </div>
      </section>

      <section id="regulatory-assessment">
        <h2 className="font-serif text-[22px] text-navy">Regulatory Assessment</h2>
        <p className="mt-1 text-[13px] text-slate-body">
          Licensing, product classification, KYC/AML, local requirements, and overall complexity for{' '}
          {selectedMarket.name}. Scores are internal prototype assessments, not official ratings.
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {selectedMarket.regulatoryDimensions.map((d) => (
            <RegulatoryDimensionCard key={d.id} dimension={d} />
          ))}
        </div>
      </section>
    </div>
  )
}
