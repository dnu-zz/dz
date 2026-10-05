export interface MockSocketOptions {
    me?: string;
    pushName?: string;
    autoConnect?: boolean;
}
export interface MockSocket {
    sock: any;
    outbox: Array<{ jid: string; content: any; options: any; message: any }>;
    eventLog: Array<{ event: string; data: any }>;
    readReceipts: any[];
    presenceLog: Array<{ type: string; toJid: string | null }>;
    receiveText: (...args: any[]) => any;
    receiveMessage: (...args: any[]) => any;
    waitForReply: (...args: any[]) => Promise<any>;
    connect: () => void;
    disconnect: (...args: any[]) => void;
    reset: () => void;
    readonly connectionState: string;
}
export declare const createMockSocket: (options?: MockSocketOptions) => MockSocket;
