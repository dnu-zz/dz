import type { BinaryNode } from '../../WABinary/index.js';
export declare class USyncFeatureProtocol {
    name: string;
    constructor(...args: any[]);
    getQueryElement(): BinaryNode;
    getUserElement(user?: any): BinaryNode | null;
    parser(node: BinaryNode): any;
}
export declare const USYNC_FEATURES: string[];
