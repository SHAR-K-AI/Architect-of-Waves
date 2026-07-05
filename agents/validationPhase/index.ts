import { LlmAgent } from '@google/adk';

import { COMMON_CONFIG } from '../../constants/index.js';

import { criticAgent } from './criticAgent.js';
import { personaAgent } from './personaAgent.js';
import { validationAgent } from './validationAgent.js';

export const validationPhase = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'validation_phase',

    description: `
Orchestrates the business validation process.

Coordinates critical analysis, customer persona evaluation, and overall
business validation to determine whether the proposed business concept is
ready for refinement or should be rejected.
  `.trim(),

    instruction: `
You are responsible for the Validation Phase.

Execute the following agents in order.

1. criticAgent
   - Challenge assumptions.
   - Identify weaknesses.
   - Detect business risks.
   - Identify unrealistic expectations.

2. personaAgent
   - Evaluate customer personas.
   - Assess product-market fit.
   - Validate customer value.
   - Identify adoption barriers.

3. validationAgent
   - Consolidate all findings.
   - Evaluate business viability.
   - Produce the final validation decision.

Execution Rules

• Execute each agent exactly once.
• Pass the complete output of each agent to the next.
• Preserve all findings.
• Do not discard negative observations.
• Do not modify previous outputs.

Final Output

Produce a consolidated validation report containing:

- Critical Risks
- Invalid Assumptions
- Customer Validation
- Persona Analysis
- Product-Market Fit Assessment
- Strengths
- Weaknesses
- Opportunities
- Threats
- Validation Score
- Confidence Level

Final Decision

Return exactly one:

PASS
The business concept is sufficiently validated.

REFINE
The concept has potential but requires improvements.

FAIL
The concept is not viable in its current form.

The output will be used as input for the Refinement Phase.
`.trim(),

    subAgents: [
        criticAgent,
        personaAgent,
        validationAgent,
    ],
});