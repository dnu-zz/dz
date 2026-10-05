export interface AutoReconnectOptions {
    onSocket?: (sock: any) => void;
    onOpen?: (sock: any) => void;
    onLoggedOut?: (error: any) => void;
    /** Called (instead of reconnecting) on forbidden/multi-device-mismatch disconnects. */
    onFatal?: (error: any, statusCode: number | undefined) => void;
    maxAttempts?: number;
    baseDelayMs?: number;
    maxDelayMs?: number;
    jitter?: number;
    logger?: any;
}
export interface AutoReconnectManager {
    start(): Promise<any>;
    stop(): Promise<void>;
    readonly socket: any;
    readonly attempts: number;
}
export declare const autoReconnect: (socketFactory: () => any | Promise<any>, options?: AutoReconnectOptions) => AutoReconnectManager;
