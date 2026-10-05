export interface ILogger {
    level: string;
    child(obj: Record<string, any>): ILogger;
    trace(obj: unknown, msg?: string): void;
    debug(obj: unknown, msg?: string): void;
    info(obj: unknown, msg?: string): void;
    warn(obj: unknown, msg?: string): void;
    error(obj: unknown, msg?: string): void;
}
declare const _default: ILogger;
export default _default;
