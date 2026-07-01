import { z } from 'zod';

/**
 * Структура фінального бізнес-плану.
 * Це те, що отримує користувач після успішного циклу валідації.
 */
export const BusinessPlanSchema = z.object({
    meta: z.object({
        title: z.string(),

        region: z.string(),

        direction: z.string(),

        iterationCount: z.number().min(1),

        finalScore: z.number()
    }),

    executiveSummary: z.string(),

    problemStatement: z.string(),

    solutionOverview: z.string(),

    marketAnalysis: z.string(),

    targetAudience: z.string(),

    competitiveLandscape: z.string(),

    businessModel: z.string(),

    unitEconomics: z.object({
        cac: z.string(),
        ltv: z.string(),
        revenueStreams: z.array(z.string()),
        assumptions: z.array(z.string())
    }),

    financialPlan: z.object({
        startupCosts: z.string(),
        monthlyBurn: z.string(),
        breakEvenPoint: z.string(),
        revenueProjection: z.string()
    }),

    marketingStrategy: z.string(),

    operationalPlan: z.string(),

    legalConsiderations: z.array(z.string()),

    risks: z.array(
        z.object({
            risk: z.string(),
            mitigation: z.string()
        })
    ),

    roadmap: z.array(
        z.object({
            phase: z.string(),
            goals: z.array(z.string())
        })
    ),

    finalRecommendation: z.enum([
        'proceed',
        'proceed_with_caution',
        'reject'
    ])
});

export type BusinessPlan = z.infer<typeof BusinessPlanSchema>;