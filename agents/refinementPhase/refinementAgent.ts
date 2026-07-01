import { LlmAgent } from '@google/adk';
import {BusinessConceptSchema} from "../../schemas/workflow.js";
import {refinementInstruction} from "../../prompts/instructions.js";

export const refinementAgent = new LlmAgent({
    name: 'refinement_agent',

    model: 'gemini-2.5-flash',

    description: `
Improves business ideas based on validation feedback without changing core direction.
  `.trim(),

    instruction: refinementInstruction,

    outputSchema: BusinessConceptSchema
});