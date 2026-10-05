export interface MsmsgKey {
    participant: string;
    meId: string;
    meLid?: string;
    conversationJid?: string;
    senderJid?: string;
    stanzaId?: string;
    targetId?: string;
    botEditTargetId?: string;
    metaTargetId?: string;
    botType?: string;
    targetIdCandidates?: string[];
}
export declare const decodeDecryptedMsmsgMessage: (decrypted: Uint8Array | Buffer) => any;
export declare const decryptMsmsgBotMessage: (messageSecret: Uint8Array | Buffer, messageKey: MsmsgKey, msMsg: { encIv: Uint8Array | Buffer; encPayload: Uint8Array | Buffer }) => Promise<Buffer>;
