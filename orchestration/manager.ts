// orchestration/manager.ts
import { WorkflowState } from '../types/workflow.js';
import { generationAgent } from '../agents/generation.agent.js';
import { marketResearcherAgent } from '../agents/market-researcher.agent.js';

export class WorkflowManager {
    private state: WorkflowState;

    constructor(input: any) {
        this.state = {
            input,
            idea: null,
            analysis: { market: null, cultural: null, legal: null },
            logs: [],
            status: 'pending'
        };
    }

    async run() {
        this.log('Starting workflow...');

        // Етап 1: Генерація (Критична точка)
        const ideaResult = await generationAgent.run(this.state.input);
        this.state.idea = ideaResult;
        this.log('Idea generated.');

        // Етап 2: Дослідження ринку
        const marketResult = await marketResearcherAgent.run(this.state.idea);

        // Перевірка (Evaluation gate)
        if (!marketResult.isViable) {
            this.state.status = 'refining';
            this.log('Market failure, triggering refinement.');
            return this.handleRefinement();
        }

        this.state.analysis.market = marketResult;
        this.state.status = 'complete';
        return this.state;
    }

    private log(message: string) {
        this.state.logs.push(`[${new Date().toISOString()}] ${message}`);
        console.log(message);
    }

    private async handleRefinement() {
        // Логіка переробки ідеї
        return this.state;
    }
}