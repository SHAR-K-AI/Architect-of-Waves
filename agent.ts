import { LlmAgent } from '@google/adk';
import { rootInstruction } from './prompts/instructions.js';
// import { WorkflowStateSchema } from './schemas/workflow.js';

import { generationPhase } from "./agents/generationPhase/index.js";
import { culturalPhase } from "./agents/culturalPhase/index.js";
import { validationPhase } from "./agents/validationPhase/index.js";
import { refinementPhase } from "./agents/refinementPhase/index.js";
import { economicPhase } from "./agents/economyPhase/index.js";
import { finalizationPhase } from "./agents/finalizationPhase/index.js";
import {COMMON_CONFIG} from "./constants/index.js";

export const rootAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'architect_of_waves_root',
    description: `Orchestrates a business evolution pipeline through discrete execution phases.`,
    instruction: `
${rootInstruction}

ROLE: You are the Orchestrator. Your task is to trigger each phase in sequence 
and ensure the state transitions correctly according to WorkflowStateSchema.
If any phase returns a failure state, stop the pipeline and report the error.
    `.trim(),

    // outputSchema: WorkflowStateSchema,

    subAgents: [
        generationPhase,
        culturalPhase,
        validationPhase,
        refinementPhase,
        economicPhase,
        finalizationPhase,
    ],

    tools: []
});