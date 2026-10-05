export declare const parseMentions: (text: string) => string[];
export declare const extractGroupInviteCode: (link: string) => string | null;
export declare const joinGroupViaLink: (sock: { groupAcceptInvite: (code: string) => Promise<any> }, linkOrCode: string) => Promise<any>;
