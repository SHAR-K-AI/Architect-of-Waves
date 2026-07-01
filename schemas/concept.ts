import { z } from 'zod';

/**
 * Розширена ринкова аналітика від Market Researcher.
 */
export const MarketInsightsSchema = z.object({
    marketSize: z.string().describe('Estimated market size (TAM/SAM/SOM if possible).'),

    competitors: z.array(
        z.object({
            name: z.string(),
            strength: z.string(),
            weakness: z.string()
        })
    ),

    trends: z.array(z.string()),

    demandLevel: z.enum(['low', 'medium', 'high'])
});

export type MarketInsights = z.infer<typeof MarketInsightsSchema>;

/**
 * Gap Analyst результат.
 */
export const MarketGapSchema = z.object({
    painPoints: z.array(z.string()),

    underservedSegments: z.array(z.string()),

    opportunities: z.array(z.string())
});

export type MarketGap = z.infer<typeof MarketGapSchema>;

/**
 * Об'єднаний результат Generation Phase.
 */
export const GeneratedConceptBundleSchema = z.object({
    ideaTitle: z.string(),

    marketInsights: MarketInsightsSchema,

    marketGap: MarketGapSchema
});

export type GeneratedConceptBundle = z.infer<typeof GeneratedConceptBundleSchema>;

/**
 * Результат після культурної адаптації.
 */
export const CulturalizedConceptSchema = z.object({
    baseIdeaTitle: z.string(),

    adaptedIdeaTitle: z.string(),

    culturalFit: z.number(),

    culturalRisks: z.array(z.string()),

    localizationAdjustments: z.array(z.string()),

    rejectedAsInfeasible: z.boolean().default(false)
});

export type CulturalizedConcept = z.infer<typeof CulturalizedConceptSchema>;

/**
 * Внутрішня оцінка ідеї перед фінальною валідацією.
 */
export const PreValidationSnapshotSchema = z.object({
    clarityScore: z.number(),

    feasibilityScore: z.number(),

    innovationScore: z.number(),

    riskFlags: z.array(z.string())
});

export type PreValidationSnapshot = z.infer<typeof PreValidationSnapshotSchema>;