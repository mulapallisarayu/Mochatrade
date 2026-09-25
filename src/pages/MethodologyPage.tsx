import { WorkflowStrip } from '../components/WorkflowStrip'
import { ILLUSTRATIVE_WEIGHTS_NOTE, methodologyWeights } from '../data/markets'

export function MethodologyPage() {
  const total = methodologyWeights.reduce((sum, w) => sum + w.weightPercent, 0)

  return (
    <div className="space-y-6">
      <header>
        <h1 className="font-serif text-[32px] text-navy">Assessment Methodology</h1>
        <p className="mt-2 max-w-2xl text-[14px] leading-relaxed text-slate-body">
          The engine evaluates Location → Customer Eligibility → Permitted Product → Risk Controls →
          Entry Decision. Product access is adapted to each market’s legal perimeter rather than
          copying another country’s model.
        </p>
      </header>

      <WorkflowStrip />

      <section className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <h2 className="font-serif text-[22px] text-navy">Compliance-first controls</h2>
        <p className="mt-2 text-[13px] leading-relaxed text-slate-body">
          Round 1 builds KYC/AML, monitoring, disclosures, complaints handling, cybersecurity, local
          payment/settlement (only where legally permitted), product classification, and
          licensing/authorisation into every market path. Local rails are enabled only where the
          mapped structure allows them.
        </p>
      </section>

      <section className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
        <h2 className="font-serif text-[22px] text-navy">Visual scoring framework</h2>
        <p className="mt-2 rounded-lg bg-mist px-3 py-2 text-[13px] text-slate-body">
          {ILLUSTRATIVE_WEIGHTS_NOTE}
        </p>
        <ul className="mt-6 space-y-4">
          {methodologyWeights.map((w) => (
            <li key={w.id}>
              <div className="flex items-baseline justify-between gap-3 text-[13px]">
                <span className="font-semibold text-navy">{w.name}</span>
                <span className="text-slate-body">{w.weightPercent}%</span>
              </div>
              <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mist">
                <div className="h-full rounded-full bg-teal" style={{ width: `${w.weightPercent * 4}%` }} />
              </div>
              <p className="mt-1 text-[12px] text-slate-body">{w.description}</p>
            </li>
          ))}
        </ul>
        <p className="mt-5 text-[12px] text-slate-body">Illustrative total: {total}% (internal prototype assessment).</p>
      </section>
    </div>
  )
}
