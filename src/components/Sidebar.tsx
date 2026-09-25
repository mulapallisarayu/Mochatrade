import { Play } from 'lucide-react'
import { pages, useApp } from '../context/AppContext'

export function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const { page, setPage, startDemo } = useApp()

  return (
    <aside className="flex h-full min-h-0 w-[260px] shrink-0 flex-col border-r border-white/10 bg-navy text-white">
      <div className="border-b border-white/10 px-6 py-7">
        <p className="font-serif text-[22px] font-semibold tracking-[0.04em]">MOCHATRADE</p>
        <p className="mt-1 text-[12px] font-medium uppercase tracking-[0.18em] text-white/55">
          Market Entry Readiness
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-3 py-5">
        {pages.map((item) => {
          const active = page === item.id
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                setPage(item.id)
                onNavigate?.()
              }}
              className={`flex w-full items-center rounded-lg px-3 py-2.5 text-left text-[13.5px] font-medium transition ${
                active
                  ? 'bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]'
                  : 'text-white/70 hover:bg-white/6 hover:text-white'
              }`}
            >
              <span
                className={`mr-3 h-1.5 w-1.5 rounded-full ${active ? 'bg-teal' : 'bg-white/25'}`}
              />
              {item.label}
            </button>
          )
        })}
      </nav>

      <div className="px-4 pb-3">
        <button
          type="button"
          onClick={() => {
            startDemo()
            onNavigate?.()
          }}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-teal px-3 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#186e6c]"
        >
          <Play size={14} fill="currentColor" />
          Start Demo
        </button>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-[11px] leading-relaxed text-white/45">
        <p className="font-medium tracking-wide text-white/60">ACM MarketSphere 2026</p>
        <p>Round 2 Prototype</p>
      </div>
    </aside>
  )
}
