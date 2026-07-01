import { LlmAgent } from '@google/adk';
import {MarketGapSchema} from "../../schemas/concept.js";
import {gapAnalystInstruction} from "../../prompts/instructions.js";

export const gapAnalystAgent = new LlmAgent({
    name: 'gap_analyst',

    model: 'gemini-2.5-flash',

    description: `
Finds unmet needs, pain points, and underserved market segments.
  `.trim(),

    instruction: gapAnalystInstruction,

    outputSchema: MarketGapSchema
});