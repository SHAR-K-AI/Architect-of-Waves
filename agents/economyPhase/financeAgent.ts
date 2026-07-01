import { LlmAgent } from '@google/adk';
import {BusinessPlanSchema} from "../../schemas/workflow.js";
import {financialInstruction} from "../../prompts/instructions.js";

export const financeAgent = new LlmAgent({
    name: 'financial_controller',

    model: 'gemini-2.5-flash',

    description: `
Evaluates startup costs, burn rate, and financial feasibility of a business idea.
  `.trim(),

    instruction: financialInstruction,

    outputSchema: BusinessPlanSchema
});