export type PasskeyNotificationType = 'passkey_prologue_request' | 'crsc_continuation';
export type PasskeyRequestState = { type: PasskeyNotificationType; hasOptions: boolean };
export declare const getPasskeyRequestState: (node: any) => PasskeyRequestState | undefined;
