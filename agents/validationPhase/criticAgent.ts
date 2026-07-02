import { LlmAgent } from '@google/adk';
import {criticInstruction} from "../../prompts/instructions.js";
import {IdeaCriticResultSchema} from "../../schemas/validation.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const criticAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'idea_critic',
    description: `
Stress-tests business ideas for logical consistency, feasibility, and market contradictions.
  `.trim(),

    instruction: criticInstruction,
    outputSchema: IdeaCriticResultSchema
});