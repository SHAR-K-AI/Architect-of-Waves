import { LlmAgent } from '@google/adk';
import { IdeaCriticResultSchema } from '../schemas/validation.js';
import { criticInstruction } from '../prompts/instructions.js';

/**
 * Idea Critic Agent
 * Жорстко перевіряє логіку бізнес-ідеї,
 * шукає слабкі місця, суперечності та ризики.
 */
export const criticAgent = new LlmAgent({
    name: 'idea_critic',

    model: 'gemini-2.5-flash',

    description: `
Stress-tests business ideas for logical consistency, feasibility, and market contradictions.
  `.trim(),

    instruction: criticInstruction,

    // outputSchema: IdeaCriticResultSchema
});