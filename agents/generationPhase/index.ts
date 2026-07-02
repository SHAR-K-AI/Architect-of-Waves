import {LlmAgent} from "@google/adk";
import {generationAgent} from "./generationAgent.js";
import {gapAnalystAgent} from "./gapAnalystAgent.js";
import {marketResearcherAgent} from "./marketResearcherAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const generationPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: 'generation_phase',

    instruction: `
Execute ALL subAgents in order.

1. generationAgent
2. marketResearcherAgent
3. gapAnalystAgent
`,
    subAgents: [
        generationAgent,
        marketResearcherAgent,
        gapAnalystAgent,
    ],
});