export declare const isBadMacError: (error: unknown) => boolean;
export declare const isSessionError: (error: unknown) => boolean;
export interface BadMacHandlerOptions {
    maxRetries?: number;
    resetInterval?: number;
    /** Folder used by useMultiFileAuthState() — required for clearProblematicSessionFiles(). */
    authFolder?: string;
    logger?: { warn?: (...a: any[]) => void; error?: (...a: any[]) => void };
    onLimit?: (stats: ReturnType<BadMacHandler['getStats']>) => void;
}
export declare class BadMacHandler {
    errorCount: number;
    maxRetries: number;
    resetInterval: number;
    lastReset: number;
    authFolder?: string;
    constructor(options?: BadMacHandlerOptions);
    isBadMacError(error: unknown): boolean;
    isSessionError(error: unknown): boolean;
    clearProblematicSessionFiles(opts?: { dryRun?: boolean }): Promise<string[]>;
    incrementErrorCount(): void;
    resetErrorCount(): void;
    hasReachedLimit(): boolean;
    handleError(error: unknown, context?: string): boolean;
    createSafeWrapper<A extends any[], R>(fn: (...args: A) => Promise<R>, context?: string): (...args: A) => Promise<R | null>;
    getStats(): { errorCount: number; maxRetries: number; lastReset: string; timeUntilReset: number };
}
