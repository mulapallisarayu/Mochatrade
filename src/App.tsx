import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { DemoOverlay } from './components/DemoOverlay'
import { Sidebar } from './components/Sidebar'
import { AppProvider, useApp } from './context/AppContext'
import { AnalysisPage } from './pages/AnalysisPage'
import { ComparePage } from './pages/ComparePage'
import { DashboardPage } from './pages/DashboardPage'
import { MethodologyPage } from './pages/MethodologyPage'
import { RiskPage } from './pages/RiskPage'
import { StrategyPage } from './pages/StrategyPage'

function PageSwitch() {
  const { page } = useApp()
  switch (page) {
    case 'dashboard':
      return <DashboardPage />
    case 'analysis':
      return <AnalysisPage />
    case 'compare':
      return <ComparePage />
    case 'strategy':
      return <StrategyPage />
    case 'risk':
      return <RiskPage />
    case 'methodology':
      return <MethodologyPage />
  }
}

function Shell() {
  const [open, setOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-mist">
      <div className="hidden lg:block">
        <div className="sticky top-0 h-screen">
          <Sidebar />
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-navy/40"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          />
          <div className="relative h-full w-[260px]">
            <Sidebar onNavigate={() => setOpen(false)} />
          </div>
        </div>
      ) : null}

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between gap-3 border-b border-line bg-white/90 px-4 py-3 backdrop-blur lg:px-8">
          <button
            type="button"
            className="rounded-lg p-2 text-navy lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-slate-body">
            Internal decision support
          </p>
          <p className="hidden text-[12px] text-slate-body sm:block">Not legal advice · Prototype</p>
        </header>
        <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <PageSwitch />
        </main>
      </div>
      <DemoOverlay />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  )
}
