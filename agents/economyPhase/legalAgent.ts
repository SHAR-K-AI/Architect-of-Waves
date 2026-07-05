import { LlmAgent, GOOGLE_SEARCH } from '@google/adk';

import { z } from 'zod';

import { COMMON_CONFIG } from '../../constants/index.js';
import { legalInstruction } from '../../prompts/instructions.js';

export const LegalResultSchema = z.object({
    legalRisks: z.array(z.string()),

    requiredLicenses: z.array(z.string()),

    complianceRequirements: z.array(z.string()),

    regulatoryAuthorities: z.array(z.string()),

    recommendedBusinessForms: z.array(z.string()),

    requiredDocuments: z.array(z.string()),

    taxConsiderations: z.array(z.string()),

    intellectualPropertyConsiderations: z.array(z.string()),

    dataPrivacyRequirements: z.array(z.string()),

    employmentConsiderations: z.array(z.string()),

    industrySpecificRegulations: z.array(z.string()),

    recommendations: z.array(z.string()),

    riskLevel: z.enum([
        'low',
        'medium',
        'high'
    ]),

    summary: z.string(),
});

export const legalAgent = new LlmAgent({
    ...COMMON_CONFIG,

    name: 'legal_advisor',

    description: `
Acts as a legal and regulatory advisor.

Evaluates legal risks, regulatory obligations, licensing requirements,
business registration options, taxation considerations, compliance issues,
and industry-specific regulations for the proposed business concept.

Uses Google Search to verify current legal and regulatory information.
  `.trim(),

    instruction: `
${legalInstruction}

ROLE

You are an experienced business legal advisor.

Your objective is to identify legal risks before the business is launched.

Always use Google Search when researching:

• business registration requirements
• licensing requirements
• taxation rules
• industry regulations
• privacy laws
• employment regulations
• consumer protection laws
• intellectual property requirements
• financial regulations
• regional compliance obligations

Evaluate:

1. Business registration
2. Recommended legal entity
3. Licensing requirements
4. Regulatory compliance
5. Industry regulations
6. Tax considerations
7. Intellectual property
8. Data privacy
9. Employment law
10. Consumer protection
11. Legal risks

Requirements

• Base conclusions on current regulations.
• Distinguish mandatory requirements from recommendations.
• Never invent legal obligations.
• If regulations differ by jurisdiction, explicitly mention this.
• Identify areas where professional legal advice is recommended.

The objective is to provide a preliminary legal assessment rather than formal legal advice.
`.trim(),

    tools: [
        GOOGLE_SEARCH,
    ],

    // outputSchema: LegalResultSchema,
});