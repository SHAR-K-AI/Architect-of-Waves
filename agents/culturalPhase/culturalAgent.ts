import { LlmAgent, GOOGLE_SEARCH } from '@google/adk';

import {culturalInstruction} from "../../prompts/instructions.js";
import {CulturalizedConceptSchema} from "../../schemas/concept.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const culturalAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'cultural_strategist',
    description: `
Evaluates business ideas for cultural compatibility, regional adaptation,
consumer behavior, localization requirements, and market readiness.

Uses Google Search to gather up-to-date information about the target country,
consumer trends, competitors, regulations, payment preferences, social norms,
and emerging market opportunities before producing recommendations.
  `.trim(),

    instruction: culturalInstruction,

    tools: [
        GOOGLE_SEARCH,
    ],

    // outputSchema: CulturalizedConceptSchema
});