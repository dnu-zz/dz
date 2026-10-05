/**
 * Prints each QR from `connection.update` to the terminal. Requires the optional
 * `qrcode-terminal` package (not bundled). Returns a function that removes the listener.
 */
export declare const printQRIfNecessaryListener: (ev: {
    on: (event: 'connection.update', listener: (update: {
        qr?: string;
    }) => void) => unknown;
    off: (event: 'connection.update', listener: (update: {
        qr?: string;
    }) => void) => unknown;
}, logger?: {
    error: (...args: any[]) => void;
}) => () => void;
