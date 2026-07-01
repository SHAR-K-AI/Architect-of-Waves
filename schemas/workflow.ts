import { z } from 'zod';

/**
 * Початкові дані, які вводить користувач.
 */
export const WorkflowInputSchema = z.object({
    budget: z
        .number()
        .positive()
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

/**
 * Концепт, який формується після Generation Phase.
 */
export const BusinessConceptSchema = z.object({
    title: z.string(),

    problem: z.string(),

    solution: z.string(),

    targetAudience: z.string(),

    valueProposition: z.string(),

    differentiation: z.string()
});

export type BusinessConcept = z.infer<typeof BusinessConceptSchema>;

/**
 * Концепт після Cultural Strategist.
 */
export const LocalizedConceptSchema = BusinessConceptSchema.extend({
    culturalFit: z.number(),

    culturalRisks: z.array(z.string()),

    localizationNotes: z.array(z.string())
});

export type LocalizedConcept = z.infer<typeof LocalizedConceptSchema>;

/**
 * Результат перевірки ідеї.
 */
export const ValidationSchema = z.object({
    score: z.number(),

    strengths: z.array(z.string()),

    weaknesses: z.array(z.string()),

    recommendations: z.array(z.string())
});

export type ValidationResult = z.infer<typeof ValidationSchema>;

/**
 * Фінальний бізнес-план.
 */
export const BusinessPlanSchema = z.object({
    executiveSummary: z.string(),

    marketAnalysis: z.string(),

    financialPlan: z.string(),

    legalConsiderations: z.string(),

    implementationPlan: z.string(),

    risks: z.array(z.string())
});

export type BusinessPlan = z.infer<typeof BusinessPlanSchema>;

/**
 * Глобальний стан (Workflow State),
 * який передається між агентами.
 */
export const WorkflowStateSchema = z.object({
    input: WorkflowInputSchema,

    iteration: z.number().default(1),

    concept: BusinessConceptSchema.optional(),

    localizedConcept: LocalizedConceptSchema.optional(),

    validation: ValidationSchema.optional(),

    businessPlan: BusinessPlanSchema.optional()
});

export type WorkflowState = z.infer<typeof WorkflowStateSchema>;