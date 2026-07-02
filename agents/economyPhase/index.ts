import {LlmAgent} from "@google/adk";

import {economyAgent} from "./economyAgent.js";
import {financeAgent} from "./financeAgent.js";
import {legalAgent} from "./legalAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const economicPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: "economic_model_phase",

    instruction: `
Execute in order:
1. economyAgent
2. financeAgent
3. legalAgent
`
    , subAgents: [
        economyAgent,
        financeAgent,
        legalAgent,
    ],
});