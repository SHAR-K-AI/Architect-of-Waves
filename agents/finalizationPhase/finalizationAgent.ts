import { LlmAgent } from '@google/adk';
import {finalizationInstruction} from "../../prompts/instructions.js";
import {BusinessPlanSchema} from "../../schemas/workflow.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const finalizationAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'finalization_agent',


    description: `
Aggregates economic, financial, legal, and validation outputs into a complete business plan.
  `.trim(),

    instruction: finalizationInstruction,

    outputSchema: BusinessPlanSchema
});