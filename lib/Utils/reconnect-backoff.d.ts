export interface ReconnectBackoffOptions {
    baseMs?: number;
    capMs?: number;
}
export declare function computeReconnectDelay(attempts: number, opts?: ReconnectBackoffOptions): number;
export declare function createReconnectBackoff(opts?: ReconnectBackoffOptions): {
    next(): number;
    reset(): void;
    readonly attempts: number;
};
