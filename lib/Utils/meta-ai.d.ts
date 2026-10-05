export interface AskMetaAIOptions {
    timeoutMs?: number;
    jid?: string;
}
export interface AskMetaAIResult {
    sent: any;
    reply: any;
    text: string;
}
export declare const askMetaAI: (sock: any, prompt: string, opts?: AskMetaAIOptions) => Promise<AskMetaAIResult>;
