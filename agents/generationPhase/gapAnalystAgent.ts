import { LlmAgent } from '@google/adk';
import {MarketGapSchema} from "../../schemas/concept.js";
import {gapAnalystInstruction} from "../../prompts/instructions.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const gapAnalystAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'gap_analyst',


    description: `
Finds unmet needs, pain points, and underserved market segments.
  `.trim(),

    instruction: gapAnalystInstruction,

    outputSchema: MarketGapSchema
});