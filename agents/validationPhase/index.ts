import {LlmAgent} from "@google/adk";
import {criticAgent} from "./criticAgent.js";
import {personaAgent} from "./personaAgent.js";
import {validationAgent} from "./validationAgent.js";
import {COMMON_CONFIG} from "../../constants/index.js";

export const validationPhase = new LlmAgent({
    ...COMMON_CONFIG,
    name: "validation_phase",
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