import { LlmAgent } from "@google/adk";
import {criticAgent} from "./criticAgent.js";
import {personaAgent} from "./personaAgent.js";
import {validationAgent} from "./validationAgent.js";


export const validationPhase = new LlmAgent({
    name: "validation_phase",
    model: "gemini-2.5-flash",

    instruction: `
Run validation chain:
1. criticAgent
2. personaAgent
3. validationAgent
`,

    subAgents: [
        criticAgent,
        personaAgent,
        validationAgent,
    ],
});