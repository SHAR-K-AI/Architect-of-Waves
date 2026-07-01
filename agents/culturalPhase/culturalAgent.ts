import { LlmAgent } from '@google/adk';
import {culturalInstruction} from "../../prompts/instructions.js";
import {CulturalizedConceptSchema} from "../../schemas/concept.js";

export const culturalAgent = new LlmAgent({
    name: 'cultural_strategist',

    model: 'gemini-2.5-flash',

    description: `
Evaluates business ideas for cultural fit, risks, and localization requirements.
  `.trim(),

    instruction: culturalInstruction,

    outputSchema: CulturalizedConceptSchema
});