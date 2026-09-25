import { decisionWorkflow } from '../data/markets'

export function WorkflowStrip() {
  return (
    <section className="overflow-hidden rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-body">
        Round 1 → Round 2
      </p>
      <h2 className="mt-2 font-serif text-[22px] text-navy">From research to a market-entry decision</h2>
      <p className="mt-2 max-w-3xl text-[13px] leading-relaxed text-slate-body">
        This prototype turns Round 1 strategic thinking into an interactive decision-support tool. It
        does not replace legal advice. Numerical scores are internal prototype assessments, not
        official government ratings.
      </p>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-7">
        {decisionWorkflow.map((step, i) => (
          <li key={step} className="relative rounded-xl bg-mist px-3 py-4 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal">
              {String(i + 1).padStart(2, '0')}
            </p>
            <p className="mt-2 text-[12px] font-semibold leading-snug text-navy">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
