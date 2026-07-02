import {LlmAgent} from "@google/adk";
import {culturalAgent} from "./culturalAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const culturalPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: "cultural_filter_phase",

    instruction: `
Validate cultural fit and context appropriateness.
`,
    subAgents: [culturalAgent],
});