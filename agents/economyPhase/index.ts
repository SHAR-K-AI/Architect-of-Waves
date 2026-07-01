import { LlmAgent } from "@google/adk";

import {economyAgent} from "./economyAgent.js";
import {financeAgent} from "./financeAgent.js";
import {legalAgent} from "./legalAgent.js";

export const economicPhase = new LlmAgent({
    name: "economic_model_phase",
    model: "gemini-2.5-flash",

    instruction: `
Execute in order:
1. economyAgent
2. financeAgent
3. legalAgent
`,

    subAgents: [
        economyAgent,
        financeAgent,
        legalAgent,
    ],
});