import { LlmAgent } from '@google/adk';

import { COMMON_CONFIG } from '../../constants/index.js';
import { finalizationInstruction } from '../../prompts/instructions.js';
import { BusinessPlanSchema } from '../../schemas/workflow.js';

export const finalizationAgent = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'finalization_agent',

    description: `
Acts as the final business proposal compiler.

Aggregates outputs from every previous phase into a complete, coherent,
and investor-ready business plan.

Does not perform additional analysis. Instead, consolidates validated
findings into a single structured deliverable.
  `.trim(),

    instruction: `
${finalizationInstruction}

ROLE

You are the final stage of the business development pipeline.

Your responsibility is to compile all validated information into a
professional business proposal.

Input includes:

• Business Concept
• Market Research
• Gap Analysis
• Cultural Assessment
• Validation Report
• Refined Business Concept
• Economic Assessment
• Financial Assessment
• Legal Assessment

Do NOT perform additional market research.

Do NOT invent new assumptions.

Do NOT contradict previous agent outputs.

Produce a complete business plan containing:

1. Executive Summary
2. Business Overview
3. Problem Statement
4. Proposed Solution
5. Value Proposition
6. Target Audience
7. Market Analysis
8. Competitive Landscape
9. Customer Pain Points
10. Business Model
11. Revenue Streams
12. Pricing Strategy
13. Marketing Strategy
14. Go-to-Market Strategy
15. Operational Plan
16. Financial Overview
17. Economic Assessment
18. Legal Considerations
19. Risk Assessment
20. Implementation Roadmap
21. Key Milestones
22. Success Metrics
23. Final Recommendation

Requirements

• Preserve consistency across sections.
• Base every conclusion on previous agent outputs.
• Clearly distinguish facts, assumptions, and recommendations.
• Produce a professional and well-structured document suitable for founders, investors, or stakeholders.
`.trim(),

    outputSchema: BusinessPlanSchema,
});