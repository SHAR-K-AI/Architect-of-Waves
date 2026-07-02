import { LlmAgent } from '@google/adk';
import {culturalInstruction} from "../../prompts/instructions.js";
import {CulturalizedConceptSchema} from "../../schemas/concept.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const culturalAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'cultural_strategist',
    description: `
Evaluates business ideas for cultural fit, risks, and localization requirements.
  `.trim(),

    instruction: culturalInstruction,

    outputSchema: CulturalizedConceptSchema
});