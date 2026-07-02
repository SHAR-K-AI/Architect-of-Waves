import {LlmAgent} from '@google/adk';
import {z} from 'zod';
import {COMMON_CONFIG} from "../../constants/index.js";

export const GenerationSchema = z.object({
    idea: z.string(),
    problem: z.string(),
    solution: z.string(),
    targetAudience: z.string(),
    monetization: z.string(),
    assumptions: z.array(z.string())
});

export const generationAgent = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'generation',

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

    outputSchema: GenerationSchema
});