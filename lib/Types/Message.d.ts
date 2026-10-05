import type { Readable } from 'stream';
import type { URL } from 'url';
import { proto } from '../../WAProto/index.js';
export { proto as WAProto };
// Vanz@Fix (v2.1.12): WAProto/index.d.ts is now a real `proto` namespace (names are real, fields are
// loose), so these 8 nested-enum re-exports are typed precisely instead of `any`.
export import AssociationType = proto.MessageAssociation.AssociationType;
export import ButtonHeaderType = proto.Message.ButtonsMessage.HeaderType;
export import ButtonType = proto.Message.ButtonsMessage.Button.Type;
export import CarouselCardType = proto.Message.InteractiveMessage.CarouselMessage.CarouselCardType;
export import ListType = proto.Message.ListMessage.ListType;
export import ProtocolType = proto.Message.ProtocolMessage.Type;
export import WAMessageStubType = proto.WebMessageInfo.StubType;
export import WAMessageStatus = proto.WebMessageInfo.Status;
export declare enum WAMessageAddressingMode {
    PN = "pn",
    LID = "lid"
}
export type WAMessageContent = proto.IMessage;
export type WAContactMessage = proto.Message.IContactMessage;
export type WAContactsArrayMessage = proto.Message.IContactsArrayMessage;
export type WAMessageKey = proto.IMessageKey & {
    /** LID/PN counterparts WhatsApp attaches to a key */
    remoteJidAlt?: string;
    participantAlt?: string;
    senderPn?: string;
    senderLid?: string;
    participantPn?: string;
    participantLid?: string;
    server_id?: string;
    addressingMode?: string;
    isViewOnce?: boolean;
};
export type WATextMessage = proto.Message.IExtendedTextMessage;
export type WAContextInfo = proto.IContextInfo;
export type WALocationMessage = proto.Message.ILocationMessage;
export type WAGenericMediaMessage = proto.Message.IVideoMessage | proto.Message.IImageMessage | proto.Message.IAudioMessage | proto.Message.IDocumentMessage | proto.Message.IStickerMessage;
export type WAMessage = proto.IWebMessageInfo & {
    key: WAMessageKey;
    messageStubParameters?: any;
    category?: string;
    retryCount?: number;
};
export type WAMessageUpdate = {
    update: Partial<WAMessage>;
    key: WAMessageKey;
};
export type MessageUpsertType = 'append' | 'notify' | 'replace';
export type MinimalMessage = Pick<proto.IWebMessageInfo, 'key' | 'messageTimestamp'>;
export type MessageUserReceipt = proto.IUserReceipt;
export type MessageUserReceiptUpdate = {
    key: WAMessageKey;
    receipt: MessageUserReceipt;
};
export type WAMediaPayloadURL = { url: URL | string };
export type WAMediaPayloadStream = { stream: Readable };
export type WAMediaUpload = Buffer | WAMediaPayloadStream | WAMediaPayloadURL;
export type WAMediaUploadFunctionOpts = {
    fileEncSha256B64: string;
    mediaType: import('../Defaults/index.js').MediaType;
    timeoutMs?: number;
    newsletter?: boolean;
};
export type WAMediaUploadFunction = (filePath: string, opts: WAMediaUploadFunctionOpts) => Promise<{
    mediaUrl: string;
    directPath: string;
    meta_hmac?: string;
    ts?: number;
    fbid?: number;
}>;
export type MediaConnInfo = {
    auth: string;
    ttl: number;
    hosts: {
        hostname: string;
        maxContentLengthBytes: number;
    }[];
    fetchDate: Date;
};
export type WAUrlInfo = {
    'canonical-url': string;
    'matched-text': string;
    title: string;
    description?: string;
    jpegThumbnail?: Buffer;
    highQualityThumbnail?: proto.Message.IImageMessage;
    originalThumbnailUrl?: string;
};
export type Mentionable = {
    mentions?: string[];
};
export type Contextable = {
    contextInfo?: proto.IContextInfo;
};
export type ViewOnceable = {
    viewOnce?: boolean;
};
export type Editable = {
    edit?: WAMessageKey;
};
export type Forwardable = {
    forward: WAMessage;
    force?: boolean;
};
export type Mediaable = {
    image?: WAMediaUpload;
    video?: WAMediaUpload;
    audio?: WAMediaUpload;
    document?: WAMediaUpload;
    sticker?: WAMediaUpload;
    caption?: string;
    fileName?: string;
    mimetype?: string;
    jpegThumbnail?: string;
    gifPlayback?: boolean;
    ptt?: boolean;
    ptv?: boolean;
    seconds?: number;
    waveform?: Uint8Array;
    backgroundArgb?: number;
};
export type AnyMediaMessageContent = (Mediaable & Mentionable & Contextable & ViewOnceable & Editable) & {
    [key: string]: any;
};
export type AnyRegularMessageContent = ((({ text: string; linkPreview?: WAUrlInfo | null } & Mentionable & Contextable & Editable) | AnyMediaMessageContent | { contacts: { displayName?: string; contacts: proto.Message.IContactMessage[] } } | { location: proto.Message.ILocationMessage } | { react: proto.Message.IReactionMessage } | { buttonReply: any; type?: 'template' | 'plain' } | { listReply: any } | { pin: WAMessageKey; type: proto.PinInChat.Type; time?: 86400 | 604800 | 2592000 } | { poll: { name: string; values: string[]; selectableCount?: number; toAnnouncementGroup?: boolean } } | { event: any } | { album: any }) & { [key: string]: any }) | Forwardable | { delete: WAMessageKey } | { disappearingMessagesInHours: boolean | number };
/**
 * Fork note: `sendMessage()` also accepts every fork-specific content type (interactiveButtons, carousel,
 * richResponse/AIRich, inlineImage, a2ui, sticker packs, ...). Those go through the open
 * `{ [key: string]: any }` branches above instead of a closed union, so the compiler doesn't reject them.
 */
export type AnyMessageContent = AnyRegularMessageContent;
export type MiscMessageGenerationOptions = Mentionable & Contextable & {
    messageId?: string;
    timestamp?: Date;
    quoted?: WAMessage;
    ephemeralExpiration?: number | string;
    mediaUploadTimeoutMs?: number;
    statusJidList?: string[];
    backgroundColor?: string;
    font?: number;
    broadcast?: boolean;
    additionalAttributes?: { [_: string]: string };
    additionalNodes?: any[];
    useCachedGroupMetadata?: boolean;
    [key: string]: any;
};
export type MessageGenerationOptionsFromContent = MiscMessageGenerationOptions & {
    userJid: string;
};
export type WAMediaUploadResult = Awaited<ReturnType<WAMediaUploadFunction>>;
