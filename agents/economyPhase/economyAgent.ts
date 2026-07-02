import { LlmAgent } from '@google/adk';
import { z } from 'zod';
import {economicInstruction} from "../../prompts/instructions.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const EconomicModelSchema = z.object({
    cac: z.string().describe('Customer Acquisition Cost'),

    ltv: z.string().describe('Lifetime Value'),

    roi: z.string().describe('Return on Investment estimate'),

    revenueStreams: z.array(z.string()),

    assumptions: z.array(z.string()),

    viability: z.enum(['strong', 'moderate', 'weak']),

    notes: z.array(z.string())
});

export const economyAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'economic_modeler',

    description: `
Builds unit economics and evaluates profitability potential of a business idea.
  `.trim(),

    instruction: economicInstruction,

    outputSchema: EconomicModelSchema
});