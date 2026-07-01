import { z } from 'zod';

export const IdeaCriticResultSchema = z.object({
    score: z.number(),

    logicalIssues: z.array(z.string()),

    feasibilityRisks: z.array(z.string()),

    marketContradictions: z.array(z.string()),

    improvementSuggestions: z.array(z.string())
});

export type IdeaCriticResult = z.infer<typeof IdeaCriticResultSchema>;

export const PersonaSimulatorResultSchema = z.object({
    wouldBuy: z.boolean(),

    score: z.number(),

    reasons: z.array(z.string()),

    objections: z.array(z.string()),

    triggers: z.array(z.string()).describe('What makes the user interested')
});

export type PersonaSimulatorResult = z.infer<typeof PersonaSimulatorResultSchema>;

export const ValidationAggregateSchema = z.object({
    critic: IdeaCriticResultSchema,

    persona: PersonaSimulatorResultSchema,

    finalScore: z.number(),

    verdict: z.enum(['reject', 'refine', 'accept']),

    confidence: z.number().min(0).max(1),

    blockingIssues: z.array(z.string())
});

export type ValidationAggregate = z.infer<typeof ValidationAggregateSchema>;

export const ValidationDecisionSchema = z.object({
    shouldContinue: z.boolean(),

    shouldRefine: z.boolean(),

    shouldFinalize: z.boolean(),

    iterationPenalty: z.number(),

    reason: z.string()
});

export type ValidationDecision = z.infer<typeof ValidationDecisionSchema>;