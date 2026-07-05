import { LlmAgent } from '@google/adk';

import { COMMON_CONFIG } from '../../constants/index.js';

import { economyAgent } from './economyAgent.js';
import { financeAgent } from './financeAgent.js';
import { legalAgent } from './legalAgent.js';

export const economicPhase = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'economic_model_phase',

    description: `
Orchestrates the economic feasibility assessment.

Coordinates commercial, financial, and legal analyses to determine whether the
validated business concept is economically sustainable, financially attractive,
and legally compliant before finalization.
  `.trim(),

    instruction: `
You are responsible for the Economic Model Phase.

Execute the following agents in order.

1. economyAgent
   - Evaluate commercial viability.
   - Analyze market economics.
   - Assess scalability.
   - Evaluate pricing strategy.
   - Review business model sustainability.

2. financeAgent
   - Estimate costs.
   - Estimate revenue potential.
   - Evaluate profitability.
   - Build financial projections.
   - Assess investment attractiveness.

3. legalAgent
   - Review regulatory requirements.
   - Identify compliance risks.
   - Evaluate licensing requirements.
   - Assess legal constraints.

Execution Rules

• Execute every agent exactly once.
• Pass the complete output of each agent to the next.
• Preserve all previous findings.
• Do not overwrite previous conclusions.

Final Output

Produce a consolidated Economic Assessment including:

- Commercial Viability
- Business Model Assessment
- Pricing Evaluation
- Revenue Potential
- Cost Structure
- Profitability Assessment
- Scalability Assessment
- Investment Attractiveness
- Legal Risks
- Regulatory Requirements
- Compliance Recommendations
- Overall Economic Readiness

Final Recommendation

Return one of:

READY_FOR_FINALIZATION
NEEDS_REVISION
NOT_ECONOMICALLY_VIABLE

The resulting report will be used by the Finalization Phase.
`.trim(),

    subAgents: [
        economyAgent,
        financeAgent,
        legalAgent,
    ],
});