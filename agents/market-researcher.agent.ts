import { LlmAgent } from '@google/adk';
import { MarketInsightsSchema } from '../schemas/concept.js';
import { marketResearcherInstruction } from '../prompts/instructions.js';

/**
 * Market Researcher Agent
 * Відповідає за аналіз ринку, конкурентів і трендів.
 */
export const marketResearcherAgent = new LlmAgent({
    name: 'market_researcher',

    model: 'gemini-2.5-flash',

    description: `
Analyzes market size, competitors, and demand trends for a given business idea.
  `.trim(),

    instruction: marketResearcherInstruction,

    // outputSchema: MarketInsightsSchema
});