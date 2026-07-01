import { LlmAgent } from '@google/adk';
import { z } from 'zod';
import { economicInstruction } from '../prompts/instructions.js';

/**
 * Economic Model Result
 * Юніт-економіка бізнес-ідеї.
 */
export const EconomicModelSchema = z.object({
    cac: z.string().describe('Customer Acquisition Cost'),

    ltv: z.string().describe('Lifetime Value'),

    roi: z.string().describe('Return on Investment estimate'),

    revenueStreams: z.array(z.string()),

    assumptions: z.array(z.string()),

    viability: z.enum(['strong', 'moderate', 'weak']),

    notes: z.array(z.string())
});

/**
 * Economic Modeler Agent
 * Розраховує unit-економіку, CAC/LTV та ROI.
 */
export const economyAgent = new LlmAgent({
    name: 'economic_modeler',

    model: 'gemini-2.5-flash',

    description: `
Builds unit economics and evaluates profitability potential of a business idea.
  `.trim(),

    instruction: economicInstruction,

    // outputSchema: EconomicModelSchema
});