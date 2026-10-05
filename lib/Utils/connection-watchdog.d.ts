export interface ConnectionWatchdogOptions {
    idleThresholdMs?: number;
    checkIntervalMs?: number;
    /** 'ping' (default, invisible w:p iq) or 'presence' (sendPresenceUpdate('available'), visible as online). */
    probe?: 'ping' | 'presence';
}
export declare function setupConnectionWatchdog(sock: any, opts?: ConnectionWatchdogOptions): () => void;
