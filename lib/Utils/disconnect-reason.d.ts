export type DisconnectReasonName = 'logged-out' | 'forbidden' | 'multi-device-mismatch' | 'connection-closed' | 'connection-replaced' | 'timed-out' | 'bad-session' | 'restart-required' | 'unavailable-service' | 'rate-limited' | 'connection-lost' | 'unknown';
export declare const mapDisconnectReason: (code: number | undefined | null) => DisconnectReasonName;
export declare const isFatalDisconnect: (reason: string) => boolean;
export declare const isRateLimited: (reason: string) => boolean;
export declare const shouldClearAuth: (reason: string) => boolean;
export declare const shouldReconnect: (reason: string) => boolean;
export declare const getDisconnectInfo: (input: number | { error?: any; output?: any; statusCode?: number } | undefined | null) => {
    code: number | undefined;
    reason: DisconnectReasonName;
    fatal: boolean;
    clearAuth: boolean;
    reconnect: boolean;
    rateLimited: boolean;
};
