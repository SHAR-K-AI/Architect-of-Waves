import { z } from 'zod';

export const WorkflowInputSchema = z.object({
    budget: z.number().min(100)
        .describe('Maximum available startup budget.'),

    region: z
        .string()
        .min(2)
        .describe('Country, city or region where the business will operate.'),

    direction: z
        .string()
        .min(2)
        .describe('Desired business direction or industry.')
});

export type WorkflowInput = z.infer<typeof WorkflowInputSchema>;

export const BusinessConceptSchema = z.object({
    title: z.string(),

    problem: z.string(),

    solution: z.string(),

    targetAudience: z.string(),

    valueProposition: z.string(),

    differentiation: z.string()
});

export type BusinessConcept = z.infer<typeof BusinessConceptSchema>;

export const LocalizedConceptSchema = BusinessConceptSchema.extend({
    culturalFit: z.number(),

    culturalRisks: z.array(z.string()),

    localizationNotes: z.array(z.string())
});

export type LocalizedConcept = z.infer<typeof LocalizedConceptSchema>;

export const ValidationSchema = z.object({
    score: z.number(),

    strengths: z.array(z.string()),

    weaknesses: z.array(z.string()),

    recommendations: z.array(z.string())
});

export type ValidationResult = z.infer<typeof ValidationSchema>;

export const BusinessPlanSchema = z.object({
    executiveSummary: z.string(),

    marketAnalysis: z.string(),

    financialPlan: z.string(),

    legalConsiderations: z.string(),

    implementationPlan: z.string(),

    risks: z.array(z.string())
});

export type BusinessPlan = z.infer<typeof BusinessPlanSchema>;

export const WorkflowStateSchema = z.object({
    input: WorkflowInputSchema,

    iteration: z.number().min(1).default(1),

    concept: BusinessConceptSchema.optional(),

    localizedConcept: LocalizedConceptSchema.optional(),

    validation: ValidationSchema.optional(),

    businessPlan: BusinessPlanSchema.optional()
});

export type WorkflowState = z.infer<typeof WorkflowStateSchema>;