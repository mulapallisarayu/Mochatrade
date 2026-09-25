# MochaTrade · Market Entry Readiness

Internal decision-support prototype for ACM MarketSphere 2026 / InnovateX Round 2.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

## Data layer

Market content lives in `src/data/markets.ts`. Pages and components read through a single typed `Market` contract.

Scores and entry approaches are **internal prototype assessments**, not official government ratings. The Round 1 expansion sequence is Brazil (Phase 1), UAE (Phase 2), South Africa (Phase 3), with Singapore and Australia as later expansion markets.
