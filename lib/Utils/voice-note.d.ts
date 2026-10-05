export declare const MAX_VOICE_NOTE_BYTES: number;
export declare const isOggBuffer: (buf: unknown) => boolean;
export interface VoiceNoteOptions { convert?: boolean; waveform?: Uint8Array; seconds?: number; [k: string]: any }
export declare const buildVoiceNoteContent: (audio: Buffer | string | { url: string } | NodeJS.ReadableStream, opts?: VoiceNoteOptions) => Promise<{ audio: Buffer; ptt: true; mimetype: string; waveform?: Uint8Array; seconds?: number; [k: string]: any }>;
export declare const sendVoiceNote: (sock: any, jid: string, audio: Buffer | string | { url: string } | NodeJS.ReadableStream, opts?: VoiceNoteOptions & Record<string, any>) => Promise<any>;
