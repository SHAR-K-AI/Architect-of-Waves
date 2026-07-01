import { LlmAgent } from '@google/adk';
import { CulturalizedConceptSchema } from '../schemas/concept.js';
import { culturalInstruction } from '../prompts/instructions.js';

/**
 * Cultural Strategist Agent
 * Оцінює ідею через призму регіонального менталітету,
 * соціальних норм і поведінкових патернів.
 */
export const culturalAgent = new LlmAgent({
    name: 'cultural_strategist',

    model: 'gemini-2.5-flash',

    description: `
Evaluates business ideas for cultural fit, risks, and localization requirements.
  `.trim(),

    instruction: culturalInstruction,

    // outputSchema: CulturalizedConceptSchema
});