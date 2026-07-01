import { LlmAgent } from "@google/adk";
import {refinementAgent} from "./refinementAgent.js";

export const refinementPhase = new LlmAgent({
    name: "refinement_loop",
    model: "gemini-2.5-flash",

    instruction: `
Iteratively refine the idea based on feedback signals.
`,

    subAgents: [refinementAgent],
});