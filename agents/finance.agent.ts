import { LlmAgent } from '@google/adk';
import { BusinessPlanSchema } from '../schemas/business-plan.js';
import { financialInstruction } from '../prompts/instructions.js';

/**
 * Financial Controller Agent
 * Перевіряє бюджет, витрати та фінансову життєздатність ідеї.
 */
export const financeAgent = new LlmAgent({
    name: 'financial_controller',

    model: 'gemini-2.5-flash',

    description: `
Evaluates startup costs, burn rate, and financial feasibility of a business idea.
  `.trim(),

    instruction: financialInstruction,

    // outputSchema: BusinessPlanSchema
});