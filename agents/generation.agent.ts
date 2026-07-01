import {LlmAgent} from '@google/adk';
import {z} from 'zod';

/**
 * Business Idea Generation Result
 */
export const GenerationSchema = z.object({
    idea: z.string(),
    problem: z.string(),
    solution: z.string(),
    targetAudience: z.string(),
    monetization: z.string(),
    assumptions: z.array(z.string())
});

/**
 * Generation Agent
 * Створює первинну бізнес-ідею на основі input (budget/region/direction)
 */
export const generationAgent = new LlmAgent({
    name: 'market_researcher', // важливо: може бути стартовим агентом

    model: 'gemini-2.5-flash',

    description: `
Generates initial business ideas based on constraints like budget, region and direction.
  `.trim(),

    instruction: `
You are the idea generation engine.

Input:
- budget
- region
- direction

Your job:
1. Generate 1 strong business idea
2. Define problem, solution, audience, monetization
3. Keep it realistic for the region and budget
4. Do NOT evaluate — only generate
`,

    // outputSchema: GenerationSchema
});