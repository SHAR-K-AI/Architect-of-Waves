import { LlmAgent } from "@google/adk";
import {finalizationAgent} from "./finalizationAgent.js";

export const finalizationPhase = new LlmAgent({
    name: "finalization_phase",
    model: "gemini-2.5-flash",

    instruction: `
Finalize validated business idea and prepare output.
`,

    subAgents: [finalizationAgent],
});