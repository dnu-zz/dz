export type MigrateAuthStateResult = {
    creds: { copied: boolean };
    counts: Record<string, number>;
    verified: boolean;
    warnings: string[];
};
export type MigrateAuthStateOptions = {
    from: any;
    to: any;
    batchSize?: number;
    skipExisting?: boolean;
    logger?: any;
    verify?: boolean;
};
export declare function migrateAuthState(options: MigrateAuthStateOptions): Promise<MigrateAuthStateResult>;
export declare const ALL_TYPES: readonly string[];
