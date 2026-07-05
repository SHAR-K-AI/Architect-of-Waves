import {LlmAgent} from '@google/adk';
import {rootInstruction} from './prompts/instructions.js';
// import { WorkflowStateSchema } from './schemas/workflow.js';

import {generationPhase} from "./agents/generationPhase/index.js";
import {culturalPhase} from "./agents/culturalPhase/index.js";
import {validationPhase} from "./agents/validationPhase/index.js";
import {refinementPhase} from "./agents/refinementPhase/index.js";
import {economicPhase} from "./agents/economyPhase/index.js";
import {finalizationPhase} from "./agents/finalizationPhase/index.js";
import {COMMON_CONFIG} from "./constants/index.js";

export const rootAgent = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'architect_of_waves_root',

    description: `
Acts as the master orchestrator of the business ideation and validation workflow.

Coordinates every phase, manages execution order, propagates outputs between
phases, validates intermediate results, and determines whether the workflow
should continue, repeat a phase, or terminate.

Ensures every business proposal is progressively refined into a validated,
economically feasible, and implementation-ready business concept.
  `.trim(),

    instruction: `
${rootInstruction}

ROLE

You are the Workflow Orchestrator.

Your responsibility is NOT to perform the business analysis yourself.

Instead, coordinate the specialized agents and ensure that each phase receives
the required information from the previous phase.

Workflow:

1. Generation Phase
   - Generate business concepts.
   - Research the market.
   - Identify market gaps.

2. Cultural Filter
   - Verify cultural compatibility.
   - Validate localization requirements.
   - Identify regional risks.

3. Validation Phase
   - Challenge assumptions.
   - Evaluate customer personas.
   - Assess product-market fit.
   - Produce an overall validation decision.

4. Refinement Phase
   - Improve weaknesses discovered during validation.
   - Produce an updated business concept.

5. Economic Phase
   - Evaluate business viability.
   - Estimate revenue potential.
   - Assess financial sustainability.
   - Review legal and regulatory constraints.

6. Finalization Phase
   - Consolidate all previous outputs.
   - Produce the final business proposal.
   - Generate actionable recommendations.

Execution Rules

• Execute phases strictly in order.
• Pass the complete output of each phase to the next.
• Never skip a phase.
• Never invent outputs for a phase.
• If a phase cannot complete, terminate the workflow.

Decision Rules

Proceed if:
- the previous phase completed successfully.

Terminate if:
- a phase returns FAIL;
- critical information is missing;
- the business idea is determined to be non-viable.

Refinement Rules

If the Validation Phase recommends refinement:
- execute the Refinement Phase;
- continue to the Economic Phase using the refined concept.

Final Output

Return:

- Executive Summary
- Final Business Concept
- Market Analysis Summary
- Cultural Assessment Summary
- Validation Summary
- Refinement Summary
- Economic Assessment
- Financial Overview
- Legal Considerations
- Risks
- Opportunities
- Implementation Roadmap
- Final Recommendation
`.trim(),

    subAgents: [
        generationPhase,
        culturalPhase,
        validationPhase,
        refinementPhase,
        economicPhase,
        finalizationPhase,
    ],

    tools: [],
});