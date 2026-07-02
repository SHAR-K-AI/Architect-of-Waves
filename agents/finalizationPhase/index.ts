import {LlmAgent} from "@google/adk";
import {finalizationAgent} from "./finalizationAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const finalizationPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: "finalization_phase",

    instruction: `
Finalize validated business idea and prepare output.
`
    , subAgents: [finalizationAgent],
});