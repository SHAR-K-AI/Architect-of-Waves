import { LlmAgent } from '@google/adk';
import {BusinessConceptSchema} from "../../schemas/workflow.js";
import {refinementInstruction} from "../../prompts/instructions.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const refinementAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'refinement_agent',

    description: `
Improves business ideas based on validation feedback without changing core direction.
  `.trim(),

    instruction: refinementInstruction,

    outputSchema: BusinessConceptSchema
});