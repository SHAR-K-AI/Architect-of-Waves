// types/workflow.ts
import { z } from 'zod';

// Схема ідеї для Zod (Runtime validation)
export const IdeaSchema = z.object({
    title: z.string(),
    problem: z.string(),
    solution: z.string(),
    targetAudience: z.string(),
    monetization: z.string(),
    assumptions: z.array(z.string()),
});

// Тип для TypeScript (Compile-time)
export interface WorkflowState {
    input: {
        budget: string;
        region: string;
        direction: string
    };
    idea: z.infer<typeof IdeaSchema> | null;
    analysis: {
        market: any;
        cultural: any;
        legal: any;
    };
    logs: string[];
    status: 'pending' | 'refining' | 'complete' | 'failed';
}