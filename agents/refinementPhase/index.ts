import {LlmAgent} from "@google/adk";
import {refinementAgent} from "./refinementAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const refinementPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: "refinement_loop",

    instruction: `
Iteratively refine the idea based on feedback signals.
`
    , subAgents: [refinementAgent],
});