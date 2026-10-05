export type LockRef = { namespace: string; id: string };
export type LockManager = {
    withLock<T>(ref: LockRef, work: () => T | Promise<T>): Promise<T>;
    withLocks<T>(refs: readonly LockRef[], work: () => T | Promise<T>): Promise<T>;
    isLocked(ref: LockRef): boolean;
};
export declare const makeLockManager: () => LockManager;
