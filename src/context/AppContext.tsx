import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { getMarketById, listMarkets } from '../data/markets'
import type { ComplianceItem, Market, MarketId, PageId } from '../types'

const STORAGE_KEY = 'mochatrade.compliance.v2'

export const pages: { id: PageId; label: string }[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'analysis', label: 'Market Analysis' },
  { id: 'compare', label: 'Compare Markets' },
  { id: 'strategy', label: 'Entry Strategy' },
  { id: 'risk', label: 'Risk & Mitigation' },
  { id: 'methodology', label: 'Methodology' },
]

export const demoSteps = [
  {
    id: 'dash',
    title: 'Dashboard',
    body: 'Start from the global readiness overview of the five candidate markets.',
    page: 'dashboard' as PageId,
    marketId: 'brazil' as MarketId,
  },
  {
    id: 'select',
    title: 'Select Brazil',
    body: 'Use the market selector. Analysis updates without a page reload.',
    page: 'dashboard' as PageId,
    marketId: 'brazil' as MarketId,
  },
  {
    id: 'analyze',
    title: 'Analyze Brazil',
    body: 'Open the market assessment: prototype risk, complexity, and readiness.',
    page: 'analysis' as PageId,
    marketId: 'brazil' as MarketId,
  },
  {
    id: 'dimensions',
    title: 'Regulatory dimensions',
    body: 'Eight regulatory dimensions with prototype scores and source-backed mapping.',
    page: 'analysis' as PageId,
    marketId: 'brazil' as MarketId,
    scrollTo: 'regulatory-assessment',
  },
  {
    id: 'strategy',
    title: 'Entry strategy',
    body: 'Recommended entry approach and target timeline follow the Round 1 structure for this market.',
    page: 'strategy' as PageId,
    marketId: 'brazil' as MarketId,
  },
  {
    id: 'checklist',
    title: 'Compliance checklist',
    body: 'Toggle market-specific preparation items. Progress is stored locally in this browser.',
    page: 'strategy' as PageId,
    marketId: 'brazil' as MarketId,
    scrollTo: 'required-before-entry',
  },
  {
    id: 'risks',
    title: 'Risks',
    body: 'Market-specific risks and mitigations with severity filters.',
    page: 'risk' as PageId,
    marketId: 'brazil' as MarketId,
  },
  {
    id: 'singapore',
    title: 'Select Singapore',
    body: 'Switch market without a refresh. Singapore is later expansion (2028–2029 restricted MVP), not Phase 4.',
    page: 'analysis' as PageId,
    marketId: 'singapore' as MarketId,
  },
  {
    id: 'australia',
    title: 'Select Australia',
    body: 'Australia uses the same screens with an AFSL pathway, product classification, and licensed-structure controls. Later expansion — not Phase 5.',
    page: 'analysis' as PageId,
    marketId: 'australia' as MarketId,
  },
  {
    id: 'compare',
    title: 'Compare markets',
    body: 'All five markets side by side. Scores are internal prototype assessments, not a ranking.',
    page: 'compare' as PageId,
    marketId: 'singapore' as MarketId,
  },
  {
    id: 'sequence',
    title: 'Expansion sequencing',
    body: 'Phase 1 Brazil, Phase 2 UAE, Phase 3 South Africa; Singapore and Australia as later expansion, unranked against each other.',
    page: 'compare' as PageId,
    marketId: 'brazil' as MarketId,
    scrollTo: 'expansion-sequencing',
  },
]

type ComplianceState = Record<MarketId, string[]>

function emptyCompliance(): ComplianceState {
  return { brazil: [], uae: [], 'south-africa': [], singapore: [], australia: [] }
}

function loadCompliance(): ComplianceState {
  const empty = emptyCompliance()
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return empty
    return { ...empty, ...JSON.parse(raw) }
  } catch {
    return empty
  }
}

interface AppContextValue {
  page: PageId
  setPage: (page: PageId) => void
  selectedMarketId: MarketId
  setSelectedMarketId: (id: MarketId) => void
  selectedMarket: Market
  markets: Market[]
  analyzeMarket: (id: MarketId) => void
  completedIds: string[]
  toggleCompliance: (itemId: string) => void
  complianceItems: ComplianceItem[]
  demoActive: boolean
  demoIndex: number
  startDemo: () => void
  nextDemo: () => void
  prevDemo: () => void
  exitDemo: () => void
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<PageId>('dashboard')
  const [selectedMarketId, setSelectedMarketId] = useState<MarketId>('brazil')
  const [compliance, setCompliance] = useState<ComplianceState>(loadCompliance)
  const [demoActive, setDemoActive] = useState(false)
  const [demoIndex, setDemoIndex] = useState(0)

  const markets = useMemo(() => listMarkets(), [])
  const selectedMarket = getMarketById(selectedMarketId) ?? markets[0]

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(compliance))
  }, [compliance])

  const applyDemoStep = useCallback((index: number) => {
    const step = demoSteps[index]
    setPage(step.page)
    setSelectedMarketId(step.marketId)
    if (step.scrollTo) {
      window.setTimeout(() => {
        document.getElementById(step.scrollTo!)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 80)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  const startDemo = useCallback(() => {
    setDemoActive(true)
    setDemoIndex(0)
    applyDemoStep(0)
  }, [applyDemoStep])

  const nextDemo = useCallback(() => {
    setDemoIndex((i) => {
      const next = Math.min(i + 1, demoSteps.length - 1)
      applyDemoStep(next)
      return next
    })
  }, [applyDemoStep])

  const prevDemo = useCallback(() => {
    setDemoIndex((i) => {
      const next = Math.max(i - 1, 0)
      applyDemoStep(next)
      return next
    })
  }, [applyDemoStep])

  const exitDemo = useCallback(() => setDemoActive(false), [])

  const analyzeMarket = useCallback((id: MarketId) => {
    setSelectedMarketId(id)
    setPage('analysis')
  }, [])

  const toggleCompliance = useCallback(
    (itemId: string) => {
      setCompliance((prev) => {
        const current = prev[selectedMarketId] ?? []
        const next = current.includes(itemId)
          ? current.filter((id) => id !== itemId)
          : [...current, itemId]
        return { ...prev, [selectedMarketId]: next }
      })
    },
    [selectedMarketId],
  )

  const value: AppContextValue = {
    page,
    setPage,
    selectedMarketId,
    setSelectedMarketId,
    selectedMarket,
    markets,
    analyzeMarket,
    completedIds: compliance[selectedMarketId] ?? [],
    toggleCompliance,
    complianceItems: selectedMarket.complianceActions,
    demoActive,
    demoIndex,
    startDemo,
    nextDemo,
    prevDemo,
    exitDemo,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
