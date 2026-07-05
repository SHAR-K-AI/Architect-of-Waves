import {LlmAgent} from '@google/adk';
import {z} from 'zod';
import {COMMON_CONFIG} from "../../constants/index.js";

export const GenerationSchema = z.object({
    title: z.string(),

    summary: z.string(),

    idea: z.string(),

    problem: z.string(),

    solution: z.string(),

    targetAudience: z.object({
        primary: z.string(),
        secondary: z.string().optional(),
        demographics: z.string(),
        painPoints: z.array(z.string()),
    }),

    valueProposition: z.string(),

    uniqueSellingPoints: z.array(z.string()),

    monetization: z.object({
        model: z.string(),
        pricingStrategy: z.string(),
        revenueStreams: z.array(z.string()),
    }),

    businessModel: z.string(),

    distributionChannels: z.array(z.string()),

    requiredResources: z.array(z.string()),

    budgetEstimate: z.string(),

    assumptions: z.array(z.string()),

    risks: z.array(z.string()),

    successMetrics: z.array(z.string()),

    mvp: z.object({
        goal: z.string(),
        features: z.array(z.string()),
    }),

    tags: z.array(z.string()),
});

export const generationAgent = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'generation',

    description: `
Generates innovative yet realistic business concepts tailored to the user's
constraints. Produces a structured business proposal that serves as the
foundation for all subsequent pipeline phases.
  `.trim(),

    instruction: `
You are an expert startup strategist and innovation consultant.

Your objective is to generate ONE high-quality business concept.

Input may include:

- budget
- country
- region
- industry
- interests
- constraints
- available resources
- target customers
- existing experience

Requirements

• Generate only one business idea.
• The idea must be realistic.
• Respect all provided constraints.
• Focus on solving a real customer problem.
• Avoid generic startup ideas unless strongly justified.
• Prefer scalable business models.

For the generated concept provide:

1. Business title
2. Executive summary
3. Problem statement
4. Proposed solution
5. Target audience
6. Value proposition
7. Unique selling points
8. Business model
9. Monetization strategy
10. Revenue streams
11. Distribution channels
12. Required resources
13. Estimated budget
14. MVP definition
15. Key assumptions
16. Major risks
17. Success metrics
18. Relevant business tags

Do not evaluate the idea.

Do not perform market research.

Do not analyze competitors.

Your only responsibility is generating a structured business concept.
`.trim(),

    outputSchema: GenerationSchema,
});