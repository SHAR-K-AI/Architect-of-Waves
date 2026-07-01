import { LlmAgent } from '@google/adk';
import {MarketInsightsSchema} from "../../schemas/concept.js";
import { marketResearcherInstruction } from "../../prompts/instructions.js";

export const marketResearcherAgent = new LlmAgent({
    name: 'market_researcher',

    model: 'gemini-2.5-flash',

    description: `
Analyzes market size, competitors, and demand trends for a given business idea.
  `.trim(),

    instruction: marketResearcherInstruction,

    outputSchema: MarketInsightsSchema
});