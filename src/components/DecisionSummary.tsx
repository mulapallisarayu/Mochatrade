import type { Market } from '../types'

export function DecisionSummary({ markets }: { markets: Market[] }) {
  return (
    <section className="grid gap-4 lg:grid-cols-3">
      {markets.map((m) => (
        <article key={m.id} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-body">
            {m.flag} {m.name}
          </p>
          <dl className="mt-5 space-y-4 text-[13px]">
            <div>
              <dt className="text-slate-body">Regulatory Assessment</dt>
              <dd className="mt-0.5 font-medium text-navy">{m.decision.regulatoryAssessment}</dd>
            </div>
            <div>
              <dt className="text-slate-body">Entry Complexity</dt>
              <dd className="mt-0.5 font-medium text-navy">{m.decision.entryComplexity}</dd>
            </div>
            <div>
              <dt className="text-slate-body">Recommended Approach</dt>
              <dd className="mt-0.5 font-medium text-navy">{m.decision.recommendedApproach}</dd>
            </div>
            <div>
              <dt className="text-slate-body">Top Risks</dt>
              <dd className="mt-0.5 font-medium text-navy">{m.decision.topRisks}</dd>
            </div>
            <div>
              <dt className="text-slate-body">Priority Actions</dt>
              <dd className="mt-0.5 font-medium text-navy">{m.decision.priorityActions}</dd>
            </div>
          </dl>
        </article>
      ))}
    </section>
  )
}
