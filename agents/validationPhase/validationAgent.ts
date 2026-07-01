import { LlmAgent } from '@google/adk';
import { z } from 'zod';

export const ValidationSchema = z.object({
    score: z.number(),
    verdict: z.enum(['pass', 'fail', 'refine']),
    strengths: z.array(z.string()),
    weaknesses: z.array(z.string()),
    risks: z.array(z.string()),
    summary: z.string()
});

export const validationAgent = new LlmAgent({
    name: 'validation_agent',

    model: 'gemini-2.5-flash',

    description: `
Evaluates a business idea using both logical critique and user persona simulation.
Produces final decision: pass / fail / refine.
  `.trim(),

    instruction: `
You are the final validation layer in a multi-agent system.

You receive:
- business idea
- market context
- cultural context
- persona feedback
- critic feedback

Your job:
1. Combine all inputs
2. Produce a single score (0–10)
3. Decide:
   - pass (>=8)
   - refine (5–7.9)
   - fail (<5)

Be strict. Do not be optimistic.
`,

    outputSchema: ValidationSchema
});