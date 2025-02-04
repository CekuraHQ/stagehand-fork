import { LogLine } from "../../types/log";
import { Stagehand } from "../index";
import { LLMClient } from "../llm/LLMClient";
import { StagehandPage } from "../StagehandPage";
export declare class StagehandObserveHandler {
    private readonly stagehand;
    private readonly logger;
    private readonly stagehandPage;
    private readonly verbose;
    private observations;
    private readonly userProvidedInstructions?;
    constructor({ stagehand, logger, stagehandPage, userProvidedInstructions, }: {
        stagehand: Stagehand;
        logger: (logLine: LogLine) => void;
        stagehandPage: StagehandPage;
        userProvidedInstructions?: string;
    });
    private _recordObservation;
    observe({ instruction, useVision, fullPage, llmClient, requestId, domSettleTimeoutMs, }: {
        instruction: string;
        useVision: boolean;
        fullPage: boolean;
        llmClient: LLMClient;
        requestId?: string;
        domSettleTimeoutMs?: number;
    }): Promise<{
        selector: string;
        description: string;
    }[]>;
}
