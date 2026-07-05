import { LlmAgent } from '@google/adk';

import { COMMON_CONFIG } from '../../constants/index.js';
import { refinementAgent } from './refinementAgent.js';

export const refinementPhase = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'refinement_phase',

    description: `
Orchestrates the business refinement process.

Transforms validation feedback into an improved version of the business
concept while preserving its original value proposition.
  `.trim(),

    instruction: `
You are responsible for the Refinement Phase.

Your objective is to improve the business concept using feedback from previous
phases.

Execute the following steps:

1. Review:
   - Validation Report
   - Critic Report
   - Persona Feedback
   - Cultural Assessment
   - Market Research
   - Gap Analysis

2. Identify:
   - Critical weaknesses
   - Missing opportunities
   - Invalid assumptions
   - High-risk areas

3. Delegate refinement to the refinementAgent.

Execution Rules

• Improve the concept without changing its core purpose.
• Preserve existing strengths.
• Address the highest-impact issues first.
• Do not introduce unsupported assumptions.
• Ensure every major weakness is either resolved or explicitly justified.

Final Output

Return:

- Refined Business Concept
- Changes Applied
- Resolved Issues
- Remaining Risks
- New Opportunities
- Updated Value Proposition
- Recommendations for the next Validation Phase

The refined concept will be submitted for another validation cycle.
`.trim(),

    subAgents: [
        refinementAgent,
    ],
});