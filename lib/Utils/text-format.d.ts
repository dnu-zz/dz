export declare const DEFAULT_TEXT_PART_LENGTH: number;
export declare const splitText: (text: string, maxLen?: number) => string[];
export declare const whatsappify: <T extends string | undefined | null>(text: T) => T;
export declare const sendLongText: (sock: { sendMessage: (jid: string, content: any, options?: any) => Promise<any> }, jid: string, text: string, opts?: { quoted?: any; format?: boolean; maxLen?: number; delayMs?: number }) => Promise<{ ok: boolean; ids: string[]; error?: unknown }>;
