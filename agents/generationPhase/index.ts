import {LlmAgent} from "@google/adk";
import {generationAgent} from "./generationAgent.js";
import {gapAnalystAgent} from "./gapAnalystAgent.js";
import {marketResearcherAgent} from "./marketResearcherAgent.js";

export const generationPhase = new LlmAgent({
    name: 'generation_phase',

    model: 'gemini-2.5-flash',

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