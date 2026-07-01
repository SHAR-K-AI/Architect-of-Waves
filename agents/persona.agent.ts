import { LlmAgent } from '@google/adk';
import { PersonaSimulatorResultSchema } from '../schemas/validation.js';
import { personaInstruction } from '../prompts/instructions.js';

/**
 * Persona Simulator Agent
 * Імітує поведінку реального користувача
 * та оцінює ймовірність покупки.
 */
export const personaAgent = new LlmAgent({
    name: 'persona_simulator',

    model: 'gemini-2.5-flash',

    description: `
Simulates real user behavior and evaluates purchase intent for the idea.
  `.trim(),

    instruction: personaInstruction,

    // outputSchema: PersonaSimulatorResultSchema
});