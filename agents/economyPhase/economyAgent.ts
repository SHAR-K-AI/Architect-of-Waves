import {LlmAgent, GOOGLE_SEARCH} from '@google/adk';
import {z} from 'zod';

import {COMMON_CONFIG} from '../../constants/index.js';
import {economicInstruction} from '../../prompts/instructions.js';

export const EconomicModelSchema = z.object({

    pricingStrategy: z.string(),

    revenueStreams: z.array(z.string()),

    unitEconomics: z.string(),

    cac: z.number(),

    ltv: z.number(),

    ltvCacRatio: z.number(),

    grossMargin: z.number(),

    roi: z.number(),

    breakEvenMonths: z.number(),

    scalability: z.enum([
        'low',
        'medium',
        'high'
    ]),

    capitalIntensity: z.enum([
        'low',
        'medium',
        'high'
    ]),

    assumptions: z.array(z.string()),

    risks: z.array(z.string()),

    recommendations: z.array(z.string()),

    viability: z.enum([
        'strong',
        'moderate',
        'weak'
    ]),

    summary: z.string()
});

export const economyAgent = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'economic_modeler',

    description: `
Acts as a business economist responsible for evaluating the commercial
feasibility of a business concept.

Analyzes unit economics, pricing strategy, customer acquisition economics,
revenue potential, scalability, and long-term sustainability.

Uses current market information and financial calculations to produce an
evidence-based economic assessment.
  `.trim(),

    instruction: `
${economicInstruction}

ROLE

You are a senior business economist.

Your responsibility is to evaluate whether the proposed business can become
economically sustainable.

Always use Google Search when current market information is required.

Use the market_math tool whenever financial calculations are necessary.

Evaluate:

1. Revenue model
2. Pricing strategy
3. Customer Acquisition Cost (CAC)
4. Customer Lifetime Value (LTV)
5. LTV/CAC ratio
6. Gross Margin
7. Break-even potential
8. Unit Economics
9. ROI potential
10. Scalability
11. Recurring revenue potential
12. Capital intensity
13. Economic risks

Requirements

• Base conclusions on realistic assumptions.
• Never invent financial metrics.
• Clearly separate assumptions from calculated values.
• Prefer tool-generated calculations over manual estimates.

Produce an overall commercial viability assessment.
`.trim(),

    tools: [
        GOOGLE_SEARCH,
    ],

    // outputSchema: EconomicModelSchema,
});