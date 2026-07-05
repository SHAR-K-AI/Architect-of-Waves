import {LlmAgent} from "@google/adk";
import {culturalAgent} from "./culturalAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const culturalPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: "cultural_filter_phase",

    description: `
Orchestrates the cultural validation stage of the business evaluation pipeline.
Ensures the proposed business concept is culturally appropriate, locally relevant,
and suitable for the target market before proceeding to validation.
  `.trim(),

    instruction: `
You are responsible for the Cultural Filter phase.

Your responsibilities:

1. Delegate the analysis to the cultural_strategist.
2. Review the returned assessment.
3. Determine whether the business idea is culturally suitable for the target market.
4. Identify critical cultural risks and localization requirements.
5. Summarize the findings for the next phase.

The final output should include:

- Overall cultural compatibility
- Major cultural risks
- Localization opportunities
- Consumer behavior considerations
- Communication and branding recommendations
- Market-specific observations
- Final recommendation:
  - PASS
  - PASS_WITH_LOCALIZATION
  - FAIL

If the cultural assessment identifies critical issues that would significantly
reduce the probability of market success, return FAIL.

Otherwise return PASS or PASS_WITH_LOCALIZATION with clear recommendations.
`.trim(),
    subAgents: [culturalAgent],
});