import { LlmAgent } from '@google/adk';
import { personaInstruction } from "../../prompts/instructions.js";
import {PersonaSimulatorResultSchema} from "../../schemas/validation.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const personaAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'persona_simulator',
    description: `
Simulates real user behavior and evaluates purchase intent for the idea.
  `.trim(),

    instruction: personaInstruction,

    outputSchema: PersonaSimulatorResultSchema
});