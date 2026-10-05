import type { BinaryNode } from '../../WABinary/index.js';
export declare class USyncPictureProtocol {
    name: string;
    constructor(...args: any[]);
    getQueryElement(): BinaryNode;
    getUserElement(user?: any): BinaryNode | null;
    parser(node: BinaryNode): any;
}
