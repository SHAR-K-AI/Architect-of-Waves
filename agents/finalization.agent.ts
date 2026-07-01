import { LlmAgent } from '@google/adk';
import { BusinessPlanSchema } from '../schemas/business-plan.js';
import { finalizationInstruction } from '../prompts/instructions.js';

/**
 * Finalization Agent
 * Збирає всі результати інших агентів
 * та формує фінальний бізнес-план.
 */
export const finalizationAgent = new LlmAgent({
    name: 'finalization_agent',

    model: 'gemini-2.5-flash',

    description: `
Aggregates economic, financial, legal, and validation outputs into a complete business plan.
  `.trim(),

    instruction: finalizationInstruction,

    // outputSchema: BusinessPlanSchema
});