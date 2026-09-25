export type PageId =
  | 'dashboard'
  | 'analysis'
  | 'compare'
  | 'strategy'
  | 'risk'
  | 'methodology'

export type MarketId = 'brazil' | 'uae' | 'south-africa' | 'singapore' | 'australia'

export type DimensionStatus = 'LOW' | 'MODERATE' | 'HIGH' | 'CRITICAL'

export type RiskSeverity = 'Low' | 'Medium' | 'High' | 'Critical'

export type RiskStatus = 'Open' | 'In Progress' | 'Mitigated'

export type EntryApproachId = 'direct' | 'partner' | 'mvp' | 'phased' | 'delay'

export type SequenceKind = 'phase' | 'later'

export interface RegulatoryDimension {
  id: string
  name: string
  status: DimensionStatus
  /** Display value only — internal prototype scale. */
  score: string
  explanation: string
  requiredAction: string
  source?: string
}

export interface MarketRisk {
  id: string
  risk: string
  severity: RiskSeverity
  impact: string
  mitigation: string
  status: RiskStatus
  frameworkExample: boolean
  source?: string
}

export interface ComplianceItem {
  id: string
  label: string
}

export interface ComparisonFields {
  regulatoryRisk: string
  entryComplexity: string
  licensing: string
  productRestrictions: string
  kycAml: string
  localRequirements: string
  entryApproach: string
  keyRiskAreas: string
}

/**
 * Numeric preview for charts. Treat as illustrative prototype scale only.
 */
export interface IllustrativeChartScale {
  isIllustrative: true
  licensing: number
  productRestrictions: number
  kycAml: number
  localRequirements: number
  overallComplexity: number
}

export interface TimelineMilestone {
  period: string
  milestone: string
}

export interface Market {
  id: MarketId
  name: string
  country: string
  countryCode: string
  flag: string
  regulatoryRisk: string
  entryComplexity: string
  riskScore: string
  complexity: string
  readiness: string
  location: string
  customerEligibility: string
  productPermission: string
  riskControls: string
  entryDecision: string
  entryDecisionNote: string
  entryApproach: string
  entryApproachId: EntryApproachId
  whyThisApproach: string[]
  sequence: string
  sequenceKind: SequenceKind
  sequenceOrder: number | null
  assessmentLabel: string
  strategicRationale: string
  targetTimeline: TimelineMilestone[]
  priorityActions: string[]
  regulatoryDimensions: RegulatoryDimension[]
  risks: MarketRisk[]
  complianceActions: ComplianceItem[]
  comparison: ComparisonFields
  chartScale: IllustrativeChartScale
  decision: {
    regulatoryAssessment: string
    entryComplexity: string
    recommendedApproach: string
    topRisks: string
    priorityActions: string
  }
}

export interface MethodologyWeight {
  id: string
  name: string
  weightPercent: number
  description: string
}
