import { LlmAgent } from '@google/adk';
import {BusinessPlanSchema} from "../../schemas/workflow.js";
import {financialInstruction} from "../../prompts/instructions.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const financeAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'financial_controller',

    description: `
Evaluates startup costs, burn rate, and financial feasibility of a business idea.
  `.trim(),

    instruction: financialInstruction,

    outputSchema: BusinessPlanSchema
});