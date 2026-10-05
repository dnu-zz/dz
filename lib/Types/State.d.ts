import type { Boom } from '@hapi/boom';
export declare enum SyncState {
    /** The socket is connecting, but we haven't received pending notifications yet. */
    Connecting = 0,
    /** Pending notifications received. Buffering events until we decide whether to sync or not. */
    AwaitingInitialSync = 1,
    /** The initial app state sync (history, etc.) is in progress. Buffering continues. */
    Syncing = 2,
    /** Initial sync is complete, or was skipped. The socket is fully operational and events are processed in real-time. */
    Online = 3
}
export declare enum ReachoutTimelockEnforcementType {
    BIZ_COMMERCE_VIOLATION_ALCOHOL = "BIZ_COMMERCE_VIOLATION_ALCOHOL",
    BIZ_COMMERCE_VIOLATION_ADULT = "BIZ_COMMERCE_VIOLATION_ADULT",
    BIZ_COMMERCE_VIOLATION_ANIMALS = "BIZ_COMMERCE_VIOLATION_ANIMALS",
    BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS = "BIZ_COMMERCE_VIOLATION_BODY_PARTS_FLUIDS",
    BIZ_COMMERCE_VIOLATION_DATING = "BIZ_COMMERCE_VIOLATION_DATING",
    BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS = "BIZ_COMMERCE_VIOLATION_DIGITAL_SERVICES_PRODUCTS",
    BIZ_COMMERCE_VIOLATION_DRUGS = "BIZ_COMMERCE_VIOLATION_DRUGS",
    BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC = "BIZ_COMMERCE_VIOLATION_DRUGS_ONLY_OTC",
    BIZ_COMMERCE_VIOLATION_GAMBLING = "BIZ_COMMERCE_VIOLATION_GAMBLING",
    BIZ_COMMERCE_VIOLATION_HEALTHCARE = "BIZ_COMMERCE_VIOLATION_HEALTHCARE",
    BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY = "BIZ_COMMERCE_VIOLATION_REAL_FAKE_CURRENCY",
    BIZ_COMMERCE_VIOLATION_SUPPLEMENTS = "BIZ_COMMERCE_VIOLATION_SUPPLEMENTS",
    BIZ_COMMERCE_VIOLATION_TOBACCO = "BIZ_COMMERCE_VIOLATION_TOBACCO",
    BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT = "BIZ_COMMERCE_VIOLATION_VIOLENT_CONTENT",
    BIZ_COMMERCE_VIOLATION_WEAPONS = "BIZ_COMMERCE_VIOLATION_WEAPONS",
    BIZ_QUALITY = "BIZ_QUALITY",
    /** This means there is no restriction */
    DEFAULT = "DEFAULT",
    WEB_COMPANION_ONLY = "WEB_COMPANION_ONLY"
}
export declare enum NewChatMessageCappingStatusType {
    NONE = "NONE",
    FIRST_WARNING = "FIRST_WARNING",
    SECOND_WARNING = "SECOND_WARNING",
    CAPPED = "CAPPED"
}
export declare enum NewChatMessageCappingMVStatusType {
    NOT_ELIGIBLE = "NOT_ELIGIBLE",
    NOT_ACTIVE = "NOT_ACTIVE",
    ACTIVE = "ACTIVE",
    ACTIVE_UPGRADE_AVAILABLE = "ACTIVE_UPGRADE_AVAILABLE"
}
export declare enum NewChatMessageCappingOTEStatusType {
    NOT_ELIGIBLE = "NOT_ELIGIBLE",
    ELIGIBLE = "ELIGIBLE",
    ACTIVE_IN_CURRENT_CYCLE = "ACTIVE_IN_CURRENT_CYCLE",
    EXHAUSTED = "EXHAUSTED"
}

export type WAConnectionState = 'open' | 'connecting' | 'close';
export type ConnectionState = {
    /** connection is now open, connecting or closed */
    connection: WAConnectionState;
    /** the error that caused the connection to close */
    lastDisconnect?: {
        error: Boom | Error | undefined;
        date: Date;
    };
    /** is this a new login */
    isNewLogin?: boolean;
    /** the current QR code */
    qr?: string;
    /** has the device received all pending notifications while it was offline */
    receivedPendingNotifications?: boolean;
    /** legacy connection options */
    legacy?: {
        phoneConnected: boolean;
        user?: import('./Contact.js').Contact;
    };
    /** this connection is an online (true) or offline (false) session */
    isOnline?: boolean;
};
/**
 * Payload of the `message-capping.update` event / `fetchNewChatMessageCap()`.
 * Field names come from the raw WMex response, which isn't formally documented, so unknown
 * keys are allowed instead of guessing a closed shape.
 */
export type NewChatMessageCapInfo = {
    status?: NewChatMessageCappingStatusType;
    mvStatus?: NewChatMessageCappingMVStatusType;
    oteStatus?: NewChatMessageCappingOTEStatusType;
    [key: string]: any;
};
