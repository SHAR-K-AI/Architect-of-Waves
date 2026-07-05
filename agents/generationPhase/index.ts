import { LlmAgent } from '@google/adk';

import { generationAgent } from './generationAgent.js';
import { marketResearcherAgent } from './marketResearcherAgent.js';
import { gapAnalystAgent } from './gapAnalystAgent.js';

import { COMMON_CONFIG } from '../../constants/index.js';

export const generationPhase = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'generation_phase',

    description: `
Orchestrates the business opportunity discovery phase.

Coordinates idea generation, market research, and market gap analysis to
produce a validated business opportunity ready for cultural evaluation.
  `.trim(),

    instruction: `
You are responsible for the Generation Phase.

Execute the following agents in order:

1. generationAgent
   - Generate one or more business concepts from the user's request.
   - Clearly define the core value proposition.

2. marketResearcherAgent
   - Research the market.
   - Analyze industry trends.
   - Estimate market size.
   - Identify competitors.
   - Evaluate demand.

3. gapAnalystAgent
   - Analyze weaknesses of existing competitors.
   - Identify unmet customer needs.
   - Discover underserved market segments.
   - Recommend differentiation opportunities.

Execution Rules

• Execute every agent exactly once.
• Preserve the complete output of each agent.
• Pass previous outputs to the next agent.
• Do not modify agent outputs unless necessary for consistency.
• Stop immediately if a critical failure occurs.

Final Output

Return a consolidated business opportunity containing:

- Business Concept
- Target Audience
- Value Proposition
- Market Summary
- Market Size
- Industry Trends
- Competitive Landscape
- Customer Pain Points
- Market Gaps
- Opportunities
- Competitive Advantages
- Key Risks
- Readiness for Cultural Evaluation

The resulting output will become the input for the Cultural Filter Phase.
`.trim(),

    subAgents: [
        generationAgent,
        marketResearcherAgent,
        gapAnalystAgent,
    ],
});