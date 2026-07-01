import { LlmAgent } from '@google/adk';
import {finalizationInstruction} from "../../prompts/instructions.js";
import {BusinessPlanSchema} from "../../schemas/workflow.js";

export const finalizationAgent = new LlmAgent({
    name: 'finalization_agent',

    model: 'gemini-2.5-flash',

    description: `
Aggregates economic, financial, legal, and validation outputs into a complete business plan.
  `.trim(),

    instruction: finalizationInstruction,

    outputSchema: BusinessPlanSchema
});