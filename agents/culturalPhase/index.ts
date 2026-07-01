import { LlmAgent } from "@google/adk";
import {culturalAgent} from "./culturalAgent.js";

export const culturalPhase = new LlmAgent({
    name: "cultural_filter_phase",
    model: "gemini-2.5-flash",

    instruction: `
Validate cultural fit and context appropriateness.
`,

    subAgents: [culturalAgent],
});