import { LlmAgent } from '@google/adk';
import { z } from 'zod';
import { legalInstruction } from '../prompts/instructions.js';

/**
 * Legal Analysis Result
 * Оцінка юридичних ризиків бізнес-ідеї.
 */
export const LegalResultSchema = z.object({
    legalRisks: z.array(z.string()),

    requiredLicenses: z.array(z.string()),

    complianceIssues: z.array(z.string()),

    recommendedBusinessForms: z.array(z.string()),

    riskLevel: z.enum(['low', 'medium', 'high']),

    notes: z.array(z.string())
});

/**
 * Legal Advisor Agent
 * Аналізує правові обмеження та регуляції регіону.
 */
export const legalAgent = new LlmAgent({
    name: 'legal_advisor',

    model: 'gemini-2.5-flash',

    description: `
Evaluates legal constraints, compliance requirements, and regulatory risks for a business idea.
  `.trim(),

    instruction: legalInstruction,

    // outputSchema: LegalResultSchema
});