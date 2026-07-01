import { LlmAgent } from '@google/adk';

import { WorkflowStateSchema } from './schemas/workflow.js';

import { rootInstruction } from './prompts/instructions.js';

import { marketResearcherAgent } from './agents/market-researcher.agent.js';
import { gapAnalystAgent } from './agents/gap-analyst.agent.js';
import { culturalAgent } from './agents/cultural.agent.js';

import { criticAgent } from './agents/critic.agent.js';
import { personaAgent } from './agents/persona.agent.js';

import { refinementAgent } from './agents/refinement.agent.js';

import { economyAgent } from './agents/economy.agent.js';
import { financeAgent } from './agents/finance.agent.js';
import { legalAgent } from './agents/legal.agent.js';

import { finalizationAgent } from './agents/finalization.agent.js';
import { generationAgent } from "./agents/generation.agent.js";
import { validationAgent } from "./agents/validation.agent.js";

export const rootAgent = new LlmAgent({
    name: 'architect_of_waves_root',

    model: 'gemini-2.5-flash',

    description: `
Orchestrates a multi-agent system that evolves business ideas
through iterative validation until product-market resonance.
  `.trim(),

    instruction: `
${rootInstruction}

CRITICAL RULE:
You MUST execute ALL subAgents in the exact order they are listed.
Do NOT skip any agent.
Do NOT choose only one agent.
Treat subAgents as a STRICT pipeline, not a pool.

Execution order:
1. generationAgent
2. marketResearcherAgent
3. gapAnalystAgent
4. culturalAgent
5. criticAgent
6. personaAgent
7. validationAgent
8. refinementAgent
9. economyAgent
10. financeAgent
11. legalAgent
12. finalizationAgent
`.trim(),

    // outputSchema: WorkflowStateSchema,

    subAgents: [
        generationAgent,
        marketResearcherAgent,
        gapAnalystAgent,

        culturalAgent,

        criticAgent,
        personaAgent,
        validationAgent,

        refinementAgent,

        economyAgent,
        financeAgent,
        legalAgent,

        finalizationAgent
    ],

    tools: []
});