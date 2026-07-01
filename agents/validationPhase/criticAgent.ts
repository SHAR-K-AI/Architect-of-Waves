import { LlmAgent } from '@google/adk';
import {criticInstruction} from "../../prompts/instructions.js";
import {IdeaCriticResultSchema} from "../../schemas/validation.js";

export const criticAgent = new LlmAgent({
    name: 'idea_critic',

    model: 'gemini-2.5-flash',

    description: `
Stress-tests business ideas for logical consistency, feasibility, and market contradictions.
  `.trim(),

    instruction: criticInstruction,

    outputSchema: IdeaCriticResultSchema
});