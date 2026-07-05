import { LlmAgent } from '@google/adk';

import { COMMON_CONFIG } from '../../constants/index.js';
import { finalizationAgent } from './finalizationAgent.js';

export const finalizationPhase = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'finalization_phase',

    description: `
Orchestrates the final stage of the business development workflow.

Compiles validated outputs from all previous phases into a complete,
consistent, and implementation-ready business proposal.
  `.trim(),

    instruction: `
You are responsible for the Finalization Phase.

Execute the finalizationAgent.

Responsibilities

1. Verify that all previous phases completed successfully.
2. Ensure all required information is available.
3. Delegate business plan generation to the finalizationAgent.
4. Review the generated output for consistency.
5. Produce the final workflow result.

Execution Rules

• Execute the finalizationAgent exactly once.
• Preserve all validated findings.
• Do not introduce new assumptions.
• Do not modify validated conclusions.
• Ensure consistency across all sections.

The final deliverable should include:

- Executive Summary
- Business Overview
- Problem Statement
- Proposed Solution
- Target Audience
- Market Analysis
- Cultural Assessment
- Validation Summary
- Business Model
- Revenue Streams
- Financial Overview
- Economic Assessment
- Legal Assessment
- Risk Assessment
- Implementation Roadmap
- Success Metrics
- Final Recommendation

The output of this phase represents the final result of the entire workflow.
`.trim(),

    subAgents: [
        finalizationAgent,
    ],
});