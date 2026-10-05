// Vanz@Fix (v2.1.12): generated from the runtime shape of WAProto/index.js (every message class,
// nested class and enum name is real). Field-level types are intentionally loose
// (`[key: string]: any`) because the original .proto source isn't available to regenerate
// faithful per-field types. This makes `proto.IWebMessageInfo`, `proto.Message.IStickerPackMessage`,
// `proto.HistorySync.HistorySyncType` etc. resolve as real names instead of failing with TS2503.
// Regenerate with scripts/gen-waproto-dts.mjs after refreshing WAProto/index.js.
export declare namespace proto {
  interface IACP2Setting { [key: string]: any }
  class ACP2Setting implements IACP2Setting {
    [key: string]: any;
    constructor(properties?: IACP2Setting);
    static create(properties?: IACP2Setting): ACP2Setting;
    static encode(message: IACP2Setting, writer?: any): any;
    static encodeDelimited(message: IACP2Setting, writer?: any): any;
    static decode(reader: any, length?: number): ACP2Setting;
    static decodeDelimited(reader: any): ACP2Setting;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ACP2Setting;
    static toObject(message: ACP2Setting, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IADVDeviceIdentity { [key: string]: any }
  class ADVDeviceIdentity implements IADVDeviceIdentity {
    [key: string]: any;
    constructor(properties?: IADVDeviceIdentity);
    static create(properties?: IADVDeviceIdentity): ADVDeviceIdentity;
    static encode(message: IADVDeviceIdentity, writer?: any): any;
    static encodeDelimited(message: IADVDeviceIdentity, writer?: any): any;
    static decode(reader: any, length?: number): ADVDeviceIdentity;
    static decodeDelimited(reader: any): ADVDeviceIdentity;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ADVDeviceIdentity;
    static toObject(message: ADVDeviceIdentity, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum ADVEncryptionType {
    E2EE = 0,
    HOSTED = 1,
    NON_E2EE = 2,
  }
  interface IADVKeyIndexList { [key: string]: any }
  class ADVKeyIndexList implements IADVKeyIndexList {
    [key: string]: any;
    constructor(properties?: IADVKeyIndexList);
    static create(properties?: IADVKeyIndexList): ADVKeyIndexList;
    static encode(message: IADVKeyIndexList, writer?: any): any;
    static encodeDelimited(message: IADVKeyIndexList, writer?: any): any;
    static decode(reader: any, length?: number): ADVKeyIndexList;
    static decodeDelimited(reader: any): ADVKeyIndexList;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ADVKeyIndexList;
    static toObject(message: ADVKeyIndexList, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IADVSignedDeviceIdentity { [key: string]: any }
  class ADVSignedDeviceIdentity implements IADVSignedDeviceIdentity {
    [key: string]: any;
    constructor(properties?: IADVSignedDeviceIdentity);
    static create(properties?: IADVSignedDeviceIdentity): ADVSignedDeviceIdentity;
    static encode(message: IADVSignedDeviceIdentity, writer?: any): any;
    static encodeDelimited(message: IADVSignedDeviceIdentity, writer?: any): any;
    static decode(reader: any, length?: number): ADVSignedDeviceIdentity;
    static decodeDelimited(reader: any): ADVSignedDeviceIdentity;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ADVSignedDeviceIdentity;
    static toObject(message: ADVSignedDeviceIdentity, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IADVSignedDeviceIdentityHMAC { [key: string]: any }
  class ADVSignedDeviceIdentityHMAC implements IADVSignedDeviceIdentityHMAC {
    [key: string]: any;
    constructor(properties?: IADVSignedDeviceIdentityHMAC);
    static create(properties?: IADVSignedDeviceIdentityHMAC): ADVSignedDeviceIdentityHMAC;
    static encode(message: IADVSignedDeviceIdentityHMAC, writer?: any): any;
    static encodeDelimited(message: IADVSignedDeviceIdentityHMAC, writer?: any): any;
    static decode(reader: any, length?: number): ADVSignedDeviceIdentityHMAC;
    static decodeDelimited(reader: any): ADVSignedDeviceIdentityHMAC;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ADVSignedDeviceIdentityHMAC;
    static toObject(message: ADVSignedDeviceIdentityHMAC, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IADVSignedKeyIndexList { [key: string]: any }
  class ADVSignedKeyIndexList implements IADVSignedKeyIndexList {
    [key: string]: any;
    constructor(properties?: IADVSignedKeyIndexList);
    static create(properties?: IADVSignedKeyIndexList): ADVSignedKeyIndexList;
    static encode(message: IADVSignedKeyIndexList, writer?: any): any;
    static encodeDelimited(message: IADVSignedKeyIndexList, writer?: any): any;
    static decode(reader: any, length?: number): ADVSignedKeyIndexList;
    static decodeDelimited(reader: any): ADVSignedKeyIndexList;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ADVSignedKeyIndexList;
    static toObject(message: ADVSignedKeyIndexList, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIHomeState { [key: string]: any }
  class AIHomeState implements IAIHomeState {
    [key: string]: any;
    constructor(properties?: IAIHomeState);
    static create(properties?: IAIHomeState): AIHomeState;
    static encode(message: IAIHomeState, writer?: any): any;
    static encodeDelimited(message: IAIHomeState, writer?: any): any;
    static decode(reader: any, length?: number): AIHomeState;
    static decodeDelimited(reader: any): AIHomeState;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIHomeState;
    static toObject(message: AIHomeState, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIHomeState {
    interface IAIHomeOption { [key: string]: any }
    class AIHomeOption implements IAIHomeOption {
      [key: string]: any;
      constructor(properties?: IAIHomeOption);
      static create(properties?: IAIHomeOption): AIHomeOption;
      static encode(message: IAIHomeOption, writer?: any): any;
      static encodeDelimited(message: IAIHomeOption, writer?: any): any;
      static decode(reader: any, length?: number): AIHomeOption;
      static decodeDelimited(reader: any): AIHomeOption;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIHomeOption;
      static toObject(message: AIHomeOption, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace AIHomeOption {
      enum AIHomeActionType {
        PROMPT = 0,
        CREATE_IMAGE = 1,
        ANIMATE_PHOTO = 2,
        ANALYZE_FILE = 3,
        COLLABORATE = 4,
        OPEN_GREETING_CARD = 5,
      }
    }
  }
  interface IAIMediaCollectionMessage { [key: string]: any }
  class AIMediaCollectionMessage implements IAIMediaCollectionMessage {
    [key: string]: any;
    constructor(properties?: IAIMediaCollectionMessage);
    static create(properties?: IAIMediaCollectionMessage): AIMediaCollectionMessage;
    static encode(message: IAIMediaCollectionMessage, writer?: any): any;
    static encodeDelimited(message: IAIMediaCollectionMessage, writer?: any): any;
    static decode(reader: any, length?: number): AIMediaCollectionMessage;
    static decodeDelimited(reader: any): AIMediaCollectionMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIMediaCollectionMessage;
    static toObject(message: AIMediaCollectionMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIMediaCollectionMetadata { [key: string]: any }
  class AIMediaCollectionMetadata implements IAIMediaCollectionMetadata {
    [key: string]: any;
    constructor(properties?: IAIMediaCollectionMetadata);
    static create(properties?: IAIMediaCollectionMetadata): AIMediaCollectionMetadata;
    static encode(message: IAIMediaCollectionMetadata, writer?: any): any;
    static encodeDelimited(message: IAIMediaCollectionMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIMediaCollectionMetadata;
    static decodeDelimited(reader: any): AIMediaCollectionMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIMediaCollectionMetadata;
    static toObject(message: AIMediaCollectionMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIMetadataOperation { [key: string]: any }
  class AIMetadataOperation implements IAIMetadataOperation {
    [key: string]: any;
    constructor(properties?: IAIMetadataOperation);
    static create(properties?: IAIMetadataOperation): AIMetadataOperation;
    static encode(message: IAIMetadataOperation, writer?: any): any;
    static encodeDelimited(message: IAIMetadataOperation, writer?: any): any;
    static decode(reader: any, length?: number): AIMetadataOperation;
    static decodeDelimited(reader: any): AIMetadataOperation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIMetadataOperation;
    static toObject(message: AIMetadataOperation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIProvenance { [key: string]: any }
  class AIProvenance implements IAIProvenance {
    [key: string]: any;
    constructor(properties?: IAIProvenance);
    static create(properties?: IAIProvenance): AIProvenance;
    static encode(message: IAIProvenance, writer?: any): any;
    static encodeDelimited(message: IAIProvenance, writer?: any): any;
    static decode(reader: any, length?: number): AIProvenance;
    static decodeDelimited(reader: any): AIProvenance;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIProvenance;
    static toObject(message: AIProvenance, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIProvenance {
    interface IMetadata { [key: string]: any }
    class Metadata implements IMetadata {
      [key: string]: any;
      constructor(properties?: IMetadata);
      static create(properties?: IMetadata): Metadata;
      static encode(message: IMetadata, writer?: any): any;
      static encodeDelimited(message: IMetadata, writer?: any): any;
      static decode(reader: any, length?: number): Metadata;
      static decodeDelimited(reader: any): Metadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Metadata;
      static toObject(message: Metadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IAIQueryFanout { [key: string]: any }
  class AIQueryFanout implements IAIQueryFanout {
    [key: string]: any;
    constructor(properties?: IAIQueryFanout);
    static create(properties?: IAIQueryFanout): AIQueryFanout;
    static encode(message: IAIQueryFanout, writer?: any): any;
    static encodeDelimited(message: IAIQueryFanout, writer?: any): any;
    static decode(reader: any, length?: number): AIQueryFanout;
    static decodeDelimited(reader: any): AIQueryFanout;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIQueryFanout;
    static toObject(message: AIQueryFanout, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIRegenerateMetadata { [key: string]: any }
  class AIRegenerateMetadata implements IAIRegenerateMetadata {
    [key: string]: any;
    constructor(properties?: IAIRegenerateMetadata);
    static create(properties?: IAIRegenerateMetadata): AIRegenerateMetadata;
    static encode(message: IAIRegenerateMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRegenerateMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRegenerateMetadata;
    static decodeDelimited(reader: any): AIRegenerateMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRegenerateMetadata;
    static toObject(message: AIRegenerateMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIRichResponseCodeMetadata { [key: string]: any }
  class AIRichResponseCodeMetadata implements IAIRichResponseCodeMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseCodeMetadata);
    static create(properties?: IAIRichResponseCodeMetadata): AIRichResponseCodeMetadata;
    static encode(message: IAIRichResponseCodeMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseCodeMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseCodeMetadata;
    static decodeDelimited(reader: any): AIRichResponseCodeMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseCodeMetadata;
    static toObject(message: AIRichResponseCodeMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseCodeMetadata {
    interface IAIRichResponseCodeBlock { [key: string]: any }
    class AIRichResponseCodeBlock implements IAIRichResponseCodeBlock {
      [key: string]: any;
      constructor(properties?: IAIRichResponseCodeBlock);
      static create(properties?: IAIRichResponseCodeBlock): AIRichResponseCodeBlock;
      static encode(message: IAIRichResponseCodeBlock, writer?: any): any;
      static encodeDelimited(message: IAIRichResponseCodeBlock, writer?: any): any;
      static decode(reader: any, length?: number): AIRichResponseCodeBlock;
      static decodeDelimited(reader: any): AIRichResponseCodeBlock;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIRichResponseCodeBlock;
      static toObject(message: AIRichResponseCodeBlock, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum AIRichResponseCodeHighlightType {
      AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT = 0,
      AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD = 1,
      AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD = 2,
      AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING = 3,
      AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER = 4,
      AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT = 5,
    }
  }
  interface IAIRichResponseContentItemsMetadata { [key: string]: any }
  class AIRichResponseContentItemsMetadata implements IAIRichResponseContentItemsMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseContentItemsMetadata);
    static create(properties?: IAIRichResponseContentItemsMetadata): AIRichResponseContentItemsMetadata;
    static encode(message: IAIRichResponseContentItemsMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseContentItemsMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseContentItemsMetadata;
    static decodeDelimited(reader: any): AIRichResponseContentItemsMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseContentItemsMetadata;
    static toObject(message: AIRichResponseContentItemsMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseContentItemsMetadata {
    interface IAIRichResponseContentItemMetadata { [key: string]: any }
    class AIRichResponseContentItemMetadata implements IAIRichResponseContentItemMetadata {
      [key: string]: any;
      constructor(properties?: IAIRichResponseContentItemMetadata);
      static create(properties?: IAIRichResponseContentItemMetadata): AIRichResponseContentItemMetadata;
      static encode(message: IAIRichResponseContentItemMetadata, writer?: any): any;
      static encodeDelimited(message: IAIRichResponseContentItemMetadata, writer?: any): any;
      static decode(reader: any, length?: number): AIRichResponseContentItemMetadata;
      static decodeDelimited(reader: any): AIRichResponseContentItemMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIRichResponseContentItemMetadata;
      static toObject(message: AIRichResponseContentItemMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAIRichResponseReelItem { [key: string]: any }
    class AIRichResponseReelItem implements IAIRichResponseReelItem {
      [key: string]: any;
      constructor(properties?: IAIRichResponseReelItem);
      static create(properties?: IAIRichResponseReelItem): AIRichResponseReelItem;
      static encode(message: IAIRichResponseReelItem, writer?: any): any;
      static encodeDelimited(message: IAIRichResponseReelItem, writer?: any): any;
      static decode(reader: any, length?: number): AIRichResponseReelItem;
      static decodeDelimited(reader: any): AIRichResponseReelItem;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIRichResponseReelItem;
      static toObject(message: AIRichResponseReelItem, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum ContentType {
      DEFAULT = 0,
      CAROUSEL = 1,
    }
  }
  interface IAIRichResponseDynamicMetadata { [key: string]: any }
  class AIRichResponseDynamicMetadata implements IAIRichResponseDynamicMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseDynamicMetadata);
    static create(properties?: IAIRichResponseDynamicMetadata): AIRichResponseDynamicMetadata;
    static encode(message: IAIRichResponseDynamicMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseDynamicMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseDynamicMetadata;
    static decodeDelimited(reader: any): AIRichResponseDynamicMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseDynamicMetadata;
    static toObject(message: AIRichResponseDynamicMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseDynamicMetadata {
    enum AIRichResponseDynamicMetadataType {
      AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN = 0,
      AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE = 1,
      AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF = 2,
    }
  }
  interface IAIRichResponseGridImageMetadata { [key: string]: any }
  class AIRichResponseGridImageMetadata implements IAIRichResponseGridImageMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseGridImageMetadata);
    static create(properties?: IAIRichResponseGridImageMetadata): AIRichResponseGridImageMetadata;
    static encode(message: IAIRichResponseGridImageMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseGridImageMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseGridImageMetadata;
    static decodeDelimited(reader: any): AIRichResponseGridImageMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseGridImageMetadata;
    static toObject(message: AIRichResponseGridImageMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIRichResponseImageURL { [key: string]: any }
  class AIRichResponseImageURL implements IAIRichResponseImageURL {
    [key: string]: any;
    constructor(properties?: IAIRichResponseImageURL);
    static create(properties?: IAIRichResponseImageURL): AIRichResponseImageURL;
    static encode(message: IAIRichResponseImageURL, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseImageURL, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseImageURL;
    static decodeDelimited(reader: any): AIRichResponseImageURL;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseImageURL;
    static toObject(message: AIRichResponseImageURL, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIRichResponseInlineImageMetadata { [key: string]: any }
  class AIRichResponseInlineImageMetadata implements IAIRichResponseInlineImageMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseInlineImageMetadata);
    static create(properties?: IAIRichResponseInlineImageMetadata): AIRichResponseInlineImageMetadata;
    static encode(message: IAIRichResponseInlineImageMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseInlineImageMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseInlineImageMetadata;
    static decodeDelimited(reader: any): AIRichResponseInlineImageMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseInlineImageMetadata;
    static toObject(message: AIRichResponseInlineImageMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseInlineImageMetadata {
    enum AIRichResponseImageAlignment {
      AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED = 0,
      AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED = 1,
      AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED = 2,
    }
  }
  interface IAIRichResponseLatexMetadata { [key: string]: any }
  class AIRichResponseLatexMetadata implements IAIRichResponseLatexMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseLatexMetadata);
    static create(properties?: IAIRichResponseLatexMetadata): AIRichResponseLatexMetadata;
    static encode(message: IAIRichResponseLatexMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseLatexMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseLatexMetadata;
    static decodeDelimited(reader: any): AIRichResponseLatexMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseLatexMetadata;
    static toObject(message: AIRichResponseLatexMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseLatexMetadata {
    interface IAIRichResponseLatexExpression { [key: string]: any }
    class AIRichResponseLatexExpression implements IAIRichResponseLatexExpression {
      [key: string]: any;
      constructor(properties?: IAIRichResponseLatexExpression);
      static create(properties?: IAIRichResponseLatexExpression): AIRichResponseLatexExpression;
      static encode(message: IAIRichResponseLatexExpression, writer?: any): any;
      static encodeDelimited(message: IAIRichResponseLatexExpression, writer?: any): any;
      static decode(reader: any, length?: number): AIRichResponseLatexExpression;
      static decodeDelimited(reader: any): AIRichResponseLatexExpression;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIRichResponseLatexExpression;
      static toObject(message: AIRichResponseLatexExpression, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IAIRichResponseMapMetadata { [key: string]: any }
  class AIRichResponseMapMetadata implements IAIRichResponseMapMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseMapMetadata);
    static create(properties?: IAIRichResponseMapMetadata): AIRichResponseMapMetadata;
    static encode(message: IAIRichResponseMapMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseMapMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseMapMetadata;
    static decodeDelimited(reader: any): AIRichResponseMapMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseMapMetadata;
    static toObject(message: AIRichResponseMapMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseMapMetadata {
    interface IAIRichResponseMapAnnotation { [key: string]: any }
    class AIRichResponseMapAnnotation implements IAIRichResponseMapAnnotation {
      [key: string]: any;
      constructor(properties?: IAIRichResponseMapAnnotation);
      static create(properties?: IAIRichResponseMapAnnotation): AIRichResponseMapAnnotation;
      static encode(message: IAIRichResponseMapAnnotation, writer?: any): any;
      static encodeDelimited(message: IAIRichResponseMapAnnotation, writer?: any): any;
      static decode(reader: any, length?: number): AIRichResponseMapAnnotation;
      static decodeDelimited(reader: any): AIRichResponseMapAnnotation;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIRichResponseMapAnnotation;
      static toObject(message: AIRichResponseMapAnnotation, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IAIRichResponseMessage { [key: string]: any }
  class AIRichResponseMessage implements IAIRichResponseMessage {
    [key: string]: any;
    constructor(properties?: IAIRichResponseMessage);
    static create(properties?: IAIRichResponseMessage): AIRichResponseMessage;
    static encode(message: IAIRichResponseMessage, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseMessage, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseMessage;
    static decodeDelimited(reader: any): AIRichResponseMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseMessage;
    static toObject(message: AIRichResponseMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum AIRichResponseMessageType {
    AI_RICH_RESPONSE_TYPE_UNKNOWN = 0,
    AI_RICH_RESPONSE_TYPE_STANDARD = 1,
  }
  interface IAIRichResponseSubMessage { [key: string]: any }
  class AIRichResponseSubMessage implements IAIRichResponseSubMessage {
    [key: string]: any;
    constructor(properties?: IAIRichResponseSubMessage);
    static create(properties?: IAIRichResponseSubMessage): AIRichResponseSubMessage;
    static encode(message: IAIRichResponseSubMessage, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseSubMessage, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseSubMessage;
    static decodeDelimited(reader: any): AIRichResponseSubMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseSubMessage;
    static toObject(message: AIRichResponseSubMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum AIRichResponseSubMessageType {
    AI_RICH_RESPONSE_UNKNOWN = 0,
    AI_RICH_RESPONSE_GRID_IMAGE = 1,
    AI_RICH_RESPONSE_TEXT = 2,
    AI_RICH_RESPONSE_INLINE_IMAGE = 3,
    AI_RICH_RESPONSE_TABLE = 4,
    AI_RICH_RESPONSE_CODE = 5,
    AI_RICH_RESPONSE_DYNAMIC = 6,
    AI_RICH_RESPONSE_MAP = 7,
    AI_RICH_RESPONSE_LATEX = 8,
    AI_RICH_RESPONSE_CONTENT_ITEMS = 9,
  }
  interface IAIRichResponseTableMetadata { [key: string]: any }
  class AIRichResponseTableMetadata implements IAIRichResponseTableMetadata {
    [key: string]: any;
    constructor(properties?: IAIRichResponseTableMetadata);
    static create(properties?: IAIRichResponseTableMetadata): AIRichResponseTableMetadata;
    static encode(message: IAIRichResponseTableMetadata, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseTableMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseTableMetadata;
    static decodeDelimited(reader: any): AIRichResponseTableMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseTableMetadata;
    static toObject(message: AIRichResponseTableMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIRichResponseTableMetadata {
    interface IAIRichResponseTableRow { [key: string]: any }
    class AIRichResponseTableRow implements IAIRichResponseTableRow {
      [key: string]: any;
      constructor(properties?: IAIRichResponseTableRow);
      static create(properties?: IAIRichResponseTableRow): AIRichResponseTableRow;
      static encode(message: IAIRichResponseTableRow, writer?: any): any;
      static encodeDelimited(message: IAIRichResponseTableRow, writer?: any): any;
      static decode(reader: any, length?: number): AIRichResponseTableRow;
      static decodeDelimited(reader: any): AIRichResponseTableRow;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIRichResponseTableRow;
      static toObject(message: AIRichResponseTableRow, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IAIRichResponseUnifiedResponse { [key: string]: any }
  class AIRichResponseUnifiedResponse implements IAIRichResponseUnifiedResponse {
    [key: string]: any;
    constructor(properties?: IAIRichResponseUnifiedResponse);
    static create(properties?: IAIRichResponseUnifiedResponse): AIRichResponseUnifiedResponse;
    static encode(message: IAIRichResponseUnifiedResponse, writer?: any): any;
    static encodeDelimited(message: IAIRichResponseUnifiedResponse, writer?: any): any;
    static decode(reader: any, length?: number): AIRichResponseUnifiedResponse;
    static decodeDelimited(reader: any): AIRichResponseUnifiedResponse;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIRichResponseUnifiedResponse;
    static toObject(message: AIRichResponseUnifiedResponse, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum AISubscriptionRequestType {
    UNSPECIFIED = 0,
    THINK_HARD = 1,
    IMAGE_GEN = 2,
    VIDEO_GEN = 3,
  }
  interface IAISubscriptionUpsellMetadata { [key: string]: any }
  class AISubscriptionUpsellMetadata implements IAISubscriptionUpsellMetadata {
    [key: string]: any;
    constructor(properties?: IAISubscriptionUpsellMetadata);
    static create(properties?: IAISubscriptionUpsellMetadata): AISubscriptionUpsellMetadata;
    static encode(message: IAISubscriptionUpsellMetadata, writer?: any): any;
    static encodeDelimited(message: IAISubscriptionUpsellMetadata, writer?: any): any;
    static decode(reader: any, length?: number): AISubscriptionUpsellMetadata;
    static decodeDelimited(reader: any): AISubscriptionUpsellMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AISubscriptionUpsellMetadata;
    static toObject(message: AISubscriptionUpsellMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAIThreadInfo { [key: string]: any }
  class AIThreadInfo implements IAIThreadInfo {
    [key: string]: any;
    constructor(properties?: IAIThreadInfo);
    static create(properties?: IAIThreadInfo): AIThreadInfo;
    static encode(message: IAIThreadInfo, writer?: any): any;
    static encodeDelimited(message: IAIThreadInfo, writer?: any): any;
    static decode(reader: any, length?: number): AIThreadInfo;
    static decodeDelimited(reader: any): AIThreadInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AIThreadInfo;
    static toObject(message: AIThreadInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace AIThreadInfo {
    interface IAIThreadClientInfo { [key: string]: any }
    class AIThreadClientInfo implements IAIThreadClientInfo {
      [key: string]: any;
      constructor(properties?: IAIThreadClientInfo);
      static create(properties?: IAIThreadClientInfo): AIThreadClientInfo;
      static encode(message: IAIThreadClientInfo, writer?: any): any;
      static encodeDelimited(message: IAIThreadClientInfo, writer?: any): any;
      static decode(reader: any, length?: number): AIThreadClientInfo;
      static decodeDelimited(reader: any): AIThreadClientInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIThreadClientInfo;
      static toObject(message: AIThreadClientInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace AIThreadClientInfo {
      enum AIThreadType {
        UNKNOWN = 0,
        DEFAULT = 1,
        INCOGNITO = 2,
        SIDE_CHAT = 3,
      }
    }
    interface IAIThreadServerInfo { [key: string]: any }
    class AIThreadServerInfo implements IAIThreadServerInfo {
      [key: string]: any;
      constructor(properties?: IAIThreadServerInfo);
      static create(properties?: IAIThreadServerInfo): AIThreadServerInfo;
      static encode(message: IAIThreadServerInfo, writer?: any): any;
      static encodeDelimited(message: IAIThreadServerInfo, writer?: any): any;
      static decode(reader: any, length?: number): AIThreadServerInfo;
      static decodeDelimited(reader: any): AIThreadServerInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AIThreadServerInfo;
      static toObject(message: AIThreadServerInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IAccount { [key: string]: any }
  class Account implements IAccount {
    [key: string]: any;
    constructor(properties?: IAccount);
    static create(properties?: IAccount): Account;
    static encode(message: IAccount, writer?: any): any;
    static encodeDelimited(message: IAccount, writer?: any): any;
    static decode(reader: any, length?: number): Account;
    static decodeDelimited(reader: any): Account;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Account;
    static toObject(message: Account, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAccountLinkingOpaqueData { [key: string]: any }
  class AccountLinkingOpaqueData implements IAccountLinkingOpaqueData {
    [key: string]: any;
    constructor(properties?: IAccountLinkingOpaqueData);
    static create(properties?: IAccountLinkingOpaqueData): AccountLinkingOpaqueData;
    static encode(message: IAccountLinkingOpaqueData, writer?: any): any;
    static encodeDelimited(message: IAccountLinkingOpaqueData, writer?: any): any;
    static decode(reader: any, length?: number): AccountLinkingOpaqueData;
    static decodeDelimited(reader: any): AccountLinkingOpaqueData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AccountLinkingOpaqueData;
    static toObject(message: AccountLinkingOpaqueData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IActionLink { [key: string]: any }
  class ActionLink implements IActionLink {
    [key: string]: any;
    constructor(properties?: IActionLink);
    static create(properties?: IActionLink): ActionLink;
    static encode(message: IActionLink, writer?: any): any;
    static encodeDelimited(message: IActionLink, writer?: any): any;
    static decode(reader: any, length?: number): ActionLink;
    static decodeDelimited(reader: any): ActionLink;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ActionLink;
    static toObject(message: ActionLink, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAutoDownloadSettings { [key: string]: any }
  class AutoDownloadSettings implements IAutoDownloadSettings {
    [key: string]: any;
    constructor(properties?: IAutoDownloadSettings);
    static create(properties?: IAutoDownloadSettings): AutoDownloadSettings;
    static encode(message: IAutoDownloadSettings, writer?: any): any;
    static encodeDelimited(message: IAutoDownloadSettings, writer?: any): any;
    static decode(reader: any, length?: number): AutoDownloadSettings;
    static decodeDelimited(reader: any): AutoDownloadSettings;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AutoDownloadSettings;
    static toObject(message: AutoDownloadSettings, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IAvatarUserSettings { [key: string]: any }
  class AvatarUserSettings implements IAvatarUserSettings {
    [key: string]: any;
    constructor(properties?: IAvatarUserSettings);
    static create(properties?: IAvatarUserSettings): AvatarUserSettings;
    static encode(message: IAvatarUserSettings, writer?: any): any;
    static encodeDelimited(message: IAvatarUserSettings, writer?: any): any;
    static decode(reader: any, length?: number): AvatarUserSettings;
    static decodeDelimited(reader: any): AvatarUserSettings;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): AvatarUserSettings;
    static toObject(message: AvatarUserSettings, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBackwardEdge { [key: string]: any }
  class BackwardEdge implements IBackwardEdge {
    [key: string]: any;
    constructor(properties?: IBackwardEdge);
    static create(properties?: IBackwardEdge): BackwardEdge;
    static encode(message: IBackwardEdge, writer?: any): any;
    static encodeDelimited(message: IBackwardEdge, writer?: any): any;
    static decode(reader: any, length?: number): BackwardEdge;
    static decodeDelimited(reader: any): BackwardEdge;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BackwardEdge;
    static toObject(message: BackwardEdge, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBizAIMetadataSync { [key: string]: any }
  class BizAIMetadataSync implements IBizAIMetadataSync {
    [key: string]: any;
    constructor(properties?: IBizAIMetadataSync);
    static create(properties?: IBizAIMetadataSync): BizAIMetadataSync;
    static encode(message: IBizAIMetadataSync, writer?: any): any;
    static encodeDelimited(message: IBizAIMetadataSync, writer?: any): any;
    static decode(reader: any, length?: number): BizAIMetadataSync;
    static decodeDelimited(reader: any): BizAIMetadataSync;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BizAIMetadataSync;
    static toObject(message: BizAIMetadataSync, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BizAIMetadataSync {
    interface IServerEvent { [key: string]: any }
    class ServerEvent implements IServerEvent {
      [key: string]: any;
      constructor(properties?: IServerEvent);
      static create(properties?: IServerEvent): ServerEvent;
      static encode(message: IServerEvent, writer?: any): any;
      static encodeDelimited(message: IServerEvent, writer?: any): any;
      static decode(reader: any, length?: number): ServerEvent;
      static decodeDelimited(reader: any): ServerEvent;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ServerEvent;
      static toObject(message: ServerEvent, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ServerEvent {
      interface IAgentOnboardingStarted { [key: string]: any }
      class AgentOnboardingStarted implements IAgentOnboardingStarted {
        [key: string]: any;
        constructor(properties?: IAgentOnboardingStarted);
        static create(properties?: IAgentOnboardingStarted): AgentOnboardingStarted;
        static encode(message: IAgentOnboardingStarted, writer?: any): any;
        static encodeDelimited(message: IAgentOnboardingStarted, writer?: any): any;
        static decode(reader: any, length?: number): AgentOnboardingStarted;
        static decodeDelimited(reader: any): AgentOnboardingStarted;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): AgentOnboardingStarted;
        static toObject(message: AgentOnboardingStarted, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
  }
  interface IBizAccountLinkInfo { [key: string]: any }
  class BizAccountLinkInfo implements IBizAccountLinkInfo {
    [key: string]: any;
    constructor(properties?: IBizAccountLinkInfo);
    static create(properties?: IBizAccountLinkInfo): BizAccountLinkInfo;
    static encode(message: IBizAccountLinkInfo, writer?: any): any;
    static encodeDelimited(message: IBizAccountLinkInfo, writer?: any): any;
    static decode(reader: any, length?: number): BizAccountLinkInfo;
    static decodeDelimited(reader: any): BizAccountLinkInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BizAccountLinkInfo;
    static toObject(message: BizAccountLinkInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BizAccountLinkInfo {
    enum AccountType {
      ENTERPRISE = 0,
    }
    enum HostStorageType {
      ON_PREMISE = 0,
      FACEBOOK = 1,
    }
  }
  interface IBizAccountPayload { [key: string]: any }
  class BizAccountPayload implements IBizAccountPayload {
    [key: string]: any;
    constructor(properties?: IBizAccountPayload);
    static create(properties?: IBizAccountPayload): BizAccountPayload;
    static encode(message: IBizAccountPayload, writer?: any): any;
    static encodeDelimited(message: IBizAccountPayload, writer?: any): any;
    static decode(reader: any, length?: number): BizAccountPayload;
    static decodeDelimited(reader: any): BizAccountPayload;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BizAccountPayload;
    static toObject(message: BizAccountPayload, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBizIdentityInfo { [key: string]: any }
  class BizIdentityInfo implements IBizIdentityInfo {
    [key: string]: any;
    constructor(properties?: IBizIdentityInfo);
    static create(properties?: IBizIdentityInfo): BizIdentityInfo;
    static encode(message: IBizIdentityInfo, writer?: any): any;
    static encodeDelimited(message: IBizIdentityInfo, writer?: any): any;
    static decode(reader: any, length?: number): BizIdentityInfo;
    static decodeDelimited(reader: any): BizIdentityInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BizIdentityInfo;
    static toObject(message: BizIdentityInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BizIdentityInfo {
    enum ActualActorsType {
      SELF = 0,
      BSP = 1,
    }
    enum HostStorageType {
      ON_PREMISE = 0,
      FACEBOOK = 1,
    }
    enum VerifiedLevelValue {
      UNKNOWN = 0,
      LOW = 1,
      HIGH = 2,
    }
  }
  interface IBotAgeCollectionMetadata { [key: string]: any }
  class BotAgeCollectionMetadata implements IBotAgeCollectionMetadata {
    [key: string]: any;
    constructor(properties?: IBotAgeCollectionMetadata);
    static create(properties?: IBotAgeCollectionMetadata): BotAgeCollectionMetadata;
    static encode(message: IBotAgeCollectionMetadata, writer?: any): any;
    static encodeDelimited(message: IBotAgeCollectionMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotAgeCollectionMetadata;
    static decodeDelimited(reader: any): BotAgeCollectionMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotAgeCollectionMetadata;
    static toObject(message: BotAgeCollectionMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotAgeCollectionMetadata {
    enum AgeCollectionType {
      O18_BINARY = 0,
      WAFFLE = 1,
    }
  }
  interface IBotAgentDeepLinkMetadata { [key: string]: any }
  class BotAgentDeepLinkMetadata implements IBotAgentDeepLinkMetadata {
    [key: string]: any;
    constructor(properties?: IBotAgentDeepLinkMetadata);
    static create(properties?: IBotAgentDeepLinkMetadata): BotAgentDeepLinkMetadata;
    static encode(message: IBotAgentDeepLinkMetadata, writer?: any): any;
    static encodeDelimited(message: IBotAgentDeepLinkMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotAgentDeepLinkMetadata;
    static decodeDelimited(reader: any): BotAgentDeepLinkMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotAgentDeepLinkMetadata;
    static toObject(message: BotAgentDeepLinkMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotAgentMetadata { [key: string]: any }
  class BotAgentMetadata implements IBotAgentMetadata {
    [key: string]: any;
    constructor(properties?: IBotAgentMetadata);
    static create(properties?: IBotAgentMetadata): BotAgentMetadata;
    static encode(message: IBotAgentMetadata, writer?: any): any;
    static encodeDelimited(message: IBotAgentMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotAgentMetadata;
    static decodeDelimited(reader: any): BotAgentMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotAgentMetadata;
    static toObject(message: BotAgentMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotCapabilityMetadata { [key: string]: any }
  class BotCapabilityMetadata implements IBotCapabilityMetadata {
    [key: string]: any;
    constructor(properties?: IBotCapabilityMetadata);
    static create(properties?: IBotCapabilityMetadata): BotCapabilityMetadata;
    static encode(message: IBotCapabilityMetadata, writer?: any): any;
    static encodeDelimited(message: IBotCapabilityMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotCapabilityMetadata;
    static decodeDelimited(reader: any): BotCapabilityMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotCapabilityMetadata;
    static toObject(message: BotCapabilityMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotCapabilityMetadata {
    enum BotCapabilityType {
      UNKNOWN = 0,
      PROGRESS_INDICATOR = 1,
      RICH_RESPONSE_HEADING = 2,
      RICH_RESPONSE_NESTED_LIST = 3,
      AI_MEMORY = 4,
      RICH_RESPONSE_THREAD_SURFING = 5,
      RICH_RESPONSE_TABLE = 6,
      RICH_RESPONSE_CODE = 7,
      RICH_RESPONSE_STRUCTURED_RESPONSE = 8,
      RICH_RESPONSE_INLINE_IMAGE = 9,
      WA_IG_1P_PLUGIN_RANKING_CONTROL = 10,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_1 = 11,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_2 = 12,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_3 = 13,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_4 = 14,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_5 = 15,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_6 = 16,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_7 = 17,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_8 = 18,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_9 = 19,
      WA_IG_1P_PLUGIN_RANKING_UPDATE_10 = 20,
      RICH_RESPONSE_SUB_HEADING = 21,
      RICH_RESPONSE_GRID_IMAGE = 22,
      AI_STUDIO_UGC_MEMORY = 23,
      RICH_RESPONSE_LATEX = 24,
      RICH_RESPONSE_MAPS = 25,
      RICH_RESPONSE_INLINE_REELS = 26,
      AGENTIC_PLANNING = 27,
      ACCOUNT_LINKING = 28,
      STREAMING_DISAGGREGATION = 29,
      RICH_RESPONSE_GRID_IMAGE_3P = 30,
      RICH_RESPONSE_LATEX_INLINE = 31,
      QUERY_PLAN = 32,
      PROACTIVE_MESSAGE = 33,
      RICH_RESPONSE_UNIFIED_RESPONSE = 34,
      PROMOTION_MESSAGE = 35,
      SIMPLIFIED_PROFILE_PAGE = 36,
      RICH_RESPONSE_SOURCES_IN_MESSAGE = 37,
      RICH_RESPONSE_SIDE_BY_SIDE_SURVEY = 38,
      RICH_RESPONSE_UNIFIED_TEXT_COMPONENT = 39,
      AI_SHARED_MEMORY = 40,
      RICH_RESPONSE_UNIFIED_SOURCES = 41,
      RICH_RESPONSE_UNIFIED_DOMAIN_CITATIONS = 42,
      RICH_RESPONSE_UR_INLINE_REELS_ENABLED = 43,
      RICH_RESPONSE_UR_MEDIA_GRID_ENABLED = 44,
      RICH_RESPONSE_UR_TIMESTAMP_PLACEHOLDER = 45,
      RICH_RESPONSE_IN_APP_SURVEY = 46,
      AI_RESPONSE_MODEL_BRANDING = 47,
      SESSION_TRANSPARENCY_SYSTEM_MESSAGE = 48,
      RICH_RESPONSE_UR_REASONING = 49,
      RICH_RESPONSE_UR_ZEITGEIST_CITATIONS = 50,
      RICH_RESPONSE_UR_ZEITGEIST_CAROUSEL = 51,
      AI_IMAGINE_LOADING_INDICATOR = 52,
      RICH_RESPONSE_UR_IMAGINE = 53,
      AI_IMAGINE_UR_TO_NATIVE_LOADING_INDICATOR = 54,
      RICH_RESPONSE_UR_BLOKS_ENABLED = 55,
      RICH_RESPONSE_INLINE_LINKS_ENABLED = 56,
      RICH_RESPONSE_UR_IMAGINE_VIDEO = 57,
      JSON_PATCH_STREAMING = 58,
      AI_TAB_FORCE_CLIPPY = 59,
      UNIFIED_RESPONSE_EMBEDDED_SCREENS = 60,
      AI_SUBSCRIPTION_ENABLED = 61,
      UNIFIED_RESPONSE_AI_CONTENT_SEARCH_ENABLED = 62,
      UNIFIED_RESPONSE_MARKDOWN_LINKS_ENABLED = 63,
      AI_RICH_RESPONSE_MAPS_V2_ENABLED = 64,
      AI_SUBSCRIPTION_METERING_ENABLED = 65,
      RICH_RESPONSE_SPORTS_WIDGET_ENABLED = 66,
      AI_RICH_RESPONSE_ARTIFACTS_ENABLED = 67,
      AI_RICH_RESPONSE_EMAIL_CALENDAR_ENABLED = 68,
      AI_RICH_RESPONSE_REMINDERS_ENABLED = 69,
    }
  }
  interface IBotCommandMetadata { [key: string]: any }
  class BotCommandMetadata implements IBotCommandMetadata {
    [key: string]: any;
    constructor(properties?: IBotCommandMetadata);
    static create(properties?: IBotCommandMetadata): BotCommandMetadata;
    static encode(message: IBotCommandMetadata, writer?: any): any;
    static encodeDelimited(message: IBotCommandMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotCommandMetadata;
    static decodeDelimited(reader: any): BotCommandMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotCommandMetadata;
    static toObject(message: BotCommandMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotDocumentMessageMetadata { [key: string]: any }
  class BotDocumentMessageMetadata implements IBotDocumentMessageMetadata {
    [key: string]: any;
    constructor(properties?: IBotDocumentMessageMetadata);
    static create(properties?: IBotDocumentMessageMetadata): BotDocumentMessageMetadata;
    static encode(message: IBotDocumentMessageMetadata, writer?: any): any;
    static encodeDelimited(message: IBotDocumentMessageMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotDocumentMessageMetadata;
    static decodeDelimited(reader: any): BotDocumentMessageMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotDocumentMessageMetadata;
    static toObject(message: BotDocumentMessageMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotDocumentMessageMetadata {
    enum DocumentPluginType {
      TEXT_EXTRACTION = 0,
      OCR_AND_IMAGES = 1,
    }
  }
  interface IBotFeedbackMessage { [key: string]: any }
  class BotFeedbackMessage implements IBotFeedbackMessage {
    [key: string]: any;
    constructor(properties?: IBotFeedbackMessage);
    static create(properties?: IBotFeedbackMessage): BotFeedbackMessage;
    static encode(message: IBotFeedbackMessage, writer?: any): any;
    static encodeDelimited(message: IBotFeedbackMessage, writer?: any): any;
    static decode(reader: any, length?: number): BotFeedbackMessage;
    static decodeDelimited(reader: any): BotFeedbackMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotFeedbackMessage;
    static toObject(message: BotFeedbackMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotFeedbackMessage {
    enum BotFeedbackKind {
      BOT_FEEDBACK_POSITIVE = 0,
      BOT_FEEDBACK_NEGATIVE_GENERIC = 1,
      BOT_FEEDBACK_NEGATIVE_HELPFUL = 2,
      BOT_FEEDBACK_NEGATIVE_INTERESTING = 3,
      BOT_FEEDBACK_NEGATIVE_ACCURATE = 4,
      BOT_FEEDBACK_NEGATIVE_SAFE = 5,
      BOT_FEEDBACK_NEGATIVE_OTHER = 6,
      BOT_FEEDBACK_NEGATIVE_REFUSED = 7,
      BOT_FEEDBACK_NEGATIVE_NOT_VISUALLY_APPEALING = 8,
      BOT_FEEDBACK_NEGATIVE_NOT_RELEVANT_TO_TEXT = 9,
      BOT_FEEDBACK_NEGATIVE_PERSONALIZED = 10,
      BOT_FEEDBACK_NEGATIVE_CLARITY = 11,
      BOT_FEEDBACK_NEGATIVE_DOESNT_LOOK_LIKE_THE_PERSON = 12,
      BOT_FEEDBACK_NEGATIVE_HALLUCINATION_INTERNAL_ONLY = 13,
      BOT_FEEDBACK_NEGATIVE = 14,
    }
    enum BotFeedbackKindMultipleNegative {
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_GENERIC = 1,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_HELPFUL = 2,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_INTERESTING = 4,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_ACCURATE = 8,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_SAFE = 16,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_OTHER = 32,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_REFUSED = 64,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_VISUALLY_APPEALING = 128,
      BOT_FEEDBACK_MULTIPLE_NEGATIVE_NOT_RELEVANT_TO_TEXT = 256,
    }
    enum BotFeedbackKindMultiplePositive {
      BOT_FEEDBACK_MULTIPLE_POSITIVE_GENERIC = 1,
    }
    enum ReportKind {
      NONE = 0,
      GENERIC = 1,
    }
    interface ISideBySideSurveyMetadata { [key: string]: any }
    class SideBySideSurveyMetadata implements ISideBySideSurveyMetadata {
      [key: string]: any;
      constructor(properties?: ISideBySideSurveyMetadata);
      static create(properties?: ISideBySideSurveyMetadata): SideBySideSurveyMetadata;
      static encode(message: ISideBySideSurveyMetadata, writer?: any): any;
      static encodeDelimited(message: ISideBySideSurveyMetadata, writer?: any): any;
      static decode(reader: any, length?: number): SideBySideSurveyMetadata;
      static decodeDelimited(reader: any): SideBySideSurveyMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SideBySideSurveyMetadata;
      static toObject(message: SideBySideSurveyMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace SideBySideSurveyMetadata {
      interface ISideBySideSurveyAnalyticsData { [key: string]: any }
      class SideBySideSurveyAnalyticsData implements ISideBySideSurveyAnalyticsData {
        [key: string]: any;
        constructor(properties?: ISideBySideSurveyAnalyticsData);
        static create(properties?: ISideBySideSurveyAnalyticsData): SideBySideSurveyAnalyticsData;
        static encode(message: ISideBySideSurveyAnalyticsData, writer?: any): any;
        static encodeDelimited(message: ISideBySideSurveyAnalyticsData, writer?: any): any;
        static decode(reader: any, length?: number): SideBySideSurveyAnalyticsData;
        static decodeDelimited(reader: any): SideBySideSurveyAnalyticsData;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): SideBySideSurveyAnalyticsData;
        static toObject(message: SideBySideSurveyAnalyticsData, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface ISidebySideSurveyMetaAiAnalyticsData { [key: string]: any }
      class SidebySideSurveyMetaAiAnalyticsData implements ISidebySideSurveyMetaAiAnalyticsData {
        [key: string]: any;
        constructor(properties?: ISidebySideSurveyMetaAiAnalyticsData);
        static create(properties?: ISidebySideSurveyMetaAiAnalyticsData): SidebySideSurveyMetaAiAnalyticsData;
        static encode(message: ISidebySideSurveyMetaAiAnalyticsData, writer?: any): any;
        static encodeDelimited(message: ISidebySideSurveyMetaAiAnalyticsData, writer?: any): any;
        static decode(reader: any, length?: number): SidebySideSurveyMetaAiAnalyticsData;
        static decodeDelimited(reader: any): SidebySideSurveyMetaAiAnalyticsData;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): SidebySideSurveyMetaAiAnalyticsData;
        static toObject(message: SidebySideSurveyMetaAiAnalyticsData, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace SidebySideSurveyMetaAiAnalyticsData {
        interface ISideBySideSurveyAbandonEventData { [key: string]: any }
        class SideBySideSurveyAbandonEventData implements ISideBySideSurveyAbandonEventData {
          [key: string]: any;
          constructor(properties?: ISideBySideSurveyAbandonEventData);
          static create(properties?: ISideBySideSurveyAbandonEventData): SideBySideSurveyAbandonEventData;
          static encode(message: ISideBySideSurveyAbandonEventData, writer?: any): any;
          static encodeDelimited(message: ISideBySideSurveyAbandonEventData, writer?: any): any;
          static decode(reader: any, length?: number): SideBySideSurveyAbandonEventData;
          static decodeDelimited(reader: any): SideBySideSurveyAbandonEventData;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): SideBySideSurveyAbandonEventData;
          static toObject(message: SideBySideSurveyAbandonEventData, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ISideBySideSurveyCTAClickEventData { [key: string]: any }
        class SideBySideSurveyCTAClickEventData implements ISideBySideSurveyCTAClickEventData {
          [key: string]: any;
          constructor(properties?: ISideBySideSurveyCTAClickEventData);
          static create(properties?: ISideBySideSurveyCTAClickEventData): SideBySideSurveyCTAClickEventData;
          static encode(message: ISideBySideSurveyCTAClickEventData, writer?: any): any;
          static encodeDelimited(message: ISideBySideSurveyCTAClickEventData, writer?: any): any;
          static decode(reader: any, length?: number): SideBySideSurveyCTAClickEventData;
          static decodeDelimited(reader: any): SideBySideSurveyCTAClickEventData;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): SideBySideSurveyCTAClickEventData;
          static toObject(message: SideBySideSurveyCTAClickEventData, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ISideBySideSurveyCTAImpressionEventData { [key: string]: any }
        class SideBySideSurveyCTAImpressionEventData implements ISideBySideSurveyCTAImpressionEventData {
          [key: string]: any;
          constructor(properties?: ISideBySideSurveyCTAImpressionEventData);
          static create(properties?: ISideBySideSurveyCTAImpressionEventData): SideBySideSurveyCTAImpressionEventData;
          static encode(message: ISideBySideSurveyCTAImpressionEventData, writer?: any): any;
          static encodeDelimited(message: ISideBySideSurveyCTAImpressionEventData, writer?: any): any;
          static decode(reader: any, length?: number): SideBySideSurveyCTAImpressionEventData;
          static decodeDelimited(reader: any): SideBySideSurveyCTAImpressionEventData;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): SideBySideSurveyCTAImpressionEventData;
          static toObject(message: SideBySideSurveyCTAImpressionEventData, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ISideBySideSurveyCardImpressionEventData { [key: string]: any }
        class SideBySideSurveyCardImpressionEventData implements ISideBySideSurveyCardImpressionEventData {
          [key: string]: any;
          constructor(properties?: ISideBySideSurveyCardImpressionEventData);
          static create(properties?: ISideBySideSurveyCardImpressionEventData): SideBySideSurveyCardImpressionEventData;
          static encode(message: ISideBySideSurveyCardImpressionEventData, writer?: any): any;
          static encodeDelimited(message: ISideBySideSurveyCardImpressionEventData, writer?: any): any;
          static decode(reader: any, length?: number): SideBySideSurveyCardImpressionEventData;
          static decodeDelimited(reader: any): SideBySideSurveyCardImpressionEventData;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): SideBySideSurveyCardImpressionEventData;
          static toObject(message: SideBySideSurveyCardImpressionEventData, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ISideBySideSurveyResponseEventData { [key: string]: any }
        class SideBySideSurveyResponseEventData implements ISideBySideSurveyResponseEventData {
          [key: string]: any;
          constructor(properties?: ISideBySideSurveyResponseEventData);
          static create(properties?: ISideBySideSurveyResponseEventData): SideBySideSurveyResponseEventData;
          static encode(message: ISideBySideSurveyResponseEventData, writer?: any): any;
          static encodeDelimited(message: ISideBySideSurveyResponseEventData, writer?: any): any;
          static decode(reader: any, length?: number): SideBySideSurveyResponseEventData;
          static decodeDelimited(reader: any): SideBySideSurveyResponseEventData;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): SideBySideSurveyResponseEventData;
          static toObject(message: SideBySideSurveyResponseEventData, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
      }
    }
  }
  interface IBotGroupMetadata { [key: string]: any }
  class BotGroupMetadata implements IBotGroupMetadata {
    [key: string]: any;
    constructor(properties?: IBotGroupMetadata);
    static create(properties?: IBotGroupMetadata): BotGroupMetadata;
    static encode(message: IBotGroupMetadata, writer?: any): any;
    static encodeDelimited(message: IBotGroupMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotGroupMetadata;
    static decodeDelimited(reader: any): BotGroupMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotGroupMetadata;
    static toObject(message: BotGroupMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotGroupParticipantMetadata { [key: string]: any }
  class BotGroupParticipantMetadata implements IBotGroupParticipantMetadata {
    [key: string]: any;
    constructor(properties?: IBotGroupParticipantMetadata);
    static create(properties?: IBotGroupParticipantMetadata): BotGroupParticipantMetadata;
    static encode(message: IBotGroupParticipantMetadata, writer?: any): any;
    static encodeDelimited(message: IBotGroupParticipantMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotGroupParticipantMetadata;
    static decodeDelimited(reader: any): BotGroupParticipantMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotGroupParticipantMetadata;
    static toObject(message: BotGroupParticipantMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotHistoryShareMetadata { [key: string]: any }
  class BotHistoryShareMetadata implements IBotHistoryShareMetadata {
    [key: string]: any;
    constructor(properties?: IBotHistoryShareMetadata);
    static create(properties?: IBotHistoryShareMetadata): BotHistoryShareMetadata;
    static encode(message: IBotHistoryShareMetadata, writer?: any): any;
    static encodeDelimited(message: IBotHistoryShareMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotHistoryShareMetadata;
    static decodeDelimited(reader: any): BotHistoryShareMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotHistoryShareMetadata;
    static toObject(message: BotHistoryShareMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotImagineMetadata { [key: string]: any }
  class BotImagineMetadata implements IBotImagineMetadata {
    [key: string]: any;
    constructor(properties?: IBotImagineMetadata);
    static create(properties?: IBotImagineMetadata): BotImagineMetadata;
    static encode(message: IBotImagineMetadata, writer?: any): any;
    static encodeDelimited(message: IBotImagineMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotImagineMetadata;
    static decodeDelimited(reader: any): BotImagineMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotImagineMetadata;
    static toObject(message: BotImagineMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotImagineMetadata {
    enum ImagineType {
      UNKNOWN = 0,
      IMAGINE = 1,
      MEMU = 2,
      FLASH = 3,
      EDIT = 4,
    }
  }
  interface IBotInfrastructureDiagnostics { [key: string]: any }
  class BotInfrastructureDiagnostics implements IBotInfrastructureDiagnostics {
    [key: string]: any;
    constructor(properties?: IBotInfrastructureDiagnostics);
    static create(properties?: IBotInfrastructureDiagnostics): BotInfrastructureDiagnostics;
    static encode(message: IBotInfrastructureDiagnostics, writer?: any): any;
    static encodeDelimited(message: IBotInfrastructureDiagnostics, writer?: any): any;
    static decode(reader: any, length?: number): BotInfrastructureDiagnostics;
    static decodeDelimited(reader: any): BotInfrastructureDiagnostics;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotInfrastructureDiagnostics;
    static toObject(message: BotInfrastructureDiagnostics, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotInfrastructureDiagnostics {
    enum BotBackend {
      AAPI = 0,
      CLIPPY = 1,
    }
  }
  interface IBotLinkedAccount { [key: string]: any }
  class BotLinkedAccount implements IBotLinkedAccount {
    [key: string]: any;
    constructor(properties?: IBotLinkedAccount);
    static create(properties?: IBotLinkedAccount): BotLinkedAccount;
    static encode(message: IBotLinkedAccount, writer?: any): any;
    static encodeDelimited(message: IBotLinkedAccount, writer?: any): any;
    static decode(reader: any, length?: number): BotLinkedAccount;
    static decodeDelimited(reader: any): BotLinkedAccount;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotLinkedAccount;
    static toObject(message: BotLinkedAccount, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotLinkedAccount {
    enum BotLinkedAccountType {
      BOT_LINKED_ACCOUNT_TYPE_1P = 0,
    }
  }
  interface IBotLinkedAccountsMetadata { [key: string]: any }
  class BotLinkedAccountsMetadata implements IBotLinkedAccountsMetadata {
    [key: string]: any;
    constructor(properties?: IBotLinkedAccountsMetadata);
    static create(properties?: IBotLinkedAccountsMetadata): BotLinkedAccountsMetadata;
    static encode(message: IBotLinkedAccountsMetadata, writer?: any): any;
    static encodeDelimited(message: IBotLinkedAccountsMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotLinkedAccountsMetadata;
    static decodeDelimited(reader: any): BotLinkedAccountsMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotLinkedAccountsMetadata;
    static toObject(message: BotLinkedAccountsMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotMediaMetadata { [key: string]: any }
  class BotMediaMetadata implements IBotMediaMetadata {
    [key: string]: any;
    constructor(properties?: IBotMediaMetadata);
    static create(properties?: IBotMediaMetadata): BotMediaMetadata;
    static encode(message: IBotMediaMetadata, writer?: any): any;
    static encodeDelimited(message: IBotMediaMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotMediaMetadata;
    static decodeDelimited(reader: any): BotMediaMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMediaMetadata;
    static toObject(message: BotMediaMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotMediaMetadata {
    enum OrientationType {
      CENTER = 1,
      LEFT = 2,
      RIGHT = 3,
    }
  }
  interface IBotMemoryFact { [key: string]: any }
  class BotMemoryFact implements IBotMemoryFact {
    [key: string]: any;
    constructor(properties?: IBotMemoryFact);
    static create(properties?: IBotMemoryFact): BotMemoryFact;
    static encode(message: IBotMemoryFact, writer?: any): any;
    static encodeDelimited(message: IBotMemoryFact, writer?: any): any;
    static decode(reader: any, length?: number): BotMemoryFact;
    static decodeDelimited(reader: any): BotMemoryFact;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMemoryFact;
    static toObject(message: BotMemoryFact, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotMemoryMetadata { [key: string]: any }
  class BotMemoryMetadata implements IBotMemoryMetadata {
    [key: string]: any;
    constructor(properties?: IBotMemoryMetadata);
    static create(properties?: IBotMemoryMetadata): BotMemoryMetadata;
    static encode(message: IBotMemoryMetadata, writer?: any): any;
    static encodeDelimited(message: IBotMemoryMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotMemoryMetadata;
    static decodeDelimited(reader: any): BotMemoryMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMemoryMetadata;
    static toObject(message: BotMemoryMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotMemuMetadata { [key: string]: any }
  class BotMemuMetadata implements IBotMemuMetadata {
    [key: string]: any;
    constructor(properties?: IBotMemuMetadata);
    static create(properties?: IBotMemuMetadata): BotMemuMetadata;
    static encode(message: IBotMemuMetadata, writer?: any): any;
    static encodeDelimited(message: IBotMemuMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotMemuMetadata;
    static decodeDelimited(reader: any): BotMemuMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMemuMetadata;
    static toObject(message: BotMemuMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotMessageOrigin { [key: string]: any }
  class BotMessageOrigin implements IBotMessageOrigin {
    [key: string]: any;
    constructor(properties?: IBotMessageOrigin);
    static create(properties?: IBotMessageOrigin): BotMessageOrigin;
    static encode(message: IBotMessageOrigin, writer?: any): any;
    static encodeDelimited(message: IBotMessageOrigin, writer?: any): any;
    static decode(reader: any, length?: number): BotMessageOrigin;
    static decodeDelimited(reader: any): BotMessageOrigin;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMessageOrigin;
    static toObject(message: BotMessageOrigin, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotMessageOrigin {
    enum BotMessageOriginType {
      BOT_MESSAGE_ORIGIN_TYPE_AI_INITIATED = 0,
    }
  }
  interface IBotMessageOriginMetadata { [key: string]: any }
  class BotMessageOriginMetadata implements IBotMessageOriginMetadata {
    [key: string]: any;
    constructor(properties?: IBotMessageOriginMetadata);
    static create(properties?: IBotMessageOriginMetadata): BotMessageOriginMetadata;
    static encode(message: IBotMessageOriginMetadata, writer?: any): any;
    static encodeDelimited(message: IBotMessageOriginMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotMessageOriginMetadata;
    static decodeDelimited(reader: any): BotMessageOriginMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMessageOriginMetadata;
    static toObject(message: BotMessageOriginMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotMessageSharingInfo { [key: string]: any }
  class BotMessageSharingInfo implements IBotMessageSharingInfo {
    [key: string]: any;
    constructor(properties?: IBotMessageSharingInfo);
    static create(properties?: IBotMessageSharingInfo): BotMessageSharingInfo;
    static encode(message: IBotMessageSharingInfo, writer?: any): any;
    static encodeDelimited(message: IBotMessageSharingInfo, writer?: any): any;
    static decode(reader: any, length?: number): BotMessageSharingInfo;
    static decodeDelimited(reader: any): BotMessageSharingInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMessageSharingInfo;
    static toObject(message: BotMessageSharingInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotMetadata { [key: string]: any }
  class BotMetadata implements IBotMetadata {
    [key: string]: any;
    constructor(properties?: IBotMetadata);
    static create(properties?: IBotMetadata): BotMetadata;
    static encode(message: IBotMetadata, writer?: any): any;
    static encodeDelimited(message: IBotMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotMetadata;
    static decodeDelimited(reader: any): BotMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMetadata;
    static toObject(message: BotMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum BotMetricsEntryPoint {
    UNDEFINED_ENTRY_POINT = 0,
    FAVICON = 1,
    CHATLIST = 2,
    AISEARCH_NULL_STATE_PAPER_PLANE = 3,
    AISEARCH_NULL_STATE_SUGGESTION = 4,
    AISEARCH_TYPE_AHEAD_SUGGESTION = 5,
    AISEARCH_TYPE_AHEAD_PAPER_PLANE = 6,
    AISEARCH_TYPE_AHEAD_RESULT_CHATLIST = 7,
    AISEARCH_TYPE_AHEAD_RESULT_MESSAGES = 8,
    AIVOICE_SEARCH_BAR = 9,
    AIVOICE_FAVICON = 10,
    AISTUDIO = 11,
    DEEPLINK = 12,
    NOTIFICATION = 13,
    PROFILE_MESSAGE_BUTTON = 14,
    FORWARD = 15,
    APP_SHORTCUT = 16,
    FF_FAMILY = 17,
    AI_TAB = 18,
    AI_HOME = 19,
    AI_DEEPLINK_IMMERSIVE = 20,
    AI_DEEPLINK = 21,
    META_AI_CHAT_SHORTCUT_AI_STUDIO = 22,
    UGC_CHAT_SHORTCUT_AI_STUDIO = 23,
    NEW_CHAT_AI_STUDIO = 24,
    AIVOICE_FAVICON_CALL_HISTORY = 25,
    ASK_META_AI_CONTEXT_MENU = 26,
    ASK_META_AI_CONTEXT_MENU_1ON1 = 27,
    ASK_META_AI_CONTEXT_MENU_GROUP = 28,
    INVOKE_META_AI_1ON1 = 29,
    INVOKE_META_AI_GROUP = 30,
    META_AI_FORWARD = 31,
    NEW_CHAT_AI_CONTACT = 32,
    MESSAGE_QUICK_ACTION_1_ON_1_CHAT = 33,
    MESSAGE_QUICK_ACTION_GROUP_CHAT = 34,
    ATTACHMENT_TRAY_1_ON_1_CHAT = 35,
    ATTACHMENT_TRAY_GROUP_CHAT = 36,
    ASK_META_AI_MEDIA_VIEWER_1ON1 = 37,
    ASK_META_AI_MEDIA_VIEWER_GROUP = 38,
    MEDIA_PICKER_1_ON_1_CHAT = 39,
    MEDIA_PICKER_GROUP_CHAT = 40,
    ASK_META_AI_NO_SEARCH_RESULTS = 41,
    META_AI_SETTINGS = 45,
    WEB_INTRO_PANEL = 46,
    WEB_NAVIGATION_BAR = 47,
    GROUP_MEMBER = 54,
    CHATLIST_SEARCH = 55,
    NEW_CHAT_LIST = 56,
    CONTACTS_TAB = 57,
  }
  interface IBotMetricsMetadata { [key: string]: any }
  class BotMetricsMetadata implements IBotMetricsMetadata {
    [key: string]: any;
    constructor(properties?: IBotMetricsMetadata);
    static create(properties?: IBotMetricsMetadata): BotMetricsMetadata;
    static encode(message: IBotMetricsMetadata, writer?: any): any;
    static encodeDelimited(message: IBotMetricsMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotMetricsMetadata;
    static decodeDelimited(reader: any): BotMetricsMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotMetricsMetadata;
    static toObject(message: BotMetricsMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum BotMetricsThreadEntryPoint {
    AI_TAB_THREAD = 1,
    AI_HOME_THREAD = 2,
    AI_DEEPLINK_IMMERSIVE_THREAD = 3,
    AI_DEEPLINK_THREAD = 4,
    ASK_META_AI_CONTEXT_MENU_THREAD = 5,
  }
  interface IBotModeSelectionMetadata { [key: string]: any }
  class BotModeSelectionMetadata implements IBotModeSelectionMetadata {
    [key: string]: any;
    constructor(properties?: IBotModeSelectionMetadata);
    static create(properties?: IBotModeSelectionMetadata): BotModeSelectionMetadata;
    static encode(message: IBotModeSelectionMetadata, writer?: any): any;
    static encodeDelimited(message: IBotModeSelectionMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotModeSelectionMetadata;
    static decodeDelimited(reader: any): BotModeSelectionMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotModeSelectionMetadata;
    static toObject(message: BotModeSelectionMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotModeSelectionMetadata {
    enum BotUserSelectionMode {
      DEFAULT_MODE = 0,
      THINK_HARD_MODE = 1,
    }
  }
  interface IBotModelMetadata { [key: string]: any }
  class BotModelMetadata implements IBotModelMetadata {
    [key: string]: any;
    constructor(properties?: IBotModelMetadata);
    static create(properties?: IBotModelMetadata): BotModelMetadata;
    static encode(message: IBotModelMetadata, writer?: any): any;
    static encodeDelimited(message: IBotModelMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotModelMetadata;
    static decodeDelimited(reader: any): BotModelMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotModelMetadata;
    static toObject(message: BotModelMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotModelMetadata {
    enum ModelType {
      UNKNOWN_TYPE = 0,
      LLAMA_PROD = 1,
      LLAMA_PROD_PREMIUM = 2,
    }
    enum PremiumModelStatus {
      UNKNOWN_STATUS = 0,
      AVAILABLE = 1,
      QUOTA_EXCEED_LIMIT = 2,
    }
  }
  interface IBotPluginMetadata { [key: string]: any }
  class BotPluginMetadata implements IBotPluginMetadata {
    [key: string]: any;
    constructor(properties?: IBotPluginMetadata);
    static create(properties?: IBotPluginMetadata): BotPluginMetadata;
    static encode(message: IBotPluginMetadata, writer?: any): any;
    static encodeDelimited(message: IBotPluginMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotPluginMetadata;
    static decodeDelimited(reader: any): BotPluginMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotPluginMetadata;
    static toObject(message: BotPluginMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotPluginMetadata {
    enum PluginType {
      UNKNOWN_PLUGIN = 0,
      REELS = 1,
      SEARCH = 2,
    }
    enum SearchProvider {
      UNKNOWN = 0,
      BING = 1,
      GOOGLE = 2,
      SUPPORT = 3,
    }
  }
  interface IBotProgressIndicatorMetadata { [key: string]: any }
  class BotProgressIndicatorMetadata implements IBotProgressIndicatorMetadata {
    [key: string]: any;
    constructor(properties?: IBotProgressIndicatorMetadata);
    static create(properties?: IBotProgressIndicatorMetadata): BotProgressIndicatorMetadata;
    static encode(message: IBotProgressIndicatorMetadata, writer?: any): any;
    static encodeDelimited(message: IBotProgressIndicatorMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotProgressIndicatorMetadata;
    static decodeDelimited(reader: any): BotProgressIndicatorMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotProgressIndicatorMetadata;
    static toObject(message: BotProgressIndicatorMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotProgressIndicatorMetadata {
    interface IBotPlanningStepMetadata { [key: string]: any }
    class BotPlanningStepMetadata implements IBotPlanningStepMetadata {
      [key: string]: any;
      constructor(properties?: IBotPlanningStepMetadata);
      static create(properties?: IBotPlanningStepMetadata): BotPlanningStepMetadata;
      static encode(message: IBotPlanningStepMetadata, writer?: any): any;
      static encodeDelimited(message: IBotPlanningStepMetadata, writer?: any): any;
      static decode(reader: any, length?: number): BotPlanningStepMetadata;
      static decodeDelimited(reader: any): BotPlanningStepMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BotPlanningStepMetadata;
      static toObject(message: BotPlanningStepMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace BotPlanningStepMetadata {
      interface IBotPlanningSearchSourceMetadata { [key: string]: any }
      class BotPlanningSearchSourceMetadata implements IBotPlanningSearchSourceMetadata {
        [key: string]: any;
        constructor(properties?: IBotPlanningSearchSourceMetadata);
        static create(properties?: IBotPlanningSearchSourceMetadata): BotPlanningSearchSourceMetadata;
        static encode(message: IBotPlanningSearchSourceMetadata, writer?: any): any;
        static encodeDelimited(message: IBotPlanningSearchSourceMetadata, writer?: any): any;
        static decode(reader: any, length?: number): BotPlanningSearchSourceMetadata;
        static decodeDelimited(reader: any): BotPlanningSearchSourceMetadata;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): BotPlanningSearchSourceMetadata;
        static toObject(message: BotPlanningSearchSourceMetadata, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IBotPlanningSearchSourcesMetadata { [key: string]: any }
      class BotPlanningSearchSourcesMetadata implements IBotPlanningSearchSourcesMetadata {
        [key: string]: any;
        constructor(properties?: IBotPlanningSearchSourcesMetadata);
        static create(properties?: IBotPlanningSearchSourcesMetadata): BotPlanningSearchSourcesMetadata;
        static encode(message: IBotPlanningSearchSourcesMetadata, writer?: any): any;
        static encodeDelimited(message: IBotPlanningSearchSourcesMetadata, writer?: any): any;
        static decode(reader: any, length?: number): BotPlanningSearchSourcesMetadata;
        static decodeDelimited(reader: any): BotPlanningSearchSourcesMetadata;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): BotPlanningSearchSourcesMetadata;
        static toObject(message: BotPlanningSearchSourcesMetadata, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace BotPlanningSearchSourcesMetadata {
        enum BotPlanningSearchSourceProvider {
          UNKNOWN = 0,
          OTHER = 1,
          GOOGLE = 2,
          BING = 3,
        }
      }
      interface IBotPlanningStepSectionMetadata { [key: string]: any }
      class BotPlanningStepSectionMetadata implements IBotPlanningStepSectionMetadata {
        [key: string]: any;
        constructor(properties?: IBotPlanningStepSectionMetadata);
        static create(properties?: IBotPlanningStepSectionMetadata): BotPlanningStepSectionMetadata;
        static encode(message: IBotPlanningStepSectionMetadata, writer?: any): any;
        static encodeDelimited(message: IBotPlanningStepSectionMetadata, writer?: any): any;
        static decode(reader: any, length?: number): BotPlanningStepSectionMetadata;
        static decodeDelimited(reader: any): BotPlanningStepSectionMetadata;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): BotPlanningStepSectionMetadata;
        static toObject(message: BotPlanningStepSectionMetadata, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum BotSearchSourceProvider {
        UNKNOWN_PROVIDER = 0,
        OTHER = 1,
        GOOGLE = 2,
        BING = 3,
      }
      enum PlanningStepStatus {
        UNKNOWN = 0,
        PLANNED = 1,
        EXECUTING = 2,
        FINISHED = 3,
      }
    }
  }
  interface IBotPromotionMessageMetadata { [key: string]: any }
  class BotPromotionMessageMetadata implements IBotPromotionMessageMetadata {
    [key: string]: any;
    constructor(properties?: IBotPromotionMessageMetadata);
    static create(properties?: IBotPromotionMessageMetadata): BotPromotionMessageMetadata;
    static encode(message: IBotPromotionMessageMetadata, writer?: any): any;
    static encodeDelimited(message: IBotPromotionMessageMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotPromotionMessageMetadata;
    static decodeDelimited(reader: any): BotPromotionMessageMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotPromotionMessageMetadata;
    static toObject(message: BotPromotionMessageMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotPromotionMessageMetadata {
    enum BotPromotionType {
      UNKNOWN_TYPE = 0,
      C50 = 1,
      SURVEY_PLATFORM = 2,
    }
  }
  interface IBotPromptSuggestion { [key: string]: any }
  class BotPromptSuggestion implements IBotPromptSuggestion {
    [key: string]: any;
    constructor(properties?: IBotPromptSuggestion);
    static create(properties?: IBotPromptSuggestion): BotPromptSuggestion;
    static encode(message: IBotPromptSuggestion, writer?: any): any;
    static encodeDelimited(message: IBotPromptSuggestion, writer?: any): any;
    static decode(reader: any, length?: number): BotPromptSuggestion;
    static decodeDelimited(reader: any): BotPromptSuggestion;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotPromptSuggestion;
    static toObject(message: BotPromptSuggestion, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotPromptSuggestions { [key: string]: any }
  class BotPromptSuggestions implements IBotPromptSuggestions {
    [key: string]: any;
    constructor(properties?: IBotPromptSuggestions);
    static create(properties?: IBotPromptSuggestions): BotPromptSuggestions;
    static encode(message: IBotPromptSuggestions, writer?: any): any;
    static encodeDelimited(message: IBotPromptSuggestions, writer?: any): any;
    static decode(reader: any, length?: number): BotPromptSuggestions;
    static decodeDelimited(reader: any): BotPromptSuggestions;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotPromptSuggestions;
    static toObject(message: BotPromptSuggestions, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotPttPromptMetadata { [key: string]: any }
  class BotPttPromptMetadata implements IBotPttPromptMetadata {
    [key: string]: any;
    constructor(properties?: IBotPttPromptMetadata);
    static create(properties?: IBotPttPromptMetadata): BotPttPromptMetadata;
    static encode(message: IBotPttPromptMetadata, writer?: any): any;
    static encodeDelimited(message: IBotPttPromptMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotPttPromptMetadata;
    static decodeDelimited(reader: any): BotPttPromptMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotPttPromptMetadata;
    static toObject(message: BotPttPromptMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotQuotaMetadata { [key: string]: any }
  class BotQuotaMetadata implements IBotQuotaMetadata {
    [key: string]: any;
    constructor(properties?: IBotQuotaMetadata);
    static create(properties?: IBotQuotaMetadata): BotQuotaMetadata;
    static encode(message: IBotQuotaMetadata, writer?: any): any;
    static encodeDelimited(message: IBotQuotaMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotQuotaMetadata;
    static decodeDelimited(reader: any): BotQuotaMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotQuotaMetadata;
    static toObject(message: BotQuotaMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotQuotaMetadata {
    interface IBotFeatureQuotaMetadata { [key: string]: any }
    class BotFeatureQuotaMetadata implements IBotFeatureQuotaMetadata {
      [key: string]: any;
      constructor(properties?: IBotFeatureQuotaMetadata);
      static create(properties?: IBotFeatureQuotaMetadata): BotFeatureQuotaMetadata;
      static encode(message: IBotFeatureQuotaMetadata, writer?: any): any;
      static encodeDelimited(message: IBotFeatureQuotaMetadata, writer?: any): any;
      static decode(reader: any, length?: number): BotFeatureQuotaMetadata;
      static decodeDelimited(reader: any): BotFeatureQuotaMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BotFeatureQuotaMetadata;
      static toObject(message: BotFeatureQuotaMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace BotFeatureQuotaMetadata {
      enum BotFeatureType {
        UNKNOWN_FEATURE = 0,
        REASONING_FEATURE = 1,
      }
    }
  }
  interface IBotReminderMetadata { [key: string]: any }
  class BotReminderMetadata implements IBotReminderMetadata {
    [key: string]: any;
    constructor(properties?: IBotReminderMetadata);
    static create(properties?: IBotReminderMetadata): BotReminderMetadata;
    static encode(message: IBotReminderMetadata, writer?: any): any;
    static encodeDelimited(message: IBotReminderMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotReminderMetadata;
    static decodeDelimited(reader: any): BotReminderMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotReminderMetadata;
    static toObject(message: BotReminderMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotReminderMetadata {
    enum ReminderAction {
      NOTIFY = 1,
      CREATE = 2,
      DELETE = 3,
      UPDATE = 4,
    }
    enum ReminderFrequency {
      ONCE = 1,
      DAILY = 2,
      WEEKLY = 3,
      BIWEEKLY = 4,
      MONTHLY = 5,
    }
  }
  interface IBotRenderingConfigMetadata { [key: string]: any }
  class BotRenderingConfigMetadata implements IBotRenderingConfigMetadata {
    [key: string]: any;
    constructor(properties?: IBotRenderingConfigMetadata);
    static create(properties?: IBotRenderingConfigMetadata): BotRenderingConfigMetadata;
    static encode(message: IBotRenderingConfigMetadata, writer?: any): any;
    static encodeDelimited(message: IBotRenderingConfigMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotRenderingConfigMetadata;
    static decodeDelimited(reader: any): BotRenderingConfigMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotRenderingConfigMetadata;
    static toObject(message: BotRenderingConfigMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotRenderingMetadata { [key: string]: any }
  class BotRenderingMetadata implements IBotRenderingMetadata {
    [key: string]: any;
    constructor(properties?: IBotRenderingMetadata);
    static create(properties?: IBotRenderingMetadata): BotRenderingMetadata;
    static encode(message: IBotRenderingMetadata, writer?: any): any;
    static encodeDelimited(message: IBotRenderingMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotRenderingMetadata;
    static decodeDelimited(reader: any): BotRenderingMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotRenderingMetadata;
    static toObject(message: BotRenderingMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotRenderingMetadata {
    interface IKeyword { [key: string]: any }
    class Keyword implements IKeyword {
      [key: string]: any;
      constructor(properties?: IKeyword);
      static create(properties?: IKeyword): Keyword;
      static encode(message: IKeyword, writer?: any): any;
      static encodeDelimited(message: IKeyword, writer?: any): any;
      static decode(reader: any, length?: number): Keyword;
      static decodeDelimited(reader: any): Keyword;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Keyword;
      static toObject(message: Keyword, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IBotResolvedToolCallMetadata { [key: string]: any }
  class BotResolvedToolCallMetadata implements IBotResolvedToolCallMetadata {
    [key: string]: any;
    constructor(properties?: IBotResolvedToolCallMetadata);
    static create(properties?: IBotResolvedToolCallMetadata): BotResolvedToolCallMetadata;
    static encode(message: IBotResolvedToolCallMetadata, writer?: any): any;
    static encodeDelimited(message: IBotResolvedToolCallMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotResolvedToolCallMetadata;
    static decodeDelimited(reader: any): BotResolvedToolCallMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotResolvedToolCallMetadata;
    static toObject(message: BotResolvedToolCallMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotSessionMetadata { [key: string]: any }
  class BotSessionMetadata implements IBotSessionMetadata {
    [key: string]: any;
    constructor(properties?: IBotSessionMetadata);
    static create(properties?: IBotSessionMetadata): BotSessionMetadata;
    static encode(message: IBotSessionMetadata, writer?: any): any;
    static encodeDelimited(message: IBotSessionMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotSessionMetadata;
    static decodeDelimited(reader: any): BotSessionMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotSessionMetadata;
    static toObject(message: BotSessionMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum BotSessionSource {
    NONE = 0,
    NULL_STATE = 1,
    TYPEAHEAD = 2,
    USER_INPUT = 3,
    EMU_FLASH = 4,
    EMU_FLASH_FOLLOWUP = 5,
    VOICE = 6,
    AI_HOME_SESSION = 7,
  }
  interface IBotSignatureVerificationMetadata { [key: string]: any }
  class BotSignatureVerificationMetadata implements IBotSignatureVerificationMetadata {
    [key: string]: any;
    constructor(properties?: IBotSignatureVerificationMetadata);
    static create(properties?: IBotSignatureVerificationMetadata): BotSignatureVerificationMetadata;
    static encode(message: IBotSignatureVerificationMetadata, writer?: any): any;
    static encodeDelimited(message: IBotSignatureVerificationMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotSignatureVerificationMetadata;
    static decodeDelimited(reader: any): BotSignatureVerificationMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotSignatureVerificationMetadata;
    static toObject(message: BotSignatureVerificationMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotSignatureVerificationUseCaseProof { [key: string]: any }
  class BotSignatureVerificationUseCaseProof implements IBotSignatureVerificationUseCaseProof {
    [key: string]: any;
    constructor(properties?: IBotSignatureVerificationUseCaseProof);
    static create(properties?: IBotSignatureVerificationUseCaseProof): BotSignatureVerificationUseCaseProof;
    static encode(message: IBotSignatureVerificationUseCaseProof, writer?: any): any;
    static encodeDelimited(message: IBotSignatureVerificationUseCaseProof, writer?: any): any;
    static decode(reader: any, length?: number): BotSignatureVerificationUseCaseProof;
    static decodeDelimited(reader: any): BotSignatureVerificationUseCaseProof;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotSignatureVerificationUseCaseProof;
    static toObject(message: BotSignatureVerificationUseCaseProof, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotSignatureVerificationUseCaseProof {
    enum BotSignatureUseCase {
      UNSPECIFIED = 0,
      WA_BOT_MSG = 1,
      WA_TEE_BOT_MSG = 2,
      P2P_PILLS = 3,
      WA_WAFFLE = 4,
      WA_FEATURE_PKI = 5,
    }
    interface ICertificateSKI { [key: string]: any }
    class CertificateSKI implements ICertificateSKI {
      [key: string]: any;
      constructor(properties?: ICertificateSKI);
      static create(properties?: ICertificateSKI): CertificateSKI;
      static encode(message: ICertificateSKI, writer?: any): any;
      static encodeDelimited(message: ICertificateSKI, writer?: any): any;
      static decode(reader: any, length?: number): CertificateSKI;
      static decodeDelimited(reader: any): CertificateSKI;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CertificateSKI;
      static toObject(message: CertificateSKI, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IBotSourcesMetadata { [key: string]: any }
  class BotSourcesMetadata implements IBotSourcesMetadata {
    [key: string]: any;
    constructor(properties?: IBotSourcesMetadata);
    static create(properties?: IBotSourcesMetadata): BotSourcesMetadata;
    static encode(message: IBotSourcesMetadata, writer?: any): any;
    static encodeDelimited(message: IBotSourcesMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotSourcesMetadata;
    static decodeDelimited(reader: any): BotSourcesMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotSourcesMetadata;
    static toObject(message: BotSourcesMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotSourcesMetadata {
    interface IBotSourceItem { [key: string]: any }
    class BotSourceItem implements IBotSourceItem {
      [key: string]: any;
      constructor(properties?: IBotSourceItem);
      static create(properties?: IBotSourceItem): BotSourceItem;
      static encode(message: IBotSourceItem, writer?: any): any;
      static encodeDelimited(message: IBotSourceItem, writer?: any): any;
      static decode(reader: any, length?: number): BotSourceItem;
      static decodeDelimited(reader: any): BotSourceItem;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BotSourceItem;
      static toObject(message: BotSourceItem, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace BotSourceItem {
      enum SourceProvider {
        UNKNOWN = 0,
        BING = 1,
        GOOGLE = 2,
        SUPPORT = 3,
        OTHER = 4,
      }
    }
  }
  interface IBotSuggestedPromptMetadata { [key: string]: any }
  class BotSuggestedPromptMetadata implements IBotSuggestedPromptMetadata {
    [key: string]: any;
    constructor(properties?: IBotSuggestedPromptMetadata);
    static create(properties?: IBotSuggestedPromptMetadata): BotSuggestedPromptMetadata;
    static encode(message: IBotSuggestedPromptMetadata, writer?: any): any;
    static encodeDelimited(message: IBotSuggestedPromptMetadata, writer?: any): any;
    static decode(reader: any, length?: number): BotSuggestedPromptMetadata;
    static decodeDelimited(reader: any): BotSuggestedPromptMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotSuggestedPromptMetadata;
    static toObject(message: BotSuggestedPromptMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IBotUnifiedResponseMutation { [key: string]: any }
  class BotUnifiedResponseMutation implements IBotUnifiedResponseMutation {
    [key: string]: any;
    constructor(properties?: IBotUnifiedResponseMutation);
    static create(properties?: IBotUnifiedResponseMutation): BotUnifiedResponseMutation;
    static encode(message: IBotUnifiedResponseMutation, writer?: any): any;
    static encodeDelimited(message: IBotUnifiedResponseMutation, writer?: any): any;
    static decode(reader: any, length?: number): BotUnifiedResponseMutation;
    static decodeDelimited(reader: any): BotUnifiedResponseMutation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): BotUnifiedResponseMutation;
    static toObject(message: BotUnifiedResponseMutation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace BotUnifiedResponseMutation {
    interface IMediaDetailsMetadata { [key: string]: any }
    class MediaDetailsMetadata implements IMediaDetailsMetadata {
      [key: string]: any;
      constructor(properties?: IMediaDetailsMetadata);
      static create(properties?: IMediaDetailsMetadata): MediaDetailsMetadata;
      static encode(message: IMediaDetailsMetadata, writer?: any): any;
      static encodeDelimited(message: IMediaDetailsMetadata, writer?: any): any;
      static decode(reader: any, length?: number): MediaDetailsMetadata;
      static decodeDelimited(reader: any): MediaDetailsMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MediaDetailsMetadata;
      static toObject(message: MediaDetailsMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISideBySideMetadata { [key: string]: any }
    class SideBySideMetadata implements ISideBySideMetadata {
      [key: string]: any;
      constructor(properties?: ISideBySideMetadata);
      static create(properties?: ISideBySideMetadata): SideBySideMetadata;
      static encode(message: ISideBySideMetadata, writer?: any): any;
      static encodeDelimited(message: ISideBySideMetadata, writer?: any): any;
      static decode(reader: any, length?: number): SideBySideMetadata;
      static decodeDelimited(reader: any): SideBySideMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SideBySideMetadata;
      static toObject(message: SideBySideMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  enum COMMAND_COMMAND_TYPE {
    EVERYONE = 1,
    SILENT = 2,
    AI = 3,
    AI_IMAGINE = 4,
  }
  enum CONSUMER_APPLICATION_EXTENDED_TEXT_MESSAGE_PREVIEW_TYPE {
    NONE = 0,
    VIDEO = 1,
  }
  enum CONSUMER_APPLICATION_METADATA_SPECIAL_TEXT_SIZE {
    SMALL = 1,
    MEDIUM = 2,
    LARGE = 3,
  }
  enum CONSUMER_APPLICATION_STATUS_TEXT_MESAGE_FONT_TYPE {
    SANS_SERIF = 0,
    SERIF = 1,
    NORICAN_REGULAR = 2,
    BRYNDAN_WRITE = 3,
    BEBASNEUE_REGULAR = 4,
    OSWALD_HEAVY = 5,
  }
  interface ICallLogRecord { [key: string]: any }
  class CallLogRecord implements ICallLogRecord {
    [key: string]: any;
    constructor(properties?: ICallLogRecord);
    static create(properties?: ICallLogRecord): CallLogRecord;
    static encode(message: ICallLogRecord, writer?: any): any;
    static encodeDelimited(message: ICallLogRecord, writer?: any): any;
    static decode(reader: any, length?: number): CallLogRecord;
    static decodeDelimited(reader: any): CallLogRecord;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CallLogRecord;
    static toObject(message: CallLogRecord, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace CallLogRecord {
    enum CallResult {
      CONNECTED = 0,
      REJECTED = 1,
      CANCELLED = 2,
      ACCEPTEDELSEWHERE = 3,
      MISSED = 4,
      INVALID = 5,
      UNAVAILABLE = 6,
      UPCOMING = 7,
      FAILED = 8,
      ABANDONED = 9,
      ONGOING = 10,
    }
    enum CallType {
      REGULAR = 0,
      SCHEDULED_CALL = 1,
      VOICE_CHAT = 2,
    }
    interface IParticipantInfo { [key: string]: any }
    class ParticipantInfo implements IParticipantInfo {
      [key: string]: any;
      constructor(properties?: IParticipantInfo);
      static create(properties?: IParticipantInfo): ParticipantInfo;
      static encode(message: IParticipantInfo, writer?: any): any;
      static encodeDelimited(message: IParticipantInfo, writer?: any): any;
      static decode(reader: any, length?: number): ParticipantInfo;
      static decodeDelimited(reader: any): ParticipantInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ParticipantInfo;
      static toObject(message: ParticipantInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum SilenceReason {
      NONE = 0,
      SCHEDULED = 1,
      PRIVACY = 2,
      LIGHTWEIGHT = 3,
    }
  }
  interface ICertChain { [key: string]: any }
  class CertChain implements ICertChain {
    [key: string]: any;
    constructor(properties?: ICertChain);
    static create(properties?: ICertChain): CertChain;
    static encode(message: ICertChain, writer?: any): any;
    static encodeDelimited(message: ICertChain, writer?: any): any;
    static decode(reader: any, length?: number): CertChain;
    static decodeDelimited(reader: any): CertChain;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CertChain;
    static toObject(message: CertChain, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace CertChain {
    interface INoiseCertificate { [key: string]: any }
    class NoiseCertificate implements INoiseCertificate {
      [key: string]: any;
      constructor(properties?: INoiseCertificate);
      static create(properties?: INoiseCertificate): NoiseCertificate;
      static encode(message: INoiseCertificate, writer?: any): any;
      static encodeDelimited(message: INoiseCertificate, writer?: any): any;
      static decode(reader: any, length?: number): NoiseCertificate;
      static decodeDelimited(reader: any): NoiseCertificate;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NoiseCertificate;
      static toObject(message: NoiseCertificate, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace NoiseCertificate {
      interface IDetails { [key: string]: any }
      class Details implements IDetails {
        [key: string]: any;
        constructor(properties?: IDetails);
        static create(properties?: IDetails): Details;
        static encode(message: IDetails, writer?: any): any;
        static encodeDelimited(message: IDetails, writer?: any): any;
        static decode(reader: any, length?: number): Details;
        static decodeDelimited(reader: any): Details;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Details;
        static toObject(message: Details, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
  }
  interface IChatLockSettings { [key: string]: any }
  class ChatLockSettings implements IChatLockSettings {
    [key: string]: any;
    constructor(properties?: IChatLockSettings);
    static create(properties?: IChatLockSettings): ChatLockSettings;
    static encode(message: IChatLockSettings, writer?: any): any;
    static encodeDelimited(message: IChatLockSettings, writer?: any): any;
    static decode(reader: any, length?: number): ChatLockSettings;
    static decodeDelimited(reader: any): ChatLockSettings;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ChatLockSettings;
    static toObject(message: ChatLockSettings, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IChatRowOpaqueData { [key: string]: any }
  class ChatRowOpaqueData implements IChatRowOpaqueData {
    [key: string]: any;
    constructor(properties?: IChatRowOpaqueData);
    static create(properties?: IChatRowOpaqueData): ChatRowOpaqueData;
    static encode(message: IChatRowOpaqueData, writer?: any): any;
    static encodeDelimited(message: IChatRowOpaqueData, writer?: any): any;
    static decode(reader: any, length?: number): ChatRowOpaqueData;
    static decodeDelimited(reader: any): ChatRowOpaqueData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ChatRowOpaqueData;
    static toObject(message: ChatRowOpaqueData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ChatRowOpaqueData {
    interface IDraftMessage { [key: string]: any }
    class DraftMessage implements IDraftMessage {
      [key: string]: any;
      constructor(properties?: IDraftMessage);
      static create(properties?: IDraftMessage): DraftMessage;
      static encode(message: IDraftMessage, writer?: any): any;
      static encodeDelimited(message: IDraftMessage, writer?: any): any;
      static decode(reader: any, length?: number): DraftMessage;
      static decodeDelimited(reader: any): DraftMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DraftMessage;
      static toObject(message: DraftMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace DraftMessage {
      interface ICtwaContextData { [key: string]: any }
      class CtwaContextData implements ICtwaContextData {
        [key: string]: any;
        constructor(properties?: ICtwaContextData);
        static create(properties?: ICtwaContextData): CtwaContextData;
        static encode(message: ICtwaContextData, writer?: any): any;
        static encodeDelimited(message: ICtwaContextData, writer?: any): any;
        static decode(reader: any, length?: number): CtwaContextData;
        static decodeDelimited(reader: any): CtwaContextData;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CtwaContextData;
        static toObject(message: CtwaContextData, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace CtwaContextData {
        enum ContextInfoExternalAdReplyInfoMediaType {
          NONE = 0,
          IMAGE = 1,
          VIDEO = 2,
        }
      }
      interface ICtwaContextLinkData { [key: string]: any }
      class CtwaContextLinkData implements ICtwaContextLinkData {
        [key: string]: any;
        constructor(properties?: ICtwaContextLinkData);
        static create(properties?: ICtwaContextLinkData): CtwaContextLinkData;
        static encode(message: ICtwaContextLinkData, writer?: any): any;
        static encodeDelimited(message: ICtwaContextLinkData, writer?: any): any;
        static decode(reader: any, length?: number): CtwaContextLinkData;
        static decodeDelimited(reader: any): CtwaContextLinkData;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CtwaContextLinkData;
        static toObject(message: CtwaContextLinkData, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
  }
  interface ICitation { [key: string]: any }
  class Citation implements ICitation {
    [key: string]: any;
    constructor(properties?: ICitation);
    static create(properties?: ICitation): Citation;
    static encode(message: ICitation, writer?: any): any;
    static encodeDelimited(message: ICitation, writer?: any): any;
    static decode(reader: any, length?: number): Citation;
    static decodeDelimited(reader: any): Citation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Citation;
    static toObject(message: Citation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IClientPairingProps { [key: string]: any }
  class ClientPairingProps implements IClientPairingProps {
    [key: string]: any;
    constructor(properties?: IClientPairingProps);
    static create(properties?: IClientPairingProps): ClientPairingProps;
    static encode(message: IClientPairingProps, writer?: any): any;
    static encodeDelimited(message: IClientPairingProps, writer?: any): any;
    static decode(reader: any, length?: number): ClientPairingProps;
    static decodeDelimited(reader: any): ClientPairingProps;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ClientPairingProps;
    static toObject(message: ClientPairingProps, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IClientPayload { [key: string]: any }
  class ClientPayload implements IClientPayload {
    [key: string]: any;
    constructor(properties?: IClientPayload);
    static create(properties?: IClientPayload): ClientPayload;
    static encode(message: IClientPayload, writer?: any): any;
    static encodeDelimited(message: IClientPayload, writer?: any): any;
    static decode(reader: any, length?: number): ClientPayload;
    static decodeDelimited(reader: any): ClientPayload;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ClientPayload;
    static toObject(message: ClientPayload, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ClientPayload {
    enum AccountType {
      DEFAULT = 0,
      GUEST = 1,
    }
    enum ConnectReason {
      PUSH = 0,
      USER_ACTIVATED = 1,
      SCHEDULED = 2,
      ERROR_RECONNECT = 3,
      NETWORK_SWITCH = 4,
      PING_RECONNECT = 5,
      UNKNOWN = 6,
    }
    enum ConnectType {
      CELLULAR_UNKNOWN = 0,
      WIFI_UNKNOWN = 1,
      CELLULAR_EDGE = 100,
      CELLULAR_IDEN = 101,
      CELLULAR_UMTS = 102,
      CELLULAR_EVDO = 103,
      CELLULAR_GPRS = 104,
      CELLULAR_HSDPA = 105,
      CELLULAR_HSUPA = 106,
      CELLULAR_HSPA = 107,
      CELLULAR_CDMA = 108,
      CELLULAR_1XRTT = 109,
      CELLULAR_EHRPD = 110,
      CELLULAR_LTE = 111,
      CELLULAR_HSPAP = 112,
    }
    interface IDNSSource { [key: string]: any }
    class DNSSource implements IDNSSource {
      [key: string]: any;
      constructor(properties?: IDNSSource);
      static create(properties?: IDNSSource): DNSSource;
      static encode(message: IDNSSource, writer?: any): any;
      static encodeDelimited(message: IDNSSource, writer?: any): any;
      static decode(reader: any, length?: number): DNSSource;
      static decodeDelimited(reader: any): DNSSource;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DNSSource;
      static toObject(message: DNSSource, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace DNSSource {
      enum DNSResolutionMethod {
        SYSTEM = 0,
        GOOGLE = 1,
        HARDCODED = 2,
        OVERRIDE = 3,
        FALLBACK = 4,
        MNS = 5,
        MNS_SECONDARY = 6,
        SOCKS_PROXY = 7,
      }
    }
    interface IDevicePairingRegistrationData { [key: string]: any }
    class DevicePairingRegistrationData implements IDevicePairingRegistrationData {
      [key: string]: any;
      constructor(properties?: IDevicePairingRegistrationData);
      static create(properties?: IDevicePairingRegistrationData): DevicePairingRegistrationData;
      static encode(message: IDevicePairingRegistrationData, writer?: any): any;
      static encodeDelimited(message: IDevicePairingRegistrationData, writer?: any): any;
      static decode(reader: any, length?: number): DevicePairingRegistrationData;
      static decodeDelimited(reader: any): DevicePairingRegistrationData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DevicePairingRegistrationData;
      static toObject(message: DevicePairingRegistrationData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum IOSAppExtension {
      SHARE_EXTENSION = 0,
      SERVICE_EXTENSION = 1,
      INTENTS_EXTENSION = 2,
    }
    interface IInteropData { [key: string]: any }
    class InteropData implements IInteropData {
      [key: string]: any;
      constructor(properties?: IInteropData);
      static create(properties?: IInteropData): InteropData;
      static encode(message: IInteropData, writer?: any): any;
      static encodeDelimited(message: IInteropData, writer?: any): any;
      static decode(reader: any, length?: number): InteropData;
      static decodeDelimited(reader: any): InteropData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InteropData;
      static toObject(message: InteropData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum Product {
      WHATSAPP = 0,
      MESSENGER = 1,
      INTEROP = 2,
      INTEROP_MSGR = 3,
      WHATSAPP_LID = 4,
    }
    enum TrafficAnonymization {
      OFF = 0,
      STANDARD = 1,
    }
    interface IUserAgent { [key: string]: any }
    class UserAgent implements IUserAgent {
      [key: string]: any;
      constructor(properties?: IUserAgent);
      static create(properties?: IUserAgent): UserAgent;
      static encode(message: IUserAgent, writer?: any): any;
      static encodeDelimited(message: IUserAgent, writer?: any): any;
      static decode(reader: any, length?: number): UserAgent;
      static decodeDelimited(reader: any): UserAgent;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UserAgent;
      static toObject(message: UserAgent, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace UserAgent {
      interface IAppVersion { [key: string]: any }
      class AppVersion implements IAppVersion {
        [key: string]: any;
        constructor(properties?: IAppVersion);
        static create(properties?: IAppVersion): AppVersion;
        static encode(message: IAppVersion, writer?: any): any;
        static encodeDelimited(message: IAppVersion, writer?: any): any;
        static decode(reader: any, length?: number): AppVersion;
        static decodeDelimited(reader: any): AppVersion;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): AppVersion;
        static toObject(message: AppVersion, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum DeviceType {
        PHONE = 0,
        TABLET = 1,
        DESKTOP = 2,
        WEARABLE = 3,
        VR = 4,
      }
      enum DistributionChannel {
        APPSTORE = 0,
        WEBSITE = 1,
        TESTFLIGHT = 2,
        INTERNAL = 3,
      }
      enum Platform {
        ANDROID = 0,
        IOS = 1,
        WINDOWS_PHONE = 2,
        BLACKBERRY = 3,
        BLACKBERRYX = 4,
        S40 = 5,
        S60 = 6,
        PYTHON_CLIENT = 7,
        TIZEN = 8,
        ENTERPRISE = 9,
        SMB_ANDROID = 10,
        KAIOS = 11,
        SMB_IOS = 12,
        WINDOWS = 13,
        WEB = 14,
        PORTAL = 15,
        GREEN_ANDROID = 16,
        GREEN_IPHONE = 17,
        BLUE_ANDROID = 18,
        BLUE_IPHONE = 19,
        FBLITE_ANDROID = 20,
        MLITE_ANDROID = 21,
        IGLITE_ANDROID = 22,
        PAGE = 23,
        MACOS = 24,
        OCULUS_MSG = 25,
        OCULUS_CALL = 26,
        MILAN = 27,
        CAPI = 28,
        WEAROS = 29,
        ARDEVICE = 30,
        VRDEVICE = 31,
        BLUE_WEB = 32,
        IPAD = 33,
        TEST = 34,
        SMART_GLASSES = 35,
        BLUE_VR = 36,
        AR_WRIST = 37,
        WAIL = 38,
      }
      enum ReleaseChannel {
        RELEASE = 0,
        BETA = 1,
        ALPHA = 2,
        DEBUG = 3,
      }
    }
    interface IWebInfo { [key: string]: any }
    class WebInfo implements IWebInfo {
      [key: string]: any;
      constructor(properties?: IWebInfo);
      static create(properties?: IWebInfo): WebInfo;
      static encode(message: IWebInfo, writer?: any): any;
      static encodeDelimited(message: IWebInfo, writer?: any): any;
      static decode(reader: any, length?: number): WebInfo;
      static decodeDelimited(reader: any): WebInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): WebInfo;
      static toObject(message: WebInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace WebInfo {
      enum WebSubPlatform {
        WEB_BROWSER = 0,
        APP_STORE = 1,
        WIN_STORE = 2,
        DARWIN = 3,
        WIN32 = 4,
        WIN_HYBRID = 5,
      }
      interface IWebdPayload { [key: string]: any }
      class WebdPayload implements IWebdPayload {
        [key: string]: any;
        constructor(properties?: IWebdPayload);
        static create(properties?: IWebdPayload): WebdPayload;
        static encode(message: IWebdPayload, writer?: any): any;
        static encodeDelimited(message: IWebdPayload, writer?: any): any;
        static decode(reader: any, length?: number): WebdPayload;
        static decodeDelimited(reader: any): WebdPayload;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): WebdPayload;
        static toObject(message: WebdPayload, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
  }
  interface ICoexStateSync { [key: string]: any }
  class CoexStateSync implements ICoexStateSync {
    [key: string]: any;
    constructor(properties?: ICoexStateSync);
    static create(properties?: ICoexStateSync): CoexStateSync;
    static encode(message: ICoexStateSync, writer?: any): any;
    static encodeDelimited(message: ICoexStateSync, writer?: any): any;
    static decode(reader: any, length?: number): CoexStateSync;
    static decodeDelimited(reader: any): CoexStateSync;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CoexStateSync;
    static toObject(message: CoexStateSync, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace CoexStateSync {
    interface ICollectionMutations { [key: string]: any }
    class CollectionMutations implements ICollectionMutations {
      [key: string]: any;
      constructor(properties?: ICollectionMutations);
      static create(properties?: ICollectionMutations): CollectionMutations;
      static encode(message: ICollectionMutations, writer?: any): any;
      static encodeDelimited(message: ICollectionMutations, writer?: any): any;
      static decode(reader: any, length?: number): CollectionMutations;
      static decodeDelimited(reader: any): CollectionMutations;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CollectionMutations;
      static toObject(message: CollectionMutations, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMutation { [key: string]: any }
    class Mutation implements IMutation {
      [key: string]: any;
      constructor(properties?: IMutation);
      static create(properties?: IMutation): Mutation;
      static encode(message: IMutation, writer?: any): any;
      static encodeDelimited(message: IMutation, writer?: any): any;
      static decode(reader: any, length?: number): Mutation;
      static decodeDelimited(reader: any): Mutation;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Mutation;
      static toObject(message: Mutation, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  enum CollectionName {
    COLLECTION_NAME_UNKNOWN = 0,
    REGULAR = 1,
    REGULAR_LOW = 2,
    REGULAR_HIGH = 3,
    CRITICAL_BLOCK = 4,
    CRITICAL_UNBLOCK_LOW = 5,
  }
  interface ICombinedFingerprint { [key: string]: any }
  class CombinedFingerprint implements ICombinedFingerprint {
    [key: string]: any;
    constructor(properties?: ICombinedFingerprint);
    static create(properties?: ICombinedFingerprint): CombinedFingerprint;
    static encode(message: ICombinedFingerprint, writer?: any): any;
    static encodeDelimited(message: ICombinedFingerprint, writer?: any): any;
    static decode(reader: any, length?: number): CombinedFingerprint;
    static decodeDelimited(reader: any): CombinedFingerprint;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CombinedFingerprint;
    static toObject(message: CombinedFingerprint, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ICommand { [key: string]: any }
  class Command implements ICommand {
    [key: string]: any;
    constructor(properties?: ICommand);
    static create(properties?: ICommand): Command;
    static encode(message: ICommand, writer?: any): any;
    static encodeDelimited(message: ICommand, writer?: any): any;
    static decode(reader: any, length?: number): Command;
    static decodeDelimited(reader: any): Command;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Command;
    static toObject(message: Command, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ICommentMetadata { [key: string]: any }
  class CommentMetadata implements ICommentMetadata {
    [key: string]: any;
    constructor(properties?: ICommentMetadata);
    static create(properties?: ICommentMetadata): CommentMetadata;
    static encode(message: ICommentMetadata, writer?: any): any;
    static encodeDelimited(message: ICommentMetadata, writer?: any): any;
    static decode(reader: any, length?: number): CommentMetadata;
    static decodeDelimited(reader: any): CommentMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CommentMetadata;
    static toObject(message: CommentMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ICompanionCommitment { [key: string]: any }
  class CompanionCommitment implements ICompanionCommitment {
    [key: string]: any;
    constructor(properties?: ICompanionCommitment);
    static create(properties?: ICompanionCommitment): CompanionCommitment;
    static encode(message: ICompanionCommitment, writer?: any): any;
    static encodeDelimited(message: ICompanionCommitment, writer?: any): any;
    static decode(reader: any, length?: number): CompanionCommitment;
    static decodeDelimited(reader: any): CompanionCommitment;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CompanionCommitment;
    static toObject(message: CompanionCommitment, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ICompanionEphemeralIdentity { [key: string]: any }
  class CompanionEphemeralIdentity implements ICompanionEphemeralIdentity {
    [key: string]: any;
    constructor(properties?: ICompanionEphemeralIdentity);
    static create(properties?: ICompanionEphemeralIdentity): CompanionEphemeralIdentity;
    static encode(message: ICompanionEphemeralIdentity, writer?: any): any;
    static encodeDelimited(message: ICompanionEphemeralIdentity, writer?: any): any;
    static decode(reader: any, length?: number): CompanionEphemeralIdentity;
    static decodeDelimited(reader: any): CompanionEphemeralIdentity;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CompanionEphemeralIdentity;
    static toObject(message: CompanionEphemeralIdentity, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IConfig { [key: string]: any }
  class Config implements IConfig {
    [key: string]: any;
    constructor(properties?: IConfig);
    static create(properties?: IConfig): Config;
    static encode(message: IConfig, writer?: any): any;
    static encodeDelimited(message: IConfig, writer?: any): any;
    static decode(reader: any, length?: number): Config;
    static decodeDelimited(reader: any): Config;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Config;
    static toObject(message: Config, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IConsumerApplication { [key: string]: any }
  class ConsumerApplication implements IConsumerApplication {
    [key: string]: any;
    constructor(properties?: IConsumerApplication);
    static create(properties?: IConsumerApplication): ConsumerApplication;
    static encode(message: IConsumerApplication, writer?: any): any;
    static encodeDelimited(message: IConsumerApplication, writer?: any): any;
    static decode(reader: any, length?: number): ConsumerApplication;
    static decodeDelimited(reader: any): ConsumerApplication;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ConsumerApplication;
    static toObject(message: ConsumerApplication, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ConsumerApplication {
    interface IApplicationData { [key: string]: any }
    class ApplicationData implements IApplicationData {
      [key: string]: any;
      constructor(properties?: IApplicationData);
      static create(properties?: IApplicationData): ApplicationData;
      static encode(message: IApplicationData, writer?: any): any;
      static encodeDelimited(message: IApplicationData, writer?: any): any;
      static decode(reader: any, length?: number): ApplicationData;
      static decodeDelimited(reader: any): ApplicationData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ApplicationData;
      static toObject(message: ApplicationData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAudioMessage { [key: string]: any }
    class AudioMessage implements IAudioMessage {
      [key: string]: any;
      constructor(properties?: IAudioMessage);
      static create(properties?: IAudioMessage): AudioMessage;
      static encode(message: IAudioMessage, writer?: any): any;
      static encodeDelimited(message: IAudioMessage, writer?: any): any;
      static decode(reader: any, length?: number): AudioMessage;
      static decodeDelimited(reader: any): AudioMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AudioMessage;
      static toObject(message: AudioMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IContactMessage { [key: string]: any }
    class ContactMessage implements IContactMessage {
      [key: string]: any;
      constructor(properties?: IContactMessage);
      static create(properties?: IContactMessage): ContactMessage;
      static encode(message: IContactMessage, writer?: any): any;
      static encodeDelimited(message: IContactMessage, writer?: any): any;
      static decode(reader: any, length?: number): ContactMessage;
      static decodeDelimited(reader: any): ContactMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactMessage;
      static toObject(message: ContactMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IContactsArrayMessage { [key: string]: any }
    class ContactsArrayMessage implements IContactsArrayMessage {
      [key: string]: any;
      constructor(properties?: IContactsArrayMessage);
      static create(properties?: IContactsArrayMessage): ContactsArrayMessage;
      static encode(message: IContactsArrayMessage, writer?: any): any;
      static encodeDelimited(message: IContactsArrayMessage, writer?: any): any;
      static decode(reader: any, length?: number): ContactsArrayMessage;
      static decodeDelimited(reader: any): ContactsArrayMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactsArrayMessage;
      static toObject(message: ContactsArrayMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IContent { [key: string]: any }
    class Content implements IContent {
      [key: string]: any;
      constructor(properties?: IContent);
      static create(properties?: IContent): Content;
      static encode(message: IContent, writer?: any): any;
      static encodeDelimited(message: IContent, writer?: any): any;
      static decode(reader: any, length?: number): Content;
      static decodeDelimited(reader: any): Content;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Content;
      static toObject(message: Content, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDocumentMessage { [key: string]: any }
    class DocumentMessage implements IDocumentMessage {
      [key: string]: any;
      constructor(properties?: IDocumentMessage);
      static create(properties?: IDocumentMessage): DocumentMessage;
      static encode(message: IDocumentMessage, writer?: any): any;
      static encodeDelimited(message: IDocumentMessage, writer?: any): any;
      static decode(reader: any, length?: number): DocumentMessage;
      static decodeDelimited(reader: any): DocumentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DocumentMessage;
      static toObject(message: DocumentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEditMessage { [key: string]: any }
    class EditMessage implements IEditMessage {
      [key: string]: any;
      constructor(properties?: IEditMessage);
      static create(properties?: IEditMessage): EditMessage;
      static encode(message: IEditMessage, writer?: any): any;
      static encodeDelimited(message: IEditMessage, writer?: any): any;
      static decode(reader: any, length?: number): EditMessage;
      static decodeDelimited(reader: any): EditMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EditMessage;
      static toObject(message: EditMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IExtendedTextMessage { [key: string]: any }
    class ExtendedTextMessage implements IExtendedTextMessage {
      [key: string]: any;
      constructor(properties?: IExtendedTextMessage);
      static create(properties?: IExtendedTextMessage): ExtendedTextMessage;
      static encode(message: IExtendedTextMessage, writer?: any): any;
      static encodeDelimited(message: IExtendedTextMessage, writer?: any): any;
      static decode(reader: any, length?: number): ExtendedTextMessage;
      static decodeDelimited(reader: any): ExtendedTextMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ExtendedTextMessage;
      static toObject(message: ExtendedTextMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IGroupInviteMessage { [key: string]: any }
    class GroupInviteMessage implements IGroupInviteMessage {
      [key: string]: any;
      constructor(properties?: IGroupInviteMessage);
      static create(properties?: IGroupInviteMessage): GroupInviteMessage;
      static encode(message: IGroupInviteMessage, writer?: any): any;
      static encodeDelimited(message: IGroupInviteMessage, writer?: any): any;
      static decode(reader: any, length?: number): GroupInviteMessage;
      static decodeDelimited(reader: any): GroupInviteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): GroupInviteMessage;
      static toObject(message: GroupInviteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IImageMessage { [key: string]: any }
    class ImageMessage implements IImageMessage {
      [key: string]: any;
      constructor(properties?: IImageMessage);
      static create(properties?: IImageMessage): ImageMessage;
      static encode(message: IImageMessage, writer?: any): any;
      static encodeDelimited(message: IImageMessage, writer?: any): any;
      static decode(reader: any, length?: number): ImageMessage;
      static decodeDelimited(reader: any): ImageMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ImageMessage;
      static toObject(message: ImageMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IInteractiveAnnotation { [key: string]: any }
    class InteractiveAnnotation implements IInteractiveAnnotation {
      [key: string]: any;
      constructor(properties?: IInteractiveAnnotation);
      static create(properties?: IInteractiveAnnotation): InteractiveAnnotation;
      static encode(message: IInteractiveAnnotation, writer?: any): any;
      static encodeDelimited(message: IInteractiveAnnotation, writer?: any): any;
      static decode(reader: any, length?: number): InteractiveAnnotation;
      static decodeDelimited(reader: any): InteractiveAnnotation;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InteractiveAnnotation;
      static toObject(message: InteractiveAnnotation, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILiveLocationMessage { [key: string]: any }
    class LiveLocationMessage implements ILiveLocationMessage {
      [key: string]: any;
      constructor(properties?: ILiveLocationMessage);
      static create(properties?: ILiveLocationMessage): LiveLocationMessage;
      static encode(message: ILiveLocationMessage, writer?: any): any;
      static encodeDelimited(message: ILiveLocationMessage, writer?: any): any;
      static decode(reader: any, length?: number): LiveLocationMessage;
      static decodeDelimited(reader: any): LiveLocationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LiveLocationMessage;
      static toObject(message: LiveLocationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILocation { [key: string]: any }
    class Location implements ILocation {
      [key: string]: any;
      constructor(properties?: ILocation);
      static create(properties?: ILocation): Location;
      static encode(message: ILocation, writer?: any): any;
      static encodeDelimited(message: ILocation, writer?: any): any;
      static decode(reader: any, length?: number): Location;
      static decodeDelimited(reader: any): Location;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Location;
      static toObject(message: Location, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILocationMessage { [key: string]: any }
    class LocationMessage implements ILocationMessage {
      [key: string]: any;
      constructor(properties?: ILocationMessage);
      static create(properties?: ILocationMessage): LocationMessage;
      static encode(message: ILocationMessage, writer?: any): any;
      static encodeDelimited(message: ILocationMessage, writer?: any): any;
      static decode(reader: any, length?: number): LocationMessage;
      static decodeDelimited(reader: any): LocationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LocationMessage;
      static toObject(message: LocationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMediaPayload { [key: string]: any }
    class MediaPayload implements IMediaPayload {
      [key: string]: any;
      constructor(properties?: IMediaPayload);
      static create(properties?: IMediaPayload): MediaPayload;
      static encode(message: IMediaPayload, writer?: any): any;
      static encodeDelimited(message: IMediaPayload, writer?: any): any;
      static decode(reader: any, length?: number): MediaPayload;
      static decodeDelimited(reader: any): MediaPayload;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MediaPayload;
      static toObject(message: MediaPayload, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMetadata { [key: string]: any }
    class Metadata implements IMetadata {
      [key: string]: any;
      constructor(properties?: IMetadata);
      static create(properties?: IMetadata): Metadata;
      static encode(message: IMetadata, writer?: any): any;
      static encodeDelimited(message: IMetadata, writer?: any): any;
      static decode(reader: any, length?: number): Metadata;
      static decodeDelimited(reader: any): Metadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Metadata;
      static toObject(message: Metadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IOption { [key: string]: any }
    class Option implements IOption {
      [key: string]: any;
      constructor(properties?: IOption);
      static create(properties?: IOption): Option;
      static encode(message: IOption, writer?: any): any;
      static encodeDelimited(message: IOption, writer?: any): any;
      static decode(reader: any, length?: number): Option;
      static decodeDelimited(reader: any): Option;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Option;
      static toObject(message: Option, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPayload { [key: string]: any }
    class Payload implements IPayload {
      [key: string]: any;
      constructor(properties?: IPayload);
      static create(properties?: IPayload): Payload;
      static encode(message: IPayload, writer?: any): any;
      static encodeDelimited(message: IPayload, writer?: any): any;
      static decode(reader: any, length?: number): Payload;
      static decodeDelimited(reader: any): Payload;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Payload;
      static toObject(message: Payload, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPoint { [key: string]: any }
    class Point implements IPoint {
      [key: string]: any;
      constructor(properties?: IPoint);
      static create(properties?: IPoint): Point;
      static encode(message: IPoint, writer?: any): any;
      static encodeDelimited(message: IPoint, writer?: any): any;
      static decode(reader: any, length?: number): Point;
      static decodeDelimited(reader: any): Point;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Point;
      static toObject(message: Point, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollAddOptionMessage { [key: string]: any }
    class PollAddOptionMessage implements IPollAddOptionMessage {
      [key: string]: any;
      constructor(properties?: IPollAddOptionMessage);
      static create(properties?: IPollAddOptionMessage): PollAddOptionMessage;
      static encode(message: IPollAddOptionMessage, writer?: any): any;
      static encodeDelimited(message: IPollAddOptionMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollAddOptionMessage;
      static decodeDelimited(reader: any): PollAddOptionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollAddOptionMessage;
      static toObject(message: PollAddOptionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollCreationMessage { [key: string]: any }
    class PollCreationMessage implements IPollCreationMessage {
      [key: string]: any;
      constructor(properties?: IPollCreationMessage);
      static create(properties?: IPollCreationMessage): PollCreationMessage;
      static encode(message: IPollCreationMessage, writer?: any): any;
      static encodeDelimited(message: IPollCreationMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollCreationMessage;
      static decodeDelimited(reader: any): PollCreationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollCreationMessage;
      static toObject(message: PollCreationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollEncValue { [key: string]: any }
    class PollEncValue implements IPollEncValue {
      [key: string]: any;
      constructor(properties?: IPollEncValue);
      static create(properties?: IPollEncValue): PollEncValue;
      static encode(message: IPollEncValue, writer?: any): any;
      static encodeDelimited(message: IPollEncValue, writer?: any): any;
      static decode(reader: any, length?: number): PollEncValue;
      static decodeDelimited(reader: any): PollEncValue;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollEncValue;
      static toObject(message: PollEncValue, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollUpdateMessage { [key: string]: any }
    class PollUpdateMessage implements IPollUpdateMessage {
      [key: string]: any;
      constructor(properties?: IPollUpdateMessage);
      static create(properties?: IPollUpdateMessage): PollUpdateMessage;
      static encode(message: IPollUpdateMessage, writer?: any): any;
      static encodeDelimited(message: IPollUpdateMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollUpdateMessage;
      static decodeDelimited(reader: any): PollUpdateMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollUpdateMessage;
      static toObject(message: PollUpdateMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollVoteMessage { [key: string]: any }
    class PollVoteMessage implements IPollVoteMessage {
      [key: string]: any;
      constructor(properties?: IPollVoteMessage);
      static create(properties?: IPollVoteMessage): PollVoteMessage;
      static encode(message: IPollVoteMessage, writer?: any): any;
      static encodeDelimited(message: IPollVoteMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollVoteMessage;
      static decodeDelimited(reader: any): PollVoteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollVoteMessage;
      static toObject(message: PollVoteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IReactionMessage { [key: string]: any }
    class ReactionMessage implements IReactionMessage {
      [key: string]: any;
      constructor(properties?: IReactionMessage);
      static create(properties?: IReactionMessage): ReactionMessage;
      static encode(message: IReactionMessage, writer?: any): any;
      static encodeDelimited(message: IReactionMessage, writer?: any): any;
      static decode(reader: any, length?: number): ReactionMessage;
      static decodeDelimited(reader: any): ReactionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ReactionMessage;
      static toObject(message: ReactionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRevokeMessage { [key: string]: any }
    class RevokeMessage implements IRevokeMessage {
      [key: string]: any;
      constructor(properties?: IRevokeMessage);
      static create(properties?: IRevokeMessage): RevokeMessage;
      static encode(message: IRevokeMessage, writer?: any): any;
      static encodeDelimited(message: IRevokeMessage, writer?: any): any;
      static decode(reader: any, length?: number): RevokeMessage;
      static decodeDelimited(reader: any): RevokeMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RevokeMessage;
      static toObject(message: RevokeMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISignal { [key: string]: any }
    class Signal implements ISignal {
      [key: string]: any;
      constructor(properties?: ISignal);
      static create(properties?: ISignal): Signal;
      static encode(message: ISignal, writer?: any): any;
      static encodeDelimited(message: ISignal, writer?: any): any;
      static decode(reader: any, length?: number): Signal;
      static decodeDelimited(reader: any): Signal;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Signal;
      static toObject(message: Signal, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStatusTextMesage { [key: string]: any }
    class StatusTextMesage implements IStatusTextMesage {
      [key: string]: any;
      constructor(properties?: IStatusTextMesage);
      static create(properties?: IStatusTextMesage): StatusTextMesage;
      static encode(message: IStatusTextMesage, writer?: any): any;
      static encodeDelimited(message: IStatusTextMesage, writer?: any): any;
      static decode(reader: any, length?: number): StatusTextMesage;
      static decodeDelimited(reader: any): StatusTextMesage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusTextMesage;
      static toObject(message: StatusTextMesage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStickerMessage { [key: string]: any }
    class StickerMessage implements IStickerMessage {
      [key: string]: any;
      constructor(properties?: IStickerMessage);
      static create(properties?: IStickerMessage): StickerMessage;
      static encode(message: IStickerMessage, writer?: any): any;
      static encodeDelimited(message: IStickerMessage, writer?: any): any;
      static decode(reader: any, length?: number): StickerMessage;
      static decodeDelimited(reader: any): StickerMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StickerMessage;
      static toObject(message: StickerMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISubProtocolPayload { [key: string]: any }
    class SubProtocolPayload implements ISubProtocolPayload {
      [key: string]: any;
      constructor(properties?: ISubProtocolPayload);
      static create(properties?: ISubProtocolPayload): SubProtocolPayload;
      static encode(message: ISubProtocolPayload, writer?: any): any;
      static encodeDelimited(message: ISubProtocolPayload, writer?: any): any;
      static decode(reader: any, length?: number): SubProtocolPayload;
      static decodeDelimited(reader: any): SubProtocolPayload;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SubProtocolPayload;
      static toObject(message: SubProtocolPayload, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IVideoMessage { [key: string]: any }
    class VideoMessage implements IVideoMessage {
      [key: string]: any;
      constructor(properties?: IVideoMessage);
      static create(properties?: IVideoMessage): VideoMessage;
      static encode(message: IVideoMessage, writer?: any): any;
      static encodeDelimited(message: IVideoMessage, writer?: any): any;
      static decode(reader: any, length?: number): VideoMessage;
      static decodeDelimited(reader: any): VideoMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): VideoMessage;
      static toObject(message: VideoMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IViewOnceMessage { [key: string]: any }
    class ViewOnceMessage implements IViewOnceMessage {
      [key: string]: any;
      constructor(properties?: IViewOnceMessage);
      static create(properties?: IViewOnceMessage): ViewOnceMessage;
      static encode(message: IViewOnceMessage, writer?: any): any;
      static encodeDelimited(message: IViewOnceMessage, writer?: any): any;
      static decode(reader: any, length?: number): ViewOnceMessage;
      static decodeDelimited(reader: any): ViewOnceMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ViewOnceMessage;
      static toObject(message: ViewOnceMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IContextInfo { [key: string]: any }
  class ContextInfo implements IContextInfo {
    [key: string]: any;
    constructor(properties?: IContextInfo);
    static create(properties?: IContextInfo): ContextInfo;
    static encode(message: IContextInfo, writer?: any): any;
    static encodeDelimited(message: IContextInfo, writer?: any): any;
    static decode(reader: any, length?: number): ContextInfo;
    static decodeDelimited(reader: any): ContextInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ContextInfo;
    static toObject(message: ContextInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ContextInfo {
    interface IAdReplyInfo { [key: string]: any }
    class AdReplyInfo implements IAdReplyInfo {
      [key: string]: any;
      constructor(properties?: IAdReplyInfo);
      static create(properties?: IAdReplyInfo): AdReplyInfo;
      static encode(message: IAdReplyInfo, writer?: any): any;
      static encodeDelimited(message: IAdReplyInfo, writer?: any): any;
      static decode(reader: any, length?: number): AdReplyInfo;
      static decodeDelimited(reader: any): AdReplyInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AdReplyInfo;
      static toObject(message: AdReplyInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace AdReplyInfo {
      enum MediaType {
        NONE = 0,
        IMAGE = 1,
        VIDEO = 2,
      }
    }
    interface IBusinessInteractionPills { [key: string]: any }
    class BusinessInteractionPills implements IBusinessInteractionPills {
      [key: string]: any;
      constructor(properties?: IBusinessInteractionPills);
      static create(properties?: IBusinessInteractionPills): BusinessInteractionPills;
      static encode(message: IBusinessInteractionPills, writer?: any): any;
      static encodeDelimited(message: IBusinessInteractionPills, writer?: any): any;
      static decode(reader: any, length?: number): BusinessInteractionPills;
      static decodeDelimited(reader: any): BusinessInteractionPills;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessInteractionPills;
      static toObject(message: BusinessInteractionPills, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace BusinessInteractionPills {
      enum EntryPoint {
        ENTRY_POINT_UNKNOWN = 0,
        P2P_LINK_SHARE = 1,
        CONTACT_CARD_SHARING = 2,
        PHONE_NUMBER = 3,
        STATUS = 4,
        IN_THREAD_CONTEXT_CARD = 5,
      }
      interface IPill { [key: string]: any }
      class Pill implements IPill {
        [key: string]: any;
        constructor(properties?: IPill);
        static create(properties?: IPill): Pill;
        static encode(message: IPill, writer?: any): any;
        static encodeDelimited(message: IPill, writer?: any): any;
        static decode(reader: any, length?: number): Pill;
        static decodeDelimited(reader: any): Pill;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Pill;
        static toObject(message: Pill, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum PillType {
        UNKNOWN = 0,
        VIEW_BUSINESS = 1,
        CHAT = 2,
        CALL = 3,
        CATALOG = 4,
        CHANNEL = 5,
        BOOK_APPOINTMENT = 6,
        OFFERS = 7,
        BESTSELLERS = 8,
        MENU = 9,
        ABOUT = 10,
        SHOP = 11,
        ORDER = 12,
      }
      interface ISignedPayload { [key: string]: any }
      class SignedPayload implements ISignedPayload {
        [key: string]: any;
        constructor(properties?: ISignedPayload);
        static create(properties?: ISignedPayload): SignedPayload;
        static encode(message: ISignedPayload, writer?: any): any;
        static encodeDelimited(message: ISignedPayload, writer?: any): any;
        static decode(reader: any, length?: number): SignedPayload;
        static decodeDelimited(reader: any): SignedPayload;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): SignedPayload;
        static toObject(message: SignedPayload, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IUnauthenticatedBusinessMetadata { [key: string]: any }
      class UnauthenticatedBusinessMetadata implements IUnauthenticatedBusinessMetadata {
        [key: string]: any;
        constructor(properties?: IUnauthenticatedBusinessMetadata);
        static create(properties?: IUnauthenticatedBusinessMetadata): UnauthenticatedBusinessMetadata;
        static encode(message: IUnauthenticatedBusinessMetadata, writer?: any): any;
        static encodeDelimited(message: IUnauthenticatedBusinessMetadata, writer?: any): any;
        static decode(reader: any, length?: number): UnauthenticatedBusinessMetadata;
        static decodeDelimited(reader: any): UnauthenticatedBusinessMetadata;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): UnauthenticatedBusinessMetadata;
        static toObject(message: UnauthenticatedBusinessMetadata, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IBusinessMessageForwardInfo { [key: string]: any }
    class BusinessMessageForwardInfo implements IBusinessMessageForwardInfo {
      [key: string]: any;
      constructor(properties?: IBusinessMessageForwardInfo);
      static create(properties?: IBusinessMessageForwardInfo): BusinessMessageForwardInfo;
      static encode(message: IBusinessMessageForwardInfo, writer?: any): any;
      static encodeDelimited(message: IBusinessMessageForwardInfo, writer?: any): any;
      static decode(reader: any, length?: number): BusinessMessageForwardInfo;
      static decodeDelimited(reader: any): BusinessMessageForwardInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessMessageForwardInfo;
      static toObject(message: BusinessMessageForwardInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum CrossAppSource {
      CROSS_APP_SOURCE_UNKNOWN = 0,
      CROSS_APP_SOURCE_INSTAGRAM = 1,
      CROSS_APP_SOURCE_FACEBOOK = 2,
    }
    interface IDataSharingContext { [key: string]: any }
    class DataSharingContext implements IDataSharingContext {
      [key: string]: any;
      constructor(properties?: IDataSharingContext);
      static create(properties?: IDataSharingContext): DataSharingContext;
      static encode(message: IDataSharingContext, writer?: any): any;
      static encodeDelimited(message: IDataSharingContext, writer?: any): any;
      static decode(reader: any, length?: number): DataSharingContext;
      static decodeDelimited(reader: any): DataSharingContext;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DataSharingContext;
      static toObject(message: DataSharingContext, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace DataSharingContext {
      enum DataSharingFlags {
        SHOW_MM_DISCLOSURE_ON_CLICK = 1,
        SHOW_MM_DISCLOSURE_ON_READ = 2,
      }
      interface IParameters { [key: string]: any }
      class Parameters implements IParameters {
        [key: string]: any;
        constructor(properties?: IParameters);
        static create(properties?: IParameters): Parameters;
        static encode(message: IParameters, writer?: any): any;
        static encodeDelimited(message: IParameters, writer?: any): any;
        static decode(reader: any, length?: number): Parameters;
        static decodeDelimited(reader: any): Parameters;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Parameters;
        static toObject(message: Parameters, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IExternalAdReplyInfo { [key: string]: any }
    class ExternalAdReplyInfo implements IExternalAdReplyInfo {
      [key: string]: any;
      constructor(properties?: IExternalAdReplyInfo);
      static create(properties?: IExternalAdReplyInfo): ExternalAdReplyInfo;
      static encode(message: IExternalAdReplyInfo, writer?: any): any;
      static encodeDelimited(message: IExternalAdReplyInfo, writer?: any): any;
      static decode(reader: any, length?: number): ExternalAdReplyInfo;
      static decodeDelimited(reader: any): ExternalAdReplyInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ExternalAdReplyInfo;
      static toObject(message: ExternalAdReplyInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ExternalAdReplyInfo {
      enum AdType {
        CTWA = 0,
        CAWC = 1,
      }
      enum MediaType {
        NONE = 0,
        IMAGE = 1,
        VIDEO = 2,
      }
    }
    interface IFeatureEligibilities { [key: string]: any }
    class FeatureEligibilities implements IFeatureEligibilities {
      [key: string]: any;
      constructor(properties?: IFeatureEligibilities);
      static create(properties?: IFeatureEligibilities): FeatureEligibilities;
      static encode(message: IFeatureEligibilities, writer?: any): any;
      static encodeDelimited(message: IFeatureEligibilities, writer?: any): any;
      static decode(reader: any, length?: number): FeatureEligibilities;
      static decodeDelimited(reader: any): FeatureEligibilities;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FeatureEligibilities;
      static toObject(message: FeatureEligibilities, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum ForwardOrigin {
      UNKNOWN = 0,
      CHAT = 1,
      STATUS = 2,
      CHANNELS = 3,
      META_AI = 4,
      UGC = 5,
    }
    interface IForwardedNewsletterMessageInfo { [key: string]: any }
    class ForwardedNewsletterMessageInfo implements IForwardedNewsletterMessageInfo {
      [key: string]: any;
      constructor(properties?: IForwardedNewsletterMessageInfo);
      static create(properties?: IForwardedNewsletterMessageInfo): ForwardedNewsletterMessageInfo;
      static encode(message: IForwardedNewsletterMessageInfo, writer?: any): any;
      static encodeDelimited(message: IForwardedNewsletterMessageInfo, writer?: any): any;
      static decode(reader: any, length?: number): ForwardedNewsletterMessageInfo;
      static decodeDelimited(reader: any): ForwardedNewsletterMessageInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ForwardedNewsletterMessageInfo;
      static toObject(message: ForwardedNewsletterMessageInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ForwardedNewsletterMessageInfo {
      enum ContentType {
        UPDATE = 1,
        UPDATE_CARD = 2,
        LINK_CARD = 3,
      }
    }
    interface IInstagramThreadLink { [key: string]: any }
    class InstagramThreadLink implements IInstagramThreadLink {
      [key: string]: any;
      constructor(properties?: IInstagramThreadLink);
      static create(properties?: IInstagramThreadLink): InstagramThreadLink;
      static encode(message: IInstagramThreadLink, writer?: any): any;
      static encodeDelimited(message: IInstagramThreadLink, writer?: any): any;
      static decode(reader: any, length?: number): InstagramThreadLink;
      static decodeDelimited(reader: any): InstagramThreadLink;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InstagramThreadLink;
      static toObject(message: InstagramThreadLink, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum PairedMediaType {
      NOT_PAIRED_MEDIA = 0,
      SD_VIDEO_PARENT = 1,
      HD_VIDEO_CHILD = 2,
      SD_IMAGE_PARENT = 3,
      HD_IMAGE_CHILD = 4,
      MOTION_PHOTO_PARENT = 5,
      MOTION_PHOTO_CHILD = 6,
      HEVC_VIDEO_PARENT = 7,
      HEVC_VIDEO_CHILD = 8,
    }
    interface IPartiallySelectedContent { [key: string]: any }
    class PartiallySelectedContent implements IPartiallySelectedContent {
      [key: string]: any;
      constructor(properties?: IPartiallySelectedContent);
      static create(properties?: IPartiallySelectedContent): PartiallySelectedContent;
      static encode(message: IPartiallySelectedContent, writer?: any): any;
      static encodeDelimited(message: IPartiallySelectedContent, writer?: any): any;
      static decode(reader: any, length?: number): PartiallySelectedContent;
      static decodeDelimited(reader: any): PartiallySelectedContent;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PartiallySelectedContent;
      static toObject(message: PartiallySelectedContent, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IQuestionReplyQuotedMessage { [key: string]: any }
    class QuestionReplyQuotedMessage implements IQuestionReplyQuotedMessage {
      [key: string]: any;
      constructor(properties?: IQuestionReplyQuotedMessage);
      static create(properties?: IQuestionReplyQuotedMessage): QuestionReplyQuotedMessage;
      static encode(message: IQuestionReplyQuotedMessage, writer?: any): any;
      static encodeDelimited(message: IQuestionReplyQuotedMessage, writer?: any): any;
      static decode(reader: any, length?: number): QuestionReplyQuotedMessage;
      static decodeDelimited(reader: any): QuestionReplyQuotedMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): QuestionReplyQuotedMessage;
      static toObject(message: QuestionReplyQuotedMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum QuotedType {
      EXPLICIT = 0,
      AUTO = 1,
    }
    enum StatusAttributionType {
      NONE = 0,
      RESHARED_FROM_MENTION = 1,
      RESHARED_FROM_POST = 2,
      RESHARED_FROM_POST_MANY_TIMES = 3,
      FORWARDED_FROM_STATUS = 4,
    }
    interface IStatusAudienceMetadata { [key: string]: any }
    class StatusAudienceMetadata implements IStatusAudienceMetadata {
      [key: string]: any;
      constructor(properties?: IStatusAudienceMetadata);
      static create(properties?: IStatusAudienceMetadata): StatusAudienceMetadata;
      static encode(message: IStatusAudienceMetadata, writer?: any): any;
      static encodeDelimited(message: IStatusAudienceMetadata, writer?: any): any;
      static decode(reader: any, length?: number): StatusAudienceMetadata;
      static decodeDelimited(reader: any): StatusAudienceMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusAudienceMetadata;
      static toObject(message: StatusAudienceMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusAudienceMetadata {
      enum AudienceType {
        UNKNOWN = 0,
        CLOSE_FRIENDS = 1,
      }
    }
    enum StatusSourceType {
      IMAGE = 0,
      VIDEO = 1,
      GIF = 2,
      AUDIO = 3,
      TEXT = 4,
      MUSIC_STANDALONE = 5,
    }
    interface IUTMInfo { [key: string]: any }
    class UTMInfo implements IUTMInfo {
      [key: string]: any;
      constructor(properties?: IUTMInfo);
      static create(properties?: IUTMInfo): UTMInfo;
      static encode(message: IUTMInfo, writer?: any): any;
      static encodeDelimited(message: IUTMInfo, writer?: any): any;
      static decode(reader: any, length?: number): UTMInfo;
      static decodeDelimited(reader: any): UTMInfo;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UTMInfo;
      static toObject(message: UTMInfo, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IConversation { [key: string]: any }
  class Conversation implements IConversation {
    [key: string]: any;
    constructor(properties?: IConversation);
    static create(properties?: IConversation): Conversation;
    static encode(message: IConversation, writer?: any): any;
    static encodeDelimited(message: IConversation, writer?: any): any;
    static decode(reader: any, length?: number): Conversation;
    static decodeDelimited(reader: any): Conversation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Conversation;
    static toObject(message: Conversation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace Conversation {
    enum EndOfHistoryTransferType {
      COMPLETE_BUT_MORE_MESSAGES_REMAIN_ON_PRIMARY = 0,
      COMPLETE_AND_NO_MORE_MESSAGE_REMAIN_ON_PRIMARY = 1,
      COMPLETE_ON_DEMAND_SYNC_BUT_MORE_MSG_REMAIN_ON_PRIMARY = 2,
      COMPLETE_ON_DEMAND_SYNC_WITH_MORE_MSG_ON_PRIMARY_BUT_NO_ACCESS = 3,
    }
    enum GroupAppealStatus {
      NO_APPEAL = 0,
      APPEAL_IN_REVIEW = 1,
      APPEAL_APPROVED = 2,
      APPEAL_REJECTED = 3,
    }
  }
  interface ICreateBackupInput { [key: string]: any }
  class CreateBackupInput implements ICreateBackupInput {
    [key: string]: any;
    constructor(properties?: ICreateBackupInput);
    static create(properties?: ICreateBackupInput): CreateBackupInput;
    static encode(message: ICreateBackupInput, writer?: any): any;
    static encodeDelimited(message: ICreateBackupInput, writer?: any): any;
    static decode(reader: any, length?: number): CreateBackupInput;
    static decodeDelimited(reader: any): CreateBackupInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CreateBackupInput;
    static toObject(message: CreateBackupInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ICreateBackupOutput { [key: string]: any }
  class CreateBackupOutput implements ICreateBackupOutput {
    [key: string]: any;
    constructor(properties?: ICreateBackupOutput);
    static create(properties?: ICreateBackupOutput): CreateBackupOutput;
    static encode(message: ICreateBackupOutput, writer?: any): any;
    static encodeDelimited(message: ICreateBackupOutput, writer?: any): any;
    static decode(reader: any, length?: number): CreateBackupOutput;
    static decodeDelimited(reader: any): CreateBackupOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): CreateBackupOutput;
    static toObject(message: CreateBackupOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMekForDistributionFromTransportSenderInput { [key: string]: any }
  class DecryptMekForDistributionFromTransportSenderInput implements IDecryptMekForDistributionFromTransportSenderInput {
    [key: string]: any;
    constructor(properties?: IDecryptMekForDistributionFromTransportSenderInput);
    static create(properties?: IDecryptMekForDistributionFromTransportSenderInput): DecryptMekForDistributionFromTransportSenderInput;
    static encode(message: IDecryptMekForDistributionFromTransportSenderInput, writer?: any): any;
    static encodeDelimited(message: IDecryptMekForDistributionFromTransportSenderInput, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMekForDistributionFromTransportSenderInput;
    static decodeDelimited(reader: any): DecryptMekForDistributionFromTransportSenderInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMekForDistributionFromTransportSenderInput;
    static toObject(message: DecryptMekForDistributionFromTransportSenderInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace DecryptMekForDistributionFromTransportSenderInput {
    interface ITransportSenderMEKDistributionSingleRecipient { [key: string]: any }
    class TransportSenderMEKDistributionSingleRecipient implements ITransportSenderMEKDistributionSingleRecipient {
      [key: string]: any;
      constructor(properties?: ITransportSenderMEKDistributionSingleRecipient);
      static create(properties?: ITransportSenderMEKDistributionSingleRecipient): TransportSenderMEKDistributionSingleRecipient;
      static encode(message: ITransportSenderMEKDistributionSingleRecipient, writer?: any): any;
      static encodeDelimited(message: ITransportSenderMEKDistributionSingleRecipient, writer?: any): any;
      static decode(reader: any, length?: number): TransportSenderMEKDistributionSingleRecipient;
      static decodeDelimited(reader: any): TransportSenderMEKDistributionSingleRecipient;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): TransportSenderMEKDistributionSingleRecipient;
      static toObject(message: TransportSenderMEKDistributionSingleRecipient, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IDecryptMekForDistributionFromTransportSenderResult { [key: string]: any }
  class DecryptMekForDistributionFromTransportSenderResult implements IDecryptMekForDistributionFromTransportSenderResult {
    [key: string]: any;
    constructor(properties?: IDecryptMekForDistributionFromTransportSenderResult);
    static create(properties?: IDecryptMekForDistributionFromTransportSenderResult): DecryptMekForDistributionFromTransportSenderResult;
    static encode(message: IDecryptMekForDistributionFromTransportSenderResult, writer?: any): any;
    static encodeDelimited(message: IDecryptMekForDistributionFromTransportSenderResult, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMekForDistributionFromTransportSenderResult;
    static decodeDelimited(reader: any): DecryptMekForDistributionFromTransportSenderResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMekForDistributionFromTransportSenderResult;
    static toObject(message: DecryptMekForDistributionFromTransportSenderResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMekForDistributionFromTransportSenderSuccess { [key: string]: any }
  class DecryptMekForDistributionFromTransportSenderSuccess implements IDecryptMekForDistributionFromTransportSenderSuccess {
    [key: string]: any;
    constructor(properties?: IDecryptMekForDistributionFromTransportSenderSuccess);
    static create(properties?: IDecryptMekForDistributionFromTransportSenderSuccess): DecryptMekForDistributionFromTransportSenderSuccess;
    static encode(message: IDecryptMekForDistributionFromTransportSenderSuccess, writer?: any): any;
    static encodeDelimited(message: IDecryptMekForDistributionFromTransportSenderSuccess, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMekForDistributionFromTransportSenderSuccess;
    static decodeDelimited(reader: any): DecryptMekForDistributionFromTransportSenderSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMekForDistributionFromTransportSenderSuccess;
    static toObject(message: DecryptMekForDistributionFromTransportSenderSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMekForDistributionInput { [key: string]: any }
  class DecryptMekForDistributionInput implements IDecryptMekForDistributionInput {
    [key: string]: any;
    constructor(properties?: IDecryptMekForDistributionInput);
    static create(properties?: IDecryptMekForDistributionInput): DecryptMekForDistributionInput;
    static encode(message: IDecryptMekForDistributionInput, writer?: any): any;
    static encodeDelimited(message: IDecryptMekForDistributionInput, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMekForDistributionInput;
    static decodeDelimited(reader: any): DecryptMekForDistributionInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMekForDistributionInput;
    static toObject(message: DecryptMekForDistributionInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMekForDistributionResult { [key: string]: any }
  class DecryptMekForDistributionResult implements IDecryptMekForDistributionResult {
    [key: string]: any;
    constructor(properties?: IDecryptMekForDistributionResult);
    static create(properties?: IDecryptMekForDistributionResult): DecryptMekForDistributionResult;
    static encode(message: IDecryptMekForDistributionResult, writer?: any): any;
    static encodeDelimited(message: IDecryptMekForDistributionResult, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMekForDistributionResult;
    static decodeDelimited(reader: any): DecryptMekForDistributionResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMekForDistributionResult;
    static toObject(message: DecryptMekForDistributionResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMekForDistributionSuccess { [key: string]: any }
  class DecryptMekForDistributionSuccess implements IDecryptMekForDistributionSuccess {
    [key: string]: any;
    constructor(properties?: IDecryptMekForDistributionSuccess);
    static create(properties?: IDecryptMekForDistributionSuccess): DecryptMekForDistributionSuccess;
    static encode(message: IDecryptMekForDistributionSuccess, writer?: any): any;
    static encodeDelimited(message: IDecryptMekForDistributionSuccess, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMekForDistributionSuccess;
    static decodeDelimited(reader: any): DecryptMekForDistributionSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMekForDistributionSuccess;
    static toObject(message: DecryptMekForDistributionSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMessageInput { [key: string]: any }
  class DecryptMessageInput implements IDecryptMessageInput {
    [key: string]: any;
    constructor(properties?: IDecryptMessageInput);
    static create(properties?: IDecryptMessageInput): DecryptMessageInput;
    static encode(message: IDecryptMessageInput, writer?: any): any;
    static encodeDelimited(message: IDecryptMessageInput, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMessageInput;
    static decodeDelimited(reader: any): DecryptMessageInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMessageInput;
    static toObject(message: DecryptMessageInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptMessageOutput { [key: string]: any }
  class DecryptMessageOutput implements IDecryptMessageOutput {
    [key: string]: any;
    constructor(properties?: IDecryptMessageOutput);
    static create(properties?: IDecryptMessageOutput): DecryptMessageOutput;
    static encode(message: IDecryptMessageOutput, writer?: any): any;
    static encodeDelimited(message: IDecryptMessageOutput, writer?: any): any;
    static decode(reader: any, length?: number): DecryptMessageOutput;
    static decodeDelimited(reader: any): DecryptMessageOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptMessageOutput;
    static toObject(message: DecryptMessageOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptSelfMmkDistributionInput { [key: string]: any }
  class DecryptSelfMmkDistributionInput implements IDecryptSelfMmkDistributionInput {
    [key: string]: any;
    constructor(properties?: IDecryptSelfMmkDistributionInput);
    static create(properties?: IDecryptSelfMmkDistributionInput): DecryptSelfMmkDistributionInput;
    static encode(message: IDecryptSelfMmkDistributionInput, writer?: any): any;
    static encodeDelimited(message: IDecryptSelfMmkDistributionInput, writer?: any): any;
    static decode(reader: any, length?: number): DecryptSelfMmkDistributionInput;
    static decodeDelimited(reader: any): DecryptSelfMmkDistributionInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptSelfMmkDistributionInput;
    static toObject(message: DecryptSelfMmkDistributionInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptSelfMmkDistributionResult { [key: string]: any }
  class DecryptSelfMmkDistributionResult implements IDecryptSelfMmkDistributionResult {
    [key: string]: any;
    constructor(properties?: IDecryptSelfMmkDistributionResult);
    static create(properties?: IDecryptSelfMmkDistributionResult): DecryptSelfMmkDistributionResult;
    static encode(message: IDecryptSelfMmkDistributionResult, writer?: any): any;
    static encodeDelimited(message: IDecryptSelfMmkDistributionResult, writer?: any): any;
    static decode(reader: any, length?: number): DecryptSelfMmkDistributionResult;
    static decodeDelimited(reader: any): DecryptSelfMmkDistributionResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptSelfMmkDistributionResult;
    static toObject(message: DecryptSelfMmkDistributionResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDecryptSelfMmkDistributionSuccess { [key: string]: any }
  class DecryptSelfMmkDistributionSuccess implements IDecryptSelfMmkDistributionSuccess {
    [key: string]: any;
    constructor(properties?: IDecryptSelfMmkDistributionSuccess);
    static create(properties?: IDecryptSelfMmkDistributionSuccess): DecryptSelfMmkDistributionSuccess;
    static encode(message: IDecryptSelfMmkDistributionSuccess, writer?: any): any;
    static encodeDelimited(message: IDecryptSelfMmkDistributionSuccess, writer?: any): any;
    static decode(reader: any, length?: number): DecryptSelfMmkDistributionSuccess;
    static decodeDelimited(reader: any): DecryptSelfMmkDistributionSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DecryptSelfMmkDistributionSuccess;
    static toObject(message: DecryptSelfMmkDistributionSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveAttachmentAccessTokenSecretInput { [key: string]: any }
  class DeriveAttachmentAccessTokenSecretInput implements IDeriveAttachmentAccessTokenSecretInput {
    [key: string]: any;
    constructor(properties?: IDeriveAttachmentAccessTokenSecretInput);
    static create(properties?: IDeriveAttachmentAccessTokenSecretInput): DeriveAttachmentAccessTokenSecretInput;
    static encode(message: IDeriveAttachmentAccessTokenSecretInput, writer?: any): any;
    static encodeDelimited(message: IDeriveAttachmentAccessTokenSecretInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveAttachmentAccessTokenSecretInput;
    static decodeDelimited(reader: any): DeriveAttachmentAccessTokenSecretInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveAttachmentAccessTokenSecretInput;
    static toObject(message: DeriveAttachmentAccessTokenSecretInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveAttachmentAccessTokenSecretResult { [key: string]: any }
  class DeriveAttachmentAccessTokenSecretResult implements IDeriveAttachmentAccessTokenSecretResult {
    [key: string]: any;
    constructor(properties?: IDeriveAttachmentAccessTokenSecretResult);
    static create(properties?: IDeriveAttachmentAccessTokenSecretResult): DeriveAttachmentAccessTokenSecretResult;
    static encode(message: IDeriveAttachmentAccessTokenSecretResult, writer?: any): any;
    static encodeDelimited(message: IDeriveAttachmentAccessTokenSecretResult, writer?: any): any;
    static decode(reader: any, length?: number): DeriveAttachmentAccessTokenSecretResult;
    static decodeDelimited(reader: any): DeriveAttachmentAccessTokenSecretResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveAttachmentAccessTokenSecretResult;
    static toObject(message: DeriveAttachmentAccessTokenSecretResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveAttachmentPrimaryKeySecretInput { [key: string]: any }
  class DeriveAttachmentPrimaryKeySecretInput implements IDeriveAttachmentPrimaryKeySecretInput {
    [key: string]: any;
    constructor(properties?: IDeriveAttachmentPrimaryKeySecretInput);
    static create(properties?: IDeriveAttachmentPrimaryKeySecretInput): DeriveAttachmentPrimaryKeySecretInput;
    static encode(message: IDeriveAttachmentPrimaryKeySecretInput, writer?: any): any;
    static encodeDelimited(message: IDeriveAttachmentPrimaryKeySecretInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveAttachmentPrimaryKeySecretInput;
    static decodeDelimited(reader: any): DeriveAttachmentPrimaryKeySecretInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveAttachmentPrimaryKeySecretInput;
    static toObject(message: DeriveAttachmentPrimaryKeySecretInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveAttachmentPrimaryKeySecretResult { [key: string]: any }
  class DeriveAttachmentPrimaryKeySecretResult implements IDeriveAttachmentPrimaryKeySecretResult {
    [key: string]: any;
    constructor(properties?: IDeriveAttachmentPrimaryKeySecretResult);
    static create(properties?: IDeriveAttachmentPrimaryKeySecretResult): DeriveAttachmentPrimaryKeySecretResult;
    static encode(message: IDeriveAttachmentPrimaryKeySecretResult, writer?: any): any;
    static encodeDelimited(message: IDeriveAttachmentPrimaryKeySecretResult, writer?: any): any;
    static decode(reader: any, length?: number): DeriveAttachmentPrimaryKeySecretResult;
    static decodeDelimited(reader: any): DeriveAttachmentPrimaryKeySecretResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveAttachmentPrimaryKeySecretResult;
    static toObject(message: DeriveAttachmentPrimaryKeySecretResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxAuthKeypairInput { [key: string]: any }
  class DeriveMailboxAuthKeypairInput implements IDeriveMailboxAuthKeypairInput {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxAuthKeypairInput);
    static create(properties?: IDeriveMailboxAuthKeypairInput): DeriveMailboxAuthKeypairInput;
    static encode(message: IDeriveMailboxAuthKeypairInput, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxAuthKeypairInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxAuthKeypairInput;
    static decodeDelimited(reader: any): DeriveMailboxAuthKeypairInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxAuthKeypairInput;
    static toObject(message: DeriveMailboxAuthKeypairInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxAuthKeypairResult { [key: string]: any }
  class DeriveMailboxAuthKeypairResult implements IDeriveMailboxAuthKeypairResult {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxAuthKeypairResult);
    static create(properties?: IDeriveMailboxAuthKeypairResult): DeriveMailboxAuthKeypairResult;
    static encode(message: IDeriveMailboxAuthKeypairResult, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxAuthKeypairResult, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxAuthKeypairResult;
    static decodeDelimited(reader: any): DeriveMailboxAuthKeypairResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxAuthKeypairResult;
    static toObject(message: DeriveMailboxAuthKeypairResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxEncryptionKeypairInput { [key: string]: any }
  class DeriveMailboxEncryptionKeypairInput implements IDeriveMailboxEncryptionKeypairInput {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxEncryptionKeypairInput);
    static create(properties?: IDeriveMailboxEncryptionKeypairInput): DeriveMailboxEncryptionKeypairInput;
    static encode(message: IDeriveMailboxEncryptionKeypairInput, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxEncryptionKeypairInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxEncryptionKeypairInput;
    static decodeDelimited(reader: any): DeriveMailboxEncryptionKeypairInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxEncryptionKeypairInput;
    static toObject(message: DeriveMailboxEncryptionKeypairInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxEncryptionKeypairResult { [key: string]: any }
  class DeriveMailboxEncryptionKeypairResult implements IDeriveMailboxEncryptionKeypairResult {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxEncryptionKeypairResult);
    static create(properties?: IDeriveMailboxEncryptionKeypairResult): DeriveMailboxEncryptionKeypairResult;
    static encode(message: IDeriveMailboxEncryptionKeypairResult, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxEncryptionKeypairResult, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxEncryptionKeypairResult;
    static decodeDelimited(reader: any): DeriveMailboxEncryptionKeypairResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxEncryptionKeypairResult;
    static toObject(message: DeriveMailboxEncryptionKeypairResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxSigningKeypairInput { [key: string]: any }
  class DeriveMailboxSigningKeypairInput implements IDeriveMailboxSigningKeypairInput {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxSigningKeypairInput);
    static create(properties?: IDeriveMailboxSigningKeypairInput): DeriveMailboxSigningKeypairInput;
    static encode(message: IDeriveMailboxSigningKeypairInput, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxSigningKeypairInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxSigningKeypairInput;
    static decodeDelimited(reader: any): DeriveMailboxSigningKeypairInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxSigningKeypairInput;
    static toObject(message: DeriveMailboxSigningKeypairInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxSigningKeypairResult { [key: string]: any }
  class DeriveMailboxSigningKeypairResult implements IDeriveMailboxSigningKeypairResult {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxSigningKeypairResult);
    static create(properties?: IDeriveMailboxSigningKeypairResult): DeriveMailboxSigningKeypairResult;
    static encode(message: IDeriveMailboxSigningKeypairResult, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxSigningKeypairResult, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxSigningKeypairResult;
    static decodeDelimited(reader: any): DeriveMailboxSigningKeypairResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxSigningKeypairResult;
    static toObject(message: DeriveMailboxSigningKeypairResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMailboxSigningKeypairSuccess { [key: string]: any }
  class DeriveMailboxSigningKeypairSuccess implements IDeriveMailboxSigningKeypairSuccess {
    [key: string]: any;
    constructor(properties?: IDeriveMailboxSigningKeypairSuccess);
    static create(properties?: IDeriveMailboxSigningKeypairSuccess): DeriveMailboxSigningKeypairSuccess;
    static encode(message: IDeriveMailboxSigningKeypairSuccess, writer?: any): any;
    static encodeDelimited(message: IDeriveMailboxSigningKeypairSuccess, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMailboxSigningKeypairSuccess;
    static decodeDelimited(reader: any): DeriveMailboxSigningKeypairSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMailboxSigningKeypairSuccess;
    static toObject(message: DeriveMailboxSigningKeypairSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMessageKeyInput { [key: string]: any }
  class DeriveMessageKeyInput implements IDeriveMessageKeyInput {
    [key: string]: any;
    constructor(properties?: IDeriveMessageKeyInput);
    static create(properties?: IDeriveMessageKeyInput): DeriveMessageKeyInput;
    static encode(message: IDeriveMessageKeyInput, writer?: any): any;
    static encodeDelimited(message: IDeriveMessageKeyInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMessageKeyInput;
    static decodeDelimited(reader: any): DeriveMessageKeyInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMessageKeyInput;
    static toObject(message: DeriveMessageKeyInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMessageKeyOutput { [key: string]: any }
  class DeriveMessageKeyOutput implements IDeriveMessageKeyOutput {
    [key: string]: any;
    constructor(properties?: IDeriveMessageKeyOutput);
    static create(properties?: IDeriveMessageKeyOutput): DeriveMessageKeyOutput;
    static encode(message: IDeriveMessageKeyOutput, writer?: any): any;
    static encodeDelimited(message: IDeriveMessageKeyOutput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMessageKeyOutput;
    static decodeDelimited(reader: any): DeriveMessageKeyOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMessageKeyOutput;
    static toObject(message: DeriveMessageKeyOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMessagingMailboxKeypairsInput { [key: string]: any }
  class DeriveMessagingMailboxKeypairsInput implements IDeriveMessagingMailboxKeypairsInput {
    [key: string]: any;
    constructor(properties?: IDeriveMessagingMailboxKeypairsInput);
    static create(properties?: IDeriveMessagingMailboxKeypairsInput): DeriveMessagingMailboxKeypairsInput;
    static encode(message: IDeriveMessagingMailboxKeypairsInput, writer?: any): any;
    static encodeDelimited(message: IDeriveMessagingMailboxKeypairsInput, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMessagingMailboxKeypairsInput;
    static decodeDelimited(reader: any): DeriveMessagingMailboxKeypairsInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMessagingMailboxKeypairsInput;
    static toObject(message: DeriveMessagingMailboxKeypairsInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMessagingMailboxKeypairsResult { [key: string]: any }
  class DeriveMessagingMailboxKeypairsResult implements IDeriveMessagingMailboxKeypairsResult {
    [key: string]: any;
    constructor(properties?: IDeriveMessagingMailboxKeypairsResult);
    static create(properties?: IDeriveMessagingMailboxKeypairsResult): DeriveMessagingMailboxKeypairsResult;
    static encode(message: IDeriveMessagingMailboxKeypairsResult, writer?: any): any;
    static encodeDelimited(message: IDeriveMessagingMailboxKeypairsResult, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMessagingMailboxKeypairsResult;
    static decodeDelimited(reader: any): DeriveMessagingMailboxKeypairsResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMessagingMailboxKeypairsResult;
    static toObject(message: DeriveMessagingMailboxKeypairsResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeriveMessagingMailboxKeypairsSuccess { [key: string]: any }
  class DeriveMessagingMailboxKeypairsSuccess implements IDeriveMessagingMailboxKeypairsSuccess {
    [key: string]: any;
    constructor(properties?: IDeriveMessagingMailboxKeypairsSuccess);
    static create(properties?: IDeriveMessagingMailboxKeypairsSuccess): DeriveMessagingMailboxKeypairsSuccess;
    static encode(message: IDeriveMessagingMailboxKeypairsSuccess, writer?: any): any;
    static encodeDelimited(message: IDeriveMessagingMailboxKeypairsSuccess, writer?: any): any;
    static decode(reader: any, length?: number): DeriveMessagingMailboxKeypairsSuccess;
    static decodeDelimited(reader: any): DeriveMessagingMailboxKeypairsSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeriveMessagingMailboxKeypairsSuccess;
    static toObject(message: DeriveMessagingMailboxKeypairsSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDetachedDevicePublicData { [key: string]: any }
  class DetachedDevicePublicData implements IDetachedDevicePublicData {
    [key: string]: any;
    constructor(properties?: IDetachedDevicePublicData);
    static create(properties?: IDetachedDevicePublicData): DetachedDevicePublicData;
    static encode(message: IDetachedDevicePublicData, writer?: any): any;
    static encodeDelimited(message: IDetachedDevicePublicData, writer?: any): any;
    static decode(reader: any, length?: number): DetachedDevicePublicData;
    static decodeDelimited(reader: any): DetachedDevicePublicData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DetachedDevicePublicData;
    static toObject(message: DetachedDevicePublicData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeviceCapabilities { [key: string]: any }
  class DeviceCapabilities implements IDeviceCapabilities {
    [key: string]: any;
    constructor(properties?: IDeviceCapabilities);
    static create(properties?: IDeviceCapabilities): DeviceCapabilities;
    static encode(message: IDeviceCapabilities, writer?: any): any;
    static encodeDelimited(message: IDeviceCapabilities, writer?: any): any;
    static decode(reader: any, length?: number): DeviceCapabilities;
    static decodeDelimited(reader: any): DeviceCapabilities;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeviceCapabilities;
    static toObject(message: DeviceCapabilities, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace DeviceCapabilities {
    interface IAiFbidMigration { [key: string]: any }
    class AiFbidMigration implements IAiFbidMigration {
      [key: string]: any;
      constructor(properties?: IAiFbidMigration);
      static create(properties?: IAiFbidMigration): AiFbidMigration;
      static encode(message: IAiFbidMigration, writer?: any): any;
      static encodeDelimited(message: IAiFbidMigration, writer?: any): any;
      static decode(reader: any, length?: number): AiFbidMigration;
      static decodeDelimited(reader: any): AiFbidMigration;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AiFbidMigration;
      static toObject(message: AiFbidMigration, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAiThread { [key: string]: any }
    class AiThread implements IAiThread {
      [key: string]: any;
      constructor(properties?: IAiThread);
      static create(properties?: IAiThread): AiThread;
      static encode(message: IAiThread, writer?: any): any;
      static encodeDelimited(message: IAiThread, writer?: any): any;
      static decode(reader: any, length?: number): AiThread;
      static decodeDelimited(reader: any): AiThread;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AiThread;
      static toObject(message: AiThread, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace AiThread {
      enum SupportLevel {
        NONE = 0,
        INFRA = 1,
        FULL = 2,
      }
    }
    interface IBizAiSettingsSync { [key: string]: any }
    class BizAiSettingsSync implements IBizAiSettingsSync {
      [key: string]: any;
      constructor(properties?: IBizAiSettingsSync);
      static create(properties?: IBizAiSettingsSync): BizAiSettingsSync;
      static encode(message: IBizAiSettingsSync, writer?: any): any;
      static encodeDelimited(message: IBizAiSettingsSync, writer?: any): any;
      static decode(reader: any, length?: number): BizAiSettingsSync;
      static decodeDelimited(reader: any): BizAiSettingsSync;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BizAiSettingsSync;
      static toObject(message: BizAiSettingsSync, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBusinessBroadcast { [key: string]: any }
    class BusinessBroadcast implements IBusinessBroadcast {
      [key: string]: any;
      constructor(properties?: IBusinessBroadcast);
      static create(properties?: IBusinessBroadcast): BusinessBroadcast;
      static encode(message: IBusinessBroadcast, writer?: any): any;
      static encodeDelimited(message: IBusinessBroadcast, writer?: any): any;
      static decode(reader: any, length?: number): BusinessBroadcast;
      static decodeDelimited(reader: any): BusinessBroadcast;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessBroadcast;
      static toObject(message: BusinessBroadcast, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum ChatLockSupportLevel {
      NONE = 0,
      MINIMAL = 1,
      FULL = 2,
    }
    interface IContactRefresh { [key: string]: any }
    class ContactRefresh implements IContactRefresh {
      [key: string]: any;
      constructor(properties?: IContactRefresh);
      static create(properties?: IContactRefresh): ContactRefresh;
      static encode(message: IContactRefresh, writer?: any): any;
      static encodeDelimited(message: IContactRefresh, writer?: any): any;
      static decode(reader: any, length?: number): ContactRefresh;
      static decodeDelimited(reader: any): ContactRefresh;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactRefresh;
      static toObject(message: ContactRefresh, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILIDMigration { [key: string]: any }
    class LIDMigration implements ILIDMigration {
      [key: string]: any;
      constructor(properties?: ILIDMigration);
      static create(properties?: ILIDMigration): LIDMigration;
      static encode(message: ILIDMigration, writer?: any): any;
      static encodeDelimited(message: ILIDMigration, writer?: any): any;
      static decode(reader: any, length?: number): LIDMigration;
      static decodeDelimited(reader: any): LIDMigration;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LIDMigration;
      static toObject(message: LIDMigration, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum MemberNameTagPrimarySupport {
      DISABLED = 0,
      RECEIVER_ENABLED = 1,
      SENDER_ENABLED = 2,
    }
    interface IUserHasAvatar { [key: string]: any }
    class UserHasAvatar implements IUserHasAvatar {
      [key: string]: any;
      constructor(properties?: IUserHasAvatar);
      static create(properties?: IUserHasAvatar): UserHasAvatar;
      static encode(message: IUserHasAvatar, writer?: any): any;
      static encodeDelimited(message: IUserHasAvatar, writer?: any): any;
      static decode(reader: any, length?: number): UserHasAvatar;
      static decodeDelimited(reader: any): UserHasAvatar;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UserHasAvatar;
      static toObject(message: UserHasAvatar, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IDeviceConsistencyCodeMessage { [key: string]: any }
  class DeviceConsistencyCodeMessage implements IDeviceConsistencyCodeMessage {
    [key: string]: any;
    constructor(properties?: IDeviceConsistencyCodeMessage);
    static create(properties?: IDeviceConsistencyCodeMessage): DeviceConsistencyCodeMessage;
    static encode(message: IDeviceConsistencyCodeMessage, writer?: any): any;
    static encodeDelimited(message: IDeviceConsistencyCodeMessage, writer?: any): any;
    static decode(reader: any, length?: number): DeviceConsistencyCodeMessage;
    static decodeDelimited(reader: any): DeviceConsistencyCodeMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeviceConsistencyCodeMessage;
    static toObject(message: DeviceConsistencyCodeMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeviceListMetadata { [key: string]: any }
  class DeviceListMetadata implements IDeviceListMetadata {
    [key: string]: any;
    constructor(properties?: IDeviceListMetadata);
    static create(properties?: IDeviceListMetadata): DeviceListMetadata;
    static encode(message: IDeviceListMetadata, writer?: any): any;
    static encodeDelimited(message: IDeviceListMetadata, writer?: any): any;
    static decode(reader: any, length?: number): DeviceListMetadata;
    static decodeDelimited(reader: any): DeviceListMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeviceListMetadata;
    static toObject(message: DeviceListMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeviceOutput { [key: string]: any }
  class DeviceOutput implements IDeviceOutput {
    [key: string]: any;
    constructor(properties?: IDeviceOutput);
    static create(properties?: IDeviceOutput): DeviceOutput;
    static encode(message: IDeviceOutput, writer?: any): any;
    static encodeDelimited(message: IDeviceOutput, writer?: any): any;
    static decode(reader: any, length?: number): DeviceOutput;
    static decodeDelimited(reader: any): DeviceOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeviceOutput;
    static toObject(message: DeviceOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IDeviceProps { [key: string]: any }
  class DeviceProps implements IDeviceProps {
    [key: string]: any;
    constructor(properties?: IDeviceProps);
    static create(properties?: IDeviceProps): DeviceProps;
    static encode(message: IDeviceProps, writer?: any): any;
    static encodeDelimited(message: IDeviceProps, writer?: any): any;
    static decode(reader: any, length?: number): DeviceProps;
    static decodeDelimited(reader: any): DeviceProps;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DeviceProps;
    static toObject(message: DeviceProps, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace DeviceProps {
    interface IAppVersion { [key: string]: any }
    class AppVersion implements IAppVersion {
      [key: string]: any;
      constructor(properties?: IAppVersion);
      static create(properties?: IAppVersion): AppVersion;
      static encode(message: IAppVersion, writer?: any): any;
      static encodeDelimited(message: IAppVersion, writer?: any): any;
      static decode(reader: any, length?: number): AppVersion;
      static decodeDelimited(reader: any): AppVersion;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppVersion;
      static toObject(message: AppVersion, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IHistorySyncConfig { [key: string]: any }
    class HistorySyncConfig implements IHistorySyncConfig {
      [key: string]: any;
      constructor(properties?: IHistorySyncConfig);
      static create(properties?: IHistorySyncConfig): HistorySyncConfig;
      static encode(message: IHistorySyncConfig, writer?: any): any;
      static encodeDelimited(message: IHistorySyncConfig, writer?: any): any;
      static decode(reader: any, length?: number): HistorySyncConfig;
      static decodeDelimited(reader: any): HistorySyncConfig;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HistorySyncConfig;
      static toObject(message: HistorySyncConfig, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum PlatformType {
      UNKNOWN = 0,
      CHROME = 1,
      FIREFOX = 2,
      IE = 3,
      OPERA = 4,
      SAFARI = 5,
      EDGE = 6,
      DESKTOP = 7,
      IPAD = 8,
      ANDROID_TABLET = 9,
      OHANA = 10,
      ALOHA = 11,
      CATALINA = 12,
      TCL_TV = 13,
      IOS_PHONE = 14,
      IOS_CATALYST = 15,
      ANDROID_PHONE = 16,
      ANDROID_AMBIGUOUS = 17,
      WEAR_OS = 18,
      AR_WRIST = 19,
      AR_DEVICE = 20,
      UWP = 21,
      VR = 22,
      CLOUD_API = 23,
      SMARTGLASSES = 24,
      WAIL = 25,
    }
  }
  interface IDisappearingMode { [key: string]: any }
  class DisappearingMode implements IDisappearingMode {
    [key: string]: any;
    constructor(properties?: IDisappearingMode);
    static create(properties?: IDisappearingMode): DisappearingMode;
    static encode(message: IDisappearingMode, writer?: any): any;
    static encodeDelimited(message: IDisappearingMode, writer?: any): any;
    static decode(reader: any, length?: number): DisappearingMode;
    static decodeDelimited(reader: any): DisappearingMode;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): DisappearingMode;
    static toObject(message: DisappearingMode, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace DisappearingMode {
    enum Initiator {
      CHANGED_IN_CHAT = 0,
      INITIATED_BY_ME = 1,
      INITIATED_BY_OTHER = 2,
      BIZ_UPGRADE_FB_HOSTING = 3,
    }
    enum Trigger {
      UNKNOWN = 0,
      CHAT_SETTING = 1,
      ACCOUNT_SETTING = 2,
      BULK_CHANGE = 3,
      BIZ_SUPPORTS_FB_HOSTING = 4,
      UNKNOWN_GROUPS = 5,
    }
  }
  enum EXTENDED_CONTENT_MESSAGE_CTA_BUTTON_TYPE {
    OPEN_NATIVE = 11,
  }
  enum EXTENDED_CONTENT_MESSAGE_EXTENDED_CONTENT_TYPE {
    UNSUPPORTED = -1,
    IG_STORY_PHOTO_MENTION = 4,
    IG_SINGLE_IMAGE_POST_SHARE = 9,
    IG_MULTIPOST_SHARE = 10,
    IG_SINGLE_VIDEO_POST_SHARE = 11,
    IG_STORY_PHOTO_SHARE = 12,
    IG_STORY_VIDEO_SHARE = 13,
    IG_CLIPS_SHARE = 14,
    IG_IGTV_SHARE = 15,
    IG_SHOP_SHARE = 16,
    IG_PROFILE_SHARE = 19,
    IG_STORY_PHOTO_HIGHLIGHT_SHARE = 20,
    IG_STORY_VIDEO_HIGHLIGHT_SHARE = 21,
    IG_STORY_REPLY = 22,
    IG_STORY_REACTION = 23,
    IG_STORY_VIDEO_MENTION = 24,
    IG_STORY_HIGHLIGHT_REPLY = 25,
    IG_STORY_HIGHLIGHT_REACTION = 26,
    IG_EXTERNAL_LINK = 27,
    IG_RECEIVER_FETCH = 28,
    FB_FEED_SHARE = 1000,
    FB_STORY_REPLY = 1001,
    FB_STORY_SHARE = 1002,
    FB_STORY_MENTION = 1003,
    FB_FEED_VIDEO_SHARE = 1004,
    FB_GAMING_CUSTOM_UPDATE = 1005,
    FB_PRODUCER_STORY_REPLY = 1006,
    FB_EVENT = 1007,
    FB_FEED_POST_PRIVATE_REPLY = 1008,
    FB_SHORT = 1009,
    FB_COMMENT_MENTION_SHARE = 1010,
    FB_POST_MENTION = 1011,
    FB_PROFILE_DIRECTORY_ITEM = 1013,
    FB_FEED_POST_REACTION_REPLY = 1014,
    FB_QUICKSNAP_REPLY = 1015,
    MSG_EXTERNAL_LINK_SHARE = 2000,
    MSG_P2P_PAYMENT = 2001,
    MSG_LOCATION_SHARING = 2002,
    MSG_LOCATION_SHARING_V2 = 2003,
    MSG_HIGHLIGHTS_TAB_FRIEND_UPDATES_REPLY = 2004,
    MSG_HIGHLIGHTS_TAB_LOCAL_EVENT_REPLY = 2005,
    MSG_RECEIVER_FETCH = 2006,
    MSG_IG_MEDIA_SHARE = 2007,
    MSG_GEN_AI_SEARCH_PLUGIN_RESPONSE = 2008,
    MSG_REELS_LIST = 2009,
    MSG_CONTACT = 2010,
    MSG_THREADS_POST_SHARE = 2011,
    MSG_FILE = 2012,
    MSG_AVATAR_DETAILS = 2013,
    MSG_AI_CONTACT = 2014,
    MSG_MEMORIES_SHARE = 2015,
    MSG_SHARED_ALBUM_REPLY = 2016,
    MSG_SHARED_ALBUM = 2017,
    MSG_OCCAMADILLO_XMA = 2018,
    MSG_GEN_AI_SUBSCRIPTION = 2021,
    MSG_GEN_AI_REMINDER = 2022,
    MSG_GEN_AI_MEMU_ONBOARDING_RESPONSE = 2023,
    MSG_NOTE_REPLY = 2024,
    MSG_NOTE_MENTION = 2025,
    GEN_AI_ENTITY = 2026,
    MSG_OPG_P2P_PAYMENT = 2027,
    GEN_AI_RICH_RESPONSE = 2028,
    MSG_MUSIC_STICKER = 2029,
    MSG_PHONE_NUMBER = 2030,
    AI_ACTIVITY_SHARE = 2031,
    MSG_PRIVATE_XMA = 2032,
    MSG_SOCIAL_CUE_MEMORIES = 2033,
    MSG_MANUS_GROWTH_REFERRAL = 2060,
    MSG_MOMENT_LINK = 2061,
    MSG_HORIZON_WEEL = 2062,
    MSG_MOMENT_ADDED = 2063,
    RTC_AUDIO_CALL = 3000,
    RTC_VIDEO_CALL = 3001,
    RTC_MISSED_AUDIO_CALL = 3002,
    RTC_MISSED_VIDEO_CALL = 3003,
    RTC_GROUP_AUDIO_CALL = 3004,
    RTC_GROUP_VIDEO_CALL = 3005,
    RTC_MISSED_GROUP_AUDIO_CALL = 3006,
    RTC_MISSED_GROUP_VIDEO_CALL = 3007,
    RTC_ONGOING_AUDIO_CALL = 3008,
    RTC_ONGOING_VIDEO_CALL = 3009,
    MSG_RECEIVER_FETCH_FALLBACK = 3025,
    DATACLASS_SENDER_COPY = 4000,
  }
  enum EXTENDED_CONTENT_MESSAGE_OVERLAY_ICON_GLYPH {
    INFO = 0,
    EYE_OFF = 1,
    NEWS_OFF = 2,
    WARNING = 3,
    PRIVATE = 4,
    NONE = 5,
    MEDIA_LABEL = 6,
    POST_COVER = 7,
    POST_LABEL = 8,
    WARNING_SCREENS = 9,
  }
  enum EXTENDED_CONTENT_MESSAGE_XMA_DATACLASS_TYPE {
    SENDER_COPY = 0,
    SERVER = 1,
    SIGNED_CLIENT = 2,
  }
  enum EXTENDED_CONTENT_MESSAGE_XMA_LAYOUT_TYPE {
    SINGLE = 0,
    HSCROLL = 1,
    PORTRAIT = 3,
    STANDARD_DXMA = 12,
    LIST_DXMA = 15,
    GRID = 16,
  }
  interface IEmbeddedContent { [key: string]: any }
  class EmbeddedContent implements IEmbeddedContent {
    [key: string]: any;
    constructor(properties?: IEmbeddedContent);
    static create(properties?: IEmbeddedContent): EmbeddedContent;
    static encode(message: IEmbeddedContent, writer?: any): any;
    static encodeDelimited(message: IEmbeddedContent, writer?: any): any;
    static decode(reader: any, length?: number): EmbeddedContent;
    static decodeDelimited(reader: any): EmbeddedContent;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EmbeddedContent;
    static toObject(message: EmbeddedContent, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEmbeddedMessage { [key: string]: any }
  class EmbeddedMessage implements IEmbeddedMessage {
    [key: string]: any;
    constructor(properties?: IEmbeddedMessage);
    static create(properties?: IEmbeddedMessage): EmbeddedMessage;
    static encode(message: IEmbeddedMessage, writer?: any): any;
    static encodeDelimited(message: IEmbeddedMessage, writer?: any): any;
    static decode(reader: any, length?: number): EmbeddedMessage;
    static decodeDelimited(reader: any): EmbeddedMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EmbeddedMessage;
    static toObject(message: EmbeddedMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEmbeddedMusic { [key: string]: any }
  class EmbeddedMusic implements IEmbeddedMusic {
    [key: string]: any;
    constructor(properties?: IEmbeddedMusic);
    static create(properties?: IEmbeddedMusic): EmbeddedMusic;
    static encode(message: IEmbeddedMusic, writer?: any): any;
    static encodeDelimited(message: IEmbeddedMusic, writer?: any): any;
    static decode(reader: any, length?: number): EmbeddedMusic;
    static decodeDelimited(reader: any): EmbeddedMusic;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EmbeddedMusic;
    static toObject(message: EmbeddedMusic, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEncryptMekForDistributionInput { [key: string]: any }
  class EncryptMekForDistributionInput implements IEncryptMekForDistributionInput {
    [key: string]: any;
    constructor(properties?: IEncryptMekForDistributionInput);
    static create(properties?: IEncryptMekForDistributionInput): EncryptMekForDistributionInput;
    static encode(message: IEncryptMekForDistributionInput, writer?: any): any;
    static encodeDelimited(message: IEncryptMekForDistributionInput, writer?: any): any;
    static decode(reader: any, length?: number): EncryptMekForDistributionInput;
    static decodeDelimited(reader: any): EncryptMekForDistributionInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptMekForDistributionInput;
    static toObject(message: EncryptMekForDistributionInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace EncryptMekForDistributionInput {
    interface IMailboxAuthKP { [key: string]: any }
    class MailboxAuthKP implements IMailboxAuthKP {
      [key: string]: any;
      constructor(properties?: IMailboxAuthKP);
      static create(properties?: IMailboxAuthKP): MailboxAuthKP;
      static encode(message: IMailboxAuthKP, writer?: any): any;
      static encodeDelimited(message: IMailboxAuthKP, writer?: any): any;
      static decode(reader: any, length?: number): MailboxAuthKP;
      static decodeDelimited(reader: any): MailboxAuthKP;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MailboxAuthKP;
      static toObject(message: MailboxAuthKP, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IEncryptMekForDistributionResult { [key: string]: any }
  class EncryptMekForDistributionResult implements IEncryptMekForDistributionResult {
    [key: string]: any;
    constructor(properties?: IEncryptMekForDistributionResult);
    static create(properties?: IEncryptMekForDistributionResult): EncryptMekForDistributionResult;
    static encode(message: IEncryptMekForDistributionResult, writer?: any): any;
    static encodeDelimited(message: IEncryptMekForDistributionResult, writer?: any): any;
    static decode(reader: any, length?: number): EncryptMekForDistributionResult;
    static decodeDelimited(reader: any): EncryptMekForDistributionResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptMekForDistributionResult;
    static toObject(message: EncryptMekForDistributionResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEncryptMeksForDistributionFromTransportSenderInput { [key: string]: any }
  class EncryptMeksForDistributionFromTransportSenderInput implements IEncryptMeksForDistributionFromTransportSenderInput {
    [key: string]: any;
    constructor(properties?: IEncryptMeksForDistributionFromTransportSenderInput);
    static create(properties?: IEncryptMeksForDistributionFromTransportSenderInput): EncryptMeksForDistributionFromTransportSenderInput;
    static encode(message: IEncryptMeksForDistributionFromTransportSenderInput, writer?: any): any;
    static encodeDelimited(message: IEncryptMeksForDistributionFromTransportSenderInput, writer?: any): any;
    static decode(reader: any, length?: number): EncryptMeksForDistributionFromTransportSenderInput;
    static decodeDelimited(reader: any): EncryptMeksForDistributionFromTransportSenderInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptMeksForDistributionFromTransportSenderInput;
    static toObject(message: EncryptMeksForDistributionFromTransportSenderInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace EncryptMeksForDistributionFromTransportSenderInput {
    interface ITransportSigningKP { [key: string]: any }
    class TransportSigningKP implements ITransportSigningKP {
      [key: string]: any;
      constructor(properties?: ITransportSigningKP);
      static create(properties?: ITransportSigningKP): TransportSigningKP;
      static encode(message: ITransportSigningKP, writer?: any): any;
      static encodeDelimited(message: ITransportSigningKP, writer?: any): any;
      static decode(reader: any, length?: number): TransportSigningKP;
      static decodeDelimited(reader: any): TransportSigningKP;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): TransportSigningKP;
      static toObject(message: TransportSigningKP, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IEncryptMeksForDistributionFromTransportSenderResult { [key: string]: any }
  class EncryptMeksForDistributionFromTransportSenderResult implements IEncryptMeksForDistributionFromTransportSenderResult {
    [key: string]: any;
    constructor(properties?: IEncryptMeksForDistributionFromTransportSenderResult);
    static create(properties?: IEncryptMeksForDistributionFromTransportSenderResult): EncryptMeksForDistributionFromTransportSenderResult;
    static encode(message: IEncryptMeksForDistributionFromTransportSenderResult, writer?: any): any;
    static encodeDelimited(message: IEncryptMeksForDistributionFromTransportSenderResult, writer?: any): any;
    static decode(reader: any, length?: number): EncryptMeksForDistributionFromTransportSenderResult;
    static decodeDelimited(reader: any): EncryptMeksForDistributionFromTransportSenderResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptMeksForDistributionFromTransportSenderResult;
    static toObject(message: EncryptMeksForDistributionFromTransportSenderResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEncryptMessageInput { [key: string]: any }
  class EncryptMessageInput implements IEncryptMessageInput {
    [key: string]: any;
    constructor(properties?: IEncryptMessageInput);
    static create(properties?: IEncryptMessageInput): EncryptMessageInput;
    static encode(message: IEncryptMessageInput, writer?: any): any;
    static encodeDelimited(message: IEncryptMessageInput, writer?: any): any;
    static decode(reader: any, length?: number): EncryptMessageInput;
    static decodeDelimited(reader: any): EncryptMessageInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptMessageInput;
    static toObject(message: EncryptMessageInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEncryptMessageOutput { [key: string]: any }
  class EncryptMessageOutput implements IEncryptMessageOutput {
    [key: string]: any;
    constructor(properties?: IEncryptMessageOutput);
    static create(properties?: IEncryptMessageOutput): EncryptMessageOutput;
    static encode(message: IEncryptMessageOutput, writer?: any): any;
    static encodeDelimited(message: IEncryptMessageOutput, writer?: any): any;
    static decode(reader: any, length?: number): EncryptMessageOutput;
    static decodeDelimited(reader: any): EncryptMessageOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptMessageOutput;
    static toObject(message: EncryptMessageOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEncryptedPairingRequest { [key: string]: any }
  class EncryptedPairingRequest implements IEncryptedPairingRequest {
    [key: string]: any;
    constructor(properties?: IEncryptedPairingRequest);
    static create(properties?: IEncryptedPairingRequest): EncryptedPairingRequest;
    static encode(message: IEncryptedPairingRequest, writer?: any): any;
    static encodeDelimited(message: IEncryptedPairingRequest, writer?: any): any;
    static decode(reader: any, length?: number): EncryptedPairingRequest;
    static decodeDelimited(reader: any): EncryptedPairingRequest;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptedPairingRequest;
    static toObject(message: EncryptedPairingRequest, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEncryptedSecretValuesOutput { [key: string]: any }
  class EncryptedSecretValuesOutput implements IEncryptedSecretValuesOutput {
    [key: string]: any;
    constructor(properties?: IEncryptedSecretValuesOutput);
    static create(properties?: IEncryptedSecretValuesOutput): EncryptedSecretValuesOutput;
    static encode(message: IEncryptedSecretValuesOutput, writer?: any): any;
    static encodeDelimited(message: IEncryptedSecretValuesOutput, writer?: any): any;
    static decode(reader: any, length?: number): EncryptedSecretValuesOutput;
    static decodeDelimited(reader: any): EncryptedSecretValuesOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EncryptedSecretValuesOutput;
    static toObject(message: EncryptedSecretValuesOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEphemeralSetting { [key: string]: any }
  class EphemeralSetting implements IEphemeralSetting {
    [key: string]: any;
    constructor(properties?: IEphemeralSetting);
    static create(properties?: IEphemeralSetting): EphemeralSetting;
    static encode(message: IEphemeralSetting, writer?: any): any;
    static encodeDelimited(message: IEphemeralSetting, writer?: any): any;
    static decode(reader: any, length?: number): EphemeralSetting;
    static decodeDelimited(reader: any): EphemeralSetting;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EphemeralSetting;
    static toObject(message: EphemeralSetting, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEpoch0Output { [key: string]: any }
  class Epoch0Output implements IEpoch0Output {
    [key: string]: any;
    constructor(properties?: IEpoch0Output);
    static create(properties?: IEpoch0Output): Epoch0Output;
    static encode(message: IEpoch0Output, writer?: any): any;
    static encodeDelimited(message: IEpoch0Output, writer?: any): any;
    static decode(reader: any, length?: number): Epoch0Output;
    static decodeDelimited(reader: any): Epoch0Output;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Epoch0Output;
    static toObject(message: Epoch0Output, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEpochPublicData { [key: string]: any }
  class EpochPublicData implements IEpochPublicData {
    [key: string]: any;
    constructor(properties?: IEpochPublicData);
    static create(properties?: IEpochPublicData): EpochPublicData;
    static encode(message: IEpochPublicData, writer?: any): any;
    static encodeDelimited(message: IEpochPublicData, writer?: any): any;
    static decode(reader: any, length?: number): EpochPublicData;
    static decodeDelimited(reader: any): EpochPublicData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EpochPublicData;
    static toObject(message: EpochPublicData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEpochSignatures { [key: string]: any }
  class EpochSignatures implements IEpochSignatures {
    [key: string]: any;
    constructor(properties?: IEpochSignatures);
    static create(properties?: IEpochSignatures): EpochSignatures;
    static encode(message: IEpochSignatures, writer?: any): any;
    static encodeDelimited(message: IEpochSignatures, writer?: any): any;
    static decode(reader: any, length?: number): EpochSignatures;
    static decodeDelimited(reader: any): EpochSignatures;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EpochSignatures;
    static toObject(message: EpochSignatures, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEventAdditionalMetadata { [key: string]: any }
  class EventAdditionalMetadata implements IEventAdditionalMetadata {
    [key: string]: any;
    constructor(properties?: IEventAdditionalMetadata);
    static create(properties?: IEventAdditionalMetadata): EventAdditionalMetadata;
    static encode(message: IEventAdditionalMetadata, writer?: any): any;
    static encodeDelimited(message: IEventAdditionalMetadata, writer?: any): any;
    static decode(reader: any, length?: number): EventAdditionalMetadata;
    static decodeDelimited(reader: any): EventAdditionalMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EventAdditionalMetadata;
    static toObject(message: EventAdditionalMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IEventResponse { [key: string]: any }
  class EventResponse implements IEventResponse {
    [key: string]: any;
    constructor(properties?: IEventResponse);
    static create(properties?: IEventResponse): EventResponse;
    static encode(message: IEventResponse, writer?: any): any;
    static encodeDelimited(message: IEventResponse, writer?: any): any;
    static decode(reader: any, length?: number): EventResponse;
    static decodeDelimited(reader: any): EventResponse;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): EventResponse;
    static toObject(message: EventResponse, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IExitCode { [key: string]: any }
  class ExitCode implements IExitCode {
    [key: string]: any;
    constructor(properties?: IExitCode);
    static create(properties?: IExitCode): ExitCode;
    static encode(message: IExitCode, writer?: any): any;
    static encodeDelimited(message: IExitCode, writer?: any): any;
    static decode(reader: any, length?: number): ExitCode;
    static decodeDelimited(reader: any): ExitCode;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ExitCode;
    static toObject(message: ExitCode, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IExtendedContentMessage { [key: string]: any }
  class ExtendedContentMessage implements IExtendedContentMessage {
    [key: string]: any;
    constructor(properties?: IExtendedContentMessage);
    static create(properties?: IExtendedContentMessage): ExtendedContentMessage;
    static encode(message: IExtendedContentMessage, writer?: any): any;
    static encodeDelimited(message: IExtendedContentMessage, writer?: any): any;
    static decode(reader: any, length?: number): ExtendedContentMessage;
    static decodeDelimited(reader: any): ExtendedContentMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ExtendedContentMessage;
    static toObject(message: ExtendedContentMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ExtendedContentMessage {
    interface ICTA { [key: string]: any }
    class CTA implements ICTA {
      [key: string]: any;
      constructor(properties?: ICTA);
      static create(properties?: ICTA): CTA;
      static encode(message: ICTA, writer?: any): any;
      static encodeDelimited(message: ICTA, writer?: any): any;
      static decode(reader: any, length?: number): CTA;
      static decodeDelimited(reader: any): CTA;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CTA;
      static toObject(message: CTA, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IExternalBlobReference { [key: string]: any }
  class ExternalBlobReference implements IExternalBlobReference {
    [key: string]: any;
    constructor(properties?: IExternalBlobReference);
    static create(properties?: IExternalBlobReference): ExternalBlobReference;
    static encode(message: IExternalBlobReference, writer?: any): any;
    static encodeDelimited(message: IExternalBlobReference, writer?: any): any;
    static decode(reader: any, length?: number): ExternalBlobReference;
    static decodeDelimited(reader: any): ExternalBlobReference;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ExternalBlobReference;
    static toObject(message: ExternalBlobReference, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum FUTURE_PROOF_BEHAVIOR {
    PLACEHOLDER = 0,
    NO_PLACEHOLDER = 1,
    IGNORE = 2,
  }
  interface IField { [key: string]: any }
  class Field implements IField {
    [key: string]: any;
    constructor(properties?: IField);
    static create(properties?: IField): Field;
    static encode(message: IField, writer?: any): any;
    static encodeDelimited(message: IField, writer?: any): any;
    static decode(reader: any, length?: number): Field;
    static decodeDelimited(reader: any): Field;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Field;
    static toObject(message: Field, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IFingerprintData { [key: string]: any }
  class FingerprintData implements IFingerprintData {
    [key: string]: any;
    constructor(properties?: IFingerprintData);
    static create(properties?: IFingerprintData): FingerprintData;
    static encode(message: IFingerprintData, writer?: any): any;
    static encodeDelimited(message: IFingerprintData, writer?: any): any;
    static decode(reader: any, length?: number): FingerprintData;
    static decodeDelimited(reader: any): FingerprintData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): FingerprintData;
    static toObject(message: FingerprintData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IForwardedAIBotMessageInfo { [key: string]: any }
  class ForwardedAIBotMessageInfo implements IForwardedAIBotMessageInfo {
    [key: string]: any;
    constructor(properties?: IForwardedAIBotMessageInfo);
    static create(properties?: IForwardedAIBotMessageInfo): ForwardedAIBotMessageInfo;
    static encode(message: IForwardedAIBotMessageInfo, writer?: any): any;
    static encodeDelimited(message: IForwardedAIBotMessageInfo, writer?: any): any;
    static decode(reader: any, length?: number): ForwardedAIBotMessageInfo;
    static decodeDelimited(reader: any): ForwardedAIBotMessageInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ForwardedAIBotMessageInfo;
    static toObject(message: ForwardedAIBotMessageInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGenerateMekInput { [key: string]: any }
  class GenerateMekInput implements IGenerateMekInput {
    [key: string]: any;
    constructor(properties?: IGenerateMekInput);
    static create(properties?: IGenerateMekInput): GenerateMekInput;
    static encode(message: IGenerateMekInput, writer?: any): any;
    static encodeDelimited(message: IGenerateMekInput, writer?: any): any;
    static decode(reader: any, length?: number): GenerateMekInput;
    static decodeDelimited(reader: any): GenerateMekInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GenerateMekInput;
    static toObject(message: GenerateMekInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGenerateMekResult { [key: string]: any }
  class GenerateMekResult implements IGenerateMekResult {
    [key: string]: any;
    constructor(properties?: IGenerateMekResult);
    static create(properties?: IGenerateMekResult): GenerateMekResult;
    static encode(message: IGenerateMekResult, writer?: any): any;
    static encodeDelimited(message: IGenerateMekResult, writer?: any): any;
    static decode(reader: any, length?: number): GenerateMekResult;
    static decodeDelimited(reader: any): GenerateMekResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GenerateMekResult;
    static toObject(message: GenerateMekResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGenerateMekRosterHashInput { [key: string]: any }
  class GenerateMekRosterHashInput implements IGenerateMekRosterHashInput {
    [key: string]: any;
    constructor(properties?: IGenerateMekRosterHashInput);
    static create(properties?: IGenerateMekRosterHashInput): GenerateMekRosterHashInput;
    static encode(message: IGenerateMekRosterHashInput, writer?: any): any;
    static encodeDelimited(message: IGenerateMekRosterHashInput, writer?: any): any;
    static decode(reader: any, length?: number): GenerateMekRosterHashInput;
    static decodeDelimited(reader: any): GenerateMekRosterHashInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GenerateMekRosterHashInput;
    static toObject(message: GenerateMekRosterHashInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGenerateMekRosterHashResult { [key: string]: any }
  class GenerateMekRosterHashResult implements IGenerateMekRosterHashResult {
    [key: string]: any;
    constructor(properties?: IGenerateMekRosterHashResult);
    static create(properties?: IGenerateMekRosterHashResult): GenerateMekRosterHashResult;
    static encode(message: IGenerateMekRosterHashResult, writer?: any): any;
    static encodeDelimited(message: IGenerateMekRosterHashResult, writer?: any): any;
    static decode(reader: any, length?: number): GenerateMekRosterHashResult;
    static decodeDelimited(reader: any): GenerateMekRosterHashResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GenerateMekRosterHashResult;
    static toObject(message: GenerateMekRosterHashResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGlobalSettings { [key: string]: any }
  class GlobalSettings implements IGlobalSettings {
    [key: string]: any;
    constructor(properties?: IGlobalSettings);
    static create(properties?: IGlobalSettings): GlobalSettings;
    static encode(message: IGlobalSettings, writer?: any): any;
    static encodeDelimited(message: IGlobalSettings, writer?: any): any;
    static decode(reader: any, length?: number): GlobalSettings;
    static decodeDelimited(reader: any): GlobalSettings;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GlobalSettings;
    static toObject(message: GlobalSettings, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGroupHistory { [key: string]: any }
  class GroupHistory implements IGroupHistory {
    [key: string]: any;
    constructor(properties?: IGroupHistory);
    static create(properties?: IGroupHistory): GroupHistory;
    static encode(message: IGroupHistory, writer?: any): any;
    static encodeDelimited(message: IGroupHistory, writer?: any): any;
    static decode(reader: any, length?: number): GroupHistory;
    static decodeDelimited(reader: any): GroupHistory;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupHistory;
    static toObject(message: GroupHistory, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGroupHistoryBundleInfo { [key: string]: any }
  class GroupHistoryBundleInfo implements IGroupHistoryBundleInfo {
    [key: string]: any;
    constructor(properties?: IGroupHistoryBundleInfo);
    static create(properties?: IGroupHistoryBundleInfo): GroupHistoryBundleInfo;
    static encode(message: IGroupHistoryBundleInfo, writer?: any): any;
    static encodeDelimited(message: IGroupHistoryBundleInfo, writer?: any): any;
    static decode(reader: any, length?: number): GroupHistoryBundleInfo;
    static decodeDelimited(reader: any): GroupHistoryBundleInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupHistoryBundleInfo;
    static toObject(message: GroupHistoryBundleInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace GroupHistoryBundleInfo {
    enum ProcessState {
      NOT_INJECTED = 0,
      INJECTED = 1,
      INJECTED_PARTIAL = 2,
      INJECTION_FAILED = 3,
      INJECTION_FAILED_NO_RETRY = 4,
      DEDUPED = 5,
    }
  }
  interface IGroupHistoryIndividualMessageInfo { [key: string]: any }
  class GroupHistoryIndividualMessageInfo implements IGroupHistoryIndividualMessageInfo {
    [key: string]: any;
    constructor(properties?: IGroupHistoryIndividualMessageInfo);
    static create(properties?: IGroupHistoryIndividualMessageInfo): GroupHistoryIndividualMessageInfo;
    static encode(message: IGroupHistoryIndividualMessageInfo, writer?: any): any;
    static encodeDelimited(message: IGroupHistoryIndividualMessageInfo, writer?: any): any;
    static decode(reader: any, length?: number): GroupHistoryIndividualMessageInfo;
    static decodeDelimited(reader: any): GroupHistoryIndividualMessageInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupHistoryIndividualMessageInfo;
    static toObject(message: GroupHistoryIndividualMessageInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGroupHistoryWithMessageBytes { [key: string]: any }
  class GroupHistoryWithMessageBytes implements IGroupHistoryWithMessageBytes {
    [key: string]: any;
    constructor(properties?: IGroupHistoryWithMessageBytes);
    static create(properties?: IGroupHistoryWithMessageBytes): GroupHistoryWithMessageBytes;
    static encode(message: IGroupHistoryWithMessageBytes, writer?: any): any;
    static encodeDelimited(message: IGroupHistoryWithMessageBytes, writer?: any): any;
    static decode(reader: any, length?: number): GroupHistoryWithMessageBytes;
    static decodeDelimited(reader: any): GroupHistoryWithMessageBytes;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupHistoryWithMessageBytes;
    static toObject(message: GroupHistoryWithMessageBytes, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGroupMention { [key: string]: any }
  class GroupMention implements IGroupMention {
    [key: string]: any;
    constructor(properties?: IGroupMention);
    static create(properties?: IGroupMention): GroupMention;
    static encode(message: IGroupMention, writer?: any): any;
    static encodeDelimited(message: IGroupMention, writer?: any): any;
    static decode(reader: any, length?: number): GroupMention;
    static decodeDelimited(reader: any): GroupMention;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupMention;
    static toObject(message: GroupMention, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGroupParticipant { [key: string]: any }
  class GroupParticipant implements IGroupParticipant {
    [key: string]: any;
    constructor(properties?: IGroupParticipant);
    static create(properties?: IGroupParticipant): GroupParticipant;
    static encode(message: IGroupParticipant, writer?: any): any;
    static encodeDelimited(message: IGroupParticipant, writer?: any): any;
    static decode(reader: any, length?: number): GroupParticipant;
    static decodeDelimited(reader: any): GroupParticipant;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupParticipant;
    static toObject(message: GroupParticipant, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace GroupParticipant {
    enum Rank {
      REGULAR = 0,
      ADMIN = 1,
      SUPERADMIN = 2,
    }
  }
  interface IGroupRootKeyShare { [key: string]: any }
  class GroupRootKeyShare implements IGroupRootKeyShare {
    [key: string]: any;
    constructor(properties?: IGroupRootKeyShare);
    static create(properties?: IGroupRootKeyShare): GroupRootKeyShare;
    static encode(message: IGroupRootKeyShare, writer?: any): any;
    static encodeDelimited(message: IGroupRootKeyShare, writer?: any): any;
    static decode(reader: any, length?: number): GroupRootKeyShare;
    static decodeDelimited(reader: any): GroupRootKeyShare;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupRootKeyShare;
    static toObject(message: GroupRootKeyShare, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IGroupRootKeyShareEntry { [key: string]: any }
  class GroupRootKeyShareEntry implements IGroupRootKeyShareEntry {
    [key: string]: any;
    constructor(properties?: IGroupRootKeyShareEntry);
    static create(properties?: IGroupRootKeyShareEntry): GroupRootKeyShareEntry;
    static encode(message: IGroupRootKeyShareEntry, writer?: any): any;
    static encodeDelimited(message: IGroupRootKeyShareEntry, writer?: any): any;
    static decode(reader: any, length?: number): GroupRootKeyShareEntry;
    static decodeDelimited(reader: any): GroupRootKeyShareEntry;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): GroupRootKeyShareEntry;
    static toObject(message: GroupRootKeyShareEntry, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IHandshakeMessage { [key: string]: any }
  class HandshakeMessage implements IHandshakeMessage {
    [key: string]: any;
    constructor(properties?: IHandshakeMessage);
    static create(properties?: IHandshakeMessage): HandshakeMessage;
    static encode(message: IHandshakeMessage, writer?: any): any;
    static encodeDelimited(message: IHandshakeMessage, writer?: any): any;
    static decode(reader: any, length?: number): HandshakeMessage;
    static decodeDelimited(reader: any): HandshakeMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): HandshakeMessage;
    static toObject(message: HandshakeMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace HandshakeMessage {
    interface IClientFinish { [key: string]: any }
    class ClientFinish implements IClientFinish {
      [key: string]: any;
      constructor(properties?: IClientFinish);
      static create(properties?: IClientFinish): ClientFinish;
      static encode(message: IClientFinish, writer?: any): any;
      static encodeDelimited(message: IClientFinish, writer?: any): any;
      static decode(reader: any, length?: number): ClientFinish;
      static decodeDelimited(reader: any): ClientFinish;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ClientFinish;
      static toObject(message: ClientFinish, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IClientHello { [key: string]: any }
    class ClientHello implements IClientHello {
      [key: string]: any;
      constructor(properties?: IClientHello);
      static create(properties?: IClientHello): ClientHello;
      static encode(message: IClientHello, writer?: any): any;
      static encodeDelimited(message: IClientHello, writer?: any): any;
      static decode(reader: any, length?: number): ClientHello;
      static decodeDelimited(reader: any): ClientHello;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ClientHello;
      static toObject(message: ClientHello, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum HandshakePqMode {
      HANDSHAKE_PQ_MODE_UNKNOWN = 0,
      XXKEM = 1,
      XXKEM_FS = 2,
      XXKEM_EPH = 9,
      WA_CLASSICAL = 3,
      WA_PQ = 4,
      IKKEM = 5,
      IKKEM_FS = 6,
      XXKEM_2 = 7,
      IKKEM_2 = 8,
    }
    interface IServerHello { [key: string]: any }
    class ServerHello implements IServerHello {
      [key: string]: any;
      constructor(properties?: IServerHello);
      static create(properties?: IServerHello): ServerHello;
      static encode(message: IServerHello, writer?: any): any;
      static encodeDelimited(message: IServerHello, writer?: any): any;
      static decode(reader: any, length?: number): ServerHello;
      static decodeDelimited(reader: any): ServerHello;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ServerHello;
      static toObject(message: ServerHello, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IHatchMetadataSync { [key: string]: any }
  class HatchMetadataSync implements IHatchMetadataSync {
    [key: string]: any;
    constructor(properties?: IHatchMetadataSync);
    static create(properties?: IHatchMetadataSync): HatchMetadataSync;
    static encode(message: IHatchMetadataSync, writer?: any): any;
    static encodeDelimited(message: IHatchMetadataSync, writer?: any): any;
    static decode(reader: any, length?: number): HatchMetadataSync;
    static decodeDelimited(reader: any): HatchMetadataSync;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): HatchMetadataSync;
    static toObject(message: HatchMetadataSync, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IHistorySync { [key: string]: any }
  class HistorySync implements IHistorySync {
    [key: string]: any;
    constructor(properties?: IHistorySync);
    static create(properties?: IHistorySync): HistorySync;
    static encode(message: IHistorySync, writer?: any): any;
    static encodeDelimited(message: IHistorySync, writer?: any): any;
    static decode(reader: any, length?: number): HistorySync;
    static decodeDelimited(reader: any): HistorySync;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): HistorySync;
    static toObject(message: HistorySync, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace HistorySync {
    enum BotAIWaitListState {
      IN_WAITLIST = 0,
      AI_AVAILABLE = 1,
    }
    enum HistorySyncType {
      INITIAL_BOOTSTRAP = 0,
      INITIAL_STATUS_V3 = 1,
      FULL = 2,
      RECENT = 3,
      PUSH_NAME = 4,
      NON_BLOCKING_DATA = 5,
      ON_DEMAND = 6,
    }
  }
  interface IHistorySyncMsg { [key: string]: any }
  class HistorySyncMsg implements IHistorySyncMsg {
    [key: string]: any;
    constructor(properties?: IHistorySyncMsg);
    static create(properties?: IHistorySyncMsg): HistorySyncMsg;
    static encode(message: IHistorySyncMsg, writer?: any): any;
    static encodeDelimited(message: IHistorySyncMsg, writer?: any): any;
    static decode(reader: any, length?: number): HistorySyncMsg;
    static decodeDelimited(reader: any): HistorySyncMsg;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): HistorySyncMsg;
    static toObject(message: HistorySyncMsg, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum HostedState {
    E2EE = 0,
    HOSTED = 1,
  }
  interface IHydratedTemplateButton { [key: string]: any }
  class HydratedTemplateButton implements IHydratedTemplateButton {
    [key: string]: any;
    constructor(properties?: IHydratedTemplateButton);
    static create(properties?: IHydratedTemplateButton): HydratedTemplateButton;
    static encode(message: IHydratedTemplateButton, writer?: any): any;
    static encodeDelimited(message: IHydratedTemplateButton, writer?: any): any;
    static decode(reader: any, length?: number): HydratedTemplateButton;
    static decodeDelimited(reader: any): HydratedTemplateButton;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): HydratedTemplateButton;
    static toObject(message: HydratedTemplateButton, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace HydratedTemplateButton {
    interface IHydratedCallButton { [key: string]: any }
    class HydratedCallButton implements IHydratedCallButton {
      [key: string]: any;
      constructor(properties?: IHydratedCallButton);
      static create(properties?: IHydratedCallButton): HydratedCallButton;
      static encode(message: IHydratedCallButton, writer?: any): any;
      static encodeDelimited(message: IHydratedCallButton, writer?: any): any;
      static decode(reader: any, length?: number): HydratedCallButton;
      static decodeDelimited(reader: any): HydratedCallButton;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HydratedCallButton;
      static toObject(message: HydratedCallButton, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IHydratedQuickReplyButton { [key: string]: any }
    class HydratedQuickReplyButton implements IHydratedQuickReplyButton {
      [key: string]: any;
      constructor(properties?: IHydratedQuickReplyButton);
      static create(properties?: IHydratedQuickReplyButton): HydratedQuickReplyButton;
      static encode(message: IHydratedQuickReplyButton, writer?: any): any;
      static encodeDelimited(message: IHydratedQuickReplyButton, writer?: any): any;
      static decode(reader: any, length?: number): HydratedQuickReplyButton;
      static decodeDelimited(reader: any): HydratedQuickReplyButton;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HydratedQuickReplyButton;
      static toObject(message: HydratedQuickReplyButton, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IHydratedURLButton { [key: string]: any }
    class HydratedURLButton implements IHydratedURLButton {
      [key: string]: any;
      constructor(properties?: IHydratedURLButton);
      static create(properties?: IHydratedURLButton): HydratedURLButton;
      static encode(message: IHydratedURLButton, writer?: any): any;
      static encodeDelimited(message: IHydratedURLButton, writer?: any): any;
      static decode(reader: any, length?: number): HydratedURLButton;
      static decodeDelimited(reader: any): HydratedURLButton;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HydratedURLButton;
      static toObject(message: HydratedURLButton, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace HydratedURLButton {
      enum WebviewPresentationType {
        FULL = 1,
        TALL = 2,
        COMPACT = 3,
      }
    }
  }
  interface IIdentityKeyPairStructure { [key: string]: any }
  class IdentityKeyPairStructure implements IIdentityKeyPairStructure {
    [key: string]: any;
    constructor(properties?: IIdentityKeyPairStructure);
    static create(properties?: IIdentityKeyPairStructure): IdentityKeyPairStructure;
    static encode(message: IIdentityKeyPairStructure, writer?: any): any;
    static encodeDelimited(message: IIdentityKeyPairStructure, writer?: any): any;
    static decode(reader: any, length?: number): IdentityKeyPairStructure;
    static decodeDelimited(reader: any): IdentityKeyPairStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): IdentityKeyPairStructure;
    static toObject(message: IdentityKeyPairStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IIdentityVerificationState { [key: string]: any }
  class IdentityVerificationState implements IIdentityVerificationState {
    [key: string]: any;
    constructor(properties?: IIdentityVerificationState);
    static create(properties?: IIdentityVerificationState): IdentityVerificationState;
    static encode(message: IIdentityVerificationState, writer?: any): any;
    static encodeDelimited(message: IIdentityVerificationState, writer?: any): any;
    static decode(reader: any, length?: number): IdentityVerificationState;
    static decodeDelimited(reader: any): IdentityVerificationState;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): IdentityVerificationState;
    static toObject(message: IdentityVerificationState, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IInThreadSurveyMetadata { [key: string]: any }
  class InThreadSurveyMetadata implements IInThreadSurveyMetadata {
    [key: string]: any;
    constructor(properties?: IInThreadSurveyMetadata);
    static create(properties?: IInThreadSurveyMetadata): InThreadSurveyMetadata;
    static encode(message: IInThreadSurveyMetadata, writer?: any): any;
    static encodeDelimited(message: IInThreadSurveyMetadata, writer?: any): any;
    static decode(reader: any, length?: number): InThreadSurveyMetadata;
    static decodeDelimited(reader: any): InThreadSurveyMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): InThreadSurveyMetadata;
    static toObject(message: InThreadSurveyMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace InThreadSurveyMetadata {
    interface IInThreadSurveyOption { [key: string]: any }
    class InThreadSurveyOption implements IInThreadSurveyOption {
      [key: string]: any;
      constructor(properties?: IInThreadSurveyOption);
      static create(properties?: IInThreadSurveyOption): InThreadSurveyOption;
      static encode(message: IInThreadSurveyOption, writer?: any): any;
      static encodeDelimited(message: IInThreadSurveyOption, writer?: any): any;
      static decode(reader: any, length?: number): InThreadSurveyOption;
      static decodeDelimited(reader: any): InThreadSurveyOption;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InThreadSurveyOption;
      static toObject(message: InThreadSurveyOption, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IInThreadSurveyPrivacyStatementPart { [key: string]: any }
    class InThreadSurveyPrivacyStatementPart implements IInThreadSurveyPrivacyStatementPart {
      [key: string]: any;
      constructor(properties?: IInThreadSurveyPrivacyStatementPart);
      static create(properties?: IInThreadSurveyPrivacyStatementPart): InThreadSurveyPrivacyStatementPart;
      static encode(message: IInThreadSurveyPrivacyStatementPart, writer?: any): any;
      static encodeDelimited(message: IInThreadSurveyPrivacyStatementPart, writer?: any): any;
      static decode(reader: any, length?: number): InThreadSurveyPrivacyStatementPart;
      static decodeDelimited(reader: any): InThreadSurveyPrivacyStatementPart;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InThreadSurveyPrivacyStatementPart;
      static toObject(message: InThreadSurveyPrivacyStatementPart, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IInThreadSurveyQuestion { [key: string]: any }
    class InThreadSurveyQuestion implements IInThreadSurveyQuestion {
      [key: string]: any;
      constructor(properties?: IInThreadSurveyQuestion);
      static create(properties?: IInThreadSurveyQuestion): InThreadSurveyQuestion;
      static encode(message: IInThreadSurveyQuestion, writer?: any): any;
      static encodeDelimited(message: IInThreadSurveyQuestion, writer?: any): any;
      static decode(reader: any, length?: number): InThreadSurveyQuestion;
      static decodeDelimited(reader: any): InThreadSurveyQuestion;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InThreadSurveyQuestion;
      static toObject(message: InThreadSurveyQuestion, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IInlineContact { [key: string]: any }
  class InlineContact implements IInlineContact {
    [key: string]: any;
    constructor(properties?: IInlineContact);
    static create(properties?: IInlineContact): InlineContact;
    static encode(message: IInlineContact, writer?: any): any;
    static encodeDelimited(message: IInlineContact, writer?: any): any;
    static decode(reader: any, length?: number): InlineContact;
    static decodeDelimited(reader: any): InlineContact;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): InlineContact;
    static toObject(message: InlineContact, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IInteractiveAnnotation { [key: string]: any }
  class InteractiveAnnotation implements IInteractiveAnnotation {
    [key: string]: any;
    constructor(properties?: IInteractiveAnnotation);
    static create(properties?: IInteractiveAnnotation): InteractiveAnnotation;
    static encode(message: IInteractiveAnnotation, writer?: any): any;
    static encodeDelimited(message: IInteractiveAnnotation, writer?: any): any;
    static decode(reader: any, length?: number): InteractiveAnnotation;
    static decodeDelimited(reader: any): InteractiveAnnotation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): InteractiveAnnotation;
    static toObject(message: InteractiveAnnotation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace InteractiveAnnotation {
    enum StatusLinkType {
      RASTERIZED_LINK_PREVIEW = 1,
      RASTERIZED_LINK_TRUNCATED = 2,
      RASTERIZED_LINK_FULL_URL = 3,
    }
  }
  interface IInteractiveMessageAdditionalMetadata { [key: string]: any }
  class InteractiveMessageAdditionalMetadata implements IInteractiveMessageAdditionalMetadata {
    [key: string]: any;
    constructor(properties?: IInteractiveMessageAdditionalMetadata);
    static create(properties?: IInteractiveMessageAdditionalMetadata): InteractiveMessageAdditionalMetadata;
    static encode(message: IInteractiveMessageAdditionalMetadata, writer?: any): any;
    static encodeDelimited(message: IInteractiveMessageAdditionalMetadata, writer?: any): any;
    static decode(reader: any, length?: number): InteractiveMessageAdditionalMetadata;
    static decodeDelimited(reader: any): InteractiveMessageAdditionalMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): InteractiveMessageAdditionalMetadata;
    static toObject(message: InteractiveMessageAdditionalMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IKeepInChat { [key: string]: any }
  class KeepInChat implements IKeepInChat {
    [key: string]: any;
    constructor(properties?: IKeepInChat);
    static create(properties?: IKeepInChat): KeepInChat;
    static encode(message: IKeepInChat, writer?: any): any;
    static encodeDelimited(message: IKeepInChat, writer?: any): any;
    static decode(reader: any, length?: number): KeepInChat;
    static decodeDelimited(reader: any): KeepInChat;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): KeepInChat;
    static toObject(message: KeepInChat, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum KeepType {
    UNKNOWN = 0,
    KEEP_FOR_ALL = 1,
    UNDO_KEEP_FOR_ALL = 2,
  }
  interface IKeyExchangeMessage { [key: string]: any }
  class KeyExchangeMessage implements IKeyExchangeMessage {
    [key: string]: any;
    constructor(properties?: IKeyExchangeMessage);
    static create(properties?: IKeyExchangeMessage): KeyExchangeMessage;
    static encode(message: IKeyExchangeMessage, writer?: any): any;
    static encodeDelimited(message: IKeyExchangeMessage, writer?: any): any;
    static decode(reader: any, length?: number): KeyExchangeMessage;
    static decodeDelimited(reader: any): KeyExchangeMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): KeyExchangeMessage;
    static toObject(message: KeyExchangeMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IKeyId { [key: string]: any }
  class KeyId implements IKeyId {
    [key: string]: any;
    constructor(properties?: IKeyId);
    static create(properties?: IKeyId): KeyId;
    static encode(message: IKeyId, writer?: any): any;
    static encodeDelimited(message: IKeyId, writer?: any): any;
    static decode(reader: any, length?: number): KeyId;
    static decodeDelimited(reader: any): KeyId;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): KeyId;
    static toObject(message: KeyId, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILIDMigrationMapping { [key: string]: any }
  class LIDMigrationMapping implements ILIDMigrationMapping {
    [key: string]: any;
    constructor(properties?: ILIDMigrationMapping);
    static create(properties?: ILIDMigrationMapping): LIDMigrationMapping;
    static encode(message: ILIDMigrationMapping, writer?: any): any;
    static encodeDelimited(message: ILIDMigrationMapping, writer?: any): any;
    static decode(reader: any, length?: number): LIDMigrationMapping;
    static decodeDelimited(reader: any): LIDMigrationMapping;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LIDMigrationMapping;
    static toObject(message: LIDMigrationMapping, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILIDMigrationMappingSyncMessage { [key: string]: any }
  class LIDMigrationMappingSyncMessage implements ILIDMigrationMappingSyncMessage {
    [key: string]: any;
    constructor(properties?: ILIDMigrationMappingSyncMessage);
    static create(properties?: ILIDMigrationMappingSyncMessage): LIDMigrationMappingSyncMessage;
    static encode(message: ILIDMigrationMappingSyncMessage, writer?: any): any;
    static encodeDelimited(message: ILIDMigrationMappingSyncMessage, writer?: any): any;
    static decode(reader: any, length?: number): LIDMigrationMappingSyncMessage;
    static decodeDelimited(reader: any): LIDMigrationMappingSyncMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LIDMigrationMappingSyncMessage;
    static toObject(message: LIDMigrationMappingSyncMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILIDMigrationMappingSyncPayload { [key: string]: any }
  class LIDMigrationMappingSyncPayload implements ILIDMigrationMappingSyncPayload {
    [key: string]: any;
    constructor(properties?: ILIDMigrationMappingSyncPayload);
    static create(properties?: ILIDMigrationMappingSyncPayload): LIDMigrationMappingSyncPayload;
    static encode(message: ILIDMigrationMappingSyncPayload, writer?: any): any;
    static encodeDelimited(message: ILIDMigrationMappingSyncPayload, writer?: any): any;
    static decode(reader: any, length?: number): LIDMigrationMappingSyncPayload;
    static decodeDelimited(reader: any): LIDMigrationMappingSyncPayload;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LIDMigrationMappingSyncPayload;
    static toObject(message: LIDMigrationMappingSyncPayload, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILabyrinthWaCommand { [key: string]: any }
  class LabyrinthWaCommand implements ILabyrinthWaCommand {
    [key: string]: any;
    constructor(properties?: ILabyrinthWaCommand);
    static create(properties?: ILabyrinthWaCommand): LabyrinthWaCommand;
    static encode(message: ILabyrinthWaCommand, writer?: any): any;
    static encodeDelimited(message: ILabyrinthWaCommand, writer?: any): any;
    static decode(reader: any, length?: number): LabyrinthWaCommand;
    static decodeDelimited(reader: any): LabyrinthWaCommand;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LabyrinthWaCommand;
    static toObject(message: LabyrinthWaCommand, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILegacyMessage { [key: string]: any }
  class LegacyMessage implements ILegacyMessage {
    [key: string]: any;
    constructor(properties?: ILegacyMessage);
    static create(properties?: ILegacyMessage): LegacyMessage;
    static encode(message: ILegacyMessage, writer?: any): any;
    static encodeDelimited(message: ILegacyMessage, writer?: any): any;
    static decode(reader: any, length?: number): LegacyMessage;
    static decodeDelimited(reader: any): LegacyMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LegacyMessage;
    static toObject(message: LegacyMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILimitSharing { [key: string]: any }
  class LimitSharing implements ILimitSharing {
    [key: string]: any;
    constructor(properties?: ILimitSharing);
    static create(properties?: ILimitSharing): LimitSharing;
    static encode(message: ILimitSharing, writer?: any): any;
    static encodeDelimited(message: ILimitSharing, writer?: any): any;
    static decode(reader: any, length?: number): LimitSharing;
    static decodeDelimited(reader: any): LimitSharing;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LimitSharing;
    static toObject(message: LimitSharing, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace LimitSharing {
    enum TriggerType {
      UNKNOWN = 0,
      CHAT_SETTING = 1,
      BIZ_SUPPORTS_FB_HOSTING = 2,
      UNKNOWN_GROUP = 3,
    }
  }
  interface ILocalizedName { [key: string]: any }
  class LocalizedName implements ILocalizedName {
    [key: string]: any;
    constructor(properties?: ILocalizedName);
    static create(properties?: ILocalizedName): LocalizedName;
    static encode(message: ILocalizedName, writer?: any): any;
    static encodeDelimited(message: ILocalizedName, writer?: any): any;
    static decode(reader: any, length?: number): LocalizedName;
    static decodeDelimited(reader: any): LocalizedName;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): LocalizedName;
    static toObject(message: LocalizedName, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ILocation { [key: string]: any }
  class Location implements ILocation {
    [key: string]: any;
    constructor(properties?: ILocation);
    static create(properties?: ILocation): Location;
    static encode(message: ILocation, writer?: any): any;
    static encodeDelimited(message: ILocation, writer?: any): any;
    static decode(reader: any, length?: number): Location;
    static decodeDelimited(reader: any): Location;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Location;
    static toObject(message: Location, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum MENTION_MENTION_TYPE {
    PROFILE = 0,
  }
  interface IMandrakeDecryptMekInput { [key: string]: any }
  class MandrakeDecryptMekInput implements IMandrakeDecryptMekInput {
    [key: string]: any;
    constructor(properties?: IMandrakeDecryptMekInput);
    static create(properties?: IMandrakeDecryptMekInput): MandrakeDecryptMekInput;
    static encode(message: IMandrakeDecryptMekInput, writer?: any): any;
    static encodeDelimited(message: IMandrakeDecryptMekInput, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeDecryptMekInput;
    static decodeDelimited(reader: any): MandrakeDecryptMekInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeDecryptMekInput;
    static toObject(message: MandrakeDecryptMekInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MandrakeDecryptMekInput {
    interface IEpochSenderPublicData { [key: string]: any }
    class EpochSenderPublicData implements IEpochSenderPublicData {
      [key: string]: any;
      constructor(properties?: IEpochSenderPublicData);
      static create(properties?: IEpochSenderPublicData): EpochSenderPublicData;
      static encode(message: IEpochSenderPublicData, writer?: any): any;
      static encodeDelimited(message: IEpochSenderPublicData, writer?: any): any;
      static decode(reader: any, length?: number): EpochSenderPublicData;
      static decodeDelimited(reader: any): EpochSenderPublicData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EpochSenderPublicData;
      static toObject(message: EpochSenderPublicData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMmkSenderPublicData { [key: string]: any }
    class MmkSenderPublicData implements IMmkSenderPublicData {
      [key: string]: any;
      constructor(properties?: IMmkSenderPublicData);
      static create(properties?: IMmkSenderPublicData): MmkSenderPublicData;
      static encode(message: IMmkSenderPublicData, writer?: any): any;
      static encodeDelimited(message: IMmkSenderPublicData, writer?: any): any;
      static decode(reader: any, length?: number): MmkSenderPublicData;
      static decodeDelimited(reader: any): MmkSenderPublicData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MmkSenderPublicData;
      static toObject(message: MmkSenderPublicData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrecomputedEpochSenderPublicData { [key: string]: any }
    class PrecomputedEpochSenderPublicData implements IPrecomputedEpochSenderPublicData {
      [key: string]: any;
      constructor(properties?: IPrecomputedEpochSenderPublicData);
      static create(properties?: IPrecomputedEpochSenderPublicData): PrecomputedEpochSenderPublicData;
      static encode(message: IPrecomputedEpochSenderPublicData, writer?: any): any;
      static encodeDelimited(message: IPrecomputedEpochSenderPublicData, writer?: any): any;
      static decode(reader: any, length?: number): PrecomputedEpochSenderPublicData;
      static decodeDelimited(reader: any): PrecomputedEpochSenderPublicData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrecomputedEpochSenderPublicData;
      static toObject(message: PrecomputedEpochSenderPublicData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IMandrakeDecryptMekResult { [key: string]: any }
  class MandrakeDecryptMekResult implements IMandrakeDecryptMekResult {
    [key: string]: any;
    constructor(properties?: IMandrakeDecryptMekResult);
    static create(properties?: IMandrakeDecryptMekResult): MandrakeDecryptMekResult;
    static encode(message: IMandrakeDecryptMekResult, writer?: any): any;
    static encodeDelimited(message: IMandrakeDecryptMekResult, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeDecryptMekResult;
    static decodeDelimited(reader: any): MandrakeDecryptMekResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeDecryptMekResult;
    static toObject(message: MandrakeDecryptMekResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeDecryptMekSuccess { [key: string]: any }
  class MandrakeDecryptMekSuccess implements IMandrakeDecryptMekSuccess {
    [key: string]: any;
    constructor(properties?: IMandrakeDecryptMekSuccess);
    static create(properties?: IMandrakeDecryptMekSuccess): MandrakeDecryptMekSuccess;
    static encode(message: IMandrakeDecryptMekSuccess, writer?: any): any;
    static encodeDelimited(message: IMandrakeDecryptMekSuccess, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeDecryptMekSuccess;
    static decodeDelimited(reader: any): MandrakeDecryptMekSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeDecryptMekSuccess;
    static toObject(message: MandrakeDecryptMekSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeEncryptMekInput { [key: string]: any }
  class MandrakeEncryptMekInput implements IMandrakeEncryptMekInput {
    [key: string]: any;
    constructor(properties?: IMandrakeEncryptMekInput);
    static create(properties?: IMandrakeEncryptMekInput): MandrakeEncryptMekInput;
    static encode(message: IMandrakeEncryptMekInput, writer?: any): any;
    static encodeDelimited(message: IMandrakeEncryptMekInput, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeEncryptMekInput;
    static decodeDelimited(reader: any): MandrakeEncryptMekInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeEncryptMekInput;
    static toObject(message: MandrakeEncryptMekInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MandrakeEncryptMekInput {
    interface IDetachedDeviceSender { [key: string]: any }
    class DetachedDeviceSender implements IDetachedDeviceSender {
      [key: string]: any;
      constructor(properties?: IDetachedDeviceSender);
      static create(properties?: IDetachedDeviceSender): DetachedDeviceSender;
      static encode(message: IDetachedDeviceSender, writer?: any): any;
      static encodeDelimited(message: IDetachedDeviceSender, writer?: any): any;
      static decode(reader: any, length?: number): DetachedDeviceSender;
      static decodeDelimited(reader: any): DetachedDeviceSender;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DetachedDeviceSender;
      static toObject(message: DetachedDeviceSender, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEpochSender { [key: string]: any }
    class EpochSender implements IEpochSender {
      [key: string]: any;
      constructor(properties?: IEpochSender);
      static create(properties?: IEpochSender): EpochSender;
      static encode(message: IEpochSender, writer?: any): any;
      static encodeDelimited(message: IEpochSender, writer?: any): any;
      static decode(reader: any, length?: number): EpochSender;
      static decodeDelimited(reader: any): EpochSender;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EpochSender;
      static toObject(message: EpochSender, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMmkSender { [key: string]: any }
    class MmkSender implements IMmkSender {
      [key: string]: any;
      constructor(properties?: IMmkSender);
      static create(properties?: IMmkSender): MmkSender;
      static encode(message: IMmkSender, writer?: any): any;
      static encodeDelimited(message: IMmkSender, writer?: any): any;
      static decode(reader: any, length?: number): MmkSender;
      static decodeDelimited(reader: any): MmkSender;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MmkSender;
      static toObject(message: MmkSender, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IMandrakeEncryptMekResult { [key: string]: any }
  class MandrakeEncryptMekResult implements IMandrakeEncryptMekResult {
    [key: string]: any;
    constructor(properties?: IMandrakeEncryptMekResult);
    static create(properties?: IMandrakeEncryptMekResult): MandrakeEncryptMekResult;
    static encode(message: IMandrakeEncryptMekResult, writer?: any): any;
    static encodeDelimited(message: IMandrakeEncryptMekResult, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeEncryptMekResult;
    static decodeDelimited(reader: any): MandrakeEncryptMekResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeEncryptMekResult;
    static toObject(message: MandrakeEncryptMekResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeEncryptMekSuccess { [key: string]: any }
  class MandrakeEncryptMekSuccess implements IMandrakeEncryptMekSuccess {
    [key: string]: any;
    constructor(properties?: IMandrakeEncryptMekSuccess);
    static create(properties?: IMandrakeEncryptMekSuccess): MandrakeEncryptMekSuccess;
    static encode(message: IMandrakeEncryptMekSuccess, writer?: any): any;
    static encodeDelimited(message: IMandrakeEncryptMekSuccess, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeEncryptMekSuccess;
    static decodeDelimited(reader: any): MandrakeEncryptMekSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeEncryptMekSuccess;
    static toObject(message: MandrakeEncryptMekSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MandrakeEncryptMekSuccess {
    interface IMekDistributionSingleRecipient { [key: string]: any }
    class MekDistributionSingleRecipient implements IMekDistributionSingleRecipient {
      [key: string]: any;
      constructor(properties?: IMekDistributionSingleRecipient);
      static create(properties?: IMekDistributionSingleRecipient): MekDistributionSingleRecipient;
      static encode(message: IMekDistributionSingleRecipient, writer?: any): any;
      static encodeDelimited(message: IMekDistributionSingleRecipient, writer?: any): any;
      static decode(reader: any, length?: number): MekDistributionSingleRecipient;
      static decodeDelimited(reader: any): MekDistributionSingleRecipient;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MekDistributionSingleRecipient;
      static toObject(message: MekDistributionSingleRecipient, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IMandrakeMekBundle { [key: string]: any }
  class MandrakeMekBundle implements IMandrakeMekBundle {
    [key: string]: any;
    constructor(properties?: IMandrakeMekBundle);
    static create(properties?: IMandrakeMekBundle): MandrakeMekBundle;
    static encode(message: IMandrakeMekBundle, writer?: any): any;
    static encodeDelimited(message: IMandrakeMekBundle, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeMekBundle;
    static decodeDelimited(reader: any): MandrakeMekBundle;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeMekBundle;
    static toObject(message: MandrakeMekBundle, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeOpenEpochInput { [key: string]: any }
  class MandrakeOpenEpochInput implements IMandrakeOpenEpochInput {
    [key: string]: any;
    constructor(properties?: IMandrakeOpenEpochInput);
    static create(properties?: IMandrakeOpenEpochInput): MandrakeOpenEpochInput;
    static encode(message: IMandrakeOpenEpochInput, writer?: any): any;
    static encodeDelimited(message: IMandrakeOpenEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeOpenEpochInput;
    static decodeDelimited(reader: any): MandrakeOpenEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeOpenEpochInput;
    static toObject(message: MandrakeOpenEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeOpenEpochResult { [key: string]: any }
  class MandrakeOpenEpochResult implements IMandrakeOpenEpochResult {
    [key: string]: any;
    constructor(properties?: IMandrakeOpenEpochResult);
    static create(properties?: IMandrakeOpenEpochResult): MandrakeOpenEpochResult;
    static encode(message: IMandrakeOpenEpochResult, writer?: any): any;
    static encodeDelimited(message: IMandrakeOpenEpochResult, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeOpenEpochResult;
    static decodeDelimited(reader: any): MandrakeOpenEpochResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeOpenEpochResult;
    static toObject(message: MandrakeOpenEpochResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeOpenEpochSuccess { [key: string]: any }
  class MandrakeOpenEpochSuccess implements IMandrakeOpenEpochSuccess {
    [key: string]: any;
    constructor(properties?: IMandrakeOpenEpochSuccess);
    static create(properties?: IMandrakeOpenEpochSuccess): MandrakeOpenEpochSuccess;
    static encode(message: IMandrakeOpenEpochSuccess, writer?: any): any;
    static encodeDelimited(message: IMandrakeOpenEpochSuccess, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeOpenEpochSuccess;
    static decodeDelimited(reader: any): MandrakeOpenEpochSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeOpenEpochSuccess;
    static toObject(message: MandrakeOpenEpochSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeOpenInitialEpochInput { [key: string]: any }
  class MandrakeOpenInitialEpochInput implements IMandrakeOpenInitialEpochInput {
    [key: string]: any;
    constructor(properties?: IMandrakeOpenInitialEpochInput);
    static create(properties?: IMandrakeOpenInitialEpochInput): MandrakeOpenInitialEpochInput;
    static encode(message: IMandrakeOpenInitialEpochInput, writer?: any): any;
    static encodeDelimited(message: IMandrakeOpenInitialEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeOpenInitialEpochInput;
    static decodeDelimited(reader: any): MandrakeOpenInitialEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeOpenInitialEpochInput;
    static toObject(message: MandrakeOpenInitialEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeOpenInitialEpochResult { [key: string]: any }
  class MandrakeOpenInitialEpochResult implements IMandrakeOpenInitialEpochResult {
    [key: string]: any;
    constructor(properties?: IMandrakeOpenInitialEpochResult);
    static create(properties?: IMandrakeOpenInitialEpochResult): MandrakeOpenInitialEpochResult;
    static encode(message: IMandrakeOpenInitialEpochResult, writer?: any): any;
    static encodeDelimited(message: IMandrakeOpenInitialEpochResult, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeOpenInitialEpochResult;
    static decodeDelimited(reader: any): MandrakeOpenInitialEpochResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeOpenInitialEpochResult;
    static toObject(message: MandrakeOpenInitialEpochResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeValidateNewMmkFromDetachedDeviceInput { [key: string]: any }
  class MandrakeValidateNewMmkFromDetachedDeviceInput implements IMandrakeValidateNewMmkFromDetachedDeviceInput {
    [key: string]: any;
    constructor(properties?: IMandrakeValidateNewMmkFromDetachedDeviceInput);
    static create(properties?: IMandrakeValidateNewMmkFromDetachedDeviceInput): MandrakeValidateNewMmkFromDetachedDeviceInput;
    static encode(message: IMandrakeValidateNewMmkFromDetachedDeviceInput, writer?: any): any;
    static encodeDelimited(message: IMandrakeValidateNewMmkFromDetachedDeviceInput, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeValidateNewMmkFromDetachedDeviceInput;
    static decodeDelimited(reader: any): MandrakeValidateNewMmkFromDetachedDeviceInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeValidateNewMmkFromDetachedDeviceInput;
    static toObject(message: MandrakeValidateNewMmkFromDetachedDeviceInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeValidateNewMmkFromMailboxInput { [key: string]: any }
  class MandrakeValidateNewMmkFromMailboxInput implements IMandrakeValidateNewMmkFromMailboxInput {
    [key: string]: any;
    constructor(properties?: IMandrakeValidateNewMmkFromMailboxInput);
    static create(properties?: IMandrakeValidateNewMmkFromMailboxInput): MandrakeValidateNewMmkFromMailboxInput;
    static encode(message: IMandrakeValidateNewMmkFromMailboxInput, writer?: any): any;
    static encodeDelimited(message: IMandrakeValidateNewMmkFromMailboxInput, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeValidateNewMmkFromMailboxInput;
    static decodeDelimited(reader: any): MandrakeValidateNewMmkFromMailboxInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeValidateNewMmkFromMailboxInput;
    static toObject(message: MandrakeValidateNewMmkFromMailboxInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMandrakeValidateNewMmkResult { [key: string]: any }
  class MandrakeValidateNewMmkResult implements IMandrakeValidateNewMmkResult {
    [key: string]: any;
    constructor(properties?: IMandrakeValidateNewMmkResult);
    static create(properties?: IMandrakeValidateNewMmkResult): MandrakeValidateNewMmkResult;
    static encode(message: IMandrakeValidateNewMmkResult, writer?: any): any;
    static encodeDelimited(message: IMandrakeValidateNewMmkResult, writer?: any): any;
    static decode(reader: any, length?: number): MandrakeValidateNewMmkResult;
    static decodeDelimited(reader: any): MandrakeValidateNewMmkResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MandrakeValidateNewMmkResult;
    static toObject(message: MandrakeValidateNewMmkResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMediaData { [key: string]: any }
  class MediaData implements IMediaData {
    [key: string]: any;
    constructor(properties?: IMediaData);
    static create(properties?: IMediaData): MediaData;
    static encode(message: IMediaData, writer?: any): any;
    static encodeDelimited(message: IMediaData, writer?: any): any;
    static decode(reader: any, length?: number): MediaData;
    static decodeDelimited(reader: any): MediaData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MediaData;
    static toObject(message: MediaData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMediaDomainInfo { [key: string]: any }
  class MediaDomainInfo implements IMediaDomainInfo {
    [key: string]: any;
    constructor(properties?: IMediaDomainInfo);
    static create(properties?: IMediaDomainInfo): MediaDomainInfo;
    static encode(message: IMediaDomainInfo, writer?: any): any;
    static encodeDelimited(message: IMediaDomainInfo, writer?: any): any;
    static decode(reader: any, length?: number): MediaDomainInfo;
    static decodeDelimited(reader: any): MediaDomainInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MediaDomainInfo;
    static toObject(message: MediaDomainInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMediaEntry { [key: string]: any }
  class MediaEntry implements IMediaEntry {
    [key: string]: any;
    constructor(properties?: IMediaEntry);
    static create(properties?: IMediaEntry): MediaEntry;
    static encode(message: IMediaEntry, writer?: any): any;
    static encodeDelimited(message: IMediaEntry, writer?: any): any;
    static decode(reader: any, length?: number): MediaEntry;
    static decodeDelimited(reader: any): MediaEntry;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MediaEntry;
    static toObject(message: MediaEntry, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MediaEntry {
    interface IDownloadableThumbnail { [key: string]: any }
    class DownloadableThumbnail implements IDownloadableThumbnail {
      [key: string]: any;
      constructor(properties?: IDownloadableThumbnail);
      static create(properties?: IDownloadableThumbnail): DownloadableThumbnail;
      static encode(message: IDownloadableThumbnail, writer?: any): any;
      static encodeDelimited(message: IDownloadableThumbnail, writer?: any): any;
      static decode(reader: any, length?: number): DownloadableThumbnail;
      static decodeDelimited(reader: any): DownloadableThumbnail;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DownloadableThumbnail;
      static toObject(message: DownloadableThumbnail, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IProgressiveJpegDetails { [key: string]: any }
    class ProgressiveJpegDetails implements IProgressiveJpegDetails {
      [key: string]: any;
      constructor(properties?: IProgressiveJpegDetails);
      static create(properties?: IProgressiveJpegDetails): ProgressiveJpegDetails;
      static encode(message: IProgressiveJpegDetails, writer?: any): any;
      static encodeDelimited(message: IProgressiveJpegDetails, writer?: any): any;
      static decode(reader: any, length?: number): ProgressiveJpegDetails;
      static decodeDelimited(reader: any): ProgressiveJpegDetails;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ProgressiveJpegDetails;
      static toObject(message: ProgressiveJpegDetails, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  enum MediaKeyDomain {
    MEDIA_KEY_DOMAIN_UNKNOWN = 0,
    MEDIA_KEY_DOMAIN_E2EE = 1,
    MEDIA_KEY_DOMAIN_NON_E2EE = 2,
  }
  interface IMediaNotifyMessage { [key: string]: any }
  class MediaNotifyMessage implements IMediaNotifyMessage {
    [key: string]: any;
    constructor(properties?: IMediaNotifyMessage);
    static create(properties?: IMediaNotifyMessage): MediaNotifyMessage;
    static encode(message: IMediaNotifyMessage, writer?: any): any;
    static encodeDelimited(message: IMediaNotifyMessage, writer?: any): any;
    static decode(reader: any, length?: number): MediaNotifyMessage;
    static decodeDelimited(reader: any): MediaNotifyMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MediaNotifyMessage;
    static toObject(message: MediaNotifyMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMediaRetryNotification { [key: string]: any }
  class MediaRetryNotification implements IMediaRetryNotification {
    [key: string]: any;
    constructor(properties?: IMediaRetryNotification);
    static create(properties?: IMediaRetryNotification): MediaRetryNotification;
    static encode(message: IMediaRetryNotification, writer?: any): any;
    static encodeDelimited(message: IMediaRetryNotification, writer?: any): any;
    static decode(reader: any, length?: number): MediaRetryNotification;
    static decodeDelimited(reader: any): MediaRetryNotification;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MediaRetryNotification;
    static toObject(message: MediaRetryNotification, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MediaRetryNotification {
    enum ResultType {
      GENERAL_ERROR = 0,
      SUCCESS = 1,
      NOT_FOUND = 2,
      DECRYPTION_ERROR = 3,
    }
  }
  enum MediaVisibility {
    DEFAULT = 0,
    OFF = 1,
    ON = 2,
  }
  interface IMekBundle { [key: string]: any }
  class MekBundle implements IMekBundle {
    [key: string]: any;
    constructor(properties?: IMekBundle);
    static create(properties?: IMekBundle): MekBundle;
    static encode(message: IMekBundle, writer?: any): any;
    static encodeDelimited(message: IMekBundle, writer?: any): any;
    static decode(reader: any, length?: number): MekBundle;
    static decodeDelimited(reader: any): MekBundle;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MekBundle;
    static toObject(message: MekBundle, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMemberLabel { [key: string]: any }
  class MemberLabel implements IMemberLabel {
    [key: string]: any;
    constructor(properties?: IMemberLabel);
    static create(properties?: IMemberLabel): MemberLabel;
    static encode(message: IMemberLabel, writer?: any): any;
    static encodeDelimited(message: IMemberLabel, writer?: any): any;
    static decode(reader: any, length?: number): MemberLabel;
    static decodeDelimited(reader: any): MemberLabel;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MemberLabel;
    static toObject(message: MemberLabel, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMention { [key: string]: any }
  class Mention implements IMention {
    [key: string]: any;
    constructor(properties?: IMention);
    static create(properties?: IMention): Mention;
    static encode(message: IMention, writer?: any): any;
    static encodeDelimited(message: IMention, writer?: any): any;
    static decode(reader: any, length?: number): Mention;
    static decodeDelimited(reader: any): Mention;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Mention;
    static toObject(message: Mention, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMerkleMembershipProof { [key: string]: any }
  class MerkleMembershipProof implements IMerkleMembershipProof {
    [key: string]: any;
    constructor(properties?: IMerkleMembershipProof);
    static create(properties?: IMerkleMembershipProof): MerkleMembershipProof;
    static encode(message: IMerkleMembershipProof, writer?: any): any;
    static encodeDelimited(message: IMerkleMembershipProof, writer?: any): any;
    static decode(reader: any, length?: number): MerkleMembershipProof;
    static decodeDelimited(reader: any): MerkleMembershipProof;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MerkleMembershipProof;
    static toObject(message: MerkleMembershipProof, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMessage { [key: string]: any }
  class Message implements IMessage {
    [key: string]: any;
    constructor(properties?: IMessage);
    static create(properties?: IMessage): Message;
    static encode(message: IMessage, writer?: any): any;
    static encodeDelimited(message: IMessage, writer?: any): any;
    static decode(reader: any, length?: number): Message;
    static decodeDelimited(reader: any): Message;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Message;
    static toObject(message: Message, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace Message {
    interface IAlbumMessage { [key: string]: any }
    class AlbumMessage implements IAlbumMessage {
      [key: string]: any;
      constructor(properties?: IAlbumMessage);
      static create(properties?: IAlbumMessage): AlbumMessage;
      static encode(message: IAlbumMessage, writer?: any): any;
      static encodeDelimited(message: IAlbumMessage, writer?: any): any;
      static decode(reader: any, length?: number): AlbumMessage;
      static decodeDelimited(reader: any): AlbumMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AlbumMessage;
      static toObject(message: AlbumMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateFatalExceptionNotification { [key: string]: any }
    class AppStateFatalExceptionNotification implements IAppStateFatalExceptionNotification {
      [key: string]: any;
      constructor(properties?: IAppStateFatalExceptionNotification);
      static create(properties?: IAppStateFatalExceptionNotification): AppStateFatalExceptionNotification;
      static encode(message: IAppStateFatalExceptionNotification, writer?: any): any;
      static encodeDelimited(message: IAppStateFatalExceptionNotification, writer?: any): any;
      static decode(reader: any, length?: number): AppStateFatalExceptionNotification;
      static decodeDelimited(reader: any): AppStateFatalExceptionNotification;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateFatalExceptionNotification;
      static toObject(message: AppStateFatalExceptionNotification, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateSyncKey { [key: string]: any }
    class AppStateSyncKey implements IAppStateSyncKey {
      [key: string]: any;
      constructor(properties?: IAppStateSyncKey);
      static create(properties?: IAppStateSyncKey): AppStateSyncKey;
      static encode(message: IAppStateSyncKey, writer?: any): any;
      static encodeDelimited(message: IAppStateSyncKey, writer?: any): any;
      static decode(reader: any, length?: number): AppStateSyncKey;
      static decodeDelimited(reader: any): AppStateSyncKey;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateSyncKey;
      static toObject(message: AppStateSyncKey, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateSyncKeyData { [key: string]: any }
    class AppStateSyncKeyData implements IAppStateSyncKeyData {
      [key: string]: any;
      constructor(properties?: IAppStateSyncKeyData);
      static create(properties?: IAppStateSyncKeyData): AppStateSyncKeyData;
      static encode(message: IAppStateSyncKeyData, writer?: any): any;
      static encodeDelimited(message: IAppStateSyncKeyData, writer?: any): any;
      static decode(reader: any, length?: number): AppStateSyncKeyData;
      static decodeDelimited(reader: any): AppStateSyncKeyData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateSyncKeyData;
      static toObject(message: AppStateSyncKeyData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateSyncKeyFingerprint { [key: string]: any }
    class AppStateSyncKeyFingerprint implements IAppStateSyncKeyFingerprint {
      [key: string]: any;
      constructor(properties?: IAppStateSyncKeyFingerprint);
      static create(properties?: IAppStateSyncKeyFingerprint): AppStateSyncKeyFingerprint;
      static encode(message: IAppStateSyncKeyFingerprint, writer?: any): any;
      static encodeDelimited(message: IAppStateSyncKeyFingerprint, writer?: any): any;
      static decode(reader: any, length?: number): AppStateSyncKeyFingerprint;
      static decodeDelimited(reader: any): AppStateSyncKeyFingerprint;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateSyncKeyFingerprint;
      static toObject(message: AppStateSyncKeyFingerprint, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateSyncKeyId { [key: string]: any }
    class AppStateSyncKeyId implements IAppStateSyncKeyId {
      [key: string]: any;
      constructor(properties?: IAppStateSyncKeyId);
      static create(properties?: IAppStateSyncKeyId): AppStateSyncKeyId;
      static encode(message: IAppStateSyncKeyId, writer?: any): any;
      static encodeDelimited(message: IAppStateSyncKeyId, writer?: any): any;
      static decode(reader: any, length?: number): AppStateSyncKeyId;
      static decodeDelimited(reader: any): AppStateSyncKeyId;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateSyncKeyId;
      static toObject(message: AppStateSyncKeyId, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateSyncKeyRequest { [key: string]: any }
    class AppStateSyncKeyRequest implements IAppStateSyncKeyRequest {
      [key: string]: any;
      constructor(properties?: IAppStateSyncKeyRequest);
      static create(properties?: IAppStateSyncKeyRequest): AppStateSyncKeyRequest;
      static encode(message: IAppStateSyncKeyRequest, writer?: any): any;
      static encodeDelimited(message: IAppStateSyncKeyRequest, writer?: any): any;
      static decode(reader: any, length?: number): AppStateSyncKeyRequest;
      static decodeDelimited(reader: any): AppStateSyncKeyRequest;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateSyncKeyRequest;
      static toObject(message: AppStateSyncKeyRequest, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAppStateSyncKeyShare { [key: string]: any }
    class AppStateSyncKeyShare implements IAppStateSyncKeyShare {
      [key: string]: any;
      constructor(properties?: IAppStateSyncKeyShare);
      static create(properties?: IAppStateSyncKeyShare): AppStateSyncKeyShare;
      static encode(message: IAppStateSyncKeyShare, writer?: any): any;
      static encodeDelimited(message: IAppStateSyncKeyShare, writer?: any): any;
      static decode(reader: any, length?: number): AppStateSyncKeyShare;
      static decodeDelimited(reader: any): AppStateSyncKeyShare;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AppStateSyncKeyShare;
      static toObject(message: AppStateSyncKeyShare, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAudioMessage { [key: string]: any }
    class AudioMessage implements IAudioMessage {
      [key: string]: any;
      constructor(properties?: IAudioMessage);
      static create(properties?: IAudioMessage): AudioMessage;
      static encode(message: IAudioMessage, writer?: any): any;
      static encodeDelimited(message: IAudioMessage, writer?: any): any;
      static decode(reader: any, length?: number): AudioMessage;
      static decodeDelimited(reader: any): AudioMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AudioMessage;
      static toObject(message: AudioMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBCallMessage { [key: string]: any }
    class BCallMessage implements IBCallMessage {
      [key: string]: any;
      constructor(properties?: IBCallMessage);
      static create(properties?: IBCallMessage): BCallMessage;
      static encode(message: IBCallMessage, writer?: any): any;
      static encodeDelimited(message: IBCallMessage, writer?: any): any;
      static decode(reader: any, length?: number): BCallMessage;
      static decodeDelimited(reader: any): BCallMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BCallMessage;
      static toObject(message: BCallMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace BCallMessage {
      enum MediaType {
        UNKNOWN = 0,
        AUDIO = 1,
        VIDEO = 2,
      }
    }
    interface IBotHistoryShareSyncMetadata { [key: string]: any }
    class BotHistoryShareSyncMetadata implements IBotHistoryShareSyncMetadata {
      [key: string]: any;
      constructor(properties?: IBotHistoryShareSyncMetadata);
      static create(properties?: IBotHistoryShareSyncMetadata): BotHistoryShareSyncMetadata;
      static encode(message: IBotHistoryShareSyncMetadata, writer?: any): any;
      static encodeDelimited(message: IBotHistoryShareSyncMetadata, writer?: any): any;
      static decode(reader: any, length?: number): BotHistoryShareSyncMetadata;
      static decodeDelimited(reader: any): BotHistoryShareSyncMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BotHistoryShareSyncMetadata;
      static toObject(message: BotHistoryShareSyncMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IButtonsMessage { [key: string]: any }
    class ButtonsMessage implements IButtonsMessage {
      [key: string]: any;
      constructor(properties?: IButtonsMessage);
      static create(properties?: IButtonsMessage): ButtonsMessage;
      static encode(message: IButtonsMessage, writer?: any): any;
      static encodeDelimited(message: IButtonsMessage, writer?: any): any;
      static decode(reader: any, length?: number): ButtonsMessage;
      static decodeDelimited(reader: any): ButtonsMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ButtonsMessage;
      static toObject(message: ButtonsMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ButtonsMessage {
      interface IButton { [key: string]: any }
      class Button implements IButton {
        [key: string]: any;
        constructor(properties?: IButton);
        static create(properties?: IButton): Button;
        static encode(message: IButton, writer?: any): any;
        static encodeDelimited(message: IButton, writer?: any): any;
        static decode(reader: any, length?: number): Button;
        static decodeDelimited(reader: any): Button;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Button;
        static toObject(message: Button, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace Button {
        interface IButtonText { [key: string]: any }
        class ButtonText implements IButtonText {
          [key: string]: any;
          constructor(properties?: IButtonText);
          static create(properties?: IButtonText): ButtonText;
          static encode(message: IButtonText, writer?: any): any;
          static encodeDelimited(message: IButtonText, writer?: any): any;
          static decode(reader: any, length?: number): ButtonText;
          static decodeDelimited(reader: any): ButtonText;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): ButtonText;
          static toObject(message: ButtonText, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface INativeFlowInfo { [key: string]: any }
        class NativeFlowInfo implements INativeFlowInfo {
          [key: string]: any;
          constructor(properties?: INativeFlowInfo);
          static create(properties?: INativeFlowInfo): NativeFlowInfo;
          static encode(message: INativeFlowInfo, writer?: any): any;
          static encodeDelimited(message: INativeFlowInfo, writer?: any): any;
          static decode(reader: any, length?: number): NativeFlowInfo;
          static decodeDelimited(reader: any): NativeFlowInfo;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): NativeFlowInfo;
          static toObject(message: NativeFlowInfo, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        enum Type {
          UNKNOWN = 0,
          RESPONSE = 1,
          NATIVE_FLOW = 2,
        }
      }
      enum HeaderType {
        UNKNOWN = 0,
        EMPTY = 1,
        TEXT = 2,
        DOCUMENT = 3,
        IMAGE = 4,
        VIDEO = 5,
        LOCATION = 6,
      }
    }
    interface IButtonsResponseMessage { [key: string]: any }
    class ButtonsResponseMessage implements IButtonsResponseMessage {
      [key: string]: any;
      constructor(properties?: IButtonsResponseMessage);
      static create(properties?: IButtonsResponseMessage): ButtonsResponseMessage;
      static encode(message: IButtonsResponseMessage, writer?: any): any;
      static encodeDelimited(message: IButtonsResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): ButtonsResponseMessage;
      static decodeDelimited(reader: any): ButtonsResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ButtonsResponseMessage;
      static toObject(message: ButtonsResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ButtonsResponseMessage {
      enum Type {
        UNKNOWN = 0,
        DISPLAY_TEXT = 1,
      }
    }
    interface ICall { [key: string]: any }
    class Call implements ICall {
      [key: string]: any;
      constructor(properties?: ICall);
      static create(properties?: ICall): Call;
      static encode(message: ICall, writer?: any): any;
      static encodeDelimited(message: ICall, writer?: any): any;
      static decode(reader: any, length?: number): Call;
      static decodeDelimited(reader: any): Call;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Call;
      static toObject(message: Call, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICallLogMessage { [key: string]: any }
    class CallLogMessage implements ICallLogMessage {
      [key: string]: any;
      constructor(properties?: ICallLogMessage);
      static create(properties?: ICallLogMessage): CallLogMessage;
      static encode(message: ICallLogMessage, writer?: any): any;
      static encodeDelimited(message: ICallLogMessage, writer?: any): any;
      static decode(reader: any, length?: number): CallLogMessage;
      static decodeDelimited(reader: any): CallLogMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CallLogMessage;
      static toObject(message: CallLogMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace CallLogMessage {
      enum CallOutcome {
        CONNECTED = 0,
        MISSED = 1,
        FAILED = 2,
        REJECTED = 3,
        ACCEPTED_ELSEWHERE = 4,
        ONGOING = 5,
        SILENCED_BY_DND = 6,
        SILENCED_UNKNOWN_CALLER = 7,
      }
      interface ICallParticipant { [key: string]: any }
      class CallParticipant implements ICallParticipant {
        [key: string]: any;
        constructor(properties?: ICallParticipant);
        static create(properties?: ICallParticipant): CallParticipant;
        static encode(message: ICallParticipant, writer?: any): any;
        static encodeDelimited(message: ICallParticipant, writer?: any): any;
        static decode(reader: any, length?: number): CallParticipant;
        static decodeDelimited(reader: any): CallParticipant;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CallParticipant;
        static toObject(message: CallParticipant, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum CallType {
        REGULAR = 0,
        SCHEDULED_CALL = 1,
        VOICE_CHAT = 2,
      }
    }
    interface ICancelPaymentRequestMessage { [key: string]: any }
    class CancelPaymentRequestMessage implements ICancelPaymentRequestMessage {
      [key: string]: any;
      constructor(properties?: ICancelPaymentRequestMessage);
      static create(properties?: ICancelPaymentRequestMessage): CancelPaymentRequestMessage;
      static encode(message: ICancelPaymentRequestMessage, writer?: any): any;
      static encodeDelimited(message: ICancelPaymentRequestMessage, writer?: any): any;
      static decode(reader: any, length?: number): CancelPaymentRequestMessage;
      static decodeDelimited(reader: any): CancelPaymentRequestMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CancelPaymentRequestMessage;
      static toObject(message: CancelPaymentRequestMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChat { [key: string]: any }
    class Chat implements IChat {
      [key: string]: any;
      constructor(properties?: IChat);
      static create(properties?: IChat): Chat;
      static encode(message: IChat, writer?: any): any;
      static encodeDelimited(message: IChat, writer?: any): any;
      static decode(reader: any, length?: number): Chat;
      static decodeDelimited(reader: any): Chat;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Chat;
      static toObject(message: Chat, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatAnimatedWallpaper { [key: string]: any }
    class ChatAnimatedWallpaper implements IChatAnimatedWallpaper {
      [key: string]: any;
      constructor(properties?: IChatAnimatedWallpaper);
      static create(properties?: IChatAnimatedWallpaper): ChatAnimatedWallpaper;
      static encode(message: IChatAnimatedWallpaper, writer?: any): any;
      static encodeDelimited(message: IChatAnimatedWallpaper, writer?: any): any;
      static decode(reader: any, length?: number): ChatAnimatedWallpaper;
      static decodeDelimited(reader: any): ChatAnimatedWallpaper;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatAnimatedWallpaper;
      static toObject(message: ChatAnimatedWallpaper, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatCustomImageWallpaper { [key: string]: any }
    class ChatCustomImageWallpaper implements IChatCustomImageWallpaper {
      [key: string]: any;
      constructor(properties?: IChatCustomImageWallpaper);
      static create(properties?: IChatCustomImageWallpaper): ChatCustomImageWallpaper;
      static encode(message: IChatCustomImageWallpaper, writer?: any): any;
      static encodeDelimited(message: IChatCustomImageWallpaper, writer?: any): any;
      static decode(reader: any, length?: number): ChatCustomImageWallpaper;
      static decodeDelimited(reader: any): ChatCustomImageWallpaper;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatCustomImageWallpaper;
      static toObject(message: ChatCustomImageWallpaper, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatDefaultWallpaper { [key: string]: any }
    class ChatDefaultWallpaper implements IChatDefaultWallpaper {
      [key: string]: any;
      constructor(properties?: IChatDefaultWallpaper);
      static create(properties?: IChatDefaultWallpaper): ChatDefaultWallpaper;
      static encode(message: IChatDefaultWallpaper, writer?: any): any;
      static encodeDelimited(message: IChatDefaultWallpaper, writer?: any): any;
      static decode(reader: any, length?: number): ChatDefaultWallpaper;
      static decodeDelimited(reader: any): ChatDefaultWallpaper;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatDefaultWallpaper;
      static toObject(message: ChatDefaultWallpaper, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatSolidColorWallpaper { [key: string]: any }
    class ChatSolidColorWallpaper implements IChatSolidColorWallpaper {
      [key: string]: any;
      constructor(properties?: IChatSolidColorWallpaper);
      static create(properties?: IChatSolidColorWallpaper): ChatSolidColorWallpaper;
      static encode(message: IChatSolidColorWallpaper, writer?: any): any;
      static encodeDelimited(message: IChatSolidColorWallpaper, writer?: any): any;
      static decode(reader: any, length?: number): ChatSolidColorWallpaper;
      static decodeDelimited(reader: any): ChatSolidColorWallpaper;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatSolidColorWallpaper;
      static toObject(message: ChatSolidColorWallpaper, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatStockImageWallpaper { [key: string]: any }
    class ChatStockImageWallpaper implements IChatStockImageWallpaper {
      [key: string]: any;
      constructor(properties?: IChatStockImageWallpaper);
      static create(properties?: IChatStockImageWallpaper): ChatStockImageWallpaper;
      static encode(message: IChatStockImageWallpaper, writer?: any): any;
      static encodeDelimited(message: IChatStockImageWallpaper, writer?: any): any;
      static decode(reader: any, length?: number): ChatStockImageWallpaper;
      static decodeDelimited(reader: any): ChatStockImageWallpaper;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatStockImageWallpaper;
      static toObject(message: ChatStockImageWallpaper, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatThemeSetting { [key: string]: any }
    class ChatThemeSetting implements IChatThemeSetting {
      [key: string]: any;
      constructor(properties?: IChatThemeSetting);
      static create(properties?: IChatThemeSetting): ChatThemeSetting;
      static encode(message: IChatThemeSetting, writer?: any): any;
      static encodeDelimited(message: IChatThemeSetting, writer?: any): any;
      static decode(reader: any, length?: number): ChatThemeSetting;
      static decodeDelimited(reader: any): ChatThemeSetting;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatThemeSetting;
      static toObject(message: ChatThemeSetting, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICloudAPIThreadControlNotification { [key: string]: any }
    class CloudAPIThreadControlNotification implements ICloudAPIThreadControlNotification {
      [key: string]: any;
      constructor(properties?: ICloudAPIThreadControlNotification);
      static create(properties?: ICloudAPIThreadControlNotification): CloudAPIThreadControlNotification;
      static encode(message: ICloudAPIThreadControlNotification, writer?: any): any;
      static encodeDelimited(message: ICloudAPIThreadControlNotification, writer?: any): any;
      static decode(reader: any, length?: number): CloudAPIThreadControlNotification;
      static decodeDelimited(reader: any): CloudAPIThreadControlNotification;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CloudAPIThreadControlNotification;
      static toObject(message: CloudAPIThreadControlNotification, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace CloudAPIThreadControlNotification {
      enum CloudAPIThreadControl {
        UNKNOWN = 0,
        CONTROL_PASSED = 1,
        CONTROL_TAKEN = 2,
        INFO = 3,
      }
      interface ICloudAPIThreadControlNotificationContent { [key: string]: any }
      class CloudAPIThreadControlNotificationContent implements ICloudAPIThreadControlNotificationContent {
        [key: string]: any;
        constructor(properties?: ICloudAPIThreadControlNotificationContent);
        static create(properties?: ICloudAPIThreadControlNotificationContent): CloudAPIThreadControlNotificationContent;
        static encode(message: ICloudAPIThreadControlNotificationContent, writer?: any): any;
        static encodeDelimited(message: ICloudAPIThreadControlNotificationContent, writer?: any): any;
        static decode(reader: any, length?: number): CloudAPIThreadControlNotificationContent;
        static decodeDelimited(reader: any): CloudAPIThreadControlNotificationContent;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CloudAPIThreadControlNotificationContent;
        static toObject(message: CloudAPIThreadControlNotificationContent, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface ICommentMessage { [key: string]: any }
    class CommentMessage implements ICommentMessage {
      [key: string]: any;
      constructor(properties?: ICommentMessage);
      static create(properties?: ICommentMessage): CommentMessage;
      static encode(message: ICommentMessage, writer?: any): any;
      static encodeDelimited(message: ICommentMessage, writer?: any): any;
      static decode(reader: any, length?: number): CommentMessage;
      static decodeDelimited(reader: any): CommentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CommentMessage;
      static toObject(message: CommentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IConditionalRevealMessage { [key: string]: any }
    class ConditionalRevealMessage implements IConditionalRevealMessage {
      [key: string]: any;
      constructor(properties?: IConditionalRevealMessage);
      static create(properties?: IConditionalRevealMessage): ConditionalRevealMessage;
      static encode(message: IConditionalRevealMessage, writer?: any): any;
      static encodeDelimited(message: IConditionalRevealMessage, writer?: any): any;
      static decode(reader: any, length?: number): ConditionalRevealMessage;
      static decodeDelimited(reader: any): ConditionalRevealMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ConditionalRevealMessage;
      static toObject(message: ConditionalRevealMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ConditionalRevealMessage {
      enum ConditionalRevealMessageType {
        UNKNOWN = 0,
        SCHEDULED_MESSAGE = 1,
      }
    }
    interface IContactMessage { [key: string]: any }
    class ContactMessage implements IContactMessage {
      [key: string]: any;
      constructor(properties?: IContactMessage);
      static create(properties?: IContactMessage): ContactMessage;
      static encode(message: IContactMessage, writer?: any): any;
      static encodeDelimited(message: IContactMessage, writer?: any): any;
      static decode(reader: any, length?: number): ContactMessage;
      static decodeDelimited(reader: any): ContactMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactMessage;
      static toObject(message: ContactMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IContactsArrayMessage { [key: string]: any }
    class ContactsArrayMessage implements IContactsArrayMessage {
      [key: string]: any;
      constructor(properties?: IContactsArrayMessage);
      static create(properties?: IContactsArrayMessage): ContactsArrayMessage;
      static encode(message: IContactsArrayMessage, writer?: any): any;
      static encodeDelimited(message: IContactsArrayMessage, writer?: any): any;
      static decode(reader: any, length?: number): ContactsArrayMessage;
      static decodeDelimited(reader: any): ContactsArrayMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactsArrayMessage;
      static toObject(message: ContactsArrayMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDeclinePaymentRequestMessage { [key: string]: any }
    class DeclinePaymentRequestMessage implements IDeclinePaymentRequestMessage {
      [key: string]: any;
      constructor(properties?: IDeclinePaymentRequestMessage);
      static create(properties?: IDeclinePaymentRequestMessage): DeclinePaymentRequestMessage;
      static encode(message: IDeclinePaymentRequestMessage, writer?: any): any;
      static encodeDelimited(message: IDeclinePaymentRequestMessage, writer?: any): any;
      static decode(reader: any, length?: number): DeclinePaymentRequestMessage;
      static decodeDelimited(reader: any): DeclinePaymentRequestMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DeclinePaymentRequestMessage;
      static toObject(message: DeclinePaymentRequestMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDeviceSentMessage { [key: string]: any }
    class DeviceSentMessage implements IDeviceSentMessage {
      [key: string]: any;
      constructor(properties?: IDeviceSentMessage);
      static create(properties?: IDeviceSentMessage): DeviceSentMessage;
      static encode(message: IDeviceSentMessage, writer?: any): any;
      static encodeDelimited(message: IDeviceSentMessage, writer?: any): any;
      static decode(reader: any, length?: number): DeviceSentMessage;
      static decodeDelimited(reader: any): DeviceSentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DeviceSentMessage;
      static toObject(message: DeviceSentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDocumentMessage { [key: string]: any }
    class DocumentMessage implements IDocumentMessage {
      [key: string]: any;
      constructor(properties?: IDocumentMessage);
      static create(properties?: IDocumentMessage): DocumentMessage;
      static encode(message: IDocumentMessage, writer?: any): any;
      static encodeDelimited(message: IDocumentMessage, writer?: any): any;
      static decode(reader: any, length?: number): DocumentMessage;
      static decodeDelimited(reader: any): DocumentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DocumentMessage;
      static toObject(message: DocumentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEncCommentMessage { [key: string]: any }
    class EncCommentMessage implements IEncCommentMessage {
      [key: string]: any;
      constructor(properties?: IEncCommentMessage);
      static create(properties?: IEncCommentMessage): EncCommentMessage;
      static encode(message: IEncCommentMessage, writer?: any): any;
      static encodeDelimited(message: IEncCommentMessage, writer?: any): any;
      static decode(reader: any, length?: number): EncCommentMessage;
      static decodeDelimited(reader: any): EncCommentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EncCommentMessage;
      static toObject(message: EncCommentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEncEventResponseMessage { [key: string]: any }
    class EncEventResponseMessage implements IEncEventResponseMessage {
      [key: string]: any;
      constructor(properties?: IEncEventResponseMessage);
      static create(properties?: IEncEventResponseMessage): EncEventResponseMessage;
      static encode(message: IEncEventResponseMessage, writer?: any): any;
      static encodeDelimited(message: IEncEventResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): EncEventResponseMessage;
      static decodeDelimited(reader: any): EncEventResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EncEventResponseMessage;
      static toObject(message: EncEventResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEncReactionMessage { [key: string]: any }
    class EncReactionMessage implements IEncReactionMessage {
      [key: string]: any;
      constructor(properties?: IEncReactionMessage);
      static create(properties?: IEncReactionMessage): EncReactionMessage;
      static encode(message: IEncReactionMessage, writer?: any): any;
      static encodeDelimited(message: IEncReactionMessage, writer?: any): any;
      static decode(reader: any, length?: number): EncReactionMessage;
      static decodeDelimited(reader: any): EncReactionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EncReactionMessage;
      static toObject(message: EncReactionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEventInviteMessage { [key: string]: any }
    class EventInviteMessage implements IEventInviteMessage {
      [key: string]: any;
      constructor(properties?: IEventInviteMessage);
      static create(properties?: IEventInviteMessage): EventInviteMessage;
      static encode(message: IEventInviteMessage, writer?: any): any;
      static encodeDelimited(message: IEventInviteMessage, writer?: any): any;
      static decode(reader: any, length?: number): EventInviteMessage;
      static decodeDelimited(reader: any): EventInviteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EventInviteMessage;
      static toObject(message: EventInviteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEventMessage { [key: string]: any }
    class EventMessage implements IEventMessage {
      [key: string]: any;
      constructor(properties?: IEventMessage);
      static create(properties?: IEventMessage): EventMessage;
      static encode(message: IEventMessage, writer?: any): any;
      static encodeDelimited(message: IEventMessage, writer?: any): any;
      static decode(reader: any, length?: number): EventMessage;
      static decodeDelimited(reader: any): EventMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EventMessage;
      static toObject(message: EventMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IEventResponseMessage { [key: string]: any }
    class EventResponseMessage implements IEventResponseMessage {
      [key: string]: any;
      constructor(properties?: IEventResponseMessage);
      static create(properties?: IEventResponseMessage): EventResponseMessage;
      static encode(message: IEventResponseMessage, writer?: any): any;
      static encodeDelimited(message: IEventResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): EventResponseMessage;
      static decodeDelimited(reader: any): EventResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EventResponseMessage;
      static toObject(message: EventResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace EventResponseMessage {
      enum EventResponseType {
        UNKNOWN = 0,
        GOING = 1,
        NOT_GOING = 2,
        MAYBE = 3,
      }
    }
    interface IExtendedTextMessage { [key: string]: any }
    class ExtendedTextMessage implements IExtendedTextMessage {
      [key: string]: any;
      constructor(properties?: IExtendedTextMessage);
      static create(properties?: IExtendedTextMessage): ExtendedTextMessage;
      static encode(message: IExtendedTextMessage, writer?: any): any;
      static encodeDelimited(message: IExtendedTextMessage, writer?: any): any;
      static decode(reader: any, length?: number): ExtendedTextMessage;
      static decodeDelimited(reader: any): ExtendedTextMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ExtendedTextMessage;
      static toObject(message: ExtendedTextMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ExtendedTextMessage {
      enum FontType {
        SYSTEM = 0,
        SYSTEM_TEXT = 1,
        FB_SCRIPT = 2,
        SYSTEM_BOLD = 6,
        MORNINGBREEZE_REGULAR = 7,
        CALISTOGA_REGULAR = 8,
        EXO2_EXTRABOLD = 9,
        COURIERPRIME_BOLD = 10,
      }
      enum InviteLinkGroupType {
        DEFAULT = 0,
        PARENT = 1,
        SUB = 2,
        DEFAULT_SUB = 3,
      }
      enum PreviewType {
        NONE = 0,
        VIDEO = 1,
        PLACEHOLDER = 4,
        IMAGE = 5,
        PAYMENT_LINKS = 6,
        PROFILE = 7,
      }
    }
    interface IFullHistorySyncOnDemandConfig { [key: string]: any }
    class FullHistorySyncOnDemandConfig implements IFullHistorySyncOnDemandConfig {
      [key: string]: any;
      constructor(properties?: IFullHistorySyncOnDemandConfig);
      static create(properties?: IFullHistorySyncOnDemandConfig): FullHistorySyncOnDemandConfig;
      static encode(message: IFullHistorySyncOnDemandConfig, writer?: any): any;
      static encodeDelimited(message: IFullHistorySyncOnDemandConfig, writer?: any): any;
      static decode(reader: any, length?: number): FullHistorySyncOnDemandConfig;
      static decodeDelimited(reader: any): FullHistorySyncOnDemandConfig;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FullHistorySyncOnDemandConfig;
      static toObject(message: FullHistorySyncOnDemandConfig, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IFullHistorySyncOnDemandRequestMetadata { [key: string]: any }
    class FullHistorySyncOnDemandRequestMetadata implements IFullHistorySyncOnDemandRequestMetadata {
      [key: string]: any;
      constructor(properties?: IFullHistorySyncOnDemandRequestMetadata);
      static create(properties?: IFullHistorySyncOnDemandRequestMetadata): FullHistorySyncOnDemandRequestMetadata;
      static encode(message: IFullHistorySyncOnDemandRequestMetadata, writer?: any): any;
      static encodeDelimited(message: IFullHistorySyncOnDemandRequestMetadata, writer?: any): any;
      static decode(reader: any, length?: number): FullHistorySyncOnDemandRequestMetadata;
      static decodeDelimited(reader: any): FullHistorySyncOnDemandRequestMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FullHistorySyncOnDemandRequestMetadata;
      static toObject(message: FullHistorySyncOnDemandRequestMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IFutureProofMessage { [key: string]: any }
    class FutureProofMessage implements IFutureProofMessage {
      [key: string]: any;
      constructor(properties?: IFutureProofMessage);
      static create(properties?: IFutureProofMessage): FutureProofMessage;
      static encode(message: IFutureProofMessage, writer?: any): any;
      static encodeDelimited(message: IFutureProofMessage, writer?: any): any;
      static decode(reader: any, length?: number): FutureProofMessage;
      static decodeDelimited(reader: any): FutureProofMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FutureProofMessage;
      static toObject(message: FutureProofMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IGroupInviteMessage { [key: string]: any }
    class GroupInviteMessage implements IGroupInviteMessage {
      [key: string]: any;
      constructor(properties?: IGroupInviteMessage);
      static create(properties?: IGroupInviteMessage): GroupInviteMessage;
      static encode(message: IGroupInviteMessage, writer?: any): any;
      static encodeDelimited(message: IGroupInviteMessage, writer?: any): any;
      static decode(reader: any, length?: number): GroupInviteMessage;
      static decodeDelimited(reader: any): GroupInviteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): GroupInviteMessage;
      static toObject(message: GroupInviteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace GroupInviteMessage {
      enum GroupType {
        DEFAULT = 0,
        PARENT = 1,
      }
    }
    interface IHighlyStructuredMessage { [key: string]: any }
    class HighlyStructuredMessage implements IHighlyStructuredMessage {
      [key: string]: any;
      constructor(properties?: IHighlyStructuredMessage);
      static create(properties?: IHighlyStructuredMessage): HighlyStructuredMessage;
      static encode(message: IHighlyStructuredMessage, writer?: any): any;
      static encodeDelimited(message: IHighlyStructuredMessage, writer?: any): any;
      static decode(reader: any, length?: number): HighlyStructuredMessage;
      static decodeDelimited(reader: any): HighlyStructuredMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HighlyStructuredMessage;
      static toObject(message: HighlyStructuredMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace HighlyStructuredMessage {
      interface IHSMLocalizableParameter { [key: string]: any }
      class HSMLocalizableParameter implements IHSMLocalizableParameter {
        [key: string]: any;
        constructor(properties?: IHSMLocalizableParameter);
        static create(properties?: IHSMLocalizableParameter): HSMLocalizableParameter;
        static encode(message: IHSMLocalizableParameter, writer?: any): any;
        static encodeDelimited(message: IHSMLocalizableParameter, writer?: any): any;
        static decode(reader: any, length?: number): HSMLocalizableParameter;
        static decodeDelimited(reader: any): HSMLocalizableParameter;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): HSMLocalizableParameter;
        static toObject(message: HSMLocalizableParameter, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace HSMLocalizableParameter {
        interface IHSMCurrency { [key: string]: any }
        class HSMCurrency implements IHSMCurrency {
          [key: string]: any;
          constructor(properties?: IHSMCurrency);
          static create(properties?: IHSMCurrency): HSMCurrency;
          static encode(message: IHSMCurrency, writer?: any): any;
          static encodeDelimited(message: IHSMCurrency, writer?: any): any;
          static decode(reader: any, length?: number): HSMCurrency;
          static decodeDelimited(reader: any): HSMCurrency;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): HSMCurrency;
          static toObject(message: HSMCurrency, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface IHSMDateTime { [key: string]: any }
        class HSMDateTime implements IHSMDateTime {
          [key: string]: any;
          constructor(properties?: IHSMDateTime);
          static create(properties?: IHSMDateTime): HSMDateTime;
          static encode(message: IHSMDateTime, writer?: any): any;
          static encodeDelimited(message: IHSMDateTime, writer?: any): any;
          static decode(reader: any, length?: number): HSMDateTime;
          static decodeDelimited(reader: any): HSMDateTime;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): HSMDateTime;
          static toObject(message: HSMDateTime, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        namespace HSMDateTime {
          interface IHSMDateTimeComponent { [key: string]: any }
          class HSMDateTimeComponent implements IHSMDateTimeComponent {
            [key: string]: any;
            constructor(properties?: IHSMDateTimeComponent);
            static create(properties?: IHSMDateTimeComponent): HSMDateTimeComponent;
            static encode(message: IHSMDateTimeComponent, writer?: any): any;
            static encodeDelimited(message: IHSMDateTimeComponent, writer?: any): any;
            static decode(reader: any, length?: number): HSMDateTimeComponent;
            static decodeDelimited(reader: any): HSMDateTimeComponent;
            static verify(message: { [key: string]: any }): string | null;
            static fromObject(object: { [key: string]: any }): HSMDateTimeComponent;
            static toObject(message: HSMDateTimeComponent, options?: any): { [key: string]: any };
            toJSON(): { [key: string]: any };
            static getTypeUrl(typeUrlPrefix?: string): string;
          }
          namespace HSMDateTimeComponent {
            enum CalendarType {
              GREGORIAN = 1,
              SOLAR_HIJRI = 2,
            }
            enum DayOfWeekType {
              MONDAY = 1,
              TUESDAY = 2,
              WEDNESDAY = 3,
              THURSDAY = 4,
              FRIDAY = 5,
              SATURDAY = 6,
              SUNDAY = 7,
            }
          }
          interface IHSMDateTimeUnixEpoch { [key: string]: any }
          class HSMDateTimeUnixEpoch implements IHSMDateTimeUnixEpoch {
            [key: string]: any;
            constructor(properties?: IHSMDateTimeUnixEpoch);
            static create(properties?: IHSMDateTimeUnixEpoch): HSMDateTimeUnixEpoch;
            static encode(message: IHSMDateTimeUnixEpoch, writer?: any): any;
            static encodeDelimited(message: IHSMDateTimeUnixEpoch, writer?: any): any;
            static decode(reader: any, length?: number): HSMDateTimeUnixEpoch;
            static decodeDelimited(reader: any): HSMDateTimeUnixEpoch;
            static verify(message: { [key: string]: any }): string | null;
            static fromObject(object: { [key: string]: any }): HSMDateTimeUnixEpoch;
            static toObject(message: HSMDateTimeUnixEpoch, options?: any): { [key: string]: any };
            toJSON(): { [key: string]: any };
            static getTypeUrl(typeUrlPrefix?: string): string;
          }
        }
      }
    }
    interface IHistoryShareMessageEntry { [key: string]: any }
    class HistoryShareMessageEntry implements IHistoryShareMessageEntry {
      [key: string]: any;
      constructor(properties?: IHistoryShareMessageEntry);
      static create(properties?: IHistoryShareMessageEntry): HistoryShareMessageEntry;
      static encode(message: IHistoryShareMessageEntry, writer?: any): any;
      static encodeDelimited(message: IHistoryShareMessageEntry, writer?: any): any;
      static decode(reader: any, length?: number): HistoryShareMessageEntry;
      static decodeDelimited(reader: any): HistoryShareMessageEntry;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HistoryShareMessageEntry;
      static toObject(message: HistoryShareMessageEntry, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IHistorySyncMessageAccessStatus { [key: string]: any }
    class HistorySyncMessageAccessStatus implements IHistorySyncMessageAccessStatus {
      [key: string]: any;
      constructor(properties?: IHistorySyncMessageAccessStatus);
      static create(properties?: IHistorySyncMessageAccessStatus): HistorySyncMessageAccessStatus;
      static encode(message: IHistorySyncMessageAccessStatus, writer?: any): any;
      static encodeDelimited(message: IHistorySyncMessageAccessStatus, writer?: any): any;
      static decode(reader: any, length?: number): HistorySyncMessageAccessStatus;
      static decodeDelimited(reader: any): HistorySyncMessageAccessStatus;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HistorySyncMessageAccessStatus;
      static toObject(message: HistorySyncMessageAccessStatus, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IHistorySyncNotification { [key: string]: any }
    class HistorySyncNotification implements IHistorySyncNotification {
      [key: string]: any;
      constructor(properties?: IHistorySyncNotification);
      static create(properties?: IHistorySyncNotification): HistorySyncNotification;
      static encode(message: IHistorySyncNotification, writer?: any): any;
      static encodeDelimited(message: IHistorySyncNotification, writer?: any): any;
      static decode(reader: any, length?: number): HistorySyncNotification;
      static decodeDelimited(reader: any): HistorySyncNotification;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): HistorySyncNotification;
      static toObject(message: HistorySyncNotification, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum HistorySyncType {
      INITIAL_BOOTSTRAP = 0,
      INITIAL_STATUS_V3 = 1,
      FULL = 2,
      RECENT = 3,
      PUSH_NAME = 4,
      NON_BLOCKING_DATA = 5,
      ON_DEMAND = 6,
      NO_HISTORY = 7,
      MESSAGE_ACCESS_STATUS = 8,
    }
    interface IImageMessage { [key: string]: any }
    class ImageMessage implements IImageMessage {
      [key: string]: any;
      constructor(properties?: IImageMessage);
      static create(properties?: IImageMessage): ImageMessage;
      static encode(message: IImageMessage, writer?: any): any;
      static encodeDelimited(message: IImageMessage, writer?: any): any;
      static decode(reader: any, length?: number): ImageMessage;
      static decodeDelimited(reader: any): ImageMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ImageMessage;
      static toObject(message: ImageMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ImageMessage {
      enum ImageSourceType {
        USER_IMAGE = 0,
        AI_GENERATED = 1,
        AI_MODIFIED = 2,
        RASTERIZED_TEXT_STATUS = 3,
      }
    }
    interface IInitialSecurityNotificationSettingSync { [key: string]: any }
    class InitialSecurityNotificationSettingSync implements IInitialSecurityNotificationSettingSync {
      [key: string]: any;
      constructor(properties?: IInitialSecurityNotificationSettingSync);
      static create(properties?: IInitialSecurityNotificationSettingSync): InitialSecurityNotificationSettingSync;
      static encode(message: IInitialSecurityNotificationSettingSync, writer?: any): any;
      static encodeDelimited(message: IInitialSecurityNotificationSettingSync, writer?: any): any;
      static decode(reader: any, length?: number): InitialSecurityNotificationSettingSync;
      static decodeDelimited(reader: any): InitialSecurityNotificationSettingSync;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InitialSecurityNotificationSettingSync;
      static toObject(message: InitialSecurityNotificationSettingSync, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum InsightDeliveryState {
      SENT = 0,
      DELIVERED = 1,
      READ = 2,
      REPLIED = 3,
      QUICK_REPLIED = 4,
    }
    interface IInteractiveMessage { [key: string]: any }
    class InteractiveMessage implements IInteractiveMessage {
      [key: string]: any;
      constructor(properties?: IInteractiveMessage);
      static create(properties?: IInteractiveMessage): InteractiveMessage;
      static encode(message: IInteractiveMessage, writer?: any): any;
      static encodeDelimited(message: IInteractiveMessage, writer?: any): any;
      static decode(reader: any, length?: number): InteractiveMessage;
      static decodeDelimited(reader: any): InteractiveMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InteractiveMessage;
      static toObject(message: InteractiveMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace InteractiveMessage {
      interface IBloksWidget { [key: string]: any }
      class BloksWidget implements IBloksWidget {
        [key: string]: any;
        constructor(properties?: IBloksWidget);
        static create(properties?: IBloksWidget): BloksWidget;
        static encode(message: IBloksWidget, writer?: any): any;
        static encodeDelimited(message: IBloksWidget, writer?: any): any;
        static decode(reader: any, length?: number): BloksWidget;
        static decodeDelimited(reader: any): BloksWidget;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): BloksWidget;
        static toObject(message: BloksWidget, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IBody { [key: string]: any }
      class Body implements IBody {
        [key: string]: any;
        constructor(properties?: IBody);
        static create(properties?: IBody): Body;
        static encode(message: IBody, writer?: any): any;
        static encodeDelimited(message: IBody, writer?: any): any;
        static decode(reader: any, length?: number): Body;
        static decodeDelimited(reader: any): Body;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Body;
        static toObject(message: Body, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface ICarouselMessage { [key: string]: any }
      class CarouselMessage implements ICarouselMessage {
        [key: string]: any;
        constructor(properties?: ICarouselMessage);
        static create(properties?: ICarouselMessage): CarouselMessage;
        static encode(message: ICarouselMessage, writer?: any): any;
        static encodeDelimited(message: ICarouselMessage, writer?: any): any;
        static decode(reader: any, length?: number): CarouselMessage;
        static decodeDelimited(reader: any): CarouselMessage;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CarouselMessage;
        static toObject(message: CarouselMessage, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace CarouselMessage {
        enum CarouselCardType {
          UNKNOWN = 0,
          HSCROLL_CARDS = 1,
          ALBUM_IMAGE = 2,
        }
      }
      interface ICollectionMessage { [key: string]: any }
      class CollectionMessage implements ICollectionMessage {
        [key: string]: any;
        constructor(properties?: ICollectionMessage);
        static create(properties?: ICollectionMessage): CollectionMessage;
        static encode(message: ICollectionMessage, writer?: any): any;
        static encodeDelimited(message: ICollectionMessage, writer?: any): any;
        static decode(reader: any, length?: number): CollectionMessage;
        static decodeDelimited(reader: any): CollectionMessage;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CollectionMessage;
        static toObject(message: CollectionMessage, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IFooter { [key: string]: any }
      class Footer implements IFooter {
        [key: string]: any;
        constructor(properties?: IFooter);
        static create(properties?: IFooter): Footer;
        static encode(message: IFooter, writer?: any): any;
        static encodeDelimited(message: IFooter, writer?: any): any;
        static decode(reader: any, length?: number): Footer;
        static decodeDelimited(reader: any): Footer;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Footer;
        static toObject(message: Footer, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IHeader { [key: string]: any }
      class Header implements IHeader {
        [key: string]: any;
        constructor(properties?: IHeader);
        static create(properties?: IHeader): Header;
        static encode(message: IHeader, writer?: any): any;
        static encodeDelimited(message: IHeader, writer?: any): any;
        static decode(reader: any, length?: number): Header;
        static decodeDelimited(reader: any): Header;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Header;
        static toObject(message: Header, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface INativeFlowMessage { [key: string]: any }
      class NativeFlowMessage implements INativeFlowMessage {
        [key: string]: any;
        constructor(properties?: INativeFlowMessage);
        static create(properties?: INativeFlowMessage): NativeFlowMessage;
        static encode(message: INativeFlowMessage, writer?: any): any;
        static encodeDelimited(message: INativeFlowMessage, writer?: any): any;
        static decode(reader: any, length?: number): NativeFlowMessage;
        static decodeDelimited(reader: any): NativeFlowMessage;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): NativeFlowMessage;
        static toObject(message: NativeFlowMessage, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace NativeFlowMessage {
        interface INativeFlowButton { [key: string]: any }
        class NativeFlowButton implements INativeFlowButton {
          [key: string]: any;
          constructor(properties?: INativeFlowButton);
          static create(properties?: INativeFlowButton): NativeFlowButton;
          static encode(message: INativeFlowButton, writer?: any): any;
          static encodeDelimited(message: INativeFlowButton, writer?: any): any;
          static decode(reader: any, length?: number): NativeFlowButton;
          static decodeDelimited(reader: any): NativeFlowButton;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): NativeFlowButton;
          static toObject(message: NativeFlowButton, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
      }
      interface IShopMessage { [key: string]: any }
      class ShopMessage implements IShopMessage {
        [key: string]: any;
        constructor(properties?: IShopMessage);
        static create(properties?: IShopMessage): ShopMessage;
        static encode(message: IShopMessage, writer?: any): any;
        static encodeDelimited(message: IShopMessage, writer?: any): any;
        static decode(reader: any, length?: number): ShopMessage;
        static decodeDelimited(reader: any): ShopMessage;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): ShopMessage;
        static toObject(message: ShopMessage, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace ShopMessage {
        enum Surface {
          UNKNOWN_SURFACE = 0,
          FB = 1,
          IG = 2,
          WA = 3,
        }
      }
    }
    interface IInteractiveResponseMessage { [key: string]: any }
    class InteractiveResponseMessage implements IInteractiveResponseMessage {
      [key: string]: any;
      constructor(properties?: IInteractiveResponseMessage);
      static create(properties?: IInteractiveResponseMessage): InteractiveResponseMessage;
      static encode(message: IInteractiveResponseMessage, writer?: any): any;
      static encodeDelimited(message: IInteractiveResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): InteractiveResponseMessage;
      static decodeDelimited(reader: any): InteractiveResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InteractiveResponseMessage;
      static toObject(message: InteractiveResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace InteractiveResponseMessage {
      interface IBody { [key: string]: any }
      class Body implements IBody {
        [key: string]: any;
        constructor(properties?: IBody);
        static create(properties?: IBody): Body;
        static encode(message: IBody, writer?: any): any;
        static encodeDelimited(message: IBody, writer?: any): any;
        static decode(reader: any, length?: number): Body;
        static decodeDelimited(reader: any): Body;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Body;
        static toObject(message: Body, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace Body {
        enum Format {
          DEFAULT = 0,
          EXTENSIONS_1 = 1,
        }
      }
      interface INativeFlowResponseMessage { [key: string]: any }
      class NativeFlowResponseMessage implements INativeFlowResponseMessage {
        [key: string]: any;
        constructor(properties?: INativeFlowResponseMessage);
        static create(properties?: INativeFlowResponseMessage): NativeFlowResponseMessage;
        static encode(message: INativeFlowResponseMessage, writer?: any): any;
        static encodeDelimited(message: INativeFlowResponseMessage, writer?: any): any;
        static decode(reader: any, length?: number): NativeFlowResponseMessage;
        static decodeDelimited(reader: any): NativeFlowResponseMessage;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): NativeFlowResponseMessage;
        static toObject(message: NativeFlowResponseMessage, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IInvoiceMessage { [key: string]: any }
    class InvoiceMessage implements IInvoiceMessage {
      [key: string]: any;
      constructor(properties?: IInvoiceMessage);
      static create(properties?: IInvoiceMessage): InvoiceMessage;
      static encode(message: IInvoiceMessage, writer?: any): any;
      static encodeDelimited(message: IInvoiceMessage, writer?: any): any;
      static decode(reader: any, length?: number): InvoiceMessage;
      static decodeDelimited(reader: any): InvoiceMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InvoiceMessage;
      static toObject(message: InvoiceMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace InvoiceMessage {
      enum AttachmentType {
        IMAGE = 0,
        PDF = 1,
      }
    }
    interface IKeepInChatMessage { [key: string]: any }
    class KeepInChatMessage implements IKeepInChatMessage {
      [key: string]: any;
      constructor(properties?: IKeepInChatMessage);
      static create(properties?: IKeepInChatMessage): KeepInChatMessage;
      static encode(message: IKeepInChatMessage, writer?: any): any;
      static encodeDelimited(message: IKeepInChatMessage, writer?: any): any;
      static decode(reader: any, length?: number): KeepInChatMessage;
      static decodeDelimited(reader: any): KeepInChatMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): KeepInChatMessage;
      static toObject(message: KeepInChatMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILinkPreviewMetadata { [key: string]: any }
    class LinkPreviewMetadata implements ILinkPreviewMetadata {
      [key: string]: any;
      constructor(properties?: ILinkPreviewMetadata);
      static create(properties?: ILinkPreviewMetadata): LinkPreviewMetadata;
      static encode(message: ILinkPreviewMetadata, writer?: any): any;
      static encodeDelimited(message: ILinkPreviewMetadata, writer?: any): any;
      static decode(reader: any, length?: number): LinkPreviewMetadata;
      static decodeDelimited(reader: any): LinkPreviewMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LinkPreviewMetadata;
      static toObject(message: LinkPreviewMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace LinkPreviewMetadata {
      enum SocialMediaPostType {
        NONE = 0,
        REEL = 1,
        LIVE_VIDEO = 2,
        LONG_VIDEO = 3,
        SINGLE_IMAGE = 4,
        CAROUSEL = 5,
      }
    }
    interface IListMessage { [key: string]: any }
    class ListMessage implements IListMessage {
      [key: string]: any;
      constructor(properties?: IListMessage);
      static create(properties?: IListMessage): ListMessage;
      static encode(message: IListMessage, writer?: any): any;
      static encodeDelimited(message: IListMessage, writer?: any): any;
      static decode(reader: any, length?: number): ListMessage;
      static decodeDelimited(reader: any): ListMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ListMessage;
      static toObject(message: ListMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ListMessage {
      enum ListType {
        UNKNOWN = 0,
        SINGLE_SELECT = 1,
        PRODUCT_LIST = 2,
      }
      interface IProduct { [key: string]: any }
      class Product implements IProduct {
        [key: string]: any;
        constructor(properties?: IProduct);
        static create(properties?: IProduct): Product;
        static encode(message: IProduct, writer?: any): any;
        static encodeDelimited(message: IProduct, writer?: any): any;
        static decode(reader: any, length?: number): Product;
        static decodeDelimited(reader: any): Product;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Product;
        static toObject(message: Product, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IProductListHeaderImage { [key: string]: any }
      class ProductListHeaderImage implements IProductListHeaderImage {
        [key: string]: any;
        constructor(properties?: IProductListHeaderImage);
        static create(properties?: IProductListHeaderImage): ProductListHeaderImage;
        static encode(message: IProductListHeaderImage, writer?: any): any;
        static encodeDelimited(message: IProductListHeaderImage, writer?: any): any;
        static decode(reader: any, length?: number): ProductListHeaderImage;
        static decodeDelimited(reader: any): ProductListHeaderImage;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): ProductListHeaderImage;
        static toObject(message: ProductListHeaderImage, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IProductListInfo { [key: string]: any }
      class ProductListInfo implements IProductListInfo {
        [key: string]: any;
        constructor(properties?: IProductListInfo);
        static create(properties?: IProductListInfo): ProductListInfo;
        static encode(message: IProductListInfo, writer?: any): any;
        static encodeDelimited(message: IProductListInfo, writer?: any): any;
        static decode(reader: any, length?: number): ProductListInfo;
        static decodeDelimited(reader: any): ProductListInfo;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): ProductListInfo;
        static toObject(message: ProductListInfo, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IProductSection { [key: string]: any }
      class ProductSection implements IProductSection {
        [key: string]: any;
        constructor(properties?: IProductSection);
        static create(properties?: IProductSection): ProductSection;
        static encode(message: IProductSection, writer?: any): any;
        static encodeDelimited(message: IProductSection, writer?: any): any;
        static decode(reader: any, length?: number): ProductSection;
        static decodeDelimited(reader: any): ProductSection;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): ProductSection;
        static toObject(message: ProductSection, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IRow { [key: string]: any }
      class Row implements IRow {
        [key: string]: any;
        constructor(properties?: IRow);
        static create(properties?: IRow): Row;
        static encode(message: IRow, writer?: any): any;
        static encodeDelimited(message: IRow, writer?: any): any;
        static decode(reader: any, length?: number): Row;
        static decodeDelimited(reader: any): Row;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Row;
        static toObject(message: Row, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface ISection { [key: string]: any }
      class Section implements ISection {
        [key: string]: any;
        constructor(properties?: ISection);
        static create(properties?: ISection): Section;
        static encode(message: ISection, writer?: any): any;
        static encodeDelimited(message: ISection, writer?: any): any;
        static decode(reader: any, length?: number): Section;
        static decodeDelimited(reader: any): Section;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Section;
        static toObject(message: Section, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IListResponseMessage { [key: string]: any }
    class ListResponseMessage implements IListResponseMessage {
      [key: string]: any;
      constructor(properties?: IListResponseMessage);
      static create(properties?: IListResponseMessage): ListResponseMessage;
      static encode(message: IListResponseMessage, writer?: any): any;
      static encodeDelimited(message: IListResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): ListResponseMessage;
      static decodeDelimited(reader: any): ListResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ListResponseMessage;
      static toObject(message: ListResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ListResponseMessage {
      enum ListType {
        UNKNOWN = 0,
        SINGLE_SELECT = 1,
      }
      interface ISingleSelectReply { [key: string]: any }
      class SingleSelectReply implements ISingleSelectReply {
        [key: string]: any;
        constructor(properties?: ISingleSelectReply);
        static create(properties?: ISingleSelectReply): SingleSelectReply;
        static encode(message: ISingleSelectReply, writer?: any): any;
        static encodeDelimited(message: ISingleSelectReply, writer?: any): any;
        static decode(reader: any, length?: number): SingleSelectReply;
        static decodeDelimited(reader: any): SingleSelectReply;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): SingleSelectReply;
        static toObject(message: SingleSelectReply, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface ILiveLocationMessage { [key: string]: any }
    class LiveLocationMessage implements ILiveLocationMessage {
      [key: string]: any;
      constructor(properties?: ILiveLocationMessage);
      static create(properties?: ILiveLocationMessage): LiveLocationMessage;
      static encode(message: ILiveLocationMessage, writer?: any): any;
      static encodeDelimited(message: ILiveLocationMessage, writer?: any): any;
      static decode(reader: any, length?: number): LiveLocationMessage;
      static decodeDelimited(reader: any): LiveLocationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LiveLocationMessage;
      static toObject(message: LiveLocationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILocationMessage { [key: string]: any }
    class LocationMessage implements ILocationMessage {
      [key: string]: any;
      constructor(properties?: ILocationMessage);
      static create(properties?: ILocationMessage): LocationMessage;
      static encode(message: ILocationMessage, writer?: any): any;
      static encodeDelimited(message: ILocationMessage, writer?: any): any;
      static decode(reader: any, length?: number): LocationMessage;
      static decodeDelimited(reader: any): LocationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LocationMessage;
      static toObject(message: LocationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMMSThumbnailMetadata { [key: string]: any }
    class MMSThumbnailMetadata implements IMMSThumbnailMetadata {
      [key: string]: any;
      constructor(properties?: IMMSThumbnailMetadata);
      static create(properties?: IMMSThumbnailMetadata): MMSThumbnailMetadata;
      static encode(message: IMMSThumbnailMetadata, writer?: any): any;
      static encodeDelimited(message: IMMSThumbnailMetadata, writer?: any): any;
      static decode(reader: any, length?: number): MMSThumbnailMetadata;
      static decodeDelimited(reader: any): MMSThumbnailMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MMSThumbnailMetadata;
      static toObject(message: MMSThumbnailMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMarkAsVerifiedAction { [key: string]: any }
    class MarkAsVerifiedAction implements IMarkAsVerifiedAction {
      [key: string]: any;
      constructor(properties?: IMarkAsVerifiedAction);
      static create(properties?: IMarkAsVerifiedAction): MarkAsVerifiedAction;
      static encode(message: IMarkAsVerifiedAction, writer?: any): any;
      static encodeDelimited(message: IMarkAsVerifiedAction, writer?: any): any;
      static decode(reader: any, length?: number): MarkAsVerifiedAction;
      static decodeDelimited(reader: any): MarkAsVerifiedAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MarkAsVerifiedAction;
      static toObject(message: MarkAsVerifiedAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum MediaKeyDomain {
      UNSET = 0,
      E2EE_CHAT = 1,
      STATUS = 2,
      CAPI = 3,
      BOT = 4,
    }
    interface IMessageHistoryBundle { [key: string]: any }
    class MessageHistoryBundle implements IMessageHistoryBundle {
      [key: string]: any;
      constructor(properties?: IMessageHistoryBundle);
      static create(properties?: IMessageHistoryBundle): MessageHistoryBundle;
      static encode(message: IMessageHistoryBundle, writer?: any): any;
      static encodeDelimited(message: IMessageHistoryBundle, writer?: any): any;
      static decode(reader: any, length?: number): MessageHistoryBundle;
      static decodeDelimited(reader: any): MessageHistoryBundle;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MessageHistoryBundle;
      static toObject(message: MessageHistoryBundle, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMessageHistoryMetadata { [key: string]: any }
    class MessageHistoryMetadata implements IMessageHistoryMetadata {
      [key: string]: any;
      constructor(properties?: IMessageHistoryMetadata);
      static create(properties?: IMessageHistoryMetadata): MessageHistoryMetadata;
      static encode(message: IMessageHistoryMetadata, writer?: any): any;
      static encodeDelimited(message: IMessageHistoryMetadata, writer?: any): any;
      static decode(reader: any, length?: number): MessageHistoryMetadata;
      static decodeDelimited(reader: any): MessageHistoryMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MessageHistoryMetadata;
      static toObject(message: MessageHistoryMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMessageHistoryNotice { [key: string]: any }
    class MessageHistoryNotice implements IMessageHistoryNotice {
      [key: string]: any;
      constructor(properties?: IMessageHistoryNotice);
      static create(properties?: IMessageHistoryNotice): MessageHistoryNotice;
      static encode(message: IMessageHistoryNotice, writer?: any): any;
      static encodeDelimited(message: IMessageHistoryNotice, writer?: any): any;
      static decode(reader: any, length?: number): MessageHistoryNotice;
      static decodeDelimited(reader: any): MessageHistoryNotice;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MessageHistoryNotice;
      static toObject(message: MessageHistoryNotice, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMusicMessage { [key: string]: any }
    class MusicMessage implements IMusicMessage {
      [key: string]: any;
      constructor(properties?: IMusicMessage);
      static create(properties?: IMusicMessage): MusicMessage;
      static encode(message: IMusicMessage, writer?: any): any;
      static encodeDelimited(message: IMusicMessage, writer?: any): any;
      static decode(reader: any, length?: number): MusicMessage;
      static decodeDelimited(reader: any): MusicMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MusicMessage;
      static toObject(message: MusicMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace MusicMessage {
      enum MusicMessageStyle {
        UNKNOWN = 0,
        VINYL = 1,
      }
    }
    interface INewsletterAdminInviteMessage { [key: string]: any }
    class NewsletterAdminInviteMessage implements INewsletterAdminInviteMessage {
      [key: string]: any;
      constructor(properties?: INewsletterAdminInviteMessage);
      static create(properties?: INewsletterAdminInviteMessage): NewsletterAdminInviteMessage;
      static encode(message: INewsletterAdminInviteMessage, writer?: any): any;
      static encodeDelimited(message: INewsletterAdminInviteMessage, writer?: any): any;
      static decode(reader: any, length?: number): NewsletterAdminInviteMessage;
      static decodeDelimited(reader: any): NewsletterAdminInviteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NewsletterAdminInviteMessage;
      static toObject(message: NewsletterAdminInviteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface INewsletterFollowerInviteMessage { [key: string]: any }
    class NewsletterFollowerInviteMessage implements INewsletterFollowerInviteMessage {
      [key: string]: any;
      constructor(properties?: INewsletterFollowerInviteMessage);
      static create(properties?: INewsletterFollowerInviteMessage): NewsletterFollowerInviteMessage;
      static encode(message: INewsletterFollowerInviteMessage, writer?: any): any;
      static encodeDelimited(message: INewsletterFollowerInviteMessage, writer?: any): any;
      static decode(reader: any, length?: number): NewsletterFollowerInviteMessage;
      static decodeDelimited(reader: any): NewsletterFollowerInviteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NewsletterFollowerInviteMessage;
      static toObject(message: NewsletterFollowerInviteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IOrderMessage { [key: string]: any }
    class OrderMessage implements IOrderMessage {
      [key: string]: any;
      constructor(properties?: IOrderMessage);
      static create(properties?: IOrderMessage): OrderMessage;
      static encode(message: IOrderMessage, writer?: any): any;
      static encodeDelimited(message: IOrderMessage, writer?: any): any;
      static decode(reader: any, length?: number): OrderMessage;
      static decodeDelimited(reader: any): OrderMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): OrderMessage;
      static toObject(message: OrderMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace OrderMessage {
      enum OrderStatus {
        INQUIRY = 1,
        ACCEPTED = 2,
        DECLINED = 3,
      }
      enum OrderSurface {
        CATALOG = 1,
      }
    }
    interface IPaymentExtendedMetadata { [key: string]: any }
    class PaymentExtendedMetadata implements IPaymentExtendedMetadata {
      [key: string]: any;
      constructor(properties?: IPaymentExtendedMetadata);
      static create(properties?: IPaymentExtendedMetadata): PaymentExtendedMetadata;
      static encode(message: IPaymentExtendedMetadata, writer?: any): any;
      static encodeDelimited(message: IPaymentExtendedMetadata, writer?: any): any;
      static decode(reader: any, length?: number): PaymentExtendedMetadata;
      static decodeDelimited(reader: any): PaymentExtendedMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PaymentExtendedMetadata;
      static toObject(message: PaymentExtendedMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPaymentInviteMessage { [key: string]: any }
    class PaymentInviteMessage implements IPaymentInviteMessage {
      [key: string]: any;
      constructor(properties?: IPaymentInviteMessage);
      static create(properties?: IPaymentInviteMessage): PaymentInviteMessage;
      static encode(message: IPaymentInviteMessage, writer?: any): any;
      static encodeDelimited(message: IPaymentInviteMessage, writer?: any): any;
      static decode(reader: any, length?: number): PaymentInviteMessage;
      static decodeDelimited(reader: any): PaymentInviteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PaymentInviteMessage;
      static toObject(message: PaymentInviteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PaymentInviteMessage {
      enum InviteType {
        DEFAULT = 0,
        MAPPER = 1,
      }
      enum ServiceType {
        UNKNOWN = 0,
        FBPAY = 1,
        NOVI = 2,
        UPI = 3,
        PIX = 4,
      }
    }
    interface IPaymentLinkMetadata { [key: string]: any }
    class PaymentLinkMetadata implements IPaymentLinkMetadata {
      [key: string]: any;
      constructor(properties?: IPaymentLinkMetadata);
      static create(properties?: IPaymentLinkMetadata): PaymentLinkMetadata;
      static encode(message: IPaymentLinkMetadata, writer?: any): any;
      static encodeDelimited(message: IPaymentLinkMetadata, writer?: any): any;
      static decode(reader: any, length?: number): PaymentLinkMetadata;
      static decodeDelimited(reader: any): PaymentLinkMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PaymentLinkMetadata;
      static toObject(message: PaymentLinkMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PaymentLinkMetadata {
      interface IPaymentLinkButton { [key: string]: any }
      class PaymentLinkButton implements IPaymentLinkButton {
        [key: string]: any;
        constructor(properties?: IPaymentLinkButton);
        static create(properties?: IPaymentLinkButton): PaymentLinkButton;
        static encode(message: IPaymentLinkButton, writer?: any): any;
        static encodeDelimited(message: IPaymentLinkButton, writer?: any): any;
        static decode(reader: any, length?: number): PaymentLinkButton;
        static decodeDelimited(reader: any): PaymentLinkButton;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PaymentLinkButton;
        static toObject(message: PaymentLinkButton, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IPaymentLinkHeader { [key: string]: any }
      class PaymentLinkHeader implements IPaymentLinkHeader {
        [key: string]: any;
        constructor(properties?: IPaymentLinkHeader);
        static create(properties?: IPaymentLinkHeader): PaymentLinkHeader;
        static encode(message: IPaymentLinkHeader, writer?: any): any;
        static encodeDelimited(message: IPaymentLinkHeader, writer?: any): any;
        static decode(reader: any, length?: number): PaymentLinkHeader;
        static decodeDelimited(reader: any): PaymentLinkHeader;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PaymentLinkHeader;
        static toObject(message: PaymentLinkHeader, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace PaymentLinkHeader {
        enum PaymentLinkHeaderType {
          LINK_PREVIEW = 0,
          ORDER = 1,
        }
      }
      interface IPaymentLinkProvider { [key: string]: any }
      class PaymentLinkProvider implements IPaymentLinkProvider {
        [key: string]: any;
        constructor(properties?: IPaymentLinkProvider);
        static create(properties?: IPaymentLinkProvider): PaymentLinkProvider;
        static encode(message: IPaymentLinkProvider, writer?: any): any;
        static encodeDelimited(message: IPaymentLinkProvider, writer?: any): any;
        static decode(reader: any, length?: number): PaymentLinkProvider;
        static decodeDelimited(reader: any): PaymentLinkProvider;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PaymentLinkProvider;
        static toObject(message: PaymentLinkProvider, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IPaymentReminderMessage { [key: string]: any }
    class PaymentReminderMessage implements IPaymentReminderMessage {
      [key: string]: any;
      constructor(properties?: IPaymentReminderMessage);
      static create(properties?: IPaymentReminderMessage): PaymentReminderMessage;
      static encode(message: IPaymentReminderMessage, writer?: any): any;
      static encodeDelimited(message: IPaymentReminderMessage, writer?: any): any;
      static decode(reader: any, length?: number): PaymentReminderMessage;
      static decodeDelimited(reader: any): PaymentReminderMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PaymentReminderMessage;
      static toObject(message: PaymentReminderMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PaymentReminderMessage {
      enum ReminderFrequency {
        REMINDER_FREQUENCY_UNKNOWN = 0,
        WEEKLY = 1,
        BI_WEEKLY = 2,
        MONTHLY = 3,
        QUARTERLY = 4,
      }
      enum ReminderStatus {
        REMINDER_STATUS_UNKNOWN = 0,
        ACTIVE = 1,
        CANCELLED_BY_CREATOR = 2,
        STOPPED_BY_RECEIVER = 3,
        EXPIRED = 4,
        PAID = 5,
      }
    }
    interface IPeerDataOperationRequestMessage { [key: string]: any }
    class PeerDataOperationRequestMessage implements IPeerDataOperationRequestMessage {
      [key: string]: any;
      constructor(properties?: IPeerDataOperationRequestMessage);
      static create(properties?: IPeerDataOperationRequestMessage): PeerDataOperationRequestMessage;
      static encode(message: IPeerDataOperationRequestMessage, writer?: any): any;
      static encodeDelimited(message: IPeerDataOperationRequestMessage, writer?: any): any;
      static decode(reader: any, length?: number): PeerDataOperationRequestMessage;
      static decodeDelimited(reader: any): PeerDataOperationRequestMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PeerDataOperationRequestMessage;
      static toObject(message: PeerDataOperationRequestMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PeerDataOperationRequestMessage {
      interface IBizBroadcastInsightsContactListRequest { [key: string]: any }
      class BizBroadcastInsightsContactListRequest implements IBizBroadcastInsightsContactListRequest {
        [key: string]: any;
        constructor(properties?: IBizBroadcastInsightsContactListRequest);
        static create(properties?: IBizBroadcastInsightsContactListRequest): BizBroadcastInsightsContactListRequest;
        static encode(message: IBizBroadcastInsightsContactListRequest, writer?: any): any;
        static encodeDelimited(message: IBizBroadcastInsightsContactListRequest, writer?: any): any;
        static decode(reader: any, length?: number): BizBroadcastInsightsContactListRequest;
        static decodeDelimited(reader: any): BizBroadcastInsightsContactListRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): BizBroadcastInsightsContactListRequest;
        static toObject(message: BizBroadcastInsightsContactListRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IBizBroadcastInsightsRefreshRequest { [key: string]: any }
      class BizBroadcastInsightsRefreshRequest implements IBizBroadcastInsightsRefreshRequest {
        [key: string]: any;
        constructor(properties?: IBizBroadcastInsightsRefreshRequest);
        static create(properties?: IBizBroadcastInsightsRefreshRequest): BizBroadcastInsightsRefreshRequest;
        static encode(message: IBizBroadcastInsightsRefreshRequest, writer?: any): any;
        static encodeDelimited(message: IBizBroadcastInsightsRefreshRequest, writer?: any): any;
        static decode(reader: any, length?: number): BizBroadcastInsightsRefreshRequest;
        static decodeDelimited(reader: any): BizBroadcastInsightsRefreshRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): BizBroadcastInsightsRefreshRequest;
        static toObject(message: BizBroadcastInsightsRefreshRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface ICompanionCanonicalUserNonceFetchRequest { [key: string]: any }
      class CompanionCanonicalUserNonceFetchRequest implements ICompanionCanonicalUserNonceFetchRequest {
        [key: string]: any;
        constructor(properties?: ICompanionCanonicalUserNonceFetchRequest);
        static create(properties?: ICompanionCanonicalUserNonceFetchRequest): CompanionCanonicalUserNonceFetchRequest;
        static encode(message: ICompanionCanonicalUserNonceFetchRequest, writer?: any): any;
        static encodeDelimited(message: ICompanionCanonicalUserNonceFetchRequest, writer?: any): any;
        static decode(reader: any, length?: number): CompanionCanonicalUserNonceFetchRequest;
        static decodeDelimited(reader: any): CompanionCanonicalUserNonceFetchRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CompanionCanonicalUserNonceFetchRequest;
        static toObject(message: CompanionCanonicalUserNonceFetchRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IFullHistorySyncOnDemandRequest { [key: string]: any }
      class FullHistorySyncOnDemandRequest implements IFullHistorySyncOnDemandRequest {
        [key: string]: any;
        constructor(properties?: IFullHistorySyncOnDemandRequest);
        static create(properties?: IFullHistorySyncOnDemandRequest): FullHistorySyncOnDemandRequest;
        static encode(message: IFullHistorySyncOnDemandRequest, writer?: any): any;
        static encodeDelimited(message: IFullHistorySyncOnDemandRequest, writer?: any): any;
        static decode(reader: any, length?: number): FullHistorySyncOnDemandRequest;
        static decodeDelimited(reader: any): FullHistorySyncOnDemandRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): FullHistorySyncOnDemandRequest;
        static toObject(message: FullHistorySyncOnDemandRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IGalaxyFlowAction { [key: string]: any }
      class GalaxyFlowAction implements IGalaxyFlowAction {
        [key: string]: any;
        constructor(properties?: IGalaxyFlowAction);
        static create(properties?: IGalaxyFlowAction): GalaxyFlowAction;
        static encode(message: IGalaxyFlowAction, writer?: any): any;
        static encodeDelimited(message: IGalaxyFlowAction, writer?: any): any;
        static decode(reader: any, length?: number): GalaxyFlowAction;
        static decodeDelimited(reader: any): GalaxyFlowAction;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): GalaxyFlowAction;
        static toObject(message: GalaxyFlowAction, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace GalaxyFlowAction {
        enum GalaxyFlowActionType {
          NOTIFY_LAUNCH = 1,
          DOWNLOAD_RESPONSES = 2,
        }
      }
      interface IHistorySyncChunkRetryRequest { [key: string]: any }
      class HistorySyncChunkRetryRequest implements IHistorySyncChunkRetryRequest {
        [key: string]: any;
        constructor(properties?: IHistorySyncChunkRetryRequest);
        static create(properties?: IHistorySyncChunkRetryRequest): HistorySyncChunkRetryRequest;
        static encode(message: IHistorySyncChunkRetryRequest, writer?: any): any;
        static encodeDelimited(message: IHistorySyncChunkRetryRequest, writer?: any): any;
        static decode(reader: any, length?: number): HistorySyncChunkRetryRequest;
        static decodeDelimited(reader: any): HistorySyncChunkRetryRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): HistorySyncChunkRetryRequest;
        static toObject(message: HistorySyncChunkRetryRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IHistorySyncOnDemandRequest { [key: string]: any }
      class HistorySyncOnDemandRequest implements IHistorySyncOnDemandRequest {
        [key: string]: any;
        constructor(properties?: IHistorySyncOnDemandRequest);
        static create(properties?: IHistorySyncOnDemandRequest): HistorySyncOnDemandRequest;
        static encode(message: IHistorySyncOnDemandRequest, writer?: any): any;
        static encodeDelimited(message: IHistorySyncOnDemandRequest, writer?: any): any;
        static decode(reader: any, length?: number): HistorySyncOnDemandRequest;
        static decodeDelimited(reader: any): HistorySyncOnDemandRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): HistorySyncOnDemandRequest;
        static toObject(message: HistorySyncOnDemandRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IPlaceholderMessageResendRequest { [key: string]: any }
      class PlaceholderMessageResendRequest implements IPlaceholderMessageResendRequest {
        [key: string]: any;
        constructor(properties?: IPlaceholderMessageResendRequest);
        static create(properties?: IPlaceholderMessageResendRequest): PlaceholderMessageResendRequest;
        static encode(message: IPlaceholderMessageResendRequest, writer?: any): any;
        static encodeDelimited(message: IPlaceholderMessageResendRequest, writer?: any): any;
        static decode(reader: any, length?: number): PlaceholderMessageResendRequest;
        static decodeDelimited(reader: any): PlaceholderMessageResendRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PlaceholderMessageResendRequest;
        static toObject(message: PlaceholderMessageResendRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IRequestStickerReupload { [key: string]: any }
      class RequestStickerReupload implements IRequestStickerReupload {
        [key: string]: any;
        constructor(properties?: IRequestStickerReupload);
        static create(properties?: IRequestStickerReupload): RequestStickerReupload;
        static encode(message: IRequestStickerReupload, writer?: any): any;
        static encodeDelimited(message: IRequestStickerReupload, writer?: any): any;
        static decode(reader: any, length?: number): RequestStickerReupload;
        static decodeDelimited(reader: any): RequestStickerReupload;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): RequestStickerReupload;
        static toObject(message: RequestStickerReupload, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IRequestUrlPreview { [key: string]: any }
      class RequestUrlPreview implements IRequestUrlPreview {
        [key: string]: any;
        constructor(properties?: IRequestUrlPreview);
        static create(properties?: IRequestUrlPreview): RequestUrlPreview;
        static encode(message: IRequestUrlPreview, writer?: any): any;
        static encodeDelimited(message: IRequestUrlPreview, writer?: any): any;
        static decode(reader: any, length?: number): RequestUrlPreview;
        static decodeDelimited(reader: any): RequestUrlPreview;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): RequestUrlPreview;
        static toObject(message: RequestUrlPreview, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface ISyncDCollectionFatalRecoveryRequest { [key: string]: any }
      class SyncDCollectionFatalRecoveryRequest implements ISyncDCollectionFatalRecoveryRequest {
        [key: string]: any;
        constructor(properties?: ISyncDCollectionFatalRecoveryRequest);
        static create(properties?: ISyncDCollectionFatalRecoveryRequest): SyncDCollectionFatalRecoveryRequest;
        static encode(message: ISyncDCollectionFatalRecoveryRequest, writer?: any): any;
        static encodeDelimited(message: ISyncDCollectionFatalRecoveryRequest, writer?: any): any;
        static decode(reader: any, length?: number): SyncDCollectionFatalRecoveryRequest;
        static decodeDelimited(reader: any): SyncDCollectionFatalRecoveryRequest;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): SyncDCollectionFatalRecoveryRequest;
        static toObject(message: SyncDCollectionFatalRecoveryRequest, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IPeerDataOperationRequestResponseMessage { [key: string]: any }
    class PeerDataOperationRequestResponseMessage implements IPeerDataOperationRequestResponseMessage {
      [key: string]: any;
      constructor(properties?: IPeerDataOperationRequestResponseMessage);
      static create(properties?: IPeerDataOperationRequestResponseMessage): PeerDataOperationRequestResponseMessage;
      static encode(message: IPeerDataOperationRequestResponseMessage, writer?: any): any;
      static encodeDelimited(message: IPeerDataOperationRequestResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): PeerDataOperationRequestResponseMessage;
      static decodeDelimited(reader: any): PeerDataOperationRequestResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PeerDataOperationRequestResponseMessage;
      static toObject(message: PeerDataOperationRequestResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PeerDataOperationRequestResponseMessage {
      interface IPeerDataOperationResult { [key: string]: any }
      class PeerDataOperationResult implements IPeerDataOperationResult {
        [key: string]: any;
        constructor(properties?: IPeerDataOperationResult);
        static create(properties?: IPeerDataOperationResult): PeerDataOperationResult;
        static encode(message: IPeerDataOperationResult, writer?: any): any;
        static encodeDelimited(message: IPeerDataOperationResult, writer?: any): any;
        static decode(reader: any, length?: number): PeerDataOperationResult;
        static decodeDelimited(reader: any): PeerDataOperationResult;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PeerDataOperationResult;
        static toObject(message: PeerDataOperationResult, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace PeerDataOperationResult {
        interface IBizBroadcastInsightsContactListResponse { [key: string]: any }
        class BizBroadcastInsightsContactListResponse implements IBizBroadcastInsightsContactListResponse {
          [key: string]: any;
          constructor(properties?: IBizBroadcastInsightsContactListResponse);
          static create(properties?: IBizBroadcastInsightsContactListResponse): BizBroadcastInsightsContactListResponse;
          static encode(message: IBizBroadcastInsightsContactListResponse, writer?: any): any;
          static encodeDelimited(message: IBizBroadcastInsightsContactListResponse, writer?: any): any;
          static decode(reader: any, length?: number): BizBroadcastInsightsContactListResponse;
          static decodeDelimited(reader: any): BizBroadcastInsightsContactListResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): BizBroadcastInsightsContactListResponse;
          static toObject(message: BizBroadcastInsightsContactListResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface IBizBroadcastInsightsContactState { [key: string]: any }
        class BizBroadcastInsightsContactState implements IBizBroadcastInsightsContactState {
          [key: string]: any;
          constructor(properties?: IBizBroadcastInsightsContactState);
          static create(properties?: IBizBroadcastInsightsContactState): BizBroadcastInsightsContactState;
          static encode(message: IBizBroadcastInsightsContactState, writer?: any): any;
          static encodeDelimited(message: IBizBroadcastInsightsContactState, writer?: any): any;
          static decode(reader: any, length?: number): BizBroadcastInsightsContactState;
          static decodeDelimited(reader: any): BizBroadcastInsightsContactState;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): BizBroadcastInsightsContactState;
          static toObject(message: BizBroadcastInsightsContactState, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ICompanionCanonicalUserNonceFetchResponse { [key: string]: any }
        class CompanionCanonicalUserNonceFetchResponse implements ICompanionCanonicalUserNonceFetchResponse {
          [key: string]: any;
          constructor(properties?: ICompanionCanonicalUserNonceFetchResponse);
          static create(properties?: ICompanionCanonicalUserNonceFetchResponse): CompanionCanonicalUserNonceFetchResponse;
          static encode(message: ICompanionCanonicalUserNonceFetchResponse, writer?: any): any;
          static encodeDelimited(message: ICompanionCanonicalUserNonceFetchResponse, writer?: any): any;
          static decode(reader: any, length?: number): CompanionCanonicalUserNonceFetchResponse;
          static decodeDelimited(reader: any): CompanionCanonicalUserNonceFetchResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): CompanionCanonicalUserNonceFetchResponse;
          static toObject(message: CompanionCanonicalUserNonceFetchResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ICompanionMetaNonceFetchResponse { [key: string]: any }
        class CompanionMetaNonceFetchResponse implements ICompanionMetaNonceFetchResponse {
          [key: string]: any;
          constructor(properties?: ICompanionMetaNonceFetchResponse);
          static create(properties?: ICompanionMetaNonceFetchResponse): CompanionMetaNonceFetchResponse;
          static encode(message: ICompanionMetaNonceFetchResponse, writer?: any): any;
          static encodeDelimited(message: ICompanionMetaNonceFetchResponse, writer?: any): any;
          static decode(reader: any, length?: number): CompanionMetaNonceFetchResponse;
          static decodeDelimited(reader: any): CompanionMetaNonceFetchResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): CompanionMetaNonceFetchResponse;
          static toObject(message: CompanionMetaNonceFetchResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface IContactRefreshResponse { [key: string]: any }
        class ContactRefreshResponse implements IContactRefreshResponse {
          [key: string]: any;
          constructor(properties?: IContactRefreshResponse);
          static create(properties?: IContactRefreshResponse): ContactRefreshResponse;
          static encode(message: IContactRefreshResponse, writer?: any): any;
          static encodeDelimited(message: IContactRefreshResponse, writer?: any): any;
          static decode(reader: any, length?: number): ContactRefreshResponse;
          static decodeDelimited(reader: any): ContactRefreshResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): ContactRefreshResponse;
          static toObject(message: ContactRefreshResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface IFlowResponsesCsvBundle { [key: string]: any }
        class FlowResponsesCsvBundle implements IFlowResponsesCsvBundle {
          [key: string]: any;
          constructor(properties?: IFlowResponsesCsvBundle);
          static create(properties?: IFlowResponsesCsvBundle): FlowResponsesCsvBundle;
          static encode(message: IFlowResponsesCsvBundle, writer?: any): any;
          static encodeDelimited(message: IFlowResponsesCsvBundle, writer?: any): any;
          static decode(reader: any, length?: number): FlowResponsesCsvBundle;
          static decodeDelimited(reader: any): FlowResponsesCsvBundle;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): FlowResponsesCsvBundle;
          static toObject(message: FlowResponsesCsvBundle, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface IFullHistorySyncOnDemandRequestResponse { [key: string]: any }
        class FullHistorySyncOnDemandRequestResponse implements IFullHistorySyncOnDemandRequestResponse {
          [key: string]: any;
          constructor(properties?: IFullHistorySyncOnDemandRequestResponse);
          static create(properties?: IFullHistorySyncOnDemandRequestResponse): FullHistorySyncOnDemandRequestResponse;
          static encode(message: IFullHistorySyncOnDemandRequestResponse, writer?: any): any;
          static encodeDelimited(message: IFullHistorySyncOnDemandRequestResponse, writer?: any): any;
          static decode(reader: any, length?: number): FullHistorySyncOnDemandRequestResponse;
          static decodeDelimited(reader: any): FullHistorySyncOnDemandRequestResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): FullHistorySyncOnDemandRequestResponse;
          static toObject(message: FullHistorySyncOnDemandRequestResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        enum FullHistorySyncOnDemandResponseCode {
          REQUEST_SUCCESS = 0,
          REQUEST_TIME_EXPIRED = 1,
          DECLINED_SHARING_HISTORY = 2,
          GENERIC_ERROR = 3,
          ERROR_REQUEST_ON_NON_SMB_PRIMARY = 4,
          ERROR_HOSTED_DEVICE_NOT_CONNECTED = 5,
          ERROR_HOSTED_DEVICE_LOGIN_TIME_NOT_SET = 6,
          ERROR_MULTI_PROVIDER_NOT_CONFIGURED = 7,
        }
        interface IHistorySyncChunkRetryResponse { [key: string]: any }
        class HistorySyncChunkRetryResponse implements IHistorySyncChunkRetryResponse {
          [key: string]: any;
          constructor(properties?: IHistorySyncChunkRetryResponse);
          static create(properties?: IHistorySyncChunkRetryResponse): HistorySyncChunkRetryResponse;
          static encode(message: IHistorySyncChunkRetryResponse, writer?: any): any;
          static encodeDelimited(message: IHistorySyncChunkRetryResponse, writer?: any): any;
          static decode(reader: any, length?: number): HistorySyncChunkRetryResponse;
          static decodeDelimited(reader: any): HistorySyncChunkRetryResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): HistorySyncChunkRetryResponse;
          static toObject(message: HistorySyncChunkRetryResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        enum HistorySyncChunkRetryResponseCode {
          GENERATION_ERROR = 1,
          CHUNK_CONSUMED = 2,
          TIMEOUT = 3,
          SESSION_EXHAUSTED = 4,
          CHUNK_EXHAUSTED = 5,
          DUPLICATED_REQUEST = 6,
        }
        interface ILinkPreviewResponse { [key: string]: any }
        class LinkPreviewResponse implements ILinkPreviewResponse {
          [key: string]: any;
          constructor(properties?: ILinkPreviewResponse);
          static create(properties?: ILinkPreviewResponse): LinkPreviewResponse;
          static encode(message: ILinkPreviewResponse, writer?: any): any;
          static encodeDelimited(message: ILinkPreviewResponse, writer?: any): any;
          static decode(reader: any, length?: number): LinkPreviewResponse;
          static decodeDelimited(reader: any): LinkPreviewResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): LinkPreviewResponse;
          static toObject(message: LinkPreviewResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        namespace LinkPreviewResponse {
          interface ILinkPreviewHighQualityThumbnail { [key: string]: any }
          class LinkPreviewHighQualityThumbnail implements ILinkPreviewHighQualityThumbnail {
            [key: string]: any;
            constructor(properties?: ILinkPreviewHighQualityThumbnail);
            static create(properties?: ILinkPreviewHighQualityThumbnail): LinkPreviewHighQualityThumbnail;
            static encode(message: ILinkPreviewHighQualityThumbnail, writer?: any): any;
            static encodeDelimited(message: ILinkPreviewHighQualityThumbnail, writer?: any): any;
            static decode(reader: any, length?: number): LinkPreviewHighQualityThumbnail;
            static decodeDelimited(reader: any): LinkPreviewHighQualityThumbnail;
            static verify(message: { [key: string]: any }): string | null;
            static fromObject(object: { [key: string]: any }): LinkPreviewHighQualityThumbnail;
            static toObject(message: LinkPreviewHighQualityThumbnail, options?: any): { [key: string]: any };
            toJSON(): { [key: string]: any };
            static getTypeUrl(typeUrlPrefix?: string): string;
          }
          interface IPaymentLinkPreviewMetadata { [key: string]: any }
          class PaymentLinkPreviewMetadata implements IPaymentLinkPreviewMetadata {
            [key: string]: any;
            constructor(properties?: IPaymentLinkPreviewMetadata);
            static create(properties?: IPaymentLinkPreviewMetadata): PaymentLinkPreviewMetadata;
            static encode(message: IPaymentLinkPreviewMetadata, writer?: any): any;
            static encodeDelimited(message: IPaymentLinkPreviewMetadata, writer?: any): any;
            static decode(reader: any, length?: number): PaymentLinkPreviewMetadata;
            static decodeDelimited(reader: any): PaymentLinkPreviewMetadata;
            static verify(message: { [key: string]: any }): string | null;
            static fromObject(object: { [key: string]: any }): PaymentLinkPreviewMetadata;
            static toObject(message: PaymentLinkPreviewMetadata, options?: any): { [key: string]: any };
            toJSON(): { [key: string]: any };
            static getTypeUrl(typeUrlPrefix?: string): string;
          }
        }
        interface IPlaceholderMessageResendResponse { [key: string]: any }
        class PlaceholderMessageResendResponse implements IPlaceholderMessageResendResponse {
          [key: string]: any;
          constructor(properties?: IPlaceholderMessageResendResponse);
          static create(properties?: IPlaceholderMessageResendResponse): PlaceholderMessageResendResponse;
          static encode(message: IPlaceholderMessageResendResponse, writer?: any): any;
          static encodeDelimited(message: IPlaceholderMessageResendResponse, writer?: any): any;
          static decode(reader: any, length?: number): PlaceholderMessageResendResponse;
          static decodeDelimited(reader: any): PlaceholderMessageResendResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): PlaceholderMessageResendResponse;
          static toObject(message: PlaceholderMessageResendResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface ISyncDSnapshotFatalRecoveryResponse { [key: string]: any }
        class SyncDSnapshotFatalRecoveryResponse implements ISyncDSnapshotFatalRecoveryResponse {
          [key: string]: any;
          constructor(properties?: ISyncDSnapshotFatalRecoveryResponse);
          static create(properties?: ISyncDSnapshotFatalRecoveryResponse): SyncDSnapshotFatalRecoveryResponse;
          static encode(message: ISyncDSnapshotFatalRecoveryResponse, writer?: any): any;
          static encodeDelimited(message: ISyncDSnapshotFatalRecoveryResponse, writer?: any): any;
          static decode(reader: any, length?: number): SyncDSnapshotFatalRecoveryResponse;
          static decodeDelimited(reader: any): SyncDSnapshotFatalRecoveryResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): SyncDSnapshotFatalRecoveryResponse;
          static toObject(message: SyncDSnapshotFatalRecoveryResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
        interface IWaffleNonceFetchResponse { [key: string]: any }
        class WaffleNonceFetchResponse implements IWaffleNonceFetchResponse {
          [key: string]: any;
          constructor(properties?: IWaffleNonceFetchResponse);
          static create(properties?: IWaffleNonceFetchResponse): WaffleNonceFetchResponse;
          static encode(message: IWaffleNonceFetchResponse, writer?: any): any;
          static encodeDelimited(message: IWaffleNonceFetchResponse, writer?: any): any;
          static decode(reader: any, length?: number): WaffleNonceFetchResponse;
          static decodeDelimited(reader: any): WaffleNonceFetchResponse;
          static verify(message: { [key: string]: any }): string | null;
          static fromObject(object: { [key: string]: any }): WaffleNonceFetchResponse;
          static toObject(message: WaffleNonceFetchResponse, options?: any): { [key: string]: any };
          toJSON(): { [key: string]: any };
          static getTypeUrl(typeUrlPrefix?: string): string;
        }
      }
    }
    enum PeerDataOperationRequestType {
      UPLOAD_STICKER = 0,
      SEND_RECENT_STICKER_BOOTSTRAP = 1,
      GENERATE_LINK_PREVIEW = 2,
      HISTORY_SYNC_ON_DEMAND = 3,
      PLACEHOLDER_MESSAGE_RESEND = 4,
      WAFFLE_LINKING_NONCE_FETCH = 5,
      FULL_HISTORY_SYNC_ON_DEMAND = 6,
      COMPANION_META_NONCE_FETCH = 7,
      COMPANION_SYNCD_SNAPSHOT_FATAL_RECOVERY = 8,
      COMPANION_CANONICAL_USER_NONCE_FETCH = 9,
      HISTORY_SYNC_CHUNK_RETRY = 10,
      GALAXY_FLOW_ACTION = 11,
      BUSINESS_BROADCAST_INSIGHTS_DELIVERED_TO = 12,
      BUSINESS_BROADCAST_INSIGHTS_REFRESH = 13,
      CONTACT_REFRESH_REQUEST = 14,
    }
    interface IPinInChatMessage { [key: string]: any }
    class PinInChatMessage implements IPinInChatMessage {
      [key: string]: any;
      constructor(properties?: IPinInChatMessage);
      static create(properties?: IPinInChatMessage): PinInChatMessage;
      static encode(message: IPinInChatMessage, writer?: any): any;
      static encodeDelimited(message: IPinInChatMessage, writer?: any): any;
      static decode(reader: any, length?: number): PinInChatMessage;
      static decodeDelimited(reader: any): PinInChatMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PinInChatMessage;
      static toObject(message: PinInChatMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PinInChatMessage {
      enum Type {
        UNKNOWN_TYPE = 0,
        PIN_FOR_ALL = 1,
        UNPIN_FOR_ALL = 2,
      }
    }
    interface IPlaceholderMessage { [key: string]: any }
    class PlaceholderMessage implements IPlaceholderMessage {
      [key: string]: any;
      constructor(properties?: IPlaceholderMessage);
      static create(properties?: IPlaceholderMessage): PlaceholderMessage;
      static encode(message: IPlaceholderMessage, writer?: any): any;
      static encodeDelimited(message: IPlaceholderMessage, writer?: any): any;
      static decode(reader: any, length?: number): PlaceholderMessage;
      static decodeDelimited(reader: any): PlaceholderMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PlaceholderMessage;
      static toObject(message: PlaceholderMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PlaceholderMessage {
      enum PlaceholderType {
        MASK_LINKED_DEVICES = 0,
      }
    }
    interface IPollAddOptionMessage { [key: string]: any }
    class PollAddOptionMessage implements IPollAddOptionMessage {
      [key: string]: any;
      constructor(properties?: IPollAddOptionMessage);
      static create(properties?: IPollAddOptionMessage): PollAddOptionMessage;
      static encode(message: IPollAddOptionMessage, writer?: any): any;
      static encodeDelimited(message: IPollAddOptionMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollAddOptionMessage;
      static decodeDelimited(reader: any): PollAddOptionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollAddOptionMessage;
      static toObject(message: PollAddOptionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum PollContentType {
      UNKNOWN = 0,
      TEXT = 1,
      IMAGE = 2,
    }
    interface IPollCreationMessage { [key: string]: any }
    class PollCreationMessage implements IPollCreationMessage {
      [key: string]: any;
      constructor(properties?: IPollCreationMessage);
      static create(properties?: IPollCreationMessage): PollCreationMessage;
      static encode(message: IPollCreationMessage, writer?: any): any;
      static encodeDelimited(message: IPollCreationMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollCreationMessage;
      static decodeDelimited(reader: any): PollCreationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollCreationMessage;
      static toObject(message: PollCreationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PollCreationMessage {
      interface IOption { [key: string]: any }
      class Option implements IOption {
        [key: string]: any;
        constructor(properties?: IOption);
        static create(properties?: IOption): Option;
        static encode(message: IOption, writer?: any): any;
        static encodeDelimited(message: IOption, writer?: any): any;
        static decode(reader: any, length?: number): Option;
        static decodeDelimited(reader: any): Option;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Option;
        static toObject(message: Option, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IPollEncValue { [key: string]: any }
    class PollEncValue implements IPollEncValue {
      [key: string]: any;
      constructor(properties?: IPollEncValue);
      static create(properties?: IPollEncValue): PollEncValue;
      static encode(message: IPollEncValue, writer?: any): any;
      static encodeDelimited(message: IPollEncValue, writer?: any): any;
      static decode(reader: any, length?: number): PollEncValue;
      static decodeDelimited(reader: any): PollEncValue;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollEncValue;
      static toObject(message: PollEncValue, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollResultSnapshotMessage { [key: string]: any }
    class PollResultSnapshotMessage implements IPollResultSnapshotMessage {
      [key: string]: any;
      constructor(properties?: IPollResultSnapshotMessage);
      static create(properties?: IPollResultSnapshotMessage): PollResultSnapshotMessage;
      static encode(message: IPollResultSnapshotMessage, writer?: any): any;
      static encodeDelimited(message: IPollResultSnapshotMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollResultSnapshotMessage;
      static decodeDelimited(reader: any): PollResultSnapshotMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollResultSnapshotMessage;
      static toObject(message: PollResultSnapshotMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PollResultSnapshotMessage {
      interface IPollVote { [key: string]: any }
      class PollVote implements IPollVote {
        [key: string]: any;
        constructor(properties?: IPollVote);
        static create(properties?: IPollVote): PollVote;
        static encode(message: IPollVote, writer?: any): any;
        static encodeDelimited(message: IPollVote, writer?: any): any;
        static decode(reader: any, length?: number): PollVote;
        static decodeDelimited(reader: any): PollVote;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PollVote;
        static toObject(message: PollVote, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    enum PollType {
      POLL = 0,
      QUIZ = 1,
    }
    interface IPollUpdateMessage { [key: string]: any }
    class PollUpdateMessage implements IPollUpdateMessage {
      [key: string]: any;
      constructor(properties?: IPollUpdateMessage);
      static create(properties?: IPollUpdateMessage): PollUpdateMessage;
      static encode(message: IPollUpdateMessage, writer?: any): any;
      static encodeDelimited(message: IPollUpdateMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollUpdateMessage;
      static decodeDelimited(reader: any): PollUpdateMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollUpdateMessage;
      static toObject(message: PollUpdateMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollUpdateMessageMetadata { [key: string]: any }
    class PollUpdateMessageMetadata implements IPollUpdateMessageMetadata {
      [key: string]: any;
      constructor(properties?: IPollUpdateMessageMetadata);
      static create(properties?: IPollUpdateMessageMetadata): PollUpdateMessageMetadata;
      static encode(message: IPollUpdateMessageMetadata, writer?: any): any;
      static encodeDelimited(message: IPollUpdateMessageMetadata, writer?: any): any;
      static decode(reader: any, length?: number): PollUpdateMessageMetadata;
      static decodeDelimited(reader: any): PollUpdateMessageMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollUpdateMessageMetadata;
      static toObject(message: PollUpdateMessageMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollVoteMessage { [key: string]: any }
    class PollVoteMessage implements IPollVoteMessage {
      [key: string]: any;
      constructor(properties?: IPollVoteMessage);
      static create(properties?: IPollVoteMessage): PollVoteMessage;
      static encode(message: IPollVoteMessage, writer?: any): any;
      static encodeDelimited(message: IPollVoteMessage, writer?: any): any;
      static decode(reader: any, length?: number): PollVoteMessage;
      static decodeDelimited(reader: any): PollVoteMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollVoteMessage;
      static toObject(message: PollVoteMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IProductMessage { [key: string]: any }
    class ProductMessage implements IProductMessage {
      [key: string]: any;
      constructor(properties?: IProductMessage);
      static create(properties?: IProductMessage): ProductMessage;
      static encode(message: IProductMessage, writer?: any): any;
      static encodeDelimited(message: IProductMessage, writer?: any): any;
      static decode(reader: any, length?: number): ProductMessage;
      static decodeDelimited(reader: any): ProductMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ProductMessage;
      static toObject(message: ProductMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ProductMessage {
      interface ICatalogSnapshot { [key: string]: any }
      class CatalogSnapshot implements ICatalogSnapshot {
        [key: string]: any;
        constructor(properties?: ICatalogSnapshot);
        static create(properties?: ICatalogSnapshot): CatalogSnapshot;
        static encode(message: ICatalogSnapshot, writer?: any): any;
        static encodeDelimited(message: ICatalogSnapshot, writer?: any): any;
        static decode(reader: any, length?: number): CatalogSnapshot;
        static decodeDelimited(reader: any): CatalogSnapshot;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CatalogSnapshot;
        static toObject(message: CatalogSnapshot, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IProductSnapshot { [key: string]: any }
      class ProductSnapshot implements IProductSnapshot {
        [key: string]: any;
        constructor(properties?: IProductSnapshot);
        static create(properties?: IProductSnapshot): ProductSnapshot;
        static encode(message: IProductSnapshot, writer?: any): any;
        static encodeDelimited(message: IProductSnapshot, writer?: any): any;
        static decode(reader: any, length?: number): ProductSnapshot;
        static decodeDelimited(reader: any): ProductSnapshot;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): ProductSnapshot;
        static toObject(message: ProductSnapshot, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IProtocolMessage { [key: string]: any }
    class ProtocolMessage implements IProtocolMessage {
      [key: string]: any;
      constructor(properties?: IProtocolMessage);
      static create(properties?: IProtocolMessage): ProtocolMessage;
      static encode(message: IProtocolMessage, writer?: any): any;
      static encodeDelimited(message: IProtocolMessage, writer?: any): any;
      static decode(reader: any, length?: number): ProtocolMessage;
      static decodeDelimited(reader: any): ProtocolMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ProtocolMessage;
      static toObject(message: ProtocolMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ProtocolMessage {
      enum Type {
        REVOKE = 0,
        EPHEMERAL_SETTING = 3,
        EPHEMERAL_SYNC_RESPONSE = 4,
        HISTORY_SYNC_NOTIFICATION = 5,
        APP_STATE_SYNC_KEY_SHARE = 6,
        APP_STATE_SYNC_KEY_REQUEST = 7,
        MSG_FANOUT_BACKFILL_REQUEST = 8,
        INITIAL_SECURITY_NOTIFICATION_SETTING_SYNC = 9,
        APP_STATE_FATAL_EXCEPTION_NOTIFICATION = 10,
        SHARE_PHONE_NUMBER = 11,
        MESSAGE_EDIT = 14,
        PEER_DATA_OPERATION_REQUEST_MESSAGE = 16,
        PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE = 17,
        REQUEST_WELCOME_MESSAGE = 18,
        BOT_FEEDBACK_MESSAGE = 19,
        MEDIA_NOTIFY_MESSAGE = 20,
        CLOUD_API_THREAD_CONTROL_NOTIFICATION = 21,
        LID_MIGRATION_MAPPING_SYNC = 22,
        REMINDER_MESSAGE = 23,
        BOT_MEMU_ONBOARDING_MESSAGE = 24,
        STATUS_MENTION_MESSAGE = 25,
        STOP_GENERATION_MESSAGE = 26,
        LIMIT_SHARING = 27,
        AI_PSI_METADATA = 28,
        AI_QUERY_FANOUT = 29,
        GROUP_MEMBER_LABEL_CHANGE = 30,
        AI_MEDIA_COLLECTION_MESSAGE = 31,
        MESSAGE_UNSCHEDULE = 32,
        CHAT_THEME_SETTING = 34,
        AI_METADATA_OPERATION = 35,
        MARK_AS_VERIFIED_ACTION = 36,
        COEX_STATE_SYNC = 37,
      }
    }
    interface IQuestionResponseMessage { [key: string]: any }
    class QuestionResponseMessage implements IQuestionResponseMessage {
      [key: string]: any;
      constructor(properties?: IQuestionResponseMessage);
      static create(properties?: IQuestionResponseMessage): QuestionResponseMessage;
      static encode(message: IQuestionResponseMessage, writer?: any): any;
      static encodeDelimited(message: IQuestionResponseMessage, writer?: any): any;
      static decode(reader: any, length?: number): QuestionResponseMessage;
      static decodeDelimited(reader: any): QuestionResponseMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): QuestionResponseMessage;
      static toObject(message: QuestionResponseMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IReactionMessage { [key: string]: any }
    class ReactionMessage implements IReactionMessage {
      [key: string]: any;
      constructor(properties?: IReactionMessage);
      static create(properties?: IReactionMessage): ReactionMessage;
      static encode(message: IReactionMessage, writer?: any): any;
      static encodeDelimited(message: IReactionMessage, writer?: any): any;
      static decode(reader: any, length?: number): ReactionMessage;
      static decodeDelimited(reader: any): ReactionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ReactionMessage;
      static toObject(message: ReactionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRequestPaymentMessage { [key: string]: any }
    class RequestPaymentMessage implements IRequestPaymentMessage {
      [key: string]: any;
      constructor(properties?: IRequestPaymentMessage);
      static create(properties?: IRequestPaymentMessage): RequestPaymentMessage;
      static encode(message: IRequestPaymentMessage, writer?: any): any;
      static encodeDelimited(message: IRequestPaymentMessage, writer?: any): any;
      static decode(reader: any, length?: number): RequestPaymentMessage;
      static decodeDelimited(reader: any): RequestPaymentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RequestPaymentMessage;
      static toObject(message: RequestPaymentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRequestPhoneNumberMessage { [key: string]: any }
    class RequestPhoneNumberMessage implements IRequestPhoneNumberMessage {
      [key: string]: any;
      constructor(properties?: IRequestPhoneNumberMessage);
      static create(properties?: IRequestPhoneNumberMessage): RequestPhoneNumberMessage;
      static encode(message: IRequestPhoneNumberMessage, writer?: any): any;
      static encodeDelimited(message: IRequestPhoneNumberMessage, writer?: any): any;
      static decode(reader: any, length?: number): RequestPhoneNumberMessage;
      static decodeDelimited(reader: any): RequestPhoneNumberMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RequestPhoneNumberMessage;
      static toObject(message: RequestPhoneNumberMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRequestWelcomeMessageMetadata { [key: string]: any }
    class RequestWelcomeMessageMetadata implements IRequestWelcomeMessageMetadata {
      [key: string]: any;
      constructor(properties?: IRequestWelcomeMessageMetadata);
      static create(properties?: IRequestWelcomeMessageMetadata): RequestWelcomeMessageMetadata;
      static encode(message: IRequestWelcomeMessageMetadata, writer?: any): any;
      static encodeDelimited(message: IRequestWelcomeMessageMetadata, writer?: any): any;
      static decode(reader: any, length?: number): RequestWelcomeMessageMetadata;
      static decodeDelimited(reader: any): RequestWelcomeMessageMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RequestWelcomeMessageMetadata;
      static toObject(message: RequestWelcomeMessageMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace RequestWelcomeMessageMetadata {
      enum LocalChatState {
        EMPTY = 0,
        NON_EMPTY = 1,
      }
      enum WelcomeTrigger {
        CHAT_OPEN = 0,
        COMPANION_PAIRING = 1,
      }
    }
    interface IRootSecretDistributeMessage { [key: string]: any }
    class RootSecretDistributeMessage implements IRootSecretDistributeMessage {
      [key: string]: any;
      constructor(properties?: IRootSecretDistributeMessage);
      static create(properties?: IRootSecretDistributeMessage): RootSecretDistributeMessage;
      static encode(message: IRootSecretDistributeMessage, writer?: any): any;
      static encodeDelimited(message: IRootSecretDistributeMessage, writer?: any): any;
      static decode(reader: any, length?: number): RootSecretDistributeMessage;
      static decodeDelimited(reader: any): RootSecretDistributeMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RootSecretDistributeMessage;
      static toObject(message: RootSecretDistributeMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IScheduledCallCreationMessage { [key: string]: any }
    class ScheduledCallCreationMessage implements IScheduledCallCreationMessage {
      [key: string]: any;
      constructor(properties?: IScheduledCallCreationMessage);
      static create(properties?: IScheduledCallCreationMessage): ScheduledCallCreationMessage;
      static encode(message: IScheduledCallCreationMessage, writer?: any): any;
      static encodeDelimited(message: IScheduledCallCreationMessage, writer?: any): any;
      static decode(reader: any, length?: number): ScheduledCallCreationMessage;
      static decodeDelimited(reader: any): ScheduledCallCreationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ScheduledCallCreationMessage;
      static toObject(message: ScheduledCallCreationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ScheduledCallCreationMessage {
      enum CallType {
        UNKNOWN = 0,
        VOICE = 1,
        VIDEO = 2,
      }
    }
    interface IScheduledCallEditMessage { [key: string]: any }
    class ScheduledCallEditMessage implements IScheduledCallEditMessage {
      [key: string]: any;
      constructor(properties?: IScheduledCallEditMessage);
      static create(properties?: IScheduledCallEditMessage): ScheduledCallEditMessage;
      static encode(message: IScheduledCallEditMessage, writer?: any): any;
      static encodeDelimited(message: IScheduledCallEditMessage, writer?: any): any;
      static decode(reader: any, length?: number): ScheduledCallEditMessage;
      static decodeDelimited(reader: any): ScheduledCallEditMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ScheduledCallEditMessage;
      static toObject(message: ScheduledCallEditMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ScheduledCallEditMessage {
      enum EditType {
        UNKNOWN = 0,
        CANCEL = 1,
      }
    }
    interface ISecretEncryptedMessage { [key: string]: any }
    class SecretEncryptedMessage implements ISecretEncryptedMessage {
      [key: string]: any;
      constructor(properties?: ISecretEncryptedMessage);
      static create(properties?: ISecretEncryptedMessage): SecretEncryptedMessage;
      static encode(message: ISecretEncryptedMessage, writer?: any): any;
      static encodeDelimited(message: ISecretEncryptedMessage, writer?: any): any;
      static decode(reader: any, length?: number): SecretEncryptedMessage;
      static decodeDelimited(reader: any): SecretEncryptedMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SecretEncryptedMessage;
      static toObject(message: SecretEncryptedMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace SecretEncryptedMessage {
      enum SecretEncType {
        UNKNOWN = 0,
        EVENT_EDIT = 1,
        MESSAGE_EDIT = 2,
        MESSAGE_SCHEDULE = 3,
        POLL_EDIT = 4,
        POLL_ADD_OPTION = 5,
      }
    }
    interface ISendPaymentMessage { [key: string]: any }
    class SendPaymentMessage implements ISendPaymentMessage {
      [key: string]: any;
      constructor(properties?: ISendPaymentMessage);
      static create(properties?: ISendPaymentMessage): SendPaymentMessage;
      static encode(message: ISendPaymentMessage, writer?: any): any;
      static encodeDelimited(message: ISendPaymentMessage, writer?: any): any;
      static decode(reader: any, length?: number): SendPaymentMessage;
      static decodeDelimited(reader: any): SendPaymentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SendPaymentMessage;
      static toObject(message: SendPaymentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISenderKeyDistributionMessage { [key: string]: any }
    class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
      [key: string]: any;
      constructor(properties?: ISenderKeyDistributionMessage);
      static create(properties?: ISenderKeyDistributionMessage): SenderKeyDistributionMessage;
      static encode(message: ISenderKeyDistributionMessage, writer?: any): any;
      static encodeDelimited(message: ISenderKeyDistributionMessage, writer?: any): any;
      static decode(reader: any, length?: number): SenderKeyDistributionMessage;
      static decodeDelimited(reader: any): SenderKeyDistributionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SenderKeyDistributionMessage;
      static toObject(message: SenderKeyDistributionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISharedDeviceContactHashKey { [key: string]: any }
    class SharedDeviceContactHashKey implements ISharedDeviceContactHashKey {
      [key: string]: any;
      constructor(properties?: ISharedDeviceContactHashKey);
      static create(properties?: ISharedDeviceContactHashKey): SharedDeviceContactHashKey;
      static encode(message: ISharedDeviceContactHashKey, writer?: any): any;
      static encodeDelimited(message: ISharedDeviceContactHashKey, writer?: any): any;
      static decode(reader: any, length?: number): SharedDeviceContactHashKey;
      static decodeDelimited(reader: any): SharedDeviceContactHashKey;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SharedDeviceContactHashKey;
      static toObject(message: SharedDeviceContactHashKey, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISharedDeviceContactHashKeyRequest { [key: string]: any }
    class SharedDeviceContactHashKeyRequest implements ISharedDeviceContactHashKeyRequest {
      [key: string]: any;
      constructor(properties?: ISharedDeviceContactHashKeyRequest);
      static create(properties?: ISharedDeviceContactHashKeyRequest): SharedDeviceContactHashKeyRequest;
      static encode(message: ISharedDeviceContactHashKeyRequest, writer?: any): any;
      static encodeDelimited(message: ISharedDeviceContactHashKeyRequest, writer?: any): any;
      static decode(reader: any, length?: number): SharedDeviceContactHashKeyRequest;
      static decodeDelimited(reader: any): SharedDeviceContactHashKeyRequest;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SharedDeviceContactHashKeyRequest;
      static toObject(message: SharedDeviceContactHashKeyRequest, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISharedDeviceContactHashKeyShare { [key: string]: any }
    class SharedDeviceContactHashKeyShare implements ISharedDeviceContactHashKeyShare {
      [key: string]: any;
      constructor(properties?: ISharedDeviceContactHashKeyShare);
      static create(properties?: ISharedDeviceContactHashKeyShare): SharedDeviceContactHashKeyShare;
      static encode(message: ISharedDeviceContactHashKeyShare, writer?: any): any;
      static encodeDelimited(message: ISharedDeviceContactHashKeyShare, writer?: any): any;
      static decode(reader: any, length?: number): SharedDeviceContactHashKeyShare;
      static decodeDelimited(reader: any): SharedDeviceContactHashKeyShare;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SharedDeviceContactHashKeyShare;
      static toObject(message: SharedDeviceContactHashKeyShare, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISplitPaymentMessage { [key: string]: any }
    class SplitPaymentMessage implements ISplitPaymentMessage {
      [key: string]: any;
      constructor(properties?: ISplitPaymentMessage);
      static create(properties?: ISplitPaymentMessage): SplitPaymentMessage;
      static encode(message: ISplitPaymentMessage, writer?: any): any;
      static encodeDelimited(message: ISplitPaymentMessage, writer?: any): any;
      static decode(reader: any, length?: number): SplitPaymentMessage;
      static decodeDelimited(reader: any): SplitPaymentMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SplitPaymentMessage;
      static toObject(message: SplitPaymentMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISplitPaymentParticipant { [key: string]: any }
    class SplitPaymentParticipant implements ISplitPaymentParticipant {
      [key: string]: any;
      constructor(properties?: ISplitPaymentParticipant);
      static create(properties?: ISplitPaymentParticipant): SplitPaymentParticipant;
      static encode(message: ISplitPaymentParticipant, writer?: any): any;
      static encodeDelimited(message: ISplitPaymentParticipant, writer?: any): any;
      static decode(reader: any, length?: number): SplitPaymentParticipant;
      static decodeDelimited(reader: any): SplitPaymentParticipant;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SplitPaymentParticipant;
      static toObject(message: SplitPaymentParticipant, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace SplitPaymentParticipant {
      enum SplitPaymentStatus {
        PENDING = 0,
        PAID = 1,
      }
    }
    interface ISplitPaymentUpdateMessage { [key: string]: any }
    class SplitPaymentUpdateMessage implements ISplitPaymentUpdateMessage {
      [key: string]: any;
      constructor(properties?: ISplitPaymentUpdateMessage);
      static create(properties?: ISplitPaymentUpdateMessage): SplitPaymentUpdateMessage;
      static encode(message: ISplitPaymentUpdateMessage, writer?: any): any;
      static encodeDelimited(message: ISplitPaymentUpdateMessage, writer?: any): any;
      static decode(reader: any, length?: number): SplitPaymentUpdateMessage;
      static decodeDelimited(reader: any): SplitPaymentUpdateMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SplitPaymentUpdateMessage;
      static toObject(message: SplitPaymentUpdateMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStatusLinkPreviewMetadata { [key: string]: any }
    class StatusLinkPreviewMetadata implements IStatusLinkPreviewMetadata {
      [key: string]: any;
      constructor(properties?: IStatusLinkPreviewMetadata);
      static create(properties?: IStatusLinkPreviewMetadata): StatusLinkPreviewMetadata;
      static encode(message: IStatusLinkPreviewMetadata, writer?: any): any;
      static encodeDelimited(message: IStatusLinkPreviewMetadata, writer?: any): any;
      static decode(reader: any, length?: number): StatusLinkPreviewMetadata;
      static decodeDelimited(reader: any): StatusLinkPreviewMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusLinkPreviewMetadata;
      static toObject(message: StatusLinkPreviewMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusLinkPreviewMetadata {
      enum Style {
        AUTO = 0,
        COMPACT = 1,
        FULL = 2,
        IMMERSIVE = 3,
      }
    }
    interface IStatusNotificationMessage { [key: string]: any }
    class StatusNotificationMessage implements IStatusNotificationMessage {
      [key: string]: any;
      constructor(properties?: IStatusNotificationMessage);
      static create(properties?: IStatusNotificationMessage): StatusNotificationMessage;
      static encode(message: IStatusNotificationMessage, writer?: any): any;
      static encodeDelimited(message: IStatusNotificationMessage, writer?: any): any;
      static decode(reader: any, length?: number): StatusNotificationMessage;
      static decodeDelimited(reader: any): StatusNotificationMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusNotificationMessage;
      static toObject(message: StatusNotificationMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusNotificationMessage {
      enum StatusNotificationType {
        UNKNOWN = 0,
        STATUS_ADD_YOURS = 1,
        STATUS_RESHARE = 2,
        STATUS_QUESTION_ANSWER_RESHARE = 3,
        STATUS_GROUP_STATUS_REPLY = 4,
      }
    }
    interface IStatusQuestionAnswerMessage { [key: string]: any }
    class StatusQuestionAnswerMessage implements IStatusQuestionAnswerMessage {
      [key: string]: any;
      constructor(properties?: IStatusQuestionAnswerMessage);
      static create(properties?: IStatusQuestionAnswerMessage): StatusQuestionAnswerMessage;
      static encode(message: IStatusQuestionAnswerMessage, writer?: any): any;
      static encodeDelimited(message: IStatusQuestionAnswerMessage, writer?: any): any;
      static decode(reader: any, length?: number): StatusQuestionAnswerMessage;
      static decodeDelimited(reader: any): StatusQuestionAnswerMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusQuestionAnswerMessage;
      static toObject(message: StatusQuestionAnswerMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStatusQuotedMessage { [key: string]: any }
    class StatusQuotedMessage implements IStatusQuotedMessage {
      [key: string]: any;
      constructor(properties?: IStatusQuotedMessage);
      static create(properties?: IStatusQuotedMessage): StatusQuotedMessage;
      static encode(message: IStatusQuotedMessage, writer?: any): any;
      static encodeDelimited(message: IStatusQuotedMessage, writer?: any): any;
      static decode(reader: any, length?: number): StatusQuotedMessage;
      static decodeDelimited(reader: any): StatusQuotedMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusQuotedMessage;
      static toObject(message: StatusQuotedMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusQuotedMessage {
      enum StatusQuotedMessageType {
        QUESTION_ANSWER = 1,
      }
    }
    interface IStatusStickerInteractionMessage { [key: string]: any }
    class StatusStickerInteractionMessage implements IStatusStickerInteractionMessage {
      [key: string]: any;
      constructor(properties?: IStatusStickerInteractionMessage);
      static create(properties?: IStatusStickerInteractionMessage): StatusStickerInteractionMessage;
      static encode(message: IStatusStickerInteractionMessage, writer?: any): any;
      static encodeDelimited(message: IStatusStickerInteractionMessage, writer?: any): any;
      static decode(reader: any, length?: number): StatusStickerInteractionMessage;
      static decodeDelimited(reader: any): StatusStickerInteractionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusStickerInteractionMessage;
      static toObject(message: StatusStickerInteractionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusStickerInteractionMessage {
      enum StatusStickerType {
        UNKNOWN = 0,
        REACTION = 1,
      }
    }
    interface IStickerMessage { [key: string]: any }
    class StickerMessage implements IStickerMessage {
      [key: string]: any;
      constructor(properties?: IStickerMessage);
      static create(properties?: IStickerMessage): StickerMessage;
      static encode(message: IStickerMessage, writer?: any): any;
      static encodeDelimited(message: IStickerMessage, writer?: any): any;
      static decode(reader: any, length?: number): StickerMessage;
      static decodeDelimited(reader: any): StickerMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StickerMessage;
      static toObject(message: StickerMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStickerPackMessage { [key: string]: any }
    class StickerPackMessage implements IStickerPackMessage {
      [key: string]: any;
      constructor(properties?: IStickerPackMessage);
      static create(properties?: IStickerPackMessage): StickerPackMessage;
      static encode(message: IStickerPackMessage, writer?: any): any;
      static encodeDelimited(message: IStickerPackMessage, writer?: any): any;
      static decode(reader: any, length?: number): StickerPackMessage;
      static decodeDelimited(reader: any): StickerPackMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StickerPackMessage;
      static toObject(message: StickerPackMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StickerPackMessage {
      interface ISticker { [key: string]: any }
      class Sticker implements ISticker {
        [key: string]: any;
        constructor(properties?: ISticker);
        static create(properties?: ISticker): Sticker;
        static encode(message: ISticker, writer?: any): any;
        static encodeDelimited(message: ISticker, writer?: any): any;
        static decode(reader: any, length?: number): Sticker;
        static decodeDelimited(reader: any): Sticker;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Sticker;
        static toObject(message: Sticker, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum StickerPackOrigin {
        FIRST_PARTY = 0,
        THIRD_PARTY = 1,
        USER_CREATED = 2,
      }
    }
    interface IStickerSyncRMRMessage { [key: string]: any }
    class StickerSyncRMRMessage implements IStickerSyncRMRMessage {
      [key: string]: any;
      constructor(properties?: IStickerSyncRMRMessage);
      static create(properties?: IStickerSyncRMRMessage): StickerSyncRMRMessage;
      static encode(message: IStickerSyncRMRMessage, writer?: any): any;
      static encodeDelimited(message: IStickerSyncRMRMessage, writer?: any): any;
      static decode(reader: any, length?: number): StickerSyncRMRMessage;
      static decodeDelimited(reader: any): StickerSyncRMRMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StickerSyncRMRMessage;
      static toObject(message: StickerSyncRMRMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ITemplateButtonReplyMessage { [key: string]: any }
    class TemplateButtonReplyMessage implements ITemplateButtonReplyMessage {
      [key: string]: any;
      constructor(properties?: ITemplateButtonReplyMessage);
      static create(properties?: ITemplateButtonReplyMessage): TemplateButtonReplyMessage;
      static encode(message: ITemplateButtonReplyMessage, writer?: any): any;
      static encodeDelimited(message: ITemplateButtonReplyMessage, writer?: any): any;
      static decode(reader: any, length?: number): TemplateButtonReplyMessage;
      static decodeDelimited(reader: any): TemplateButtonReplyMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): TemplateButtonReplyMessage;
      static toObject(message: TemplateButtonReplyMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ITemplateMessage { [key: string]: any }
    class TemplateMessage implements ITemplateMessage {
      [key: string]: any;
      constructor(properties?: ITemplateMessage);
      static create(properties?: ITemplateMessage): TemplateMessage;
      static encode(message: ITemplateMessage, writer?: any): any;
      static encodeDelimited(message: ITemplateMessage, writer?: any): any;
      static decode(reader: any, length?: number): TemplateMessage;
      static decodeDelimited(reader: any): TemplateMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): TemplateMessage;
      static toObject(message: TemplateMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace TemplateMessage {
      interface IFourRowTemplate { [key: string]: any }
      class FourRowTemplate implements IFourRowTemplate {
        [key: string]: any;
        constructor(properties?: IFourRowTemplate);
        static create(properties?: IFourRowTemplate): FourRowTemplate;
        static encode(message: IFourRowTemplate, writer?: any): any;
        static encodeDelimited(message: IFourRowTemplate, writer?: any): any;
        static decode(reader: any, length?: number): FourRowTemplate;
        static decodeDelimited(reader: any): FourRowTemplate;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): FourRowTemplate;
        static toObject(message: FourRowTemplate, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IHydratedFourRowTemplate { [key: string]: any }
      class HydratedFourRowTemplate implements IHydratedFourRowTemplate {
        [key: string]: any;
        constructor(properties?: IHydratedFourRowTemplate);
        static create(properties?: IHydratedFourRowTemplate): HydratedFourRowTemplate;
        static encode(message: IHydratedFourRowTemplate, writer?: any): any;
        static encodeDelimited(message: IHydratedFourRowTemplate, writer?: any): any;
        static decode(reader: any, length?: number): HydratedFourRowTemplate;
        static decodeDelimited(reader: any): HydratedFourRowTemplate;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): HydratedFourRowTemplate;
        static toObject(message: HydratedFourRowTemplate, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IURLMetadata { [key: string]: any }
    class URLMetadata implements IURLMetadata {
      [key: string]: any;
      constructor(properties?: IURLMetadata);
      static create(properties?: IURLMetadata): URLMetadata;
      static encode(message: IURLMetadata, writer?: any): any;
      static encodeDelimited(message: IURLMetadata, writer?: any): any;
      static decode(reader: any, length?: number): URLMetadata;
      static decodeDelimited(reader: any): URLMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): URLMetadata;
      static toObject(message: URLMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IVideoEndCard { [key: string]: any }
    class VideoEndCard implements IVideoEndCard {
      [key: string]: any;
      constructor(properties?: IVideoEndCard);
      static create(properties?: IVideoEndCard): VideoEndCard;
      static encode(message: IVideoEndCard, writer?: any): any;
      static encodeDelimited(message: IVideoEndCard, writer?: any): any;
      static decode(reader: any, length?: number): VideoEndCard;
      static decodeDelimited(reader: any): VideoEndCard;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): VideoEndCard;
      static toObject(message: VideoEndCard, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IVideoMessage { [key: string]: any }
    class VideoMessage implements IVideoMessage {
      [key: string]: any;
      constructor(properties?: IVideoMessage);
      static create(properties?: IVideoMessage): VideoMessage;
      static encode(message: IVideoMessage, writer?: any): any;
      static encodeDelimited(message: IVideoMessage, writer?: any): any;
      static decode(reader: any, length?: number): VideoMessage;
      static decodeDelimited(reader: any): VideoMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): VideoMessage;
      static toObject(message: VideoMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace VideoMessage {
      enum Attribution {
        NONE = 0,
        GIPHY = 1,
        TENOR = 2,
        KLIPY = 3,
      }
      enum VideoSourceType {
        USER_VIDEO = 0,
        AI_GENERATED = 1,
      }
    }
  }
  interface IMessageAddOn { [key: string]: any }
  class MessageAddOn implements IMessageAddOn {
    [key: string]: any;
    constructor(properties?: IMessageAddOn);
    static create(properties?: IMessageAddOn): MessageAddOn;
    static encode(message: IMessageAddOn, writer?: any): any;
    static encodeDelimited(message: IMessageAddOn, writer?: any): any;
    static decode(reader: any, length?: number): MessageAddOn;
    static decodeDelimited(reader: any): MessageAddOn;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageAddOn;
    static toObject(message: MessageAddOn, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MessageAddOn {
    enum MessageAddOnType {
      UNDEFINED = 0,
      REACTION = 1,
      EVENT_RESPONSE = 2,
      POLL_UPDATE = 3,
      PIN_IN_CHAT = 4,
    }
  }
  interface IMessageAddOnContextInfo { [key: string]: any }
  class MessageAddOnContextInfo implements IMessageAddOnContextInfo {
    [key: string]: any;
    constructor(properties?: IMessageAddOnContextInfo);
    static create(properties?: IMessageAddOnContextInfo): MessageAddOnContextInfo;
    static encode(message: IMessageAddOnContextInfo, writer?: any): any;
    static encodeDelimited(message: IMessageAddOnContextInfo, writer?: any): any;
    static decode(reader: any, length?: number): MessageAddOnContextInfo;
    static decodeDelimited(reader: any): MessageAddOnContextInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageAddOnContextInfo;
    static toObject(message: MessageAddOnContextInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMessageAssociation { [key: string]: any }
  class MessageAssociation implements IMessageAssociation {
    [key: string]: any;
    constructor(properties?: IMessageAssociation);
    static create(properties?: IMessageAssociation): MessageAssociation;
    static encode(message: IMessageAssociation, writer?: any): any;
    static encodeDelimited(message: IMessageAssociation, writer?: any): any;
    static decode(reader: any, length?: number): MessageAssociation;
    static decodeDelimited(reader: any): MessageAssociation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageAssociation;
    static toObject(message: MessageAssociation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MessageAssociation {
    enum AssociationType {
      UNKNOWN = 0,
      MEDIA_ALBUM = 1,
      BOT_PLUGIN = 2,
      EVENT_COVER_IMAGE = 3,
      STATUS_POLL = 4,
      HD_VIDEO_DUAL_UPLOAD = 5,
      STATUS_EXTERNAL_RESHARE = 6,
      MEDIA_POLL = 7,
      STATUS_ADD_YOURS = 8,
      STATUS_NOTIFICATION = 9,
      HD_IMAGE_DUAL_UPLOAD = 10,
      STICKER_ANNOTATION = 11,
      MOTION_PHOTO = 12,
      STATUS_LINK_ACTION = 13,
      VIEW_ALL_REPLIES = 14,
      STATUS_ADD_YOURS_AI_IMAGINE = 15,
      STATUS_QUESTION = 16,
      STATUS_ADD_YOURS_DIWALI = 17,
      STATUS_REACTION = 18,
      HEVC_VIDEO_DUAL_UPLOAD = 19,
      POLL_ADD_OPTION = 20,
    }
  }
  interface IMessageContextInfo { [key: string]: any }
  class MessageContextInfo implements IMessageContextInfo {
    [key: string]: any;
    constructor(properties?: IMessageContextInfo);
    static create(properties?: IMessageContextInfo): MessageContextInfo;
    static encode(message: IMessageContextInfo, writer?: any): any;
    static encodeDelimited(message: IMessageContextInfo, writer?: any): any;
    static decode(reader: any, length?: number): MessageContextInfo;
    static decodeDelimited(reader: any): MessageContextInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageContextInfo;
    static toObject(message: MessageContextInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MessageContextInfo {
    enum MessageAddonExpiryType {
      STATIC = 1,
      DEPENDENT_ON_PARENT = 2,
    }
  }
  interface IMessageKey { [key: string]: any }
  class MessageKey implements IMessageKey {
    [key: string]: any;
    constructor(properties?: IMessageKey);
    static create(properties?: IMessageKey): MessageKey;
    static encode(message: IMessageKey, writer?: any): any;
    static encodeDelimited(message: IMessageKey, writer?: any): any;
    static decode(reader: any, length?: number): MessageKey;
    static decodeDelimited(reader: any): MessageKey;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageKey;
    static toObject(message: MessageKey, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMessageSecretMessage { [key: string]: any }
  class MessageSecretMessage implements IMessageSecretMessage {
    [key: string]: any;
    constructor(properties?: IMessageSecretMessage);
    static create(properties?: IMessageSecretMessage): MessageSecretMessage;
    static encode(message: IMessageSecretMessage, writer?: any): any;
    static encodeDelimited(message: IMessageSecretMessage, writer?: any): any;
    static decode(reader: any, length?: number): MessageSecretMessage;
    static decodeDelimited(reader: any): MessageSecretMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageSecretMessage;
    static toObject(message: MessageSecretMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMessageText { [key: string]: any }
  class MessageText implements IMessageText {
    [key: string]: any;
    constructor(properties?: IMessageText);
    static create(properties?: IMessageText): MessageText;
    static encode(message: IMessageText, writer?: any): any;
    static encodeDelimited(message: IMessageText, writer?: any): any;
    static decode(reader: any, length?: number): MessageText;
    static decodeDelimited(reader: any): MessageText;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessageText;
    static toObject(message: MessageText, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMessagingMailboxPublicData { [key: string]: any }
  class MessagingMailboxPublicData implements IMessagingMailboxPublicData {
    [key: string]: any;
    constructor(properties?: IMessagingMailboxPublicData);
    static create(properties?: IMessagingMailboxPublicData): MessagingMailboxPublicData;
    static encode(message: IMessagingMailboxPublicData, writer?: any): any;
    static encodeDelimited(message: IMessagingMailboxPublicData, writer?: any): any;
    static decode(reader: any, length?: number): MessagingMailboxPublicData;
    static decodeDelimited(reader: any): MessagingMailboxPublicData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MessagingMailboxPublicData;
    static toObject(message: MessagingMailboxPublicData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosClientConfig { [key: string]: any }
  class MinosClientConfig implements IMinosClientConfig {
    [key: string]: any;
    constructor(properties?: IMinosClientConfig);
    static create(properties?: IMinosClientConfig): MinosClientConfig;
    static encode(message: IMinosClientConfig, writer?: any): any;
    static encodeDelimited(message: IMinosClientConfig, writer?: any): any;
    static decode(reader: any, length?: number): MinosClientConfig;
    static decodeDelimited(reader: any): MinosClientConfig;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosClientConfig;
    static toObject(message: MinosClientConfig, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosCommand { [key: string]: any }
  class MinosCommand implements IMinosCommand {
    [key: string]: any;
    constructor(properties?: IMinosCommand);
    static create(properties?: IMinosCommand): MinosCommand;
    static encode(message: IMinosCommand, writer?: any): any;
    static encodeDelimited(message: IMinosCommand, writer?: any): any;
    static decode(reader: any, length?: number): MinosCommand;
    static decodeDelimited(reader: any): MinosCommand;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosCommand;
    static toObject(message: MinosCommand, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosDecryptAndVerifyMessageInput { [key: string]: any }
  class MinosDecryptAndVerifyMessageInput implements IMinosDecryptAndVerifyMessageInput {
    [key: string]: any;
    constructor(properties?: IMinosDecryptAndVerifyMessageInput);
    static create(properties?: IMinosDecryptAndVerifyMessageInput): MinosDecryptAndVerifyMessageInput;
    static encode(message: IMinosDecryptAndVerifyMessageInput, writer?: any): any;
    static encodeDelimited(message: IMinosDecryptAndVerifyMessageInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosDecryptAndVerifyMessageInput;
    static decodeDelimited(reader: any): MinosDecryptAndVerifyMessageInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosDecryptAndVerifyMessageInput;
    static toObject(message: MinosDecryptAndVerifyMessageInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosDecryptAndVerifyMessageResult { [key: string]: any }
  class MinosDecryptAndVerifyMessageResult implements IMinosDecryptAndVerifyMessageResult {
    [key: string]: any;
    constructor(properties?: IMinosDecryptAndVerifyMessageResult);
    static create(properties?: IMinosDecryptAndVerifyMessageResult): MinosDecryptAndVerifyMessageResult;
    static encode(message: IMinosDecryptAndVerifyMessageResult, writer?: any): any;
    static encodeDelimited(message: IMinosDecryptAndVerifyMessageResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosDecryptAndVerifyMessageResult;
    static decodeDelimited(reader: any): MinosDecryptAndVerifyMessageResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosDecryptAndVerifyMessageResult;
    static toObject(message: MinosDecryptAndVerifyMessageResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosDecryptAndVerifyMessageSuccess { [key: string]: any }
  class MinosDecryptAndVerifyMessageSuccess implements IMinosDecryptAndVerifyMessageSuccess {
    [key: string]: any;
    constructor(properties?: IMinosDecryptAndVerifyMessageSuccess);
    static create(properties?: IMinosDecryptAndVerifyMessageSuccess): MinosDecryptAndVerifyMessageSuccess;
    static encode(message: IMinosDecryptAndVerifyMessageSuccess, writer?: any): any;
    static encodeDelimited(message: IMinosDecryptAndVerifyMessageSuccess, writer?: any): any;
    static decode(reader: any, length?: number): MinosDecryptAndVerifyMessageSuccess;
    static decodeDelimited(reader: any): MinosDecryptAndVerifyMessageSuccess;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosDecryptAndVerifyMessageSuccess;
    static toObject(message: MinosDecryptAndVerifyMessageSuccess, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosEncryptAndSignMessageInput { [key: string]: any }
  class MinosEncryptAndSignMessageInput implements IMinosEncryptAndSignMessageInput {
    [key: string]: any;
    constructor(properties?: IMinosEncryptAndSignMessageInput);
    static create(properties?: IMinosEncryptAndSignMessageInput): MinosEncryptAndSignMessageInput;
    static encode(message: IMinosEncryptAndSignMessageInput, writer?: any): any;
    static encodeDelimited(message: IMinosEncryptAndSignMessageInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosEncryptAndSignMessageInput;
    static decodeDelimited(reader: any): MinosEncryptAndSignMessageInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosEncryptAndSignMessageInput;
    static toObject(message: MinosEncryptAndSignMessageInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosEncryptAndSignMessageResult { [key: string]: any }
  class MinosEncryptAndSignMessageResult implements IMinosEncryptAndSignMessageResult {
    [key: string]: any;
    constructor(properties?: IMinosEncryptAndSignMessageResult);
    static create(properties?: IMinosEncryptAndSignMessageResult): MinosEncryptAndSignMessageResult;
    static encode(message: IMinosEncryptAndSignMessageResult, writer?: any): any;
    static encodeDelimited(message: IMinosEncryptAndSignMessageResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosEncryptAndSignMessageResult;
    static decodeDelimited(reader: any): MinosEncryptAndSignMessageResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosEncryptAndSignMessageResult;
    static toObject(message: MinosEncryptAndSignMessageResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosMessageMetadata { [key: string]: any }
  class MinosMessageMetadata implements IMinosMessageMetadata {
    [key: string]: any;
    constructor(properties?: IMinosMessageMetadata);
    static create(properties?: IMinosMessageMetadata): MinosMessageMetadata;
    static encode(message: IMinosMessageMetadata, writer?: any): any;
    static encodeDelimited(message: IMinosMessageMetadata, writer?: any): any;
    static decode(reader: any, length?: number): MinosMessageMetadata;
    static decodeDelimited(reader: any): MinosMessageMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosMessageMetadata;
    static toObject(message: MinosMessageMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosOpenEpochInput { [key: string]: any }
  class MinosOpenEpochInput implements IMinosOpenEpochInput {
    [key: string]: any;
    constructor(properties?: IMinosOpenEpochInput);
    static create(properties?: IMinosOpenEpochInput): MinosOpenEpochInput;
    static encode(message: IMinosOpenEpochInput, writer?: any): any;
    static encodeDelimited(message: IMinosOpenEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosOpenEpochInput;
    static decodeDelimited(reader: any): MinosOpenEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosOpenEpochInput;
    static toObject(message: MinosOpenEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosOpenEpochResult { [key: string]: any }
  class MinosOpenEpochResult implements IMinosOpenEpochResult {
    [key: string]: any;
    constructor(properties?: IMinosOpenEpochResult);
    static create(properties?: IMinosOpenEpochResult): MinosOpenEpochResult;
    static encode(message: IMinosOpenEpochResult, writer?: any): any;
    static encodeDelimited(message: IMinosOpenEpochResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosOpenEpochResult;
    static decodeDelimited(reader: any): MinosOpenEpochResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosOpenEpochResult;
    static toObject(message: MinosOpenEpochResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosOpenInitialEpochInput { [key: string]: any }
  class MinosOpenInitialEpochInput implements IMinosOpenInitialEpochInput {
    [key: string]: any;
    constructor(properties?: IMinosOpenInitialEpochInput);
    static create(properties?: IMinosOpenInitialEpochInput): MinosOpenInitialEpochInput;
    static encode(message: IMinosOpenInitialEpochInput, writer?: any): any;
    static encodeDelimited(message: IMinosOpenInitialEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosOpenInitialEpochInput;
    static decodeDelimited(reader: any): MinosOpenInitialEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosOpenInitialEpochInput;
    static toObject(message: MinosOpenInitialEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosOpenInitialEpochResult { [key: string]: any }
  class MinosOpenInitialEpochResult implements IMinosOpenInitialEpochResult {
    [key: string]: any;
    constructor(properties?: IMinosOpenInitialEpochResult);
    static create(properties?: IMinosOpenInitialEpochResult): MinosOpenInitialEpochResult;
    static encode(message: IMinosOpenInitialEpochResult, writer?: any): any;
    static encodeDelimited(message: IMinosOpenInitialEpochResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosOpenInitialEpochResult;
    static decodeDelimited(reader: any): MinosOpenInitialEpochResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosOpenInitialEpochResult;
    static toObject(message: MinosOpenInitialEpochResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosSignedEpoch { [key: string]: any }
  class MinosSignedEpoch implements IMinosSignedEpoch {
    [key: string]: any;
    constructor(properties?: IMinosSignedEpoch);
    static create(properties?: IMinosSignedEpoch): MinosSignedEpoch;
    static encode(message: IMinosSignedEpoch, writer?: any): any;
    static encodeDelimited(message: IMinosSignedEpoch, writer?: any): any;
    static decode(reader: any, length?: number): MinosSignedEpoch;
    static decodeDelimited(reader: any): MinosSignedEpoch;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosSignedEpoch;
    static toObject(message: MinosSignedEpoch, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosThreadIdFromActThreadIdInput { [key: string]: any }
  class MinosThreadIdFromActThreadIdInput implements IMinosThreadIdFromActThreadIdInput {
    [key: string]: any;
    constructor(properties?: IMinosThreadIdFromActThreadIdInput);
    static create(properties?: IMinosThreadIdFromActThreadIdInput): MinosThreadIdFromActThreadIdInput;
    static encode(message: IMinosThreadIdFromActThreadIdInput, writer?: any): any;
    static encodeDelimited(message: IMinosThreadIdFromActThreadIdInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosThreadIdFromActThreadIdInput;
    static decodeDelimited(reader: any): MinosThreadIdFromActThreadIdInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosThreadIdFromActThreadIdInput;
    static toObject(message: MinosThreadIdFromActThreadIdInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosThreadIdFromActThreadIdResult { [key: string]: any }
  class MinosThreadIdFromActThreadIdResult implements IMinosThreadIdFromActThreadIdResult {
    [key: string]: any;
    constructor(properties?: IMinosThreadIdFromActThreadIdResult);
    static create(properties?: IMinosThreadIdFromActThreadIdResult): MinosThreadIdFromActThreadIdResult;
    static encode(message: IMinosThreadIdFromActThreadIdResult, writer?: any): any;
    static encodeDelimited(message: IMinosThreadIdFromActThreadIdResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosThreadIdFromActThreadIdResult;
    static decodeDelimited(reader: any): MinosThreadIdFromActThreadIdResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosThreadIdFromActThreadIdResult;
    static toObject(message: MinosThreadIdFromActThreadIdResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosThreadIdFromOneToOneThreadInput { [key: string]: any }
  class MinosThreadIdFromOneToOneThreadInput implements IMinosThreadIdFromOneToOneThreadInput {
    [key: string]: any;
    constructor(properties?: IMinosThreadIdFromOneToOneThreadInput);
    static create(properties?: IMinosThreadIdFromOneToOneThreadInput): MinosThreadIdFromOneToOneThreadInput;
    static encode(message: IMinosThreadIdFromOneToOneThreadInput, writer?: any): any;
    static encodeDelimited(message: IMinosThreadIdFromOneToOneThreadInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosThreadIdFromOneToOneThreadInput;
    static decodeDelimited(reader: any): MinosThreadIdFromOneToOneThreadInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosThreadIdFromOneToOneThreadInput;
    static toObject(message: MinosThreadIdFromOneToOneThreadInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosThreadIdFromOneToOneThreadResult { [key: string]: any }
  class MinosThreadIdFromOneToOneThreadResult implements IMinosThreadIdFromOneToOneThreadResult {
    [key: string]: any;
    constructor(properties?: IMinosThreadIdFromOneToOneThreadResult);
    static create(properties?: IMinosThreadIdFromOneToOneThreadResult): MinosThreadIdFromOneToOneThreadResult;
    static encode(message: IMinosThreadIdFromOneToOneThreadResult, writer?: any): any;
    static encodeDelimited(message: IMinosThreadIdFromOneToOneThreadResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosThreadIdFromOneToOneThreadResult;
    static decodeDelimited(reader: any): MinosThreadIdFromOneToOneThreadResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosThreadIdFromOneToOneThreadResult;
    static toObject(message: MinosThreadIdFromOneToOneThreadResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosValidateEpochInput { [key: string]: any }
  class MinosValidateEpochInput implements IMinosValidateEpochInput {
    [key: string]: any;
    constructor(properties?: IMinosValidateEpochInput);
    static create(properties?: IMinosValidateEpochInput): MinosValidateEpochInput;
    static encode(message: IMinosValidateEpochInput, writer?: any): any;
    static encodeDelimited(message: IMinosValidateEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosValidateEpochInput;
    static decodeDelimited(reader: any): MinosValidateEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosValidateEpochInput;
    static toObject(message: MinosValidateEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosValidateEpochResult { [key: string]: any }
  class MinosValidateEpochResult implements IMinosValidateEpochResult {
    [key: string]: any;
    constructor(properties?: IMinosValidateEpochResult);
    static create(properties?: IMinosValidateEpochResult): MinosValidateEpochResult;
    static encode(message: IMinosValidateEpochResult, writer?: any): any;
    static encodeDelimited(message: IMinosValidateEpochResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosValidateEpochResult;
    static decodeDelimited(reader: any): MinosValidateEpochResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosValidateEpochResult;
    static toObject(message: MinosValidateEpochResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosVerifySingleEpochInput { [key: string]: any }
  class MinosVerifySingleEpochInput implements IMinosVerifySingleEpochInput {
    [key: string]: any;
    constructor(properties?: IMinosVerifySingleEpochInput);
    static create(properties?: IMinosVerifySingleEpochInput): MinosVerifySingleEpochInput;
    static encode(message: IMinosVerifySingleEpochInput, writer?: any): any;
    static encodeDelimited(message: IMinosVerifySingleEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): MinosVerifySingleEpochInput;
    static decodeDelimited(reader: any): MinosVerifySingleEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosVerifySingleEpochInput;
    static toObject(message: MinosVerifySingleEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMinosVerifySingleEpochResult { [key: string]: any }
  class MinosVerifySingleEpochResult implements IMinosVerifySingleEpochResult {
    [key: string]: any;
    constructor(properties?: IMinosVerifySingleEpochResult);
    static create(properties?: IMinosVerifySingleEpochResult): MinosVerifySingleEpochResult;
    static encode(message: IMinosVerifySingleEpochResult, writer?: any): any;
    static encodeDelimited(message: IMinosVerifySingleEpochResult, writer?: any): any;
    static decode(reader: any, length?: number): MinosVerifySingleEpochResult;
    static decodeDelimited(reader: any): MinosVerifySingleEpochResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MinosVerifySingleEpochResult;
    static toObject(message: MinosVerifySingleEpochResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMmkDistribution { [key: string]: any }
  class MmkDistribution implements IMmkDistribution {
    [key: string]: any;
    constructor(properties?: IMmkDistribution);
    static create(properties?: IMmkDistribution): MmkDistribution;
    static encode(message: IMmkDistribution, writer?: any): any;
    static encodeDelimited(message: IMmkDistribution, writer?: any): any;
    static decode(reader: any, length?: number): MmkDistribution;
    static decodeDelimited(reader: any): MmkDistribution;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MmkDistribution;
    static toObject(message: MmkDistribution, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMmkDistributionToDetachedDevice { [key: string]: any }
  class MmkDistributionToDetachedDevice implements IMmkDistributionToDetachedDevice {
    [key: string]: any;
    constructor(properties?: IMmkDistributionToDetachedDevice);
    static create(properties?: IMmkDistributionToDetachedDevice): MmkDistributionToDetachedDevice;
    static encode(message: IMmkDistributionToDetachedDevice, writer?: any): any;
    static encodeDelimited(message: IMmkDistributionToDetachedDevice, writer?: any): any;
    static decode(reader: any, length?: number): MmkDistributionToDetachedDevice;
    static decodeDelimited(reader: any): MmkDistributionToDetachedDevice;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MmkDistributionToDetachedDevice;
    static toObject(message: MmkDistributionToDetachedDevice, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMmkDistributionToMailbox { [key: string]: any }
  class MmkDistributionToMailbox implements IMmkDistributionToMailbox {
    [key: string]: any;
    constructor(properties?: IMmkDistributionToMailbox);
    static create(properties?: IMmkDistributionToMailbox): MmkDistributionToMailbox;
    static encode(message: IMmkDistributionToMailbox, writer?: any): any;
    static encodeDelimited(message: IMmkDistributionToMailbox, writer?: any): any;
    static decode(reader: any, length?: number): MmkDistributionToMailbox;
    static decodeDelimited(reader: any): MmkDistributionToMailbox;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MmkDistributionToMailbox;
    static toObject(message: MmkDistributionToMailbox, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMmkFromDetachedDevice { [key: string]: any }
  class MmkFromDetachedDevice implements IMmkFromDetachedDevice {
    [key: string]: any;
    constructor(properties?: IMmkFromDetachedDevice);
    static create(properties?: IMmkFromDetachedDevice): MmkFromDetachedDevice;
    static encode(message: IMmkFromDetachedDevice, writer?: any): any;
    static encodeDelimited(message: IMmkFromDetachedDevice, writer?: any): any;
    static decode(reader: any, length?: number): MmkFromDetachedDevice;
    static decodeDelimited(reader: any): MmkFromDetachedDevice;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MmkFromDetachedDevice;
    static toObject(message: MmkFromDetachedDevice, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMoney { [key: string]: any }
  class Money implements IMoney {
    [key: string]: any;
    constructor(properties?: IMoney);
    static create(properties?: IMoney): Money;
    static encode(message: IMoney, writer?: any): any;
    static encodeDelimited(message: IMoney, writer?: any): any;
    static decode(reader: any, length?: number): Money;
    static decodeDelimited(reader: any): Money;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Money;
    static toObject(message: Money, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IMsgOpaqueData { [key: string]: any }
  class MsgOpaqueData implements IMsgOpaqueData {
    [key: string]: any;
    constructor(properties?: IMsgOpaqueData);
    static create(properties?: IMsgOpaqueData): MsgOpaqueData;
    static encode(message: IMsgOpaqueData, writer?: any): any;
    static encodeDelimited(message: IMsgOpaqueData, writer?: any): any;
    static decode(reader: any, length?: number): MsgOpaqueData;
    static decodeDelimited(reader: any): MsgOpaqueData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MsgOpaqueData;
    static toObject(message: MsgOpaqueData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace MsgOpaqueData {
    interface IEventLocation { [key: string]: any }
    class EventLocation implements IEventLocation {
      [key: string]: any;
      constructor(properties?: IEventLocation);
      static create(properties?: IEventLocation): EventLocation;
      static encode(message: IEventLocation, writer?: any): any;
      static encodeDelimited(message: IEventLocation, writer?: any): any;
      static decode(reader: any, length?: number): EventLocation;
      static decodeDelimited(reader: any): EventLocation;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): EventLocation;
      static toObject(message: EventLocation, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum PollContentType {
      UNKNOWN = 0,
      TEXT = 1,
      IMAGE = 2,
    }
    interface IPollOption { [key: string]: any }
    class PollOption implements IPollOption {
      [key: string]: any;
      constructor(properties?: IPollOption);
      static create(properties?: IPollOption): PollOption;
      static encode(message: IPollOption, writer?: any): any;
      static encodeDelimited(message: IPollOption, writer?: any): any;
      static decode(reader: any, length?: number): PollOption;
      static decodeDelimited(reader: any): PollOption;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollOption;
      static toObject(message: PollOption, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum PollType {
      POLL = 0,
      QUIZ = 1,
    }
    interface IPollVoteSnapshot { [key: string]: any }
    class PollVoteSnapshot implements IPollVoteSnapshot {
      [key: string]: any;
      constructor(properties?: IPollVoteSnapshot);
      static create(properties?: IPollVoteSnapshot): PollVoteSnapshot;
      static encode(message: IPollVoteSnapshot, writer?: any): any;
      static encodeDelimited(message: IPollVoteSnapshot, writer?: any): any;
      static decode(reader: any, length?: number): PollVoteSnapshot;
      static decodeDelimited(reader: any): PollVoteSnapshot;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollVoteSnapshot;
      static toObject(message: PollVoteSnapshot, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPollVotesSnapshot { [key: string]: any }
    class PollVotesSnapshot implements IPollVotesSnapshot {
      [key: string]: any;
      constructor(properties?: IPollVotesSnapshot);
      static create(properties?: IPollVotesSnapshot): PollVotesSnapshot;
      static encode(message: IPollVotesSnapshot, writer?: any): any;
      static encodeDelimited(message: IPollVotesSnapshot, writer?: any): any;
      static decode(reader: any, length?: number): PollVotesSnapshot;
      static decodeDelimited(reader: any): PollVotesSnapshot;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollVotesSnapshot;
      static toObject(message: PollVotesSnapshot, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IMsgRowOpaqueData { [key: string]: any }
  class MsgRowOpaqueData implements IMsgRowOpaqueData {
    [key: string]: any;
    constructor(properties?: IMsgRowOpaqueData);
    static create(properties?: IMsgRowOpaqueData): MsgRowOpaqueData;
    static encode(message: IMsgRowOpaqueData, writer?: any): any;
    static encodeDelimited(message: IMsgRowOpaqueData, writer?: any): any;
    static decode(reader: any, length?: number): MsgRowOpaqueData;
    static decodeDelimited(reader: any): MsgRowOpaqueData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): MsgRowOpaqueData;
    static toObject(message: MsgRowOpaqueData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum MutationProps {
    STAR_ACTION = 2,
    CONTACT_ACTION = 3,
    MUTE_ACTION = 4,
    PIN_ACTION = 5,
    SECURITY_NOTIFICATION_SETTING = 6,
    PUSH_NAME_SETTING = 7,
    QUICK_REPLY_ACTION = 8,
    RECENT_EMOJI_WEIGHTS_ACTION = 11,
    LABEL_MESSAGE_ACTION = 13,
    LABEL_EDIT_ACTION = 14,
    LABEL_ASSOCIATION_ACTION = 15,
    LOCALE_SETTING = 16,
    ARCHIVE_CHAT_ACTION = 17,
    DELETE_MESSAGE_FOR_ME_ACTION = 18,
    KEY_EXPIRATION = 19,
    MARK_CHAT_AS_READ_ACTION = 20,
    CLEAR_CHAT_ACTION = 21,
    DELETE_CHAT_ACTION = 22,
    UNARCHIVE_CHATS_SETTING = 23,
    PRIMARY_FEATURE = 24,
    ANDROID_UNSUPPORTED_ACTIONS = 26,
    AGENT_ACTION = 27,
    SUBSCRIPTION_ACTION = 28,
    USER_STATUS_MUTE_ACTION = 29,
    TIME_FORMAT_ACTION = 30,
    NUX_ACTION = 31,
    PRIMARY_VERSION_ACTION = 32,
    STICKER_ACTION = 33,
    REMOVE_RECENT_STICKER_ACTION = 34,
    CHAT_ASSIGNMENT = 35,
    CHAT_ASSIGNMENT_OPENED_STATUS = 36,
    PN_FOR_LID_CHAT_ACTION = 37,
    MARKETING_MESSAGE_ACTION = 38,
    MARKETING_MESSAGE_BROADCAST_ACTION = 39,
    EXTERNAL_WEB_BETA_ACTION = 40,
    PRIVACY_SETTING_RELAY_ALL_CALLS = 41,
    CALL_LOG_ACTION = 42,
    UGC_BOT = 43,
    STATUS_PRIVACY = 44,
    BOT_WELCOME_REQUEST_ACTION = 45,
    DELETE_INDIVIDUAL_CALL_LOG = 46,
    LABEL_REORDERING_ACTION = 47,
    PAYMENT_INFO_ACTION = 48,
    CUSTOM_PAYMENT_METHODS_ACTION = 49,
    LOCK_CHAT_ACTION = 50,
    CHAT_LOCK_SETTINGS = 51,
    WAMO_USER_IDENTIFIER_ACTION = 52,
    PRIVACY_SETTING_DISABLE_LINK_PREVIEWS_ACTION = 53,
    DEVICE_CAPABILITIES = 54,
    NOTE_EDIT_ACTION = 55,
    FAVORITES_ACTION = 56,
    MERCHANT_PAYMENT_PARTNER_ACTION = 57,
    WAFFLE_ACCOUNT_LINK_STATE_ACTION = 58,
    USERNAME_CHAT_START_MODE = 59,
    NOTIFICATION_ACTIVITY_SETTING_ACTION = 60,
    LID_CONTACT_ACTION = 61,
    CTWA_PER_CUSTOMER_DATA_SHARING_ACTION = 62,
    PAYMENT_TOS_ACTION = 63,
    PRIVACY_SETTING_CHANNELS_PERSONALISED_RECOMMENDATION_ACTION = 64,
    BUSINESS_BROADCAST_ASSOCIATION_ACTION = 65,
    DETECTED_OUTCOMES_STATUS_ACTION = 66,
    MAIBA_AI_FEATURES_CONTROL_ACTION = 68,
    BUSINESS_BROADCAST_LIST_ACTION = 69,
    MUSIC_USER_ID_ACTION = 70,
    STATUS_POST_OPT_IN_NOTIFICATION_PREFERENCES_ACTION = 71,
    AVATAR_UPDATED_ACTION = 72,
    GALAXY_FLOW_ACTION = 73,
    PRIVATE_PROCESSING_SETTING_ACTION = 74,
    NEWSLETTER_SAVED_INTERESTS_ACTION = 75,
    AI_THREAD_RENAME_ACTION = 76,
    INTERACTIVE_MESSAGE_ACTION = 77,
    SETTINGS_SYNC_ACTION = 78,
    OUT_CONTACT_ACTION = 79,
    NCT_SALT_SYNC_ACTION = 80,
    BUSINESS_BROADCAST_CAMPAIGN_ACTION = 81,
    BUSINESS_BROADCAST_INSIGHTS_ACTION = 82,
    CUSTOMER_DATA_ACTION = 83,
    SUBSCRIPTIONS_SYNC_V2_ACTION = 84,
    THREAD_PIN_ACTION = 85,
    AUTO_ORGANIZE_BUSINESS_CHAT_SETTING = 86,
    BIZ_AI_SETTINGS_NUDGE_ACTION = 87,
    COEX_V2_VERSION_ACTION = 88,
    WASA_ROOT_SECRET_ACTION = 89,
    BUBBLE_LOCK_MESSAGE_ACTION = 90,
    LABEL_SUBLIST_ACTION = 91,
    DEVICE_CAPABILITIES_V2 = 92,
    CTWA_MESSAGE_RECEIVED_ACTION = 93,
    SHARE_OWN_PN = 10001,
    BUSINESS_BROADCAST_ACTION = 10002,
    AI_THREAD_DELETE_ACTION = 10003,
  }
  interface INoiseCertificate { [key: string]: any }
  class NoiseCertificate implements INoiseCertificate {
    [key: string]: any;
    constructor(properties?: INoiseCertificate);
    static create(properties?: INoiseCertificate): NoiseCertificate;
    static encode(message: INoiseCertificate, writer?: any): any;
    static encodeDelimited(message: INoiseCertificate, writer?: any): any;
    static decode(reader: any, length?: number): NoiseCertificate;
    static decodeDelimited(reader: any): NoiseCertificate;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): NoiseCertificate;
    static toObject(message: NoiseCertificate, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace NoiseCertificate {
    interface IDetails { [key: string]: any }
    class Details implements IDetails {
      [key: string]: any;
      constructor(properties?: IDetails);
      static create(properties?: IDetails): Details;
      static encode(message: IDetails, writer?: any): any;
      static encodeDelimited(message: IDetails, writer?: any): any;
      static decode(reader: any, length?: number): Details;
      static decodeDelimited(reader: any): Details;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Details;
      static toObject(message: Details, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface INonE2EEAttestation { [key: string]: any }
  class NonE2EEAttestation implements INonE2EEAttestation {
    [key: string]: any;
    constructor(properties?: INonE2EEAttestation);
    static create(properties?: INonE2EEAttestation): NonE2EEAttestation;
    static encode(message: INonE2EEAttestation, writer?: any): any;
    static encodeDelimited(message: INonE2EEAttestation, writer?: any): any;
    static decode(reader: any, length?: number): NonE2EEAttestation;
    static decodeDelimited(reader: any): NonE2EEAttestation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): NonE2EEAttestation;
    static toObject(message: NonE2EEAttestation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace NonE2EEAttestation {
    enum AccountType {
      E2EE = 0,
      HYBRID_E2EE = 1,
      NON_E2EE = 2,
    }
  }
  interface INotificationMessageInfo { [key: string]: any }
  class NotificationMessageInfo implements INotificationMessageInfo {
    [key: string]: any;
    constructor(properties?: INotificationMessageInfo);
    static create(properties?: INotificationMessageInfo): NotificationMessageInfo;
    static encode(message: INotificationMessageInfo, writer?: any): any;
    static encodeDelimited(message: INotificationMessageInfo, writer?: any): any;
    static decode(reader: any, length?: number): NotificationMessageInfo;
    static decodeDelimited(reader: any): NotificationMessageInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): NotificationMessageInfo;
    static toObject(message: NotificationMessageInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface INotificationSettings { [key: string]: any }
  class NotificationSettings implements INotificationSettings {
    [key: string]: any;
    constructor(properties?: INotificationSettings);
    static create(properties?: INotificationSettings): NotificationSettings;
    static encode(message: INotificationSettings, writer?: any): any;
    static encodeDelimited(message: INotificationSettings, writer?: any): any;
    static decode(reader: any, length?: number): NotificationSettings;
    static decodeDelimited(reader: any): NotificationSettings;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): NotificationSettings;
    static toObject(message: NotificationSettings, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IOrfThreadIdInput { [key: string]: any }
  class OrfThreadIdInput implements IOrfThreadIdInput {
    [key: string]: any;
    constructor(properties?: IOrfThreadIdInput);
    static create(properties?: IOrfThreadIdInput): OrfThreadIdInput;
    static encode(message: IOrfThreadIdInput, writer?: any): any;
    static encodeDelimited(message: IOrfThreadIdInput, writer?: any): any;
    static decode(reader: any, length?: number): OrfThreadIdInput;
    static decodeDelimited(reader: any): OrfThreadIdInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): OrfThreadIdInput;
    static toObject(message: OrfThreadIdInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IOrfThreadIdOutput { [key: string]: any }
  class OrfThreadIdOutput implements IOrfThreadIdOutput {
    [key: string]: any;
    constructor(properties?: IOrfThreadIdOutput);
    static create(properties?: IOrfThreadIdOutput): OrfThreadIdOutput;
    static encode(message: IOrfThreadIdOutput, writer?: any): any;
    static encodeDelimited(message: IOrfThreadIdOutput, writer?: any): any;
    static decode(reader: any, length?: number): OrfThreadIdOutput;
    static decodeDelimited(reader: any): OrfThreadIdOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): OrfThreadIdOutput;
    static toObject(message: OrfThreadIdOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPairingRequest { [key: string]: any }
  class PairingRequest implements IPairingRequest {
    [key: string]: any;
    constructor(properties?: IPairingRequest);
    static create(properties?: IPairingRequest): PairingRequest;
    static encode(message: IPairingRequest, writer?: any): any;
    static encodeDelimited(message: IPairingRequest, writer?: any): any;
    static decode(reader: any, length?: number): PairingRequest;
    static decodeDelimited(reader: any): PairingRequest;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PairingRequest;
    static toObject(message: PairingRequest, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPastParticipant { [key: string]: any }
  class PastParticipant implements IPastParticipant {
    [key: string]: any;
    constructor(properties?: IPastParticipant);
    static create(properties?: IPastParticipant): PastParticipant;
    static encode(message: IPastParticipant, writer?: any): any;
    static encodeDelimited(message: IPastParticipant, writer?: any): any;
    static decode(reader: any, length?: number): PastParticipant;
    static decodeDelimited(reader: any): PastParticipant;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PastParticipant;
    static toObject(message: PastParticipant, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace PastParticipant {
    enum LeaveReason {
      LEFT = 0,
      REMOVED = 1,
    }
  }
  interface IPastParticipants { [key: string]: any }
  class PastParticipants implements IPastParticipants {
    [key: string]: any;
    constructor(properties?: IPastParticipants);
    static create(properties?: IPastParticipants): PastParticipants;
    static encode(message: IPastParticipants, writer?: any): any;
    static encodeDelimited(message: IPastParticipants, writer?: any): any;
    static decode(reader: any, length?: number): PastParticipants;
    static decodeDelimited(reader: any): PastParticipants;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PastParticipants;
    static toObject(message: PastParticipants, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPatchDebugData { [key: string]: any }
  class PatchDebugData implements IPatchDebugData {
    [key: string]: any;
    constructor(properties?: IPatchDebugData);
    static create(properties?: IPatchDebugData): PatchDebugData;
    static encode(message: IPatchDebugData, writer?: any): any;
    static encodeDelimited(message: IPatchDebugData, writer?: any): any;
    static decode(reader: any, length?: number): PatchDebugData;
    static decodeDelimited(reader: any): PatchDebugData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PatchDebugData;
    static toObject(message: PatchDebugData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace PatchDebugData {
    enum Platform {
      ANDROID = 0,
      SMBA = 1,
      IPHONE = 2,
      SMBI = 3,
      WEB = 4,
      UWP = 5,
      DARWIN = 6,
      IPAD = 7,
      WEAROS = 8,
      WASG = 9,
      WEARM = 10,
      CAPI = 11,
    }
  }
  interface IPaymentBackground { [key: string]: any }
  class PaymentBackground implements IPaymentBackground {
    [key: string]: any;
    constructor(properties?: IPaymentBackground);
    static create(properties?: IPaymentBackground): PaymentBackground;
    static encode(message: IPaymentBackground, writer?: any): any;
    static encodeDelimited(message: IPaymentBackground, writer?: any): any;
    static decode(reader: any, length?: number): PaymentBackground;
    static decodeDelimited(reader: any): PaymentBackground;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PaymentBackground;
    static toObject(message: PaymentBackground, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace PaymentBackground {
    interface IMediaData { [key: string]: any }
    class MediaData implements IMediaData {
      [key: string]: any;
      constructor(properties?: IMediaData);
      static create(properties?: IMediaData): MediaData;
      static encode(message: IMediaData, writer?: any): any;
      static encodeDelimited(message: IMediaData, writer?: any): any;
      static decode(reader: any, length?: number): MediaData;
      static decodeDelimited(reader: any): MediaData;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MediaData;
      static toObject(message: MediaData, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum Type {
      UNKNOWN = 0,
      DEFAULT = 1,
    }
  }
  interface IPaymentInfo { [key: string]: any }
  class PaymentInfo implements IPaymentInfo {
    [key: string]: any;
    constructor(properties?: IPaymentInfo);
    static create(properties?: IPaymentInfo): PaymentInfo;
    static encode(message: IPaymentInfo, writer?: any): any;
    static encodeDelimited(message: IPaymentInfo, writer?: any): any;
    static decode(reader: any, length?: number): PaymentInfo;
    static decodeDelimited(reader: any): PaymentInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PaymentInfo;
    static toObject(message: PaymentInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace PaymentInfo {
    enum Currency {
      UNKNOWN_CURRENCY = 0,
      INR = 1,
    }
    enum Status {
      UNKNOWN_STATUS = 0,
      PROCESSING = 1,
      SENT = 2,
      NEED_TO_ACCEPT = 3,
      COMPLETE = 4,
      COULD_NOT_COMPLETE = 5,
      REFUNDED = 6,
      EXPIRED = 7,
      REJECTED = 8,
      CANCELLED = 9,
      WAITING_FOR_PAYER = 10,
      WAITING = 11,
    }
    enum TxnStatus {
      UNKNOWN = 0,
      PENDING_SETUP = 1,
      PENDING_RECEIVER_SETUP = 2,
      INIT = 3,
      SUCCESS = 4,
      COMPLETED = 5,
      FAILED = 6,
      FAILED_RISK = 7,
      FAILED_PROCESSING = 8,
      FAILED_RECEIVER_PROCESSING = 9,
      FAILED_DA = 10,
      FAILED_DA_FINAL = 11,
      REFUNDED_TXN = 12,
      REFUND_FAILED = 13,
      REFUND_FAILED_PROCESSING = 14,
      REFUND_FAILED_DA = 15,
      EXPIRED_TXN = 16,
      AUTH_CANCELED = 17,
      AUTH_CANCEL_FAILED_PROCESSING = 18,
      AUTH_CANCEL_FAILED = 19,
      COLLECT_INIT = 20,
      COLLECT_SUCCESS = 21,
      COLLECT_FAILED = 22,
      COLLECT_FAILED_RISK = 23,
      COLLECT_REJECTED = 24,
      COLLECT_EXPIRED = 25,
      COLLECT_CANCELED = 26,
      COLLECT_CANCELLING = 27,
      IN_REVIEW = 28,
      REVERSAL_SUCCESS = 29,
      REVERSAL_PENDING = 30,
      REFUND_PENDING = 31,
    }
  }
  interface IPhoneNumberToLIDMapping { [key: string]: any }
  class PhoneNumberToLIDMapping implements IPhoneNumberToLIDMapping {
    [key: string]: any;
    constructor(properties?: IPhoneNumberToLIDMapping);
    static create(properties?: IPhoneNumberToLIDMapping): PhoneNumberToLIDMapping;
    static encode(message: IPhoneNumberToLIDMapping, writer?: any): any;
    static encodeDelimited(message: IPhoneNumberToLIDMapping, writer?: any): any;
    static decode(reader: any, length?: number): PhoneNumberToLIDMapping;
    static decodeDelimited(reader: any): PhoneNumberToLIDMapping;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PhoneNumberToLIDMapping;
    static toObject(message: PhoneNumberToLIDMapping, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPhotoChange { [key: string]: any }
  class PhotoChange implements IPhotoChange {
    [key: string]: any;
    constructor(properties?: IPhotoChange);
    static create(properties?: IPhotoChange): PhotoChange;
    static encode(message: IPhotoChange, writer?: any): any;
    static encodeDelimited(message: IPhotoChange, writer?: any): any;
    static decode(reader: any, length?: number): PhotoChange;
    static decodeDelimited(reader: any): PhotoChange;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PhotoChange;
    static toObject(message: PhotoChange, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPinInChat { [key: string]: any }
  class PinInChat implements IPinInChat {
    [key: string]: any;
    constructor(properties?: IPinInChat);
    static create(properties?: IPinInChat): PinInChat;
    static encode(message: IPinInChat, writer?: any): any;
    static encodeDelimited(message: IPinInChat, writer?: any): any;
    static decode(reader: any, length?: number): PinInChat;
    static decodeDelimited(reader: any): PinInChat;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PinInChat;
    static toObject(message: PinInChat, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace PinInChat {
    enum Type {
      UNKNOWN_TYPE = 0,
      PIN_FOR_ALL = 1,
      UNPIN_FOR_ALL = 2,
    }
  }
  interface IPoint { [key: string]: any }
  class Point implements IPoint {
    [key: string]: any;
    constructor(properties?: IPoint);
    static create(properties?: IPoint): Point;
    static encode(message: IPoint, writer?: any): any;
    static encodeDelimited(message: IPoint, writer?: any): any;
    static decode(reader: any, length?: number): Point;
    static decodeDelimited(reader: any): Point;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Point;
    static toObject(message: Point, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPollAdditionalMetadata { [key: string]: any }
  class PollAdditionalMetadata implements IPollAdditionalMetadata {
    [key: string]: any;
    constructor(properties?: IPollAdditionalMetadata);
    static create(properties?: IPollAdditionalMetadata): PollAdditionalMetadata;
    static encode(message: IPollAdditionalMetadata, writer?: any): any;
    static encodeDelimited(message: IPollAdditionalMetadata, writer?: any): any;
    static decode(reader: any, length?: number): PollAdditionalMetadata;
    static decodeDelimited(reader: any): PollAdditionalMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PollAdditionalMetadata;
    static toObject(message: PollAdditionalMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace PollAdditionalMetadata {
    interface IPollNameHashHistoryEntry { [key: string]: any }
    class PollNameHashHistoryEntry implements IPollNameHashHistoryEntry {
      [key: string]: any;
      constructor(properties?: IPollNameHashHistoryEntry);
      static create(properties?: IPollNameHashHistoryEntry): PollNameHashHistoryEntry;
      static encode(message: IPollNameHashHistoryEntry, writer?: any): any;
      static encodeDelimited(message: IPollNameHashHistoryEntry, writer?: any): any;
      static decode(reader: any, length?: number): PollNameHashHistoryEntry;
      static decodeDelimited(reader: any): PollNameHashHistoryEntry;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PollNameHashHistoryEntry;
      static toObject(message: PollNameHashHistoryEntry, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IPollEncValue { [key: string]: any }
  class PollEncValue implements IPollEncValue {
    [key: string]: any;
    constructor(properties?: IPollEncValue);
    static create(properties?: IPollEncValue): PollEncValue;
    static encode(message: IPollEncValue, writer?: any): any;
    static encodeDelimited(message: IPollEncValue, writer?: any): any;
    static decode(reader: any, length?: number): PollEncValue;
    static decodeDelimited(reader: any): PollEncValue;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PollEncValue;
    static toObject(message: PollEncValue, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPollUpdate { [key: string]: any }
  class PollUpdate implements IPollUpdate {
    [key: string]: any;
    constructor(properties?: IPollUpdate);
    static create(properties?: IPollUpdate): PollUpdate;
    static encode(message: IPollUpdate, writer?: any): any;
    static encodeDelimited(message: IPollUpdate, writer?: any): any;
    static decode(reader: any, length?: number): PollUpdate;
    static decodeDelimited(reader: any): PollUpdate;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PollUpdate;
    static toObject(message: PollUpdate, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPreKeyRecordStructure { [key: string]: any }
  class PreKeyRecordStructure implements IPreKeyRecordStructure {
    [key: string]: any;
    constructor(properties?: IPreKeyRecordStructure);
    static create(properties?: IPreKeyRecordStructure): PreKeyRecordStructure;
    static encode(message: IPreKeyRecordStructure, writer?: any): any;
    static encodeDelimited(message: IPreKeyRecordStructure, writer?: any): any;
    static decode(reader: any, length?: number): PreKeyRecordStructure;
    static decodeDelimited(reader: any): PreKeyRecordStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PreKeyRecordStructure;
    static toObject(message: PreKeyRecordStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPreKeySignalMessage { [key: string]: any }
  class PreKeySignalMessage implements IPreKeySignalMessage {
    [key: string]: any;
    constructor(properties?: IPreKeySignalMessage);
    static create(properties?: IPreKeySignalMessage): PreKeySignalMessage;
    static encode(message: IPreKeySignalMessage, writer?: any): any;
    static encodeDelimited(message: IPreKeySignalMessage, writer?: any): any;
    static decode(reader: any, length?: number): PreKeySignalMessage;
    static decodeDelimited(reader: any): PreKeySignalMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PreKeySignalMessage;
    static toObject(message: PreKeySignalMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPremiumMessageInfo { [key: string]: any }
  class PremiumMessageInfo implements IPremiumMessageInfo {
    [key: string]: any;
    constructor(properties?: IPremiumMessageInfo);
    static create(properties?: IPremiumMessageInfo): PremiumMessageInfo;
    static encode(message: IPremiumMessageInfo, writer?: any): any;
    static encodeDelimited(message: IPremiumMessageInfo, writer?: any): any;
    static decode(reader: any, length?: number): PremiumMessageInfo;
    static decodeDelimited(reader: any): PremiumMessageInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PremiumMessageInfo;
    static toObject(message: PremiumMessageInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPrimaryEphemeralIdentity { [key: string]: any }
  class PrimaryEphemeralIdentity implements IPrimaryEphemeralIdentity {
    [key: string]: any;
    constructor(properties?: IPrimaryEphemeralIdentity);
    static create(properties?: IPrimaryEphemeralIdentity): PrimaryEphemeralIdentity;
    static encode(message: IPrimaryEphemeralIdentity, writer?: any): any;
    static encodeDelimited(message: IPrimaryEphemeralIdentity, writer?: any): any;
    static decode(reader: any, length?: number): PrimaryEphemeralIdentity;
    static decodeDelimited(reader: any): PrimaryEphemeralIdentity;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): PrimaryEphemeralIdentity;
    static toObject(message: PrimaryEphemeralIdentity, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum PrivacySystemMessage {
    E2EE_MSG = 1,
    NE2EE_SELF = 2,
    NE2EE_OTHER = 3,
  }
  interface IProcessedVideo { [key: string]: any }
  class ProcessedVideo implements IProcessedVideo {
    [key: string]: any;
    constructor(properties?: IProcessedVideo);
    static create(properties?: IProcessedVideo): ProcessedVideo;
    static encode(message: IProcessedVideo, writer?: any): any;
    static encodeDelimited(message: IProcessedVideo, writer?: any): any;
    static decode(reader: any, length?: number): ProcessedVideo;
    static decodeDelimited(reader: any): ProcessedVideo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ProcessedVideo;
    static toObject(message: ProcessedVideo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ProcessedVideo {
    enum VideoQuality {
      UNDEFINED = 0,
      LOW = 1,
      MID = 2,
      HIGH = 3,
    }
  }
  interface IProloguePayload { [key: string]: any }
  class ProloguePayload implements IProloguePayload {
    [key: string]: any;
    constructor(properties?: IProloguePayload);
    static create(properties?: IProloguePayload): ProloguePayload;
    static encode(message: IProloguePayload, writer?: any): any;
    static encodeDelimited(message: IProloguePayload, writer?: any): any;
    static decode(reader: any, length?: number): ProloguePayload;
    static decodeDelimited(reader: any): ProloguePayload;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ProloguePayload;
    static toObject(message: ProloguePayload, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IPushname { [key: string]: any }
  class Pushname implements IPushname {
    [key: string]: any;
    constructor(properties?: IPushname);
    static create(properties?: IPushname): Pushname;
    static encode(message: IPushname, writer?: any): any;
    static encodeDelimited(message: IPushname, writer?: any): any;
    static decode(reader: any, length?: number): Pushname;
    static decodeDelimited(reader: any): Pushname;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Pushname;
    static toObject(message: Pushname, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IQP { [key: string]: any }
  class QP implements IQP {
    [key: string]: any;
    constructor(properties?: IQP);
    static create(properties?: IQP): QP;
    static encode(message: IQP, writer?: any): any;
    static encodeDelimited(message: IQP, writer?: any): any;
    static decode(reader: any, length?: number): QP;
    static decodeDelimited(reader: any): QP;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): QP;
    static toObject(message: QP, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace QP {
    enum ClauseType {
      AND = 1,
      OR = 2,
      NOR = 3,
    }
    interface IFilter { [key: string]: any }
    class Filter implements IFilter {
      [key: string]: any;
      constructor(properties?: IFilter);
      static create(properties?: IFilter): Filter;
      static encode(message: IFilter, writer?: any): any;
      static encodeDelimited(message: IFilter, writer?: any): any;
      static decode(reader: any, length?: number): Filter;
      static decodeDelimited(reader: any): Filter;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Filter;
      static toObject(message: Filter, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IFilterClause { [key: string]: any }
    class FilterClause implements IFilterClause {
      [key: string]: any;
      constructor(properties?: IFilterClause);
      static create(properties?: IFilterClause): FilterClause;
      static encode(message: IFilterClause, writer?: any): any;
      static encodeDelimited(message: IFilterClause, writer?: any): any;
      static decode(reader: any, length?: number): FilterClause;
      static decodeDelimited(reader: any): FilterClause;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FilterClause;
      static toObject(message: FilterClause, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum FilterClientNotSupportedConfig {
      PASS_BY_DEFAULT = 1,
      FAIL_BY_DEFAULT = 2,
    }
    interface IFilterParameters { [key: string]: any }
    class FilterParameters implements IFilterParameters {
      [key: string]: any;
      constructor(properties?: IFilterParameters);
      static create(properties?: IFilterParameters): FilterParameters;
      static encode(message: IFilterParameters, writer?: any): any;
      static encodeDelimited(message: IFilterParameters, writer?: any): any;
      static decode(reader: any, length?: number): FilterParameters;
      static decodeDelimited(reader: any): FilterParameters;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FilterParameters;
      static toObject(message: FilterParameters, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum FilterResult {
      TRUE = 1,
      FALSE = 2,
      UNKNOWN = 3,
    }
  }
  interface IQuarantinedMessage { [key: string]: any }
  class QuarantinedMessage implements IQuarantinedMessage {
    [key: string]: any;
    constructor(properties?: IQuarantinedMessage);
    static create(properties?: IQuarantinedMessage): QuarantinedMessage;
    static encode(message: IQuarantinedMessage, writer?: any): any;
    static encodeDelimited(message: IQuarantinedMessage, writer?: any): any;
    static decode(reader: any, length?: number): QuarantinedMessage;
    static decodeDelimited(reader: any): QuarantinedMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): QuarantinedMessage;
    static toObject(message: QuarantinedMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IReaction { [key: string]: any }
  class Reaction implements IReaction {
    [key: string]: any;
    constructor(properties?: IReaction);
    static create(properties?: IReaction): Reaction;
    static encode(message: IReaction, writer?: any): any;
    static encodeDelimited(message: IReaction, writer?: any): any;
    static decode(reader: any, length?: number): Reaction;
    static decodeDelimited(reader: any): Reaction;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Reaction;
    static toObject(message: Reaction, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRecentEmojiWeight { [key: string]: any }
  class RecentEmojiWeight implements IRecentEmojiWeight {
    [key: string]: any;
    constructor(properties?: IRecentEmojiWeight);
    static create(properties?: IRecentEmojiWeight): RecentEmojiWeight;
    static encode(message: IRecentEmojiWeight, writer?: any): any;
    static encodeDelimited(message: IRecentEmojiWeight, writer?: any): any;
    static decode(reader: any, length?: number): RecentEmojiWeight;
    static decodeDelimited(reader: any): RecentEmojiWeight;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RecentEmojiWeight;
    static toObject(message: RecentEmojiWeight, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRecordStructure { [key: string]: any }
  class RecordStructure implements IRecordStructure {
    [key: string]: any;
    constructor(properties?: IRecordStructure);
    static create(properties?: IRecordStructure): RecordStructure;
    static encode(message: IRecordStructure, writer?: any): any;
    static encodeDelimited(message: IRecordStructure, writer?: any): any;
    static decode(reader: any, length?: number): RecordStructure;
    static decodeDelimited(reader: any): RecordStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RecordStructure;
    static toObject(message: RecordStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IReportable { [key: string]: any }
  class Reportable implements IReportable {
    [key: string]: any;
    constructor(properties?: IReportable);
    static create(properties?: IReportable): Reportable;
    static encode(message: IReportable, writer?: any): any;
    static encodeDelimited(message: IReportable, writer?: any): any;
    static decode(reader: any, length?: number): Reportable;
    static decodeDelimited(reader: any): Reportable;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): Reportable;
    static toObject(message: Reportable, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IReportingTokenInfo { [key: string]: any }
  class ReportingTokenInfo implements IReportingTokenInfo {
    [key: string]: any;
    constructor(properties?: IReportingTokenInfo);
    static create(properties?: IReportingTokenInfo): ReportingTokenInfo;
    static encode(message: IReportingTokenInfo, writer?: any): any;
    static encodeDelimited(message: IReportingTokenInfo, writer?: any): any;
    static decode(reader: any, length?: number): ReportingTokenInfo;
    static decodeDelimited(reader: any): ReportingTokenInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ReportingTokenInfo;
    static toObject(message: ReportingTokenInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRotateEpochInput { [key: string]: any }
  class RotateEpochInput implements IRotateEpochInput {
    [key: string]: any;
    constructor(properties?: IRotateEpochInput);
    static create(properties?: IRotateEpochInput): RotateEpochInput;
    static encode(message: IRotateEpochInput, writer?: any): any;
    static encodeDelimited(message: IRotateEpochInput, writer?: any): any;
    static decode(reader: any, length?: number): RotateEpochInput;
    static decodeDelimited(reader: any): RotateEpochInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RotateEpochInput;
    static toObject(message: RotateEpochInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRotateEpochMemberEdge { [key: string]: any }
  class RotateEpochMemberEdge implements IRotateEpochMemberEdge {
    [key: string]: any;
    constructor(properties?: IRotateEpochMemberEdge);
    static create(properties?: IRotateEpochMemberEdge): RotateEpochMemberEdge;
    static encode(message: IRotateEpochMemberEdge, writer?: any): any;
    static encodeDelimited(message: IRotateEpochMemberEdge, writer?: any): any;
    static decode(reader: any, length?: number): RotateEpochMemberEdge;
    static decodeDelimited(reader: any): RotateEpochMemberEdge;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RotateEpochMemberEdge;
    static toObject(message: RotateEpochMemberEdge, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRotateEpochMemberInput { [key: string]: any }
  class RotateEpochMemberInput implements IRotateEpochMemberInput {
    [key: string]: any;
    constructor(properties?: IRotateEpochMemberInput);
    static create(properties?: IRotateEpochMemberInput): RotateEpochMemberInput;
    static encode(message: IRotateEpochMemberInput, writer?: any): any;
    static encodeDelimited(message: IRotateEpochMemberInput, writer?: any): any;
    static decode(reader: any, length?: number): RotateEpochMemberInput;
    static decodeDelimited(reader: any): RotateEpochMemberInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RotateEpochMemberInput;
    static toObject(message: RotateEpochMemberInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRotateEpochOutput { [key: string]: any }
  class RotateEpochOutput implements IRotateEpochOutput {
    [key: string]: any;
    constructor(properties?: IRotateEpochOutput);
    static create(properties?: IRotateEpochOutput): RotateEpochOutput;
    static encode(message: IRotateEpochOutput, writer?: any): any;
    static encodeDelimited(message: IRotateEpochOutput, writer?: any): any;
    static decode(reader: any, length?: number): RotateEpochOutput;
    static decodeDelimited(reader: any): RotateEpochOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RotateEpochOutput;
    static toObject(message: RotateEpochOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IRoutingInfo { [key: string]: any }
  class RoutingInfo implements IRoutingInfo {
    [key: string]: any;
    constructor(properties?: IRoutingInfo);
    static create(properties?: IRoutingInfo): RoutingInfo;
    static encode(message: IRoutingInfo, writer?: any): any;
    static encodeDelimited(message: IRoutingInfo, writer?: any): any;
    static decode(reader: any, length?: number): RoutingInfo;
    static decodeDelimited(reader: any): RoutingInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): RoutingInfo;
    static toObject(message: RoutingInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IScheduledMessageMetadata { [key: string]: any }
  class ScheduledMessageMetadata implements IScheduledMessageMetadata {
    [key: string]: any;
    constructor(properties?: IScheduledMessageMetadata);
    static create(properties?: IScheduledMessageMetadata): ScheduledMessageMetadata;
    static encode(message: IScheduledMessageMetadata, writer?: any): any;
    static encodeDelimited(message: IScheduledMessageMetadata, writer?: any): any;
    static decode(reader: any, length?: number): ScheduledMessageMetadata;
    static decodeDelimited(reader: any): ScheduledMessageMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ScheduledMessageMetadata;
    static toObject(message: ScheduledMessageMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISenderKeyDistributionMessage { [key: string]: any }
  class SenderKeyDistributionMessage implements ISenderKeyDistributionMessage {
    [key: string]: any;
    constructor(properties?: ISenderKeyDistributionMessage);
    static create(properties?: ISenderKeyDistributionMessage): SenderKeyDistributionMessage;
    static encode(message: ISenderKeyDistributionMessage, writer?: any): any;
    static encodeDelimited(message: ISenderKeyDistributionMessage, writer?: any): any;
    static decode(reader: any, length?: number): SenderKeyDistributionMessage;
    static decodeDelimited(reader: any): SenderKeyDistributionMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SenderKeyDistributionMessage;
    static toObject(message: SenderKeyDistributionMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISenderKeyMessage { [key: string]: any }
  class SenderKeyMessage implements ISenderKeyMessage {
    [key: string]: any;
    constructor(properties?: ISenderKeyMessage);
    static create(properties?: ISenderKeyMessage): SenderKeyMessage;
    static encode(message: ISenderKeyMessage, writer?: any): any;
    static encodeDelimited(message: ISenderKeyMessage, writer?: any): any;
    static decode(reader: any, length?: number): SenderKeyMessage;
    static decodeDelimited(reader: any): SenderKeyMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SenderKeyMessage;
    static toObject(message: SenderKeyMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISenderKeyRecordStructure { [key: string]: any }
  class SenderKeyRecordStructure implements ISenderKeyRecordStructure {
    [key: string]: any;
    constructor(properties?: ISenderKeyRecordStructure);
    static create(properties?: ISenderKeyRecordStructure): SenderKeyRecordStructure;
    static encode(message: ISenderKeyRecordStructure, writer?: any): any;
    static encodeDelimited(message: ISenderKeyRecordStructure, writer?: any): any;
    static decode(reader: any, length?: number): SenderKeyRecordStructure;
    static decodeDelimited(reader: any): SenderKeyRecordStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SenderKeyRecordStructure;
    static toObject(message: SenderKeyRecordStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISenderKeyStateStructure { [key: string]: any }
  class SenderKeyStateStructure implements ISenderKeyStateStructure {
    [key: string]: any;
    constructor(properties?: ISenderKeyStateStructure);
    static create(properties?: ISenderKeyStateStructure): SenderKeyStateStructure;
    static encode(message: ISenderKeyStateStructure, writer?: any): any;
    static encodeDelimited(message: ISenderKeyStateStructure, writer?: any): any;
    static decode(reader: any, length?: number): SenderKeyStateStructure;
    static decodeDelimited(reader: any): SenderKeyStateStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SenderKeyStateStructure;
    static toObject(message: SenderKeyStateStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace SenderKeyStateStructure {
    interface ISenderChainKey { [key: string]: any }
    class SenderChainKey implements ISenderChainKey {
      [key: string]: any;
      constructor(properties?: ISenderChainKey);
      static create(properties?: ISenderChainKey): SenderChainKey;
      static encode(message: ISenderChainKey, writer?: any): any;
      static encodeDelimited(message: ISenderChainKey, writer?: any): any;
      static decode(reader: any, length?: number): SenderChainKey;
      static decodeDelimited(reader: any): SenderChainKey;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SenderChainKey;
      static toObject(message: SenderChainKey, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISenderMessageKey { [key: string]: any }
    class SenderMessageKey implements ISenderMessageKey {
      [key: string]: any;
      constructor(properties?: ISenderMessageKey);
      static create(properties?: ISenderMessageKey): SenderMessageKey;
      static encode(message: ISenderMessageKey, writer?: any): any;
      static encodeDelimited(message: ISenderMessageKey, writer?: any): any;
      static decode(reader: any, length?: number): SenderMessageKey;
      static decodeDelimited(reader: any): SenderMessageKey;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SenderMessageKey;
      static toObject(message: SenderMessageKey, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISenderSigningKey { [key: string]: any }
    class SenderSigningKey implements ISenderSigningKey {
      [key: string]: any;
      constructor(properties?: ISenderSigningKey);
      static create(properties?: ISenderSigningKey): SenderSigningKey;
      static encode(message: ISenderSigningKey, writer?: any): any;
      static encodeDelimited(message: ISenderSigningKey, writer?: any): any;
      static decode(reader: any, length?: number): SenderSigningKey;
      static decodeDelimited(reader: any): SenderSigningKey;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SenderSigningKey;
      static toObject(message: SenderSigningKey, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IServerErrorReceipt { [key: string]: any }
  class ServerErrorReceipt implements IServerErrorReceipt {
    [key: string]: any;
    constructor(properties?: IServerErrorReceipt);
    static create(properties?: IServerErrorReceipt): ServerErrorReceipt;
    static encode(message: IServerErrorReceipt, writer?: any): any;
    static encodeDelimited(message: IServerErrorReceipt, writer?: any): any;
    static decode(reader: any, length?: number): ServerErrorReceipt;
    static decodeDelimited(reader: any): ServerErrorReceipt;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ServerErrorReceipt;
    static toObject(message: ServerErrorReceipt, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISessionStructure { [key: string]: any }
  class SessionStructure implements ISessionStructure {
    [key: string]: any;
    constructor(properties?: ISessionStructure);
    static create(properties?: ISessionStructure): SessionStructure;
    static encode(message: ISessionStructure, writer?: any): any;
    static encodeDelimited(message: ISessionStructure, writer?: any): any;
    static decode(reader: any, length?: number): SessionStructure;
    static decodeDelimited(reader: any): SessionStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SessionStructure;
    static toObject(message: SessionStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace SessionStructure {
    interface IChain { [key: string]: any }
    class Chain implements IChain {
      [key: string]: any;
      constructor(properties?: IChain);
      static create(properties?: IChain): Chain;
      static encode(message: IChain, writer?: any): any;
      static encodeDelimited(message: IChain, writer?: any): any;
      static decode(reader: any, length?: number): Chain;
      static decodeDelimited(reader: any): Chain;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Chain;
      static toObject(message: Chain, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace Chain {
      interface IChainKey { [key: string]: any }
      class ChainKey implements IChainKey {
        [key: string]: any;
        constructor(properties?: IChainKey);
        static create(properties?: IChainKey): ChainKey;
        static encode(message: IChainKey, writer?: any): any;
        static encodeDelimited(message: IChainKey, writer?: any): any;
        static decode(reader: any, length?: number): ChainKey;
        static decodeDelimited(reader: any): ChainKey;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): ChainKey;
        static toObject(message: ChainKey, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface IMessageKey { [key: string]: any }
      class MessageKey implements IMessageKey {
        [key: string]: any;
        constructor(properties?: IMessageKey);
        static create(properties?: IMessageKey): MessageKey;
        static encode(message: IMessageKey, writer?: any): any;
        static encodeDelimited(message: IMessageKey, writer?: any): any;
        static decode(reader: any, length?: number): MessageKey;
        static decodeDelimited(reader: any): MessageKey;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): MessageKey;
        static toObject(message: MessageKey, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IPendingKeyExchange { [key: string]: any }
    class PendingKeyExchange implements IPendingKeyExchange {
      [key: string]: any;
      constructor(properties?: IPendingKeyExchange);
      static create(properties?: IPendingKeyExchange): PendingKeyExchange;
      static encode(message: IPendingKeyExchange, writer?: any): any;
      static encodeDelimited(message: IPendingKeyExchange, writer?: any): any;
      static decode(reader: any, length?: number): PendingKeyExchange;
      static decodeDelimited(reader: any): PendingKeyExchange;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PendingKeyExchange;
      static toObject(message: PendingKeyExchange, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPendingPreKey { [key: string]: any }
    class PendingPreKey implements IPendingPreKey {
      [key: string]: any;
      constructor(properties?: IPendingPreKey);
      static create(properties?: IPendingPreKey): PendingPreKey;
      static encode(message: IPendingPreKey, writer?: any): any;
      static encodeDelimited(message: IPendingPreKey, writer?: any): any;
      static decode(reader: any, length?: number): PendingPreKey;
      static decodeDelimited(reader: any): PendingPreKey;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PendingPreKey;
      static toObject(message: PendingPreKey, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface ISessionTransparencyMetadata { [key: string]: any }
  class SessionTransparencyMetadata implements ISessionTransparencyMetadata {
    [key: string]: any;
    constructor(properties?: ISessionTransparencyMetadata);
    static create(properties?: ISessionTransparencyMetadata): SessionTransparencyMetadata;
    static encode(message: ISessionTransparencyMetadata, writer?: any): any;
    static encodeDelimited(message: ISessionTransparencyMetadata, writer?: any): any;
    static decode(reader: any, length?: number): SessionTransparencyMetadata;
    static decodeDelimited(reader: any): SessionTransparencyMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SessionTransparencyMetadata;
    static toObject(message: SessionTransparencyMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  enum SessionTransparencyType {
    UNKNOWN_TYPE = 0,
    NY_AI_SAFETY_DISCLAIMER = 1,
  }
  interface ISignalMessage { [key: string]: any }
  class SignalMessage implements ISignalMessage {
    [key: string]: any;
    constructor(properties?: ISignalMessage);
    static create(properties?: ISignalMessage): SignalMessage;
    static encode(message: ISignalMessage, writer?: any): any;
    static encodeDelimited(message: ISignalMessage, writer?: any): any;
    static decode(reader: any, length?: number): SignalMessage;
    static decodeDelimited(reader: any): SignalMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SignalMessage;
    static toObject(message: SignalMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISignedMmkDistributionFromMailbox { [key: string]: any }
  class SignedMmkDistributionFromMailbox implements ISignedMmkDistributionFromMailbox {
    [key: string]: any;
    constructor(properties?: ISignedMmkDistributionFromMailbox);
    static create(properties?: ISignedMmkDistributionFromMailbox): SignedMmkDistributionFromMailbox;
    static encode(message: ISignedMmkDistributionFromMailbox, writer?: any): any;
    static encodeDelimited(message: ISignedMmkDistributionFromMailbox, writer?: any): any;
    static decode(reader: any, length?: number): SignedMmkDistributionFromMailbox;
    static decodeDelimited(reader: any): SignedMmkDistributionFromMailbox;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SignedMmkDistributionFromMailbox;
    static toObject(message: SignedMmkDistributionFromMailbox, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISignedPreKeyRecordStructure { [key: string]: any }
  class SignedPreKeyRecordStructure implements ISignedPreKeyRecordStructure {
    [key: string]: any;
    constructor(properties?: ISignedPreKeyRecordStructure);
    static create(properties?: ISignedPreKeyRecordStructure): SignedPreKeyRecordStructure;
    static encode(message: ISignedPreKeyRecordStructure, writer?: any): any;
    static encodeDelimited(message: ISignedPreKeyRecordStructure, writer?: any): any;
    static decode(reader: any, length?: number): SignedPreKeyRecordStructure;
    static decodeDelimited(reader: any): SignedPreKeyRecordStructure;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SignedPreKeyRecordStructure;
    static toObject(message: SignedPreKeyRecordStructure, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IStatusAttribution { [key: string]: any }
  class StatusAttribution implements IStatusAttribution {
    [key: string]: any;
    constructor(properties?: IStatusAttribution);
    static create(properties?: IStatusAttribution): StatusAttribution;
    static encode(message: IStatusAttribution, writer?: any): any;
    static encodeDelimited(message: IStatusAttribution, writer?: any): any;
    static decode(reader: any, length?: number): StatusAttribution;
    static decodeDelimited(reader: any): StatusAttribution;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): StatusAttribution;
    static toObject(message: StatusAttribution, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace StatusAttribution {
    interface IAiCreatedAttribution { [key: string]: any }
    class AiCreatedAttribution implements IAiCreatedAttribution {
      [key: string]: any;
      constructor(properties?: IAiCreatedAttribution);
      static create(properties?: IAiCreatedAttribution): AiCreatedAttribution;
      static encode(message: IAiCreatedAttribution, writer?: any): any;
      static encodeDelimited(message: IAiCreatedAttribution, writer?: any): any;
      static decode(reader: any, length?: number): AiCreatedAttribution;
      static decodeDelimited(reader: any): AiCreatedAttribution;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AiCreatedAttribution;
      static toObject(message: AiCreatedAttribution, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace AiCreatedAttribution {
      enum Source {
        UNKNOWN = 0,
        STATUS_MIMICRY = 1,
      }
    }
    interface IExternalShare { [key: string]: any }
    class ExternalShare implements IExternalShare {
      [key: string]: any;
      constructor(properties?: IExternalShare);
      static create(properties?: IExternalShare): ExternalShare;
      static encode(message: IExternalShare, writer?: any): any;
      static encodeDelimited(message: IExternalShare, writer?: any): any;
      static decode(reader: any, length?: number): ExternalShare;
      static decodeDelimited(reader: any): ExternalShare;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ExternalShare;
      static toObject(message: ExternalShare, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace ExternalShare {
      enum Source {
        UNKNOWN = 0,
        INSTAGRAM = 1,
        FACEBOOK = 2,
        MESSENGER = 3,
        SPOTIFY = 4,
        YOUTUBE = 5,
        PINTEREST = 6,
        THREADS = 7,
        APPLE_MUSIC = 8,
        SHARECHAT = 9,
        GOOGLE_PHOTOS = 10,
        SOUNDCLOUD = 11,
        SHAZAM = 12,
        PICSART = 13,
      }
    }
    interface IGroupStatus { [key: string]: any }
    class GroupStatus implements IGroupStatus {
      [key: string]: any;
      constructor(properties?: IGroupStatus);
      static create(properties?: IGroupStatus): GroupStatus;
      static encode(message: IGroupStatus, writer?: any): any;
      static encodeDelimited(message: IGroupStatus, writer?: any): any;
      static decode(reader: any, length?: number): GroupStatus;
      static decodeDelimited(reader: any): GroupStatus;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): GroupStatus;
      static toObject(message: GroupStatus, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMusic { [key: string]: any }
    class Music implements IMusic {
      [key: string]: any;
      constructor(properties?: IMusic);
      static create(properties?: IMusic): Music;
      static encode(message: IMusic, writer?: any): any;
      static encodeDelimited(message: IMusic, writer?: any): any;
      static decode(reader: any, length?: number): Music;
      static decodeDelimited(reader: any): Music;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Music;
      static toObject(message: Music, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRLAttribution { [key: string]: any }
    class RLAttribution implements IRLAttribution {
      [key: string]: any;
      constructor(properties?: IRLAttribution);
      static create(properties?: IRLAttribution): RLAttribution;
      static encode(message: IRLAttribution, writer?: any): any;
      static encodeDelimited(message: IRLAttribution, writer?: any): any;
      static decode(reader: any, length?: number): RLAttribution;
      static decodeDelimited(reader: any): RLAttribution;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RLAttribution;
      static toObject(message: RLAttribution, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace RLAttribution {
      enum Source {
        UNKNOWN = 0,
        RAY_BAN_META_GLASSES = 1,
        OAKLEY_META_GLASSES = 2,
        HYPERNOVA_GLASSES = 3,
      }
    }
    interface IStatusReshare { [key: string]: any }
    class StatusReshare implements IStatusReshare {
      [key: string]: any;
      constructor(properties?: IStatusReshare);
      static create(properties?: IStatusReshare): StatusReshare;
      static encode(message: IStatusReshare, writer?: any): any;
      static encodeDelimited(message: IStatusReshare, writer?: any): any;
      static decode(reader: any, length?: number): StatusReshare;
      static decodeDelimited(reader: any): StatusReshare;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusReshare;
      static toObject(message: StatusReshare, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusReshare {
      interface IMetadata { [key: string]: any }
      class Metadata implements IMetadata {
        [key: string]: any;
        constructor(properties?: IMetadata);
        static create(properties?: IMetadata): Metadata;
        static encode(message: IMetadata, writer?: any): any;
        static encodeDelimited(message: IMetadata, writer?: any): any;
        static decode(reader: any, length?: number): Metadata;
        static decodeDelimited(reader: any): Metadata;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Metadata;
        static toObject(message: Metadata, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum Source {
        UNKNOWN = 0,
        INTERNAL_RESHARE = 1,
        MENTION_RESHARE = 2,
        CHANNEL_RESHARE = 3,
        FORWARD = 4,
      }
    }
    enum Type {
      UNKNOWN = 0,
      RESHARE = 1,
      EXTERNAL_SHARE = 2,
      MUSIC = 3,
      STATUS_MENTION = 4,
      GROUP_STATUS = 5,
      RL_ATTRIBUTION = 6,
      AI_CREATED = 7,
      LAYOUTS = 8,
      NEWSLETTER_STATUS = 9,
      STATUS_CLOSE_SHARING = 10,
      PAID_PARTNERSHIP = 11,
      USERNAME_STATUS = 12,
    }
  }
  interface IStatusMentionMessage { [key: string]: any }
  class StatusMentionMessage implements IStatusMentionMessage {
    [key: string]: any;
    constructor(properties?: IStatusMentionMessage);
    static create(properties?: IStatusMentionMessage): StatusMentionMessage;
    static encode(message: IStatusMentionMessage, writer?: any): any;
    static encodeDelimited(message: IStatusMentionMessage, writer?: any): any;
    static decode(reader: any, length?: number): StatusMentionMessage;
    static decodeDelimited(reader: any): StatusMentionMessage;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): StatusMentionMessage;
    static toObject(message: StatusMentionMessage, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IStatusPSA { [key: string]: any }
  class StatusPSA implements IStatusPSA {
    [key: string]: any;
    constructor(properties?: IStatusPSA);
    static create(properties?: IStatusPSA): StatusPSA;
    static encode(message: IStatusPSA, writer?: any): any;
    static encodeDelimited(message: IStatusPSA, writer?: any): any;
    static decode(reader: any, length?: number): StatusPSA;
    static decodeDelimited(reader: any): StatusPSA;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): StatusPSA;
    static toObject(message: StatusPSA, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IStickerMetadata { [key: string]: any }
  class StickerMetadata implements IStickerMetadata {
    [key: string]: any;
    constructor(properties?: IStickerMetadata);
    static create(properties?: IStickerMetadata): StickerMetadata;
    static encode(message: IStickerMetadata, writer?: any): any;
    static encodeDelimited(message: IStickerMetadata, writer?: any): any;
    static decode(reader: any, length?: number): StickerMetadata;
    static decodeDelimited(reader: any): StickerMetadata;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): StickerMetadata;
    static toObject(message: StickerMetadata, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISubProtocol { [key: string]: any }
  class SubProtocol implements ISubProtocol {
    [key: string]: any;
    constructor(properties?: ISubProtocol);
    static create(properties?: ISubProtocol): SubProtocol;
    static encode(message: ISubProtocol, writer?: any): any;
    static encodeDelimited(message: ISubProtocol, writer?: any): any;
    static decode(reader: any, length?: number): SubProtocol;
    static decodeDelimited(reader: any): SubProtocol;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SubProtocol;
    static toObject(message: SubProtocol, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncActionData { [key: string]: any }
  class SyncActionData implements ISyncActionData {
    [key: string]: any;
    constructor(properties?: ISyncActionData);
    static create(properties?: ISyncActionData): SyncActionData;
    static encode(message: ISyncActionData, writer?: any): any;
    static encodeDelimited(message: ISyncActionData, writer?: any): any;
    static decode(reader: any, length?: number): SyncActionData;
    static decodeDelimited(reader: any): SyncActionData;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncActionData;
    static toObject(message: SyncActionData, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncActionValue { [key: string]: any }
  class SyncActionValue implements ISyncActionValue {
    [key: string]: any;
    constructor(properties?: ISyncActionValue);
    static create(properties?: ISyncActionValue): SyncActionValue;
    static encode(message: ISyncActionValue, writer?: any): any;
    static encodeDelimited(message: ISyncActionValue, writer?: any): any;
    static decode(reader: any, length?: number): SyncActionValue;
    static decodeDelimited(reader: any): SyncActionValue;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncActionValue;
    static toObject(message: SyncActionValue, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace SyncActionValue {
    interface IAgentAction { [key: string]: any }
    class AgentAction implements IAgentAction {
      [key: string]: any;
      constructor(properties?: IAgentAction);
      static create(properties?: IAgentAction): AgentAction;
      static encode(message: IAgentAction, writer?: any): any;
      static encodeDelimited(message: IAgentAction, writer?: any): any;
      static decode(reader: any, length?: number): AgentAction;
      static decodeDelimited(reader: any): AgentAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AgentAction;
      static toObject(message: AgentAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAiThreadRenameAction { [key: string]: any }
    class AiThreadRenameAction implements IAiThreadRenameAction {
      [key: string]: any;
      constructor(properties?: IAiThreadRenameAction);
      static create(properties?: IAiThreadRenameAction): AiThreadRenameAction;
      static encode(message: IAiThreadRenameAction, writer?: any): any;
      static encodeDelimited(message: IAiThreadRenameAction, writer?: any): any;
      static decode(reader: any, length?: number): AiThreadRenameAction;
      static decodeDelimited(reader: any): AiThreadRenameAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AiThreadRenameAction;
      static toObject(message: AiThreadRenameAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAndroidUnsupportedActions { [key: string]: any }
    class AndroidUnsupportedActions implements IAndroidUnsupportedActions {
      [key: string]: any;
      constructor(properties?: IAndroidUnsupportedActions);
      static create(properties?: IAndroidUnsupportedActions): AndroidUnsupportedActions;
      static encode(message: IAndroidUnsupportedActions, writer?: any): any;
      static encodeDelimited(message: IAndroidUnsupportedActions, writer?: any): any;
      static decode(reader: any, length?: number): AndroidUnsupportedActions;
      static decodeDelimited(reader: any): AndroidUnsupportedActions;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AndroidUnsupportedActions;
      static toObject(message: AndroidUnsupportedActions, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IArchiveChatAction { [key: string]: any }
    class ArchiveChatAction implements IArchiveChatAction {
      [key: string]: any;
      constructor(properties?: IArchiveChatAction);
      static create(properties?: IArchiveChatAction): ArchiveChatAction;
      static encode(message: IArchiveChatAction, writer?: any): any;
      static encodeDelimited(message: IArchiveChatAction, writer?: any): any;
      static decode(reader: any, length?: number): ArchiveChatAction;
      static decodeDelimited(reader: any): ArchiveChatAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ArchiveChatAction;
      static toObject(message: ArchiveChatAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAutoOrganizeBusinessChatSetting { [key: string]: any }
    class AutoOrganizeBusinessChatSetting implements IAutoOrganizeBusinessChatSetting {
      [key: string]: any;
      constructor(properties?: IAutoOrganizeBusinessChatSetting);
      static create(properties?: IAutoOrganizeBusinessChatSetting): AutoOrganizeBusinessChatSetting;
      static encode(message: IAutoOrganizeBusinessChatSetting, writer?: any): any;
      static encodeDelimited(message: IAutoOrganizeBusinessChatSetting, writer?: any): any;
      static decode(reader: any, length?: number): AutoOrganizeBusinessChatSetting;
      static decodeDelimited(reader: any): AutoOrganizeBusinessChatSetting;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AutoOrganizeBusinessChatSetting;
      static toObject(message: AutoOrganizeBusinessChatSetting, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IAvatarUpdatedAction { [key: string]: any }
    class AvatarUpdatedAction implements IAvatarUpdatedAction {
      [key: string]: any;
      constructor(properties?: IAvatarUpdatedAction);
      static create(properties?: IAvatarUpdatedAction): AvatarUpdatedAction;
      static encode(message: IAvatarUpdatedAction, writer?: any): any;
      static encodeDelimited(message: IAvatarUpdatedAction, writer?: any): any;
      static decode(reader: any, length?: number): AvatarUpdatedAction;
      static decodeDelimited(reader: any): AvatarUpdatedAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): AvatarUpdatedAction;
      static toObject(message: AvatarUpdatedAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace AvatarUpdatedAction {
      enum AvatarEventType {
        UPDATED = 0,
        CREATED = 1,
        DELETED = 2,
      }
    }
    interface IBizAISettingsNudgeAction { [key: string]: any }
    class BizAISettingsNudgeAction implements IBizAISettingsNudgeAction {
      [key: string]: any;
      constructor(properties?: IBizAISettingsNudgeAction);
      static create(properties?: IBizAISettingsNudgeAction): BizAISettingsNudgeAction;
      static encode(message: IBizAISettingsNudgeAction, writer?: any): any;
      static encodeDelimited(message: IBizAISettingsNudgeAction, writer?: any): any;
      static decode(reader: any, length?: number): BizAISettingsNudgeAction;
      static decodeDelimited(reader: any): BizAISettingsNudgeAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BizAISettingsNudgeAction;
      static toObject(message: BizAISettingsNudgeAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace BizAISettingsNudgeAction {
      enum BizAISettingsCategory {
        UNKNOWN = 0,
        INSTRUCTIONS = 1,
        RESPONSE_SETTINGS = 2,
        EXAMPLE_RESPONSES = 3,
        KNOWLEDGE = 4,
        LEAD_GEN = 5,
        HANDOFF_REMOVAL_TIMING = 6,
      }
    }
    interface IBotWelcomeRequestAction { [key: string]: any }
    class BotWelcomeRequestAction implements IBotWelcomeRequestAction {
      [key: string]: any;
      constructor(properties?: IBotWelcomeRequestAction);
      static create(properties?: IBotWelcomeRequestAction): BotWelcomeRequestAction;
      static encode(message: IBotWelcomeRequestAction, writer?: any): any;
      static encodeDelimited(message: IBotWelcomeRequestAction, writer?: any): any;
      static decode(reader: any, length?: number): BotWelcomeRequestAction;
      static decodeDelimited(reader: any): BotWelcomeRequestAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BotWelcomeRequestAction;
      static toObject(message: BotWelcomeRequestAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBroadcastListParticipant { [key: string]: any }
    class BroadcastListParticipant implements IBroadcastListParticipant {
      [key: string]: any;
      constructor(properties?: IBroadcastListParticipant);
      static create(properties?: IBroadcastListParticipant): BroadcastListParticipant;
      static encode(message: IBroadcastListParticipant, writer?: any): any;
      static encodeDelimited(message: IBroadcastListParticipant, writer?: any): any;
      static decode(reader: any, length?: number): BroadcastListParticipant;
      static decodeDelimited(reader: any): BroadcastListParticipant;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BroadcastListParticipant;
      static toObject(message: BroadcastListParticipant, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBubbleLockMessageAction { [key: string]: any }
    class BubbleLockMessageAction implements IBubbleLockMessageAction {
      [key: string]: any;
      constructor(properties?: IBubbleLockMessageAction);
      static create(properties?: IBubbleLockMessageAction): BubbleLockMessageAction;
      static encode(message: IBubbleLockMessageAction, writer?: any): any;
      static encodeDelimited(message: IBubbleLockMessageAction, writer?: any): any;
      static decode(reader: any, length?: number): BubbleLockMessageAction;
      static decodeDelimited(reader: any): BubbleLockMessageAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BubbleLockMessageAction;
      static toObject(message: BubbleLockMessageAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBusinessBroadcastAssociationAction { [key: string]: any }
    class BusinessBroadcastAssociationAction implements IBusinessBroadcastAssociationAction {
      [key: string]: any;
      constructor(properties?: IBusinessBroadcastAssociationAction);
      static create(properties?: IBusinessBroadcastAssociationAction): BusinessBroadcastAssociationAction;
      static encode(message: IBusinessBroadcastAssociationAction, writer?: any): any;
      static encodeDelimited(message: IBusinessBroadcastAssociationAction, writer?: any): any;
      static decode(reader: any, length?: number): BusinessBroadcastAssociationAction;
      static decodeDelimited(reader: any): BusinessBroadcastAssociationAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessBroadcastAssociationAction;
      static toObject(message: BusinessBroadcastAssociationAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBusinessBroadcastCampaignAction { [key: string]: any }
    class BusinessBroadcastCampaignAction implements IBusinessBroadcastCampaignAction {
      [key: string]: any;
      constructor(properties?: IBusinessBroadcastCampaignAction);
      static create(properties?: IBusinessBroadcastCampaignAction): BusinessBroadcastCampaignAction;
      static encode(message: IBusinessBroadcastCampaignAction, writer?: any): any;
      static encodeDelimited(message: IBusinessBroadcastCampaignAction, writer?: any): any;
      static decode(reader: any, length?: number): BusinessBroadcastCampaignAction;
      static decodeDelimited(reader: any): BusinessBroadcastCampaignAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessBroadcastCampaignAction;
      static toObject(message: BusinessBroadcastCampaignAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    enum BusinessBroadcastCampaignStatus {
      DRAFT = 1,
      SCHEDULED = 2,
      PROCESSING = 3,
      FAILED = 4,
      SENT = 5,
    }
    interface IBusinessBroadcastInsightsAction { [key: string]: any }
    class BusinessBroadcastInsightsAction implements IBusinessBroadcastInsightsAction {
      [key: string]: any;
      constructor(properties?: IBusinessBroadcastInsightsAction);
      static create(properties?: IBusinessBroadcastInsightsAction): BusinessBroadcastInsightsAction;
      static encode(message: IBusinessBroadcastInsightsAction, writer?: any): any;
      static encodeDelimited(message: IBusinessBroadcastInsightsAction, writer?: any): any;
      static decode(reader: any, length?: number): BusinessBroadcastInsightsAction;
      static decodeDelimited(reader: any): BusinessBroadcastInsightsAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessBroadcastInsightsAction;
      static toObject(message: BusinessBroadcastInsightsAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBusinessBroadcastListAction { [key: string]: any }
    class BusinessBroadcastListAction implements IBusinessBroadcastListAction {
      [key: string]: any;
      constructor(properties?: IBusinessBroadcastListAction);
      static create(properties?: IBusinessBroadcastListAction): BusinessBroadcastListAction;
      static encode(message: IBusinessBroadcastListAction, writer?: any): any;
      static encodeDelimited(message: IBusinessBroadcastListAction, writer?: any): any;
      static decode(reader: any, length?: number): BusinessBroadcastListAction;
      static decodeDelimited(reader: any): BusinessBroadcastListAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessBroadcastListAction;
      static toObject(message: BusinessBroadcastListAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IBusinessFolderActivationAction { [key: string]: any }
    class BusinessFolderActivationAction implements IBusinessFolderActivationAction {
      [key: string]: any;
      constructor(properties?: IBusinessFolderActivationAction);
      static create(properties?: IBusinessFolderActivationAction): BusinessFolderActivationAction;
      static encode(message: IBusinessFolderActivationAction, writer?: any): any;
      static encodeDelimited(message: IBusinessFolderActivationAction, writer?: any): any;
      static decode(reader: any, length?: number): BusinessFolderActivationAction;
      static decodeDelimited(reader: any): BusinessFolderActivationAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): BusinessFolderActivationAction;
      static toObject(message: BusinessFolderActivationAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICallLogAction { [key: string]: any }
    class CallLogAction implements ICallLogAction {
      [key: string]: any;
      constructor(properties?: ICallLogAction);
      static create(properties?: ICallLogAction): CallLogAction;
      static encode(message: ICallLogAction, writer?: any): any;
      static encodeDelimited(message: ICallLogAction, writer?: any): any;
      static decode(reader: any, length?: number): CallLogAction;
      static decodeDelimited(reader: any): CallLogAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CallLogAction;
      static toObject(message: CallLogAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatAssignmentAction { [key: string]: any }
    class ChatAssignmentAction implements IChatAssignmentAction {
      [key: string]: any;
      constructor(properties?: IChatAssignmentAction);
      static create(properties?: IChatAssignmentAction): ChatAssignmentAction;
      static encode(message: IChatAssignmentAction, writer?: any): any;
      static encodeDelimited(message: IChatAssignmentAction, writer?: any): any;
      static decode(reader: any, length?: number): ChatAssignmentAction;
      static decodeDelimited(reader: any): ChatAssignmentAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatAssignmentAction;
      static toObject(message: ChatAssignmentAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IChatAssignmentOpenedStatusAction { [key: string]: any }
    class ChatAssignmentOpenedStatusAction implements IChatAssignmentOpenedStatusAction {
      [key: string]: any;
      constructor(properties?: IChatAssignmentOpenedStatusAction);
      static create(properties?: IChatAssignmentOpenedStatusAction): ChatAssignmentOpenedStatusAction;
      static encode(message: IChatAssignmentOpenedStatusAction, writer?: any): any;
      static encodeDelimited(message: IChatAssignmentOpenedStatusAction, writer?: any): any;
      static decode(reader: any, length?: number): ChatAssignmentOpenedStatusAction;
      static decodeDelimited(reader: any): ChatAssignmentOpenedStatusAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ChatAssignmentOpenedStatusAction;
      static toObject(message: ChatAssignmentOpenedStatusAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IClearChatAction { [key: string]: any }
    class ClearChatAction implements IClearChatAction {
      [key: string]: any;
      constructor(properties?: IClearChatAction);
      static create(properties?: IClearChatAction): ClearChatAction;
      static encode(message: IClearChatAction, writer?: any): any;
      static encodeDelimited(message: IClearChatAction, writer?: any): any;
      static decode(reader: any, length?: number): ClearChatAction;
      static decodeDelimited(reader: any): ClearChatAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ClearChatAction;
      static toObject(message: ClearChatAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICoexV2VersionAction { [key: string]: any }
    class CoexV2VersionAction implements ICoexV2VersionAction {
      [key: string]: any;
      constructor(properties?: ICoexV2VersionAction);
      static create(properties?: ICoexV2VersionAction): CoexV2VersionAction;
      static encode(message: ICoexV2VersionAction, writer?: any): any;
      static encodeDelimited(message: ICoexV2VersionAction, writer?: any): any;
      static decode(reader: any, length?: number): CoexV2VersionAction;
      static decodeDelimited(reader: any): CoexV2VersionAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CoexV2VersionAction;
      static toObject(message: CoexV2VersionAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IContactAction { [key: string]: any }
    class ContactAction implements IContactAction {
      [key: string]: any;
      constructor(properties?: IContactAction);
      static create(properties?: IContactAction): ContactAction;
      static encode(message: IContactAction, writer?: any): any;
      static encodeDelimited(message: IContactAction, writer?: any): any;
      static decode(reader: any, length?: number): ContactAction;
      static decodeDelimited(reader: any): ContactAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactAction;
      static toObject(message: ContactAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IContactManagerMetadataAction { [key: string]: any }
    class ContactManagerMetadataAction implements IContactManagerMetadataAction {
      [key: string]: any;
      constructor(properties?: IContactManagerMetadataAction);
      static create(properties?: IContactManagerMetadataAction): ContactManagerMetadataAction;
      static encode(message: IContactManagerMetadataAction, writer?: any): any;
      static encodeDelimited(message: IContactManagerMetadataAction, writer?: any): any;
      static decode(reader: any, length?: number): ContactManagerMetadataAction;
      static decodeDelimited(reader: any): ContactManagerMetadataAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ContactManagerMetadataAction;
      static toObject(message: ContactManagerMetadataAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICtwaMessageReceivedAction { [key: string]: any }
    class CtwaMessageReceivedAction implements ICtwaMessageReceivedAction {
      [key: string]: any;
      constructor(properties?: ICtwaMessageReceivedAction);
      static create(properties?: ICtwaMessageReceivedAction): CtwaMessageReceivedAction;
      static encode(message: ICtwaMessageReceivedAction, writer?: any): any;
      static encodeDelimited(message: ICtwaMessageReceivedAction, writer?: any): any;
      static decode(reader: any, length?: number): CtwaMessageReceivedAction;
      static decodeDelimited(reader: any): CtwaMessageReceivedAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CtwaMessageReceivedAction;
      static toObject(message: CtwaMessageReceivedAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICtwaPerCustomerDataSharingAction { [key: string]: any }
    class CtwaPerCustomerDataSharingAction implements ICtwaPerCustomerDataSharingAction {
      [key: string]: any;
      constructor(properties?: ICtwaPerCustomerDataSharingAction);
      static create(properties?: ICtwaPerCustomerDataSharingAction): CtwaPerCustomerDataSharingAction;
      static encode(message: ICtwaPerCustomerDataSharingAction, writer?: any): any;
      static encodeDelimited(message: ICtwaPerCustomerDataSharingAction, writer?: any): any;
      static decode(reader: any, length?: number): CtwaPerCustomerDataSharingAction;
      static decodeDelimited(reader: any): CtwaPerCustomerDataSharingAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CtwaPerCustomerDataSharingAction;
      static toObject(message: CtwaPerCustomerDataSharingAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICustomPaymentMethod { [key: string]: any }
    class CustomPaymentMethod implements ICustomPaymentMethod {
      [key: string]: any;
      constructor(properties?: ICustomPaymentMethod);
      static create(properties?: ICustomPaymentMethod): CustomPaymentMethod;
      static encode(message: ICustomPaymentMethod, writer?: any): any;
      static encodeDelimited(message: ICustomPaymentMethod, writer?: any): any;
      static decode(reader: any, length?: number): CustomPaymentMethod;
      static decodeDelimited(reader: any): CustomPaymentMethod;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CustomPaymentMethod;
      static toObject(message: CustomPaymentMethod, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICustomPaymentMethodMetadata { [key: string]: any }
    class CustomPaymentMethodMetadata implements ICustomPaymentMethodMetadata {
      [key: string]: any;
      constructor(properties?: ICustomPaymentMethodMetadata);
      static create(properties?: ICustomPaymentMethodMetadata): CustomPaymentMethodMetadata;
      static encode(message: ICustomPaymentMethodMetadata, writer?: any): any;
      static encodeDelimited(message: ICustomPaymentMethodMetadata, writer?: any): any;
      static decode(reader: any, length?: number): CustomPaymentMethodMetadata;
      static decodeDelimited(reader: any): CustomPaymentMethodMetadata;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CustomPaymentMethodMetadata;
      static toObject(message: CustomPaymentMethodMetadata, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICustomPaymentMethodsAction { [key: string]: any }
    class CustomPaymentMethodsAction implements ICustomPaymentMethodsAction {
      [key: string]: any;
      constructor(properties?: ICustomPaymentMethodsAction);
      static create(properties?: ICustomPaymentMethodsAction): CustomPaymentMethodsAction;
      static encode(message: ICustomPaymentMethodsAction, writer?: any): any;
      static encodeDelimited(message: ICustomPaymentMethodsAction, writer?: any): any;
      static decode(reader: any, length?: number): CustomPaymentMethodsAction;
      static decodeDelimited(reader: any): CustomPaymentMethodsAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CustomPaymentMethodsAction;
      static toObject(message: CustomPaymentMethodsAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ICustomerDataAction { [key: string]: any }
    class CustomerDataAction implements ICustomerDataAction {
      [key: string]: any;
      constructor(properties?: ICustomerDataAction);
      static create(properties?: ICustomerDataAction): CustomerDataAction;
      static encode(message: ICustomerDataAction, writer?: any): any;
      static encodeDelimited(message: ICustomerDataAction, writer?: any): any;
      static decode(reader: any, length?: number): CustomerDataAction;
      static decodeDelimited(reader: any): CustomerDataAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CustomerDataAction;
      static toObject(message: CustomerDataAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDeleteChatAction { [key: string]: any }
    class DeleteChatAction implements IDeleteChatAction {
      [key: string]: any;
      constructor(properties?: IDeleteChatAction);
      static create(properties?: IDeleteChatAction): DeleteChatAction;
      static encode(message: IDeleteChatAction, writer?: any): any;
      static encodeDelimited(message: IDeleteChatAction, writer?: any): any;
      static decode(reader: any, length?: number): DeleteChatAction;
      static decodeDelimited(reader: any): DeleteChatAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DeleteChatAction;
      static toObject(message: DeleteChatAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDeleteIndividualCallLogAction { [key: string]: any }
    class DeleteIndividualCallLogAction implements IDeleteIndividualCallLogAction {
      [key: string]: any;
      constructor(properties?: IDeleteIndividualCallLogAction);
      static create(properties?: IDeleteIndividualCallLogAction): DeleteIndividualCallLogAction;
      static encode(message: IDeleteIndividualCallLogAction, writer?: any): any;
      static encodeDelimited(message: IDeleteIndividualCallLogAction, writer?: any): any;
      static decode(reader: any, length?: number): DeleteIndividualCallLogAction;
      static decodeDelimited(reader: any): DeleteIndividualCallLogAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DeleteIndividualCallLogAction;
      static toObject(message: DeleteIndividualCallLogAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDeleteMessageForMeAction { [key: string]: any }
    class DeleteMessageForMeAction implements IDeleteMessageForMeAction {
      [key: string]: any;
      constructor(properties?: IDeleteMessageForMeAction);
      static create(properties?: IDeleteMessageForMeAction): DeleteMessageForMeAction;
      static encode(message: IDeleteMessageForMeAction, writer?: any): any;
      static encodeDelimited(message: IDeleteMessageForMeAction, writer?: any): any;
      static decode(reader: any, length?: number): DeleteMessageForMeAction;
      static decodeDelimited(reader: any): DeleteMessageForMeAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DeleteMessageForMeAction;
      static toObject(message: DeleteMessageForMeAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IDetectedOutcomesStatusAction { [key: string]: any }
    class DetectedOutcomesStatusAction implements IDetectedOutcomesStatusAction {
      [key: string]: any;
      constructor(properties?: IDetectedOutcomesStatusAction);
      static create(properties?: IDetectedOutcomesStatusAction): DetectedOutcomesStatusAction;
      static encode(message: IDetectedOutcomesStatusAction, writer?: any): any;
      static encodeDelimited(message: IDetectedOutcomesStatusAction, writer?: any): any;
      static decode(reader: any, length?: number): DetectedOutcomesStatusAction;
      static decodeDelimited(reader: any): DetectedOutcomesStatusAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): DetectedOutcomesStatusAction;
      static toObject(message: DetectedOutcomesStatusAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IExternalWebBetaAction { [key: string]: any }
    class ExternalWebBetaAction implements IExternalWebBetaAction {
      [key: string]: any;
      constructor(properties?: IExternalWebBetaAction);
      static create(properties?: IExternalWebBetaAction): ExternalWebBetaAction;
      static encode(message: IExternalWebBetaAction, writer?: any): any;
      static encodeDelimited(message: IExternalWebBetaAction, writer?: any): any;
      static decode(reader: any, length?: number): ExternalWebBetaAction;
      static decodeDelimited(reader: any): ExternalWebBetaAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ExternalWebBetaAction;
      static toObject(message: ExternalWebBetaAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IFavoritesAction { [key: string]: any }
    class FavoritesAction implements IFavoritesAction {
      [key: string]: any;
      constructor(properties?: IFavoritesAction);
      static create(properties?: IFavoritesAction): FavoritesAction;
      static encode(message: IFavoritesAction, writer?: any): any;
      static encodeDelimited(message: IFavoritesAction, writer?: any): any;
      static decode(reader: any, length?: number): FavoritesAction;
      static decodeDelimited(reader: any): FavoritesAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): FavoritesAction;
      static toObject(message: FavoritesAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace FavoritesAction {
      interface IFavorite { [key: string]: any }
      class Favorite implements IFavorite {
        [key: string]: any;
        constructor(properties?: IFavorite);
        static create(properties?: IFavorite): Favorite;
        static encode(message: IFavorite, writer?: any): any;
        static encodeDelimited(message: IFavorite, writer?: any): any;
        static decode(reader: any, length?: number): Favorite;
        static decodeDelimited(reader: any): Favorite;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Favorite;
        static toObject(message: Favorite, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface IInteractiveMessageAction { [key: string]: any }
    class InteractiveMessageAction implements IInteractiveMessageAction {
      [key: string]: any;
      constructor(properties?: IInteractiveMessageAction);
      static create(properties?: IInteractiveMessageAction): InteractiveMessageAction;
      static encode(message: IInteractiveMessageAction, writer?: any): any;
      static encodeDelimited(message: IInteractiveMessageAction, writer?: any): any;
      static decode(reader: any, length?: number): InteractiveMessageAction;
      static decodeDelimited(reader: any): InteractiveMessageAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): InteractiveMessageAction;
      static toObject(message: InteractiveMessageAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace InteractiveMessageAction {
      enum InteractiveMessageActionMode {
        DISABLE_CTA = 1,
      }
    }
    interface IKeyExpiration { [key: string]: any }
    class KeyExpiration implements IKeyExpiration {
      [key: string]: any;
      constructor(properties?: IKeyExpiration);
      static create(properties?: IKeyExpiration): KeyExpiration;
      static encode(message: IKeyExpiration, writer?: any): any;
      static encodeDelimited(message: IKeyExpiration, writer?: any): any;
      static decode(reader: any, length?: number): KeyExpiration;
      static decodeDelimited(reader: any): KeyExpiration;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): KeyExpiration;
      static toObject(message: KeyExpiration, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILabelAssociationAction { [key: string]: any }
    class LabelAssociationAction implements ILabelAssociationAction {
      [key: string]: any;
      constructor(properties?: ILabelAssociationAction);
      static create(properties?: ILabelAssociationAction): LabelAssociationAction;
      static encode(message: ILabelAssociationAction, writer?: any): any;
      static encodeDelimited(message: ILabelAssociationAction, writer?: any): any;
      static decode(reader: any, length?: number): LabelAssociationAction;
      static decodeDelimited(reader: any): LabelAssociationAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LabelAssociationAction;
      static toObject(message: LabelAssociationAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILabelEditAction { [key: string]: any }
    class LabelEditAction implements ILabelEditAction {
      [key: string]: any;
      constructor(properties?: ILabelEditAction);
      static create(properties?: ILabelEditAction): LabelEditAction;
      static encode(message: ILabelEditAction, writer?: any): any;
      static encodeDelimited(message: ILabelEditAction, writer?: any): any;
      static decode(reader: any, length?: number): LabelEditAction;
      static decodeDelimited(reader: any): LabelEditAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LabelEditAction;
      static toObject(message: LabelEditAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace LabelEditAction {
      enum ListType {
        NONE = 0,
        UNREAD = 1,
        GROUPS = 2,
        FAVORITES = 3,
        PREDEFINED = 4,
        CUSTOM = 5,
        COMMUNITY = 6,
        SERVER_ASSIGNED = 7,
        DRAFTED = 8,
        AI_HANDOFF = 9,
        CHANNELS = 10,
        AI_RESPONDING = 11,
        ARCHIVED = 12,
        LOCKED = 13,
        INVITES = 14,
        THIRD_PARTY = 15,
        LEAD = 16,
        MENTIONS_AND_REPLIES = 17,
      }
    }
    interface ILabelReorderingAction { [key: string]: any }
    class LabelReorderingAction implements ILabelReorderingAction {
      [key: string]: any;
      constructor(properties?: ILabelReorderingAction);
      static create(properties?: ILabelReorderingAction): LabelReorderingAction;
      static encode(message: ILabelReorderingAction, writer?: any): any;
      static encodeDelimited(message: ILabelReorderingAction, writer?: any): any;
      static decode(reader: any, length?: number): LabelReorderingAction;
      static decodeDelimited(reader: any): LabelReorderingAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LabelReorderingAction;
      static toObject(message: LabelReorderingAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILabelSublistAction { [key: string]: any }
    class LabelSublistAction implements ILabelSublistAction {
      [key: string]: any;
      constructor(properties?: ILabelSublistAction);
      static create(properties?: ILabelSublistAction): LabelSublistAction;
      static encode(message: ILabelSublistAction, writer?: any): any;
      static encodeDelimited(message: ILabelSublistAction, writer?: any): any;
      static decode(reader: any, length?: number): LabelSublistAction;
      static decodeDelimited(reader: any): LabelSublistAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LabelSublistAction;
      static toObject(message: LabelSublistAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILidContactAction { [key: string]: any }
    class LidContactAction implements ILidContactAction {
      [key: string]: any;
      constructor(properties?: ILidContactAction);
      static create(properties?: ILidContactAction): LidContactAction;
      static encode(message: ILidContactAction, writer?: any): any;
      static encodeDelimited(message: ILidContactAction, writer?: any): any;
      static decode(reader: any, length?: number): LidContactAction;
      static decodeDelimited(reader: any): LidContactAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LidContactAction;
      static toObject(message: LidContactAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILocaleSetting { [key: string]: any }
    class LocaleSetting implements ILocaleSetting {
      [key: string]: any;
      constructor(properties?: ILocaleSetting);
      static create(properties?: ILocaleSetting): LocaleSetting;
      static encode(message: ILocaleSetting, writer?: any): any;
      static encodeDelimited(message: ILocaleSetting, writer?: any): any;
      static decode(reader: any, length?: number): LocaleSetting;
      static decodeDelimited(reader: any): LocaleSetting;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LocaleSetting;
      static toObject(message: LocaleSetting, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ILockChatAction { [key: string]: any }
    class LockChatAction implements ILockChatAction {
      [key: string]: any;
      constructor(properties?: ILockChatAction);
      static create(properties?: ILockChatAction): LockChatAction;
      static encode(message: ILockChatAction, writer?: any): any;
      static encodeDelimited(message: ILockChatAction, writer?: any): any;
      static decode(reader: any, length?: number): LockChatAction;
      static decodeDelimited(reader: any): LockChatAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): LockChatAction;
      static toObject(message: LockChatAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMaibaAIFeaturesControlAction { [key: string]: any }
    class MaibaAIFeaturesControlAction implements IMaibaAIFeaturesControlAction {
      [key: string]: any;
      constructor(properties?: IMaibaAIFeaturesControlAction);
      static create(properties?: IMaibaAIFeaturesControlAction): MaibaAIFeaturesControlAction;
      static encode(message: IMaibaAIFeaturesControlAction, writer?: any): any;
      static encodeDelimited(message: IMaibaAIFeaturesControlAction, writer?: any): any;
      static decode(reader: any, length?: number): MaibaAIFeaturesControlAction;
      static decodeDelimited(reader: any): MaibaAIFeaturesControlAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MaibaAIFeaturesControlAction;
      static toObject(message: MaibaAIFeaturesControlAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace MaibaAIFeaturesControlAction {
      enum MaibaAIFeatureStatus {
        ENABLED = 0,
        ENABLED_HAS_LEARNING = 1,
        DISABLED = 2,
      }
      enum MaibaAIReplyMode {
        MUTED = 0,
        AI_AGENT = 1,
        SUGGESTIONS = 2,
      }
    }
    interface IMarkChatAsReadAction { [key: string]: any }
    class MarkChatAsReadAction implements IMarkChatAsReadAction {
      [key: string]: any;
      constructor(properties?: IMarkChatAsReadAction);
      static create(properties?: IMarkChatAsReadAction): MarkChatAsReadAction;
      static encode(message: IMarkChatAsReadAction, writer?: any): any;
      static encodeDelimited(message: IMarkChatAsReadAction, writer?: any): any;
      static decode(reader: any, length?: number): MarkChatAsReadAction;
      static decodeDelimited(reader: any): MarkChatAsReadAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MarkChatAsReadAction;
      static toObject(message: MarkChatAsReadAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMarketingMessageAction { [key: string]: any }
    class MarketingMessageAction implements IMarketingMessageAction {
      [key: string]: any;
      constructor(properties?: IMarketingMessageAction);
      static create(properties?: IMarketingMessageAction): MarketingMessageAction;
      static encode(message: IMarketingMessageAction, writer?: any): any;
      static encodeDelimited(message: IMarketingMessageAction, writer?: any): any;
      static decode(reader: any, length?: number): MarketingMessageAction;
      static decodeDelimited(reader: any): MarketingMessageAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MarketingMessageAction;
      static toObject(message: MarketingMessageAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace MarketingMessageAction {
      enum MarketingMessagePrototypeType {
        PERSONALIZED = 0,
      }
    }
    interface IMarketingMessageBroadcastAction { [key: string]: any }
    class MarketingMessageBroadcastAction implements IMarketingMessageBroadcastAction {
      [key: string]: any;
      constructor(properties?: IMarketingMessageBroadcastAction);
      static create(properties?: IMarketingMessageBroadcastAction): MarketingMessageBroadcastAction;
      static encode(message: IMarketingMessageBroadcastAction, writer?: any): any;
      static encodeDelimited(message: IMarketingMessageBroadcastAction, writer?: any): any;
      static decode(reader: any, length?: number): MarketingMessageBroadcastAction;
      static decodeDelimited(reader: any): MarketingMessageBroadcastAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MarketingMessageBroadcastAction;
      static toObject(message: MarketingMessageBroadcastAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMerchantPaymentPartnerAction { [key: string]: any }
    class MerchantPaymentPartnerAction implements IMerchantPaymentPartnerAction {
      [key: string]: any;
      constructor(properties?: IMerchantPaymentPartnerAction);
      static create(properties?: IMerchantPaymentPartnerAction): MerchantPaymentPartnerAction;
      static encode(message: IMerchantPaymentPartnerAction, writer?: any): any;
      static encodeDelimited(message: IMerchantPaymentPartnerAction, writer?: any): any;
      static decode(reader: any, length?: number): MerchantPaymentPartnerAction;
      static decodeDelimited(reader: any): MerchantPaymentPartnerAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MerchantPaymentPartnerAction;
      static toObject(message: MerchantPaymentPartnerAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace MerchantPaymentPartnerAction {
      enum Status {
        ACTIVE = 0,
        INACTIVE = 1,
      }
    }
    interface IMusicUserIdAction { [key: string]: any }
    class MusicUserIdAction implements IMusicUserIdAction {
      [key: string]: any;
      constructor(properties?: IMusicUserIdAction);
      static create(properties?: IMusicUserIdAction): MusicUserIdAction;
      static encode(message: IMusicUserIdAction, writer?: any): any;
      static encodeDelimited(message: IMusicUserIdAction, writer?: any): any;
      static decode(reader: any, length?: number): MusicUserIdAction;
      static decodeDelimited(reader: any): MusicUserIdAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MusicUserIdAction;
      static toObject(message: MusicUserIdAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IMuteAction { [key: string]: any }
    class MuteAction implements IMuteAction {
      [key: string]: any;
      constructor(properties?: IMuteAction);
      static create(properties?: IMuteAction): MuteAction;
      static encode(message: IMuteAction, writer?: any): any;
      static encodeDelimited(message: IMuteAction, writer?: any): any;
      static decode(reader: any, length?: number): MuteAction;
      static decodeDelimited(reader: any): MuteAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): MuteAction;
      static toObject(message: MuteAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface INctSaltSyncAction { [key: string]: any }
    class NctSaltSyncAction implements INctSaltSyncAction {
      [key: string]: any;
      constructor(properties?: INctSaltSyncAction);
      static create(properties?: INctSaltSyncAction): NctSaltSyncAction;
      static encode(message: INctSaltSyncAction, writer?: any): any;
      static encodeDelimited(message: INctSaltSyncAction, writer?: any): any;
      static decode(reader: any, length?: number): NctSaltSyncAction;
      static decodeDelimited(reader: any): NctSaltSyncAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NctSaltSyncAction;
      static toObject(message: NctSaltSyncAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface INewsletterSavedInterestsAction { [key: string]: any }
    class NewsletterSavedInterestsAction implements INewsletterSavedInterestsAction {
      [key: string]: any;
      constructor(properties?: INewsletterSavedInterestsAction);
      static create(properties?: INewsletterSavedInterestsAction): NewsletterSavedInterestsAction;
      static encode(message: INewsletterSavedInterestsAction, writer?: any): any;
      static encodeDelimited(message: INewsletterSavedInterestsAction, writer?: any): any;
      static decode(reader: any, length?: number): NewsletterSavedInterestsAction;
      static decodeDelimited(reader: any): NewsletterSavedInterestsAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NewsletterSavedInterestsAction;
      static toObject(message: NewsletterSavedInterestsAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface INoteEditAction { [key: string]: any }
    class NoteEditAction implements INoteEditAction {
      [key: string]: any;
      constructor(properties?: INoteEditAction);
      static create(properties?: INoteEditAction): NoteEditAction;
      static encode(message: INoteEditAction, writer?: any): any;
      static encodeDelimited(message: INoteEditAction, writer?: any): any;
      static decode(reader: any, length?: number): NoteEditAction;
      static decodeDelimited(reader: any): NoteEditAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NoteEditAction;
      static toObject(message: NoteEditAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace NoteEditAction {
      enum NoteType {
        UNSTRUCTURED = 1,
        STRUCTURED = 2,
      }
    }
    interface INotificationActivitySettingAction { [key: string]: any }
    class NotificationActivitySettingAction implements INotificationActivitySettingAction {
      [key: string]: any;
      constructor(properties?: INotificationActivitySettingAction);
      static create(properties?: INotificationActivitySettingAction): NotificationActivitySettingAction;
      static encode(message: INotificationActivitySettingAction, writer?: any): any;
      static encodeDelimited(message: INotificationActivitySettingAction, writer?: any): any;
      static decode(reader: any, length?: number): NotificationActivitySettingAction;
      static decodeDelimited(reader: any): NotificationActivitySettingAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NotificationActivitySettingAction;
      static toObject(message: NotificationActivitySettingAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace NotificationActivitySettingAction {
      enum NotificationActivitySetting {
        DEFAULT_ALL_MESSAGES = 0,
        ALL_MESSAGES = 1,
        HIGHLIGHTS = 2,
        DEFAULT_HIGHLIGHTS = 3,
      }
    }
    interface INuxAction { [key: string]: any }
    class NuxAction implements INuxAction {
      [key: string]: any;
      constructor(properties?: INuxAction);
      static create(properties?: INuxAction): NuxAction;
      static encode(message: INuxAction, writer?: any): any;
      static encodeDelimited(message: INuxAction, writer?: any): any;
      static decode(reader: any, length?: number): NuxAction;
      static decodeDelimited(reader: any): NuxAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): NuxAction;
      static toObject(message: NuxAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IOutContactAction { [key: string]: any }
    class OutContactAction implements IOutContactAction {
      [key: string]: any;
      constructor(properties?: IOutContactAction);
      static create(properties?: IOutContactAction): OutContactAction;
      static encode(message: IOutContactAction, writer?: any): any;
      static encodeDelimited(message: IOutContactAction, writer?: any): any;
      static decode(reader: any, length?: number): OutContactAction;
      static decodeDelimited(reader: any): OutContactAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): OutContactAction;
      static toObject(message: OutContactAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPaymentInfoAction { [key: string]: any }
    class PaymentInfoAction implements IPaymentInfoAction {
      [key: string]: any;
      constructor(properties?: IPaymentInfoAction);
      static create(properties?: IPaymentInfoAction): PaymentInfoAction;
      static encode(message: IPaymentInfoAction, writer?: any): any;
      static encodeDelimited(message: IPaymentInfoAction, writer?: any): any;
      static decode(reader: any, length?: number): PaymentInfoAction;
      static decodeDelimited(reader: any): PaymentInfoAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PaymentInfoAction;
      static toObject(message: PaymentInfoAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPaymentTosAction { [key: string]: any }
    class PaymentTosAction implements IPaymentTosAction {
      [key: string]: any;
      constructor(properties?: IPaymentTosAction);
      static create(properties?: IPaymentTosAction): PaymentTosAction;
      static encode(message: IPaymentTosAction, writer?: any): any;
      static encodeDelimited(message: IPaymentTosAction, writer?: any): any;
      static decode(reader: any, length?: number): PaymentTosAction;
      static decodeDelimited(reader: any): PaymentTosAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PaymentTosAction;
      static toObject(message: PaymentTosAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PaymentTosAction {
      enum PaymentNotice {
        BR_PAY_PRIVACY_POLICY = 0,
      }
    }
    interface IPinAction { [key: string]: any }
    class PinAction implements IPinAction {
      [key: string]: any;
      constructor(properties?: IPinAction);
      static create(properties?: IPinAction): PinAction;
      static encode(message: IPinAction, writer?: any): any;
      static encodeDelimited(message: IPinAction, writer?: any): any;
      static decode(reader: any, length?: number): PinAction;
      static decodeDelimited(reader: any): PinAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PinAction;
      static toObject(message: PinAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPnForLidChatAction { [key: string]: any }
    class PnForLidChatAction implements IPnForLidChatAction {
      [key: string]: any;
      constructor(properties?: IPnForLidChatAction);
      static create(properties?: IPnForLidChatAction): PnForLidChatAction;
      static encode(message: IPnForLidChatAction, writer?: any): any;
      static encodeDelimited(message: IPnForLidChatAction, writer?: any): any;
      static decode(reader: any, length?: number): PnForLidChatAction;
      static decodeDelimited(reader: any): PnForLidChatAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PnForLidChatAction;
      static toObject(message: PnForLidChatAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrimaryFeature { [key: string]: any }
    class PrimaryFeature implements IPrimaryFeature {
      [key: string]: any;
      constructor(properties?: IPrimaryFeature);
      static create(properties?: IPrimaryFeature): PrimaryFeature;
      static encode(message: IPrimaryFeature, writer?: any): any;
      static encodeDelimited(message: IPrimaryFeature, writer?: any): any;
      static decode(reader: any, length?: number): PrimaryFeature;
      static decodeDelimited(reader: any): PrimaryFeature;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrimaryFeature;
      static toObject(message: PrimaryFeature, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrimaryVersionAction { [key: string]: any }
    class PrimaryVersionAction implements IPrimaryVersionAction {
      [key: string]: any;
      constructor(properties?: IPrimaryVersionAction);
      static create(properties?: IPrimaryVersionAction): PrimaryVersionAction;
      static encode(message: IPrimaryVersionAction, writer?: any): any;
      static encodeDelimited(message: IPrimaryVersionAction, writer?: any): any;
      static decode(reader: any, length?: number): PrimaryVersionAction;
      static decodeDelimited(reader: any): PrimaryVersionAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrimaryVersionAction;
      static toObject(message: PrimaryVersionAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrivacySettingChannelsPersonalisedRecommendationAction { [key: string]: any }
    class PrivacySettingChannelsPersonalisedRecommendationAction implements IPrivacySettingChannelsPersonalisedRecommendationAction {
      [key: string]: any;
      constructor(properties?: IPrivacySettingChannelsPersonalisedRecommendationAction);
      static create(properties?: IPrivacySettingChannelsPersonalisedRecommendationAction): PrivacySettingChannelsPersonalisedRecommendationAction;
      static encode(message: IPrivacySettingChannelsPersonalisedRecommendationAction, writer?: any): any;
      static encodeDelimited(message: IPrivacySettingChannelsPersonalisedRecommendationAction, writer?: any): any;
      static decode(reader: any, length?: number): PrivacySettingChannelsPersonalisedRecommendationAction;
      static decodeDelimited(reader: any): PrivacySettingChannelsPersonalisedRecommendationAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrivacySettingChannelsPersonalisedRecommendationAction;
      static toObject(message: PrivacySettingChannelsPersonalisedRecommendationAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrivacySettingDisableLinkPreviewsAction { [key: string]: any }
    class PrivacySettingDisableLinkPreviewsAction implements IPrivacySettingDisableLinkPreviewsAction {
      [key: string]: any;
      constructor(properties?: IPrivacySettingDisableLinkPreviewsAction);
      static create(properties?: IPrivacySettingDisableLinkPreviewsAction): PrivacySettingDisableLinkPreviewsAction;
      static encode(message: IPrivacySettingDisableLinkPreviewsAction, writer?: any): any;
      static encodeDelimited(message: IPrivacySettingDisableLinkPreviewsAction, writer?: any): any;
      static decode(reader: any, length?: number): PrivacySettingDisableLinkPreviewsAction;
      static decodeDelimited(reader: any): PrivacySettingDisableLinkPreviewsAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrivacySettingDisableLinkPreviewsAction;
      static toObject(message: PrivacySettingDisableLinkPreviewsAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrivacySettingRelayAllCalls { [key: string]: any }
    class PrivacySettingRelayAllCalls implements IPrivacySettingRelayAllCalls {
      [key: string]: any;
      constructor(properties?: IPrivacySettingRelayAllCalls);
      static create(properties?: IPrivacySettingRelayAllCalls): PrivacySettingRelayAllCalls;
      static encode(message: IPrivacySettingRelayAllCalls, writer?: any): any;
      static encodeDelimited(message: IPrivacySettingRelayAllCalls, writer?: any): any;
      static decode(reader: any, length?: number): PrivacySettingRelayAllCalls;
      static decodeDelimited(reader: any): PrivacySettingRelayAllCalls;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrivacySettingRelayAllCalls;
      static toObject(message: PrivacySettingRelayAllCalls, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IPrivateProcessingSettingAction { [key: string]: any }
    class PrivateProcessingSettingAction implements IPrivateProcessingSettingAction {
      [key: string]: any;
      constructor(properties?: IPrivateProcessingSettingAction);
      static create(properties?: IPrivateProcessingSettingAction): PrivateProcessingSettingAction;
      static encode(message: IPrivateProcessingSettingAction, writer?: any): any;
      static encodeDelimited(message: IPrivateProcessingSettingAction, writer?: any): any;
      static decode(reader: any, length?: number): PrivateProcessingSettingAction;
      static decodeDelimited(reader: any): PrivateProcessingSettingAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PrivateProcessingSettingAction;
      static toObject(message: PrivateProcessingSettingAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace PrivateProcessingSettingAction {
      enum PrivateProcessingStatus {
        UNDEFINED = 0,
        ENABLED = 1,
        DISABLED = 2,
      }
    }
    interface IPushNameSetting { [key: string]: any }
    class PushNameSetting implements IPushNameSetting {
      [key: string]: any;
      constructor(properties?: IPushNameSetting);
      static create(properties?: IPushNameSetting): PushNameSetting;
      static encode(message: IPushNameSetting, writer?: any): any;
      static encodeDelimited(message: IPushNameSetting, writer?: any): any;
      static decode(reader: any, length?: number): PushNameSetting;
      static decodeDelimited(reader: any): PushNameSetting;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): PushNameSetting;
      static toObject(message: PushNameSetting, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IQuickReplyAction { [key: string]: any }
    class QuickReplyAction implements IQuickReplyAction {
      [key: string]: any;
      constructor(properties?: IQuickReplyAction);
      static create(properties?: IQuickReplyAction): QuickReplyAction;
      static encode(message: IQuickReplyAction, writer?: any): any;
      static encodeDelimited(message: IQuickReplyAction, writer?: any): any;
      static decode(reader: any, length?: number): QuickReplyAction;
      static decodeDelimited(reader: any): QuickReplyAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): QuickReplyAction;
      static toObject(message: QuickReplyAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRecentEmojiWeightsAction { [key: string]: any }
    class RecentEmojiWeightsAction implements IRecentEmojiWeightsAction {
      [key: string]: any;
      constructor(properties?: IRecentEmojiWeightsAction);
      static create(properties?: IRecentEmojiWeightsAction): RecentEmojiWeightsAction;
      static encode(message: IRecentEmojiWeightsAction, writer?: any): any;
      static encodeDelimited(message: IRecentEmojiWeightsAction, writer?: any): any;
      static decode(reader: any, length?: number): RecentEmojiWeightsAction;
      static decodeDelimited(reader: any): RecentEmojiWeightsAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RecentEmojiWeightsAction;
      static toObject(message: RecentEmojiWeightsAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IRemoveRecentStickerAction { [key: string]: any }
    class RemoveRecentStickerAction implements IRemoveRecentStickerAction {
      [key: string]: any;
      constructor(properties?: IRemoveRecentStickerAction);
      static create(properties?: IRemoveRecentStickerAction): RemoveRecentStickerAction;
      static encode(message: IRemoveRecentStickerAction, writer?: any): any;
      static encodeDelimited(message: IRemoveRecentStickerAction, writer?: any): any;
      static decode(reader: any, length?: number): RemoveRecentStickerAction;
      static decodeDelimited(reader: any): RemoveRecentStickerAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): RemoveRecentStickerAction;
      static toObject(message: RemoveRecentStickerAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISettingsSyncAction { [key: string]: any }
    class SettingsSyncAction implements ISettingsSyncAction {
      [key: string]: any;
      constructor(properties?: ISettingsSyncAction);
      static create(properties?: ISettingsSyncAction): SettingsSyncAction;
      static encode(message: ISettingsSyncAction, writer?: any): any;
      static encodeDelimited(message: ISettingsSyncAction, writer?: any): any;
      static decode(reader: any, length?: number): SettingsSyncAction;
      static decodeDelimited(reader: any): SettingsSyncAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SettingsSyncAction;
      static toObject(message: SettingsSyncAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace SettingsSyncAction {
      enum DisplayMode {
        DISPLAY_MODE_UNKNOWN = 0,
        ALWAYS = 1,
        NEVER = 2,
        ONLY_WHEN_APP_IS_OPEN = 3,
      }
      enum MediaQualitySetting {
        MEDIA_QUALITY_UNKNOWN = 0,
        STANDARD = 1,
        HD = 2,
      }
      enum SettingKey {
        SETTING_KEY_UNKNOWN = 0,
        START_AT_LOGIN = 1,
        MINIMIZE_TO_TRAY = 2,
        LANGUAGE = 3,
        REPLACE_TEXT_WITH_EMOJI = 4,
        BANNER_NOTIFICATION_DISPLAY_MODE = 5,
        UNREAD_COUNTER_BADGE_DISPLAY_MODE = 6,
        IS_MESSAGES_NOTIFICATION_ENABLED = 7,
        IS_CALLS_NOTIFICATION_ENABLED = 8,
        IS_REACTIONS_NOTIFICATION_ENABLED = 9,
        IS_STATUS_REACTIONS_NOTIFICATION_ENABLED = 10,
        IS_TEXT_PREVIEW_FOR_NOTIFICATION_ENABLED = 11,
        DEFAULT_NOTIFICATION_TONE_ID = 12,
        GROUP_DEFAULT_NOTIFICATION_TONE_ID = 13,
        APP_THEME = 14,
        WALLPAPER_ID = 15,
        IS_DOODLE_WALLPAPER_ENABLED = 16,
        FONT_SIZE = 17,
        IS_PHOTOS_AUTODOWNLOAD_ENABLED = 18,
        IS_AUDIOS_AUTODOWNLOAD_ENABLED = 19,
        IS_VIDEOS_AUTODOWNLOAD_ENABLED = 20,
        IS_DOCUMENTS_AUTODOWNLOAD_ENABLED = 21,
        DISABLE_LINK_PREVIEWS = 22,
        NOTIFICATION_TONE_ID = 23,
        MEDIA_UPLOAD_QUALITY = 24,
        IS_SPELL_CHECK_ENABLED = 25,
        IS_ENTER_TO_SEND_ENABLED = 26,
        IS_GROUP_MESSAGE_NOTIFICATION_ENABLED = 27,
        IS_GROUP_REACTIONS_NOTIFICATION_ENABLED = 28,
        IS_STATUS_NOTIFICATION_ENABLED = 29,
        STATUS_NOTIFICATION_TONE_ID = 30,
        SHOULD_PLAY_SOUND_FOR_CALL_NOTIFICATION = 31,
        CHAT_THEME_ID = 32,
        COLOR_SCHEME_ID = 33,
        STOCK_WALLPAPER_IMAGE_ID = 34,
      }
      enum SettingPlatform {
        PLATFORM_UNKNOWN = 0,
        WEB = 1,
        HYBRID = 2,
        WINDOWS = 3,
        MAC = 4,
      }
    }
    interface ISharedDeviceAllowlistAction { [key: string]: any }
    class SharedDeviceAllowlistAction implements ISharedDeviceAllowlistAction {
      [key: string]: any;
      constructor(properties?: ISharedDeviceAllowlistAction);
      static create(properties?: ISharedDeviceAllowlistAction): SharedDeviceAllowlistAction;
      static encode(message: ISharedDeviceAllowlistAction, writer?: any): any;
      static encodeDelimited(message: ISharedDeviceAllowlistAction, writer?: any): any;
      static decode(reader: any, length?: number): SharedDeviceAllowlistAction;
      static decodeDelimited(reader: any): SharedDeviceAllowlistAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SharedDeviceAllowlistAction;
      static toObject(message: SharedDeviceAllowlistAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStarAction { [key: string]: any }
    class StarAction implements IStarAction {
      [key: string]: any;
      constructor(properties?: IStarAction);
      static create(properties?: IStarAction): StarAction;
      static encode(message: IStarAction, writer?: any): any;
      static encodeDelimited(message: IStarAction, writer?: any): any;
      static decode(reader: any, length?: number): StarAction;
      static decodeDelimited(reader: any): StarAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StarAction;
      static toObject(message: StarAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStatusPostOptInNotificationPreferencesAction { [key: string]: any }
    class StatusPostOptInNotificationPreferencesAction implements IStatusPostOptInNotificationPreferencesAction {
      [key: string]: any;
      constructor(properties?: IStatusPostOptInNotificationPreferencesAction);
      static create(properties?: IStatusPostOptInNotificationPreferencesAction): StatusPostOptInNotificationPreferencesAction;
      static encode(message: IStatusPostOptInNotificationPreferencesAction, writer?: any): any;
      static encodeDelimited(message: IStatusPostOptInNotificationPreferencesAction, writer?: any): any;
      static decode(reader: any, length?: number): StatusPostOptInNotificationPreferencesAction;
      static decodeDelimited(reader: any): StatusPostOptInNotificationPreferencesAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusPostOptInNotificationPreferencesAction;
      static toObject(message: StatusPostOptInNotificationPreferencesAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IStatusPrivacyAction { [key: string]: any }
    class StatusPrivacyAction implements IStatusPrivacyAction {
      [key: string]: any;
      constructor(properties?: IStatusPrivacyAction);
      static create(properties?: IStatusPrivacyAction): StatusPrivacyAction;
      static encode(message: IStatusPrivacyAction, writer?: any): any;
      static encodeDelimited(message: IStatusPrivacyAction, writer?: any): any;
      static decode(reader: any, length?: number): StatusPrivacyAction;
      static decodeDelimited(reader: any): StatusPrivacyAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StatusPrivacyAction;
      static toObject(message: StatusPrivacyAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace StatusPrivacyAction {
      interface ICustomList { [key: string]: any }
      class CustomList implements ICustomList {
        [key: string]: any;
        constructor(properties?: ICustomList);
        static create(properties?: ICustomList): CustomList;
        static encode(message: ICustomList, writer?: any): any;
        static encodeDelimited(message: ICustomList, writer?: any): any;
        static decode(reader: any, length?: number): CustomList;
        static decodeDelimited(reader: any): CustomList;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): CustomList;
        static toObject(message: CustomList, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      enum StatusDistributionMode {
        ALLOW_LIST = 0,
        DENY_LIST = 1,
        CONTACTS = 2,
        CLOSE_FRIENDS = 3,
        CUSTOM_LIST = 4,
      }
    }
    interface IStickerAction { [key: string]: any }
    class StickerAction implements IStickerAction {
      [key: string]: any;
      constructor(properties?: IStickerAction);
      static create(properties?: IStickerAction): StickerAction;
      static encode(message: IStickerAction, writer?: any): any;
      static encodeDelimited(message: IStickerAction, writer?: any): any;
      static decode(reader: any, length?: number): StickerAction;
      static decodeDelimited(reader: any): StickerAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): StickerAction;
      static toObject(message: StickerAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISubscriptionAction { [key: string]: any }
    class SubscriptionAction implements ISubscriptionAction {
      [key: string]: any;
      constructor(properties?: ISubscriptionAction);
      static create(properties?: ISubscriptionAction): SubscriptionAction;
      static encode(message: ISubscriptionAction, writer?: any): any;
      static encodeDelimited(message: ISubscriptionAction, writer?: any): any;
      static decode(reader: any, length?: number): SubscriptionAction;
      static decodeDelimited(reader: any): SubscriptionAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SubscriptionAction;
      static toObject(message: SubscriptionAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISubscriptionsSyncV2Action { [key: string]: any }
    class SubscriptionsSyncV2Action implements ISubscriptionsSyncV2Action {
      [key: string]: any;
      constructor(properties?: ISubscriptionsSyncV2Action);
      static create(properties?: ISubscriptionsSyncV2Action): SubscriptionsSyncV2Action;
      static encode(message: ISubscriptionsSyncV2Action, writer?: any): any;
      static encodeDelimited(message: ISubscriptionsSyncV2Action, writer?: any): any;
      static decode(reader: any, length?: number): SubscriptionsSyncV2Action;
      static decodeDelimited(reader: any): SubscriptionsSyncV2Action;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SubscriptionsSyncV2Action;
      static toObject(message: SubscriptionsSyncV2Action, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace SubscriptionsSyncV2Action {
      interface IPaidFeature { [key: string]: any }
      class PaidFeature implements IPaidFeature {
        [key: string]: any;
        constructor(properties?: IPaidFeature);
        static create(properties?: IPaidFeature): PaidFeature;
        static encode(message: IPaidFeature, writer?: any): any;
        static encodeDelimited(message: IPaidFeature, writer?: any): any;
        static decode(reader: any, length?: number): PaidFeature;
        static decodeDelimited(reader: any): PaidFeature;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): PaidFeature;
        static toObject(message: PaidFeature, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      interface ISubscriptionInfo { [key: string]: any }
      class SubscriptionInfo implements ISubscriptionInfo {
        [key: string]: any;
        constructor(properties?: ISubscriptionInfo);
        static create(properties?: ISubscriptionInfo): SubscriptionInfo;
        static encode(message: ISubscriptionInfo, writer?: any): any;
        static encodeDelimited(message: ISubscriptionInfo, writer?: any): any;
        static decode(reader: any, length?: number): SubscriptionInfo;
        static decodeDelimited(reader: any): SubscriptionInfo;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): SubscriptionInfo;
        static toObject(message: SubscriptionInfo, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
    interface ISyncActionMessage { [key: string]: any }
    class SyncActionMessage implements ISyncActionMessage {
      [key: string]: any;
      constructor(properties?: ISyncActionMessage);
      static create(properties?: ISyncActionMessage): SyncActionMessage;
      static encode(message: ISyncActionMessage, writer?: any): any;
      static encodeDelimited(message: ISyncActionMessage, writer?: any): any;
      static decode(reader: any, length?: number): SyncActionMessage;
      static decodeDelimited(reader: any): SyncActionMessage;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SyncActionMessage;
      static toObject(message: SyncActionMessage, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ISyncActionMessageRange { [key: string]: any }
    class SyncActionMessageRange implements ISyncActionMessageRange {
      [key: string]: any;
      constructor(properties?: ISyncActionMessageRange);
      static create(properties?: ISyncActionMessageRange): SyncActionMessageRange;
      static encode(message: ISyncActionMessageRange, writer?: any): any;
      static encodeDelimited(message: ISyncActionMessageRange, writer?: any): any;
      static decode(reader: any, length?: number): SyncActionMessageRange;
      static decodeDelimited(reader: any): SyncActionMessageRange;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): SyncActionMessageRange;
      static toObject(message: SyncActionMessageRange, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IThreadPinAction { [key: string]: any }
    class ThreadPinAction implements IThreadPinAction {
      [key: string]: any;
      constructor(properties?: IThreadPinAction);
      static create(properties?: IThreadPinAction): ThreadPinAction;
      static encode(message: IThreadPinAction, writer?: any): any;
      static encodeDelimited(message: IThreadPinAction, writer?: any): any;
      static decode(reader: any, length?: number): ThreadPinAction;
      static decodeDelimited(reader: any): ThreadPinAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): ThreadPinAction;
      static toObject(message: ThreadPinAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface ITimeFormatAction { [key: string]: any }
    class TimeFormatAction implements ITimeFormatAction {
      [key: string]: any;
      constructor(properties?: ITimeFormatAction);
      static create(properties?: ITimeFormatAction): TimeFormatAction;
      static encode(message: ITimeFormatAction, writer?: any): any;
      static encodeDelimited(message: ITimeFormatAction, writer?: any): any;
      static decode(reader: any, length?: number): TimeFormatAction;
      static decodeDelimited(reader: any): TimeFormatAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): TimeFormatAction;
      static toObject(message: TimeFormatAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IUGCBot { [key: string]: any }
    class UGCBot implements IUGCBot {
      [key: string]: any;
      constructor(properties?: IUGCBot);
      static create(properties?: IUGCBot): UGCBot;
      static encode(message: IUGCBot, writer?: any): any;
      static encodeDelimited(message: IUGCBot, writer?: any): any;
      static decode(reader: any, length?: number): UGCBot;
      static decodeDelimited(reader: any): UGCBot;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UGCBot;
      static toObject(message: UGCBot, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IUnarchiveChatsSetting { [key: string]: any }
    class UnarchiveChatsSetting implements IUnarchiveChatsSetting {
      [key: string]: any;
      constructor(properties?: IUnarchiveChatsSetting);
      static create(properties?: IUnarchiveChatsSetting): UnarchiveChatsSetting;
      static encode(message: IUnarchiveChatsSetting, writer?: any): any;
      static encodeDelimited(message: IUnarchiveChatsSetting, writer?: any): any;
      static decode(reader: any, length?: number): UnarchiveChatsSetting;
      static decodeDelimited(reader: any): UnarchiveChatsSetting;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UnarchiveChatsSetting;
      static toObject(message: UnarchiveChatsSetting, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IUserStatusMuteAction { [key: string]: any }
    class UserStatusMuteAction implements IUserStatusMuteAction {
      [key: string]: any;
      constructor(properties?: IUserStatusMuteAction);
      static create(properties?: IUserStatusMuteAction): UserStatusMuteAction;
      static encode(message: IUserStatusMuteAction, writer?: any): any;
      static encodeDelimited(message: IUserStatusMuteAction, writer?: any): any;
      static decode(reader: any, length?: number): UserStatusMuteAction;
      static decodeDelimited(reader: any): UserStatusMuteAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UserStatusMuteAction;
      static toObject(message: UserStatusMuteAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IUsernameChatStartModeAction { [key: string]: any }
    class UsernameChatStartModeAction implements IUsernameChatStartModeAction {
      [key: string]: any;
      constructor(properties?: IUsernameChatStartModeAction);
      static create(properties?: IUsernameChatStartModeAction): UsernameChatStartModeAction;
      static encode(message: IUsernameChatStartModeAction, writer?: any): any;
      static encodeDelimited(message: IUsernameChatStartModeAction, writer?: any): any;
      static decode(reader: any, length?: number): UsernameChatStartModeAction;
      static decodeDelimited(reader: any): UsernameChatStartModeAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UsernameChatStartModeAction;
      static toObject(message: UsernameChatStartModeAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace UsernameChatStartModeAction {
      enum ChatStartMode {
        LID = 1,
        PN = 2,
      }
    }
    interface IWASARootSecretAction { [key: string]: any }
    class WASARootSecretAction implements IWASARootSecretAction {
      [key: string]: any;
      constructor(properties?: IWASARootSecretAction);
      static create(properties?: IWASARootSecretAction): WASARootSecretAction;
      static encode(message: IWASARootSecretAction, writer?: any): any;
      static encodeDelimited(message: IWASARootSecretAction, writer?: any): any;
      static decode(reader: any, length?: number): WASARootSecretAction;
      static decodeDelimited(reader: any): WASARootSecretAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): WASARootSecretAction;
      static toObject(message: WASARootSecretAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace WASARootSecretAction {
      interface IRootSecretEntry { [key: string]: any }
      class RootSecretEntry implements IRootSecretEntry {
        [key: string]: any;
        constructor(properties?: IRootSecretEntry);
        static create(properties?: IRootSecretEntry): RootSecretEntry;
        static encode(message: IRootSecretEntry, writer?: any): any;
        static encodeDelimited(message: IRootSecretEntry, writer?: any): any;
        static decode(reader: any, length?: number): RootSecretEntry;
        static decodeDelimited(reader: any): RootSecretEntry;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): RootSecretEntry;
        static toObject(message: RootSecretEntry, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
      namespace RootSecretEntry {
        enum Status {
          INACTIVE = 0,
          ACTIVE = 1,
        }
      }
    }
    interface IWaffleAccountLinkStateAction { [key: string]: any }
    class WaffleAccountLinkStateAction implements IWaffleAccountLinkStateAction {
      [key: string]: any;
      constructor(properties?: IWaffleAccountLinkStateAction);
      static create(properties?: IWaffleAccountLinkStateAction): WaffleAccountLinkStateAction;
      static encode(message: IWaffleAccountLinkStateAction, writer?: any): any;
      static encodeDelimited(message: IWaffleAccountLinkStateAction, writer?: any): any;
      static decode(reader: any, length?: number): WaffleAccountLinkStateAction;
      static decodeDelimited(reader: any): WaffleAccountLinkStateAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): WaffleAccountLinkStateAction;
      static toObject(message: WaffleAccountLinkStateAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace WaffleAccountLinkStateAction {
      enum AccountLinkState {
        ACTIVE = 0,
        PAUSED = 1,
        UNLINKED = 2,
      }
    }
    interface IWamoUserIdentifierAction { [key: string]: any }
    class WamoUserIdentifierAction implements IWamoUserIdentifierAction {
      [key: string]: any;
      constructor(properties?: IWamoUserIdentifierAction);
      static create(properties?: IWamoUserIdentifierAction): WamoUserIdentifierAction;
      static encode(message: IWamoUserIdentifierAction, writer?: any): any;
      static encodeDelimited(message: IWamoUserIdentifierAction, writer?: any): any;
      static decode(reader: any, length?: number): WamoUserIdentifierAction;
      static decodeDelimited(reader: any): WamoUserIdentifierAction;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): WamoUserIdentifierAction;
      static toObject(message: WamoUserIdentifierAction, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface ISyncdIndex { [key: string]: any }
  class SyncdIndex implements ISyncdIndex {
    [key: string]: any;
    constructor(properties?: ISyncdIndex);
    static create(properties?: ISyncdIndex): SyncdIndex;
    static encode(message: ISyncdIndex, writer?: any): any;
    static encodeDelimited(message: ISyncdIndex, writer?: any): any;
    static decode(reader: any, length?: number): SyncdIndex;
    static decodeDelimited(reader: any): SyncdIndex;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdIndex;
    static toObject(message: SyncdIndex, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdMutation { [key: string]: any }
  class SyncdMutation implements ISyncdMutation {
    [key: string]: any;
    constructor(properties?: ISyncdMutation);
    static create(properties?: ISyncdMutation): SyncdMutation;
    static encode(message: ISyncdMutation, writer?: any): any;
    static encodeDelimited(message: ISyncdMutation, writer?: any): any;
    static decode(reader: any, length?: number): SyncdMutation;
    static decodeDelimited(reader: any): SyncdMutation;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdMutation;
    static toObject(message: SyncdMutation, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace SyncdMutation {
    enum SyncdOperation {
      SET = 0,
      REMOVE = 1,
    }
  }
  interface ISyncdMutations { [key: string]: any }
  class SyncdMutations implements ISyncdMutations {
    [key: string]: any;
    constructor(properties?: ISyncdMutations);
    static create(properties?: ISyncdMutations): SyncdMutations;
    static encode(message: ISyncdMutations, writer?: any): any;
    static encodeDelimited(message: ISyncdMutations, writer?: any): any;
    static decode(reader: any, length?: number): SyncdMutations;
    static decodeDelimited(reader: any): SyncdMutations;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdMutations;
    static toObject(message: SyncdMutations, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdPatch { [key: string]: any }
  class SyncdPatch implements ISyncdPatch {
    [key: string]: any;
    constructor(properties?: ISyncdPatch);
    static create(properties?: ISyncdPatch): SyncdPatch;
    static encode(message: ISyncdPatch, writer?: any): any;
    static encodeDelimited(message: ISyncdPatch, writer?: any): any;
    static decode(reader: any, length?: number): SyncdPatch;
    static decodeDelimited(reader: any): SyncdPatch;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdPatch;
    static toObject(message: SyncdPatch, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdPlainTextRecord { [key: string]: any }
  class SyncdPlainTextRecord implements ISyncdPlainTextRecord {
    [key: string]: any;
    constructor(properties?: ISyncdPlainTextRecord);
    static create(properties?: ISyncdPlainTextRecord): SyncdPlainTextRecord;
    static encode(message: ISyncdPlainTextRecord, writer?: any): any;
    static encodeDelimited(message: ISyncdPlainTextRecord, writer?: any): any;
    static decode(reader: any, length?: number): SyncdPlainTextRecord;
    static decodeDelimited(reader: any): SyncdPlainTextRecord;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdPlainTextRecord;
    static toObject(message: SyncdPlainTextRecord, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdRecord { [key: string]: any }
  class SyncdRecord implements ISyncdRecord {
    [key: string]: any;
    constructor(properties?: ISyncdRecord);
    static create(properties?: ISyncdRecord): SyncdRecord;
    static encode(message: ISyncdRecord, writer?: any): any;
    static encodeDelimited(message: ISyncdRecord, writer?: any): any;
    static decode(reader: any, length?: number): SyncdRecord;
    static decodeDelimited(reader: any): SyncdRecord;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdRecord;
    static toObject(message: SyncdRecord, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdSnapshot { [key: string]: any }
  class SyncdSnapshot implements ISyncdSnapshot {
    [key: string]: any;
    constructor(properties?: ISyncdSnapshot);
    static create(properties?: ISyncdSnapshot): SyncdSnapshot;
    static encode(message: ISyncdSnapshot, writer?: any): any;
    static encodeDelimited(message: ISyncdSnapshot, writer?: any): any;
    static decode(reader: any, length?: number): SyncdSnapshot;
    static decodeDelimited(reader: any): SyncdSnapshot;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdSnapshot;
    static toObject(message: SyncdSnapshot, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdSnapshotRecovery { [key: string]: any }
  class SyncdSnapshotRecovery implements ISyncdSnapshotRecovery {
    [key: string]: any;
    constructor(properties?: ISyncdSnapshotRecovery);
    static create(properties?: ISyncdSnapshotRecovery): SyncdSnapshotRecovery;
    static encode(message: ISyncdSnapshotRecovery, writer?: any): any;
    static encodeDelimited(message: ISyncdSnapshotRecovery, writer?: any): any;
    static decode(reader: any, length?: number): SyncdSnapshotRecovery;
    static decodeDelimited(reader: any): SyncdSnapshotRecovery;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdSnapshotRecovery;
    static toObject(message: SyncdSnapshotRecovery, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdValue { [key: string]: any }
  class SyncdValue implements ISyncdValue {
    [key: string]: any;
    constructor(properties?: ISyncdValue);
    static create(properties?: ISyncdValue): SyncdValue;
    static encode(message: ISyncdValue, writer?: any): any;
    static encodeDelimited(message: ISyncdValue, writer?: any): any;
    static decode(reader: any, length?: number): SyncdValue;
    static decodeDelimited(reader: any): SyncdValue;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdValue;
    static toObject(message: SyncdValue, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ISyncdVersion { [key: string]: any }
  class SyncdVersion implements ISyncdVersion {
    [key: string]: any;
    constructor(properties?: ISyncdVersion);
    static create(properties?: ISyncdVersion): SyncdVersion;
    static encode(message: ISyncdVersion, writer?: any): any;
    static encodeDelimited(message: ISyncdVersion, writer?: any): any;
    static decode(reader: any, length?: number): SyncdVersion;
    static decodeDelimited(reader: any): SyncdVersion;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): SyncdVersion;
    static toObject(message: SyncdVersion, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ITapLinkAction { [key: string]: any }
  class TapLinkAction implements ITapLinkAction {
    [key: string]: any;
    constructor(properties?: ITapLinkAction);
    static create(properties?: ITapLinkAction): TapLinkAction;
    static encode(message: ITapLinkAction, writer?: any): any;
    static encodeDelimited(message: ITapLinkAction, writer?: any): any;
    static decode(reader: any, length?: number): TapLinkAction;
    static decodeDelimited(reader: any): TapLinkAction;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): TapLinkAction;
    static toObject(message: TapLinkAction, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface ITemplateButton { [key: string]: any }
  class TemplateButton implements ITemplateButton {
    [key: string]: any;
    constructor(properties?: ITemplateButton);
    static create(properties?: ITemplateButton): TemplateButton;
    static encode(message: ITemplateButton, writer?: any): any;
    static encodeDelimited(message: ITemplateButton, writer?: any): any;
    static decode(reader: any, length?: number): TemplateButton;
    static decodeDelimited(reader: any): TemplateButton;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): TemplateButton;
    static toObject(message: TemplateButton, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace TemplateButton {
    interface ICallButton { [key: string]: any }
    class CallButton implements ICallButton {
      [key: string]: any;
      constructor(properties?: ICallButton);
      static create(properties?: ICallButton): CallButton;
      static encode(message: ICallButton, writer?: any): any;
      static encodeDelimited(message: ICallButton, writer?: any): any;
      static decode(reader: any, length?: number): CallButton;
      static decodeDelimited(reader: any): CallButton;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): CallButton;
      static toObject(message: CallButton, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IQuickReplyButton { [key: string]: any }
    class QuickReplyButton implements IQuickReplyButton {
      [key: string]: any;
      constructor(properties?: IQuickReplyButton);
      static create(properties?: IQuickReplyButton): QuickReplyButton;
      static encode(message: IQuickReplyButton, writer?: any): any;
      static encodeDelimited(message: IQuickReplyButton, writer?: any): any;
      static decode(reader: any, length?: number): QuickReplyButton;
      static decodeDelimited(reader: any): QuickReplyButton;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): QuickReplyButton;
      static toObject(message: QuickReplyButton, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    interface IURLButton { [key: string]: any }
    class URLButton implements IURLButton {
      [key: string]: any;
      constructor(properties?: IURLButton);
      static create(properties?: IURLButton): URLButton;
      static encode(message: IURLButton, writer?: any): any;
      static encodeDelimited(message: IURLButton, writer?: any): any;
      static decode(reader: any, length?: number): URLButton;
      static decodeDelimited(reader: any): URLButton;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): URLButton;
      static toObject(message: URLButton, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IThreadID { [key: string]: any }
  class ThreadID implements IThreadID {
    [key: string]: any;
    constructor(properties?: IThreadID);
    static create(properties?: IThreadID): ThreadID;
    static encode(message: IThreadID, writer?: any): any;
    static encodeDelimited(message: IThreadID, writer?: any): any;
    static decode(reader: any, length?: number): ThreadID;
    static decodeDelimited(reader: any): ThreadID;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): ThreadID;
    static toObject(message: ThreadID, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace ThreadID {
    enum ThreadType {
      UNKNOWN = 0,
      VIEW_REPLIES = 1,
      AI_THREAD = 2,
    }
  }
  interface IUnCountedAssociatedMessageList { [key: string]: any }
  class UnCountedAssociatedMessageList implements IUnCountedAssociatedMessageList {
    [key: string]: any;
    constructor(properties?: IUnCountedAssociatedMessageList);
    static create(properties?: IUnCountedAssociatedMessageList): UnCountedAssociatedMessageList;
    static encode(message: IUnCountedAssociatedMessageList, writer?: any): any;
    static encodeDelimited(message: IUnCountedAssociatedMessageList, writer?: any): any;
    static decode(reader: any, length?: number): UnCountedAssociatedMessageList;
    static decodeDelimited(reader: any): UnCountedAssociatedMessageList;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): UnCountedAssociatedMessageList;
    static toObject(message: UnCountedAssociatedMessageList, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IUnCountedAssociatedMessageListWithMessageBytes { [key: string]: any }
  class UnCountedAssociatedMessageListWithMessageBytes implements IUnCountedAssociatedMessageListWithMessageBytes {
    [key: string]: any;
    constructor(properties?: IUnCountedAssociatedMessageListWithMessageBytes);
    static create(properties?: IUnCountedAssociatedMessageListWithMessageBytes): UnCountedAssociatedMessageListWithMessageBytes;
    static encode(message: IUnCountedAssociatedMessageListWithMessageBytes, writer?: any): any;
    static encodeDelimited(message: IUnCountedAssociatedMessageListWithMessageBytes, writer?: any): any;
    static decode(reader: any, length?: number): UnCountedAssociatedMessageListWithMessageBytes;
    static decodeDelimited(reader: any): UnCountedAssociatedMessageListWithMessageBytes;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): UnCountedAssociatedMessageListWithMessageBytes;
    static toObject(message: UnCountedAssociatedMessageListWithMessageBytes, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IUrlTrackingMap { [key: string]: any }
  class UrlTrackingMap implements IUrlTrackingMap {
    [key: string]: any;
    constructor(properties?: IUrlTrackingMap);
    static create(properties?: IUrlTrackingMap): UrlTrackingMap;
    static encode(message: IUrlTrackingMap, writer?: any): any;
    static encodeDelimited(message: IUrlTrackingMap, writer?: any): any;
    static decode(reader: any, length?: number): UrlTrackingMap;
    static decodeDelimited(reader: any): UrlTrackingMap;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): UrlTrackingMap;
    static toObject(message: UrlTrackingMap, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace UrlTrackingMap {
    interface IUrlTrackingMapElement { [key: string]: any }
    class UrlTrackingMapElement implements IUrlTrackingMapElement {
      [key: string]: any;
      constructor(properties?: IUrlTrackingMapElement);
      static create(properties?: IUrlTrackingMapElement): UrlTrackingMapElement;
      static encode(message: IUrlTrackingMapElement, writer?: any): any;
      static encodeDelimited(message: IUrlTrackingMapElement, writer?: any): any;
      static decode(reader: any, length?: number): UrlTrackingMapElement;
      static decodeDelimited(reader: any): UrlTrackingMapElement;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): UrlTrackingMapElement;
      static toObject(message: UrlTrackingMapElement, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IUserPassword { [key: string]: any }
  class UserPassword implements IUserPassword {
    [key: string]: any;
    constructor(properties?: IUserPassword);
    static create(properties?: IUserPassword): UserPassword;
    static encode(message: IUserPassword, writer?: any): any;
    static encodeDelimited(message: IUserPassword, writer?: any): any;
    static decode(reader: any, length?: number): UserPassword;
    static decodeDelimited(reader: any): UserPassword;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): UserPassword;
    static toObject(message: UserPassword, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace UserPassword {
    enum Encoding {
      UTF8 = 0,
      UTF8_BROKEN = 1,
    }
    enum Transformer {
      NONE = 0,
      PBKDF2_HMAC_SHA512 = 1,
      PBKDF2_HMAC_SHA384 = 2,
    }
    interface ITransformerArg { [key: string]: any }
    class TransformerArg implements ITransformerArg {
      [key: string]: any;
      constructor(properties?: ITransformerArg);
      static create(properties?: ITransformerArg): TransformerArg;
      static encode(message: ITransformerArg, writer?: any): any;
      static encodeDelimited(message: ITransformerArg, writer?: any): any;
      static decode(reader: any, length?: number): TransformerArg;
      static decodeDelimited(reader: any): TransformerArg;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): TransformerArg;
      static toObject(message: TransformerArg, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
    namespace TransformerArg {
      interface IValue { [key: string]: any }
      class Value implements IValue {
        [key: string]: any;
        constructor(properties?: IValue);
        static create(properties?: IValue): Value;
        static encode(message: IValue, writer?: any): any;
        static encodeDelimited(message: IValue, writer?: any): any;
        static decode(reader: any, length?: number): Value;
        static decodeDelimited(reader: any): Value;
        static verify(message: { [key: string]: any }): string | null;
        static fromObject(object: { [key: string]: any }): Value;
        static toObject(message: Value, options?: any): { [key: string]: any };
        toJSON(): { [key: string]: any };
        static getTypeUrl(typeUrlPrefix?: string): string;
      }
    }
  }
  interface IUserReceipt { [key: string]: any }
  class UserReceipt implements IUserReceipt {
    [key: string]: any;
    constructor(properties?: IUserReceipt);
    static create(properties?: IUserReceipt): UserReceipt;
    static encode(message: IUserReceipt, writer?: any): any;
    static encodeDelimited(message: IUserReceipt, writer?: any): any;
    static decode(reader: any, length?: number): UserReceipt;
    static decodeDelimited(reader: any): UserReceipt;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): UserReceipt;
    static toObject(message: UserReceipt, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IVerifiedNameCertificate { [key: string]: any }
  class VerifiedNameCertificate implements IVerifiedNameCertificate {
    [key: string]: any;
    constructor(properties?: IVerifiedNameCertificate);
    static create(properties?: IVerifiedNameCertificate): VerifiedNameCertificate;
    static encode(message: IVerifiedNameCertificate, writer?: any): any;
    static encodeDelimited(message: IVerifiedNameCertificate, writer?: any): any;
    static decode(reader: any, length?: number): VerifiedNameCertificate;
    static decodeDelimited(reader: any): VerifiedNameCertificate;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): VerifiedNameCertificate;
    static toObject(message: VerifiedNameCertificate, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace VerifiedNameCertificate {
    interface IDetails { [key: string]: any }
    class Details implements IDetails {
      [key: string]: any;
      constructor(properties?: IDetails);
      static create(properties?: IDetails): Details;
      static encode(message: IDetails, writer?: any): any;
      static encodeDelimited(message: IDetails, writer?: any): any;
      static decode(reader: any, length?: number): Details;
      static decodeDelimited(reader: any): Details;
      static verify(message: { [key: string]: any }): string | null;
      static fromObject(object: { [key: string]: any }): Details;
      static toObject(message: Details, options?: any): { [key: string]: any };
      toJSON(): { [key: string]: any };
      static getTypeUrl(typeUrlPrefix?: string): string;
    }
  }
  interface IVirtualDeviceOutput { [key: string]: any }
  class VirtualDeviceOutput implements IVirtualDeviceOutput {
    [key: string]: any;
    constructor(properties?: IVirtualDeviceOutput);
    static create(properties?: IVirtualDeviceOutput): VirtualDeviceOutput;
    static encode(message: IVirtualDeviceOutput, writer?: any): any;
    static encodeDelimited(message: IVirtualDeviceOutput, writer?: any): any;
    static decode(reader: any, length?: number): VirtualDeviceOutput;
    static decodeDelimited(reader: any): VirtualDeviceOutput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): VirtualDeviceOutput;
    static toObject(message: VirtualDeviceOutput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWallpaperSettings { [key: string]: any }
  class WallpaperSettings implements IWallpaperSettings {
    [key: string]: any;
    constructor(properties?: IWallpaperSettings);
    static create(properties?: IWallpaperSettings): WallpaperSettings;
    static encode(message: IWallpaperSettings, writer?: any): any;
    static encodeDelimited(message: IWallpaperSettings, writer?: any): any;
    static decode(reader: any, length?: number): WallpaperSettings;
    static decodeDelimited(reader: any): WallpaperSettings;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WallpaperSettings;
    static toObject(message: WallpaperSettings, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWebFeatures { [key: string]: any }
  class WebFeatures implements IWebFeatures {
    [key: string]: any;
    constructor(properties?: IWebFeatures);
    static create(properties?: IWebFeatures): WebFeatures;
    static encode(message: IWebFeatures, writer?: any): any;
    static encodeDelimited(message: IWebFeatures, writer?: any): any;
    static decode(reader: any, length?: number): WebFeatures;
    static decodeDelimited(reader: any): WebFeatures;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WebFeatures;
    static toObject(message: WebFeatures, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace WebFeatures {
    enum Flag {
      NOT_STARTED = 0,
      FORCE_UPGRADE = 1,
      DEVELOPMENT = 2,
      PRODUCTION = 3,
    }
  }
  enum WebLinkRenderConfig {
    WEBVIEW = 0,
    SYSTEM = 1,
  }
  interface IWebMessageInfo { [key: string]: any }
  class WebMessageInfo implements IWebMessageInfo {
    [key: string]: any;
    constructor(properties?: IWebMessageInfo);
    static create(properties?: IWebMessageInfo): WebMessageInfo;
    static encode(message: IWebMessageInfo, writer?: any): any;
    static encodeDelimited(message: IWebMessageInfo, writer?: any): any;
    static decode(reader: any, length?: number): WebMessageInfo;
    static decodeDelimited(reader: any): WebMessageInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WebMessageInfo;
    static toObject(message: WebMessageInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  namespace WebMessageInfo {
    enum BizPrivacyStatus {
      E2EE = 0,
      FB = 2,
      BSP = 1,
      BSP_AND_FB = 3,
    }
    enum Status {
      ERROR = 0,
      PENDING = 1,
      SERVER_ACK = 2,
      DELIVERY_ACK = 3,
      READ = 4,
      PLAYED = 5,
    }
    enum StubType {
      UNKNOWN = 0,
      REVOKE = 1,
      CIPHERTEXT = 2,
      FUTUREPROOF = 3,
      NON_VERIFIED_TRANSITION = 4,
      UNVERIFIED_TRANSITION = 5,
      VERIFIED_TRANSITION = 6,
      VERIFIED_LOW_UNKNOWN = 7,
      VERIFIED_HIGH = 8,
      VERIFIED_INITIAL_UNKNOWN = 9,
      VERIFIED_INITIAL_LOW = 10,
      VERIFIED_INITIAL_HIGH = 11,
      VERIFIED_TRANSITION_ANY_TO_NONE = 12,
      VERIFIED_TRANSITION_ANY_TO_HIGH = 13,
      VERIFIED_TRANSITION_HIGH_TO_LOW = 14,
      VERIFIED_TRANSITION_HIGH_TO_UNKNOWN = 15,
      VERIFIED_TRANSITION_UNKNOWN_TO_LOW = 16,
      VERIFIED_TRANSITION_LOW_TO_UNKNOWN = 17,
      VERIFIED_TRANSITION_NONE_TO_LOW = 18,
      VERIFIED_TRANSITION_NONE_TO_UNKNOWN = 19,
      GROUP_CREATE = 20,
      GROUP_CHANGE_SUBJECT = 21,
      GROUP_CHANGE_ICON = 22,
      GROUP_CHANGE_INVITE_LINK = 23,
      GROUP_CHANGE_DESCRIPTION = 24,
      GROUP_CHANGE_RESTRICT = 25,
      GROUP_CHANGE_ANNOUNCE = 26,
      GROUP_PARTICIPANT_ADD = 27,
      GROUP_PARTICIPANT_REMOVE = 28,
      GROUP_PARTICIPANT_PROMOTE = 29,
      GROUP_PARTICIPANT_DEMOTE = 30,
      GROUP_PARTICIPANT_INVITE = 31,
      GROUP_PARTICIPANT_LEAVE = 32,
      GROUP_PARTICIPANT_CHANGE_NUMBER = 33,
      BROADCAST_CREATE = 34,
      BROADCAST_ADD = 35,
      BROADCAST_REMOVE = 36,
      GENERIC_NOTIFICATION = 37,
      E2E_IDENTITY_CHANGED = 38,
      E2E_ENCRYPTED = 39,
      CALL_MISSED_VOICE = 40,
      CALL_MISSED_VIDEO = 41,
      INDIVIDUAL_CHANGE_NUMBER = 42,
      GROUP_DELETE = 43,
      GROUP_ANNOUNCE_MODE_MESSAGE_BOUNCE = 44,
      CALL_MISSED_GROUP_VOICE = 45,
      CALL_MISSED_GROUP_VIDEO = 46,
      PAYMENT_CIPHERTEXT = 47,
      PAYMENT_FUTUREPROOF = 48,
      PAYMENT_TRANSACTION_STATUS_UPDATE_FAILED = 49,
      PAYMENT_TRANSACTION_STATUS_UPDATE_REFUNDED = 50,
      PAYMENT_TRANSACTION_STATUS_UPDATE_REFUND_FAILED = 51,
      PAYMENT_TRANSACTION_STATUS_RECEIVER_PENDING_SETUP = 52,
      PAYMENT_TRANSACTION_STATUS_RECEIVER_SUCCESS_AFTER_HICCUP = 53,
      PAYMENT_ACTION_ACCOUNT_SETUP_REMINDER = 54,
      PAYMENT_ACTION_SEND_PAYMENT_REMINDER = 55,
      PAYMENT_ACTION_SEND_PAYMENT_INVITATION = 56,
      PAYMENT_ACTION_REQUEST_DECLINED = 57,
      PAYMENT_ACTION_REQUEST_EXPIRED = 58,
      PAYMENT_ACTION_REQUEST_CANCELLED = 59,
      BIZ_VERIFIED_TRANSITION_TOP_TO_BOTTOM = 60,
      BIZ_VERIFIED_TRANSITION_BOTTOM_TO_TOP = 61,
      BIZ_INTRO_TOP = 62,
      BIZ_INTRO_BOTTOM = 63,
      BIZ_NAME_CHANGE = 64,
      BIZ_MOVE_TO_CONSUMER_APP = 65,
      BIZ_TWO_TIER_MIGRATION_TOP = 66,
      BIZ_TWO_TIER_MIGRATION_BOTTOM = 67,
      OVERSIZED = 68,
      GROUP_CHANGE_NO_FREQUENTLY_FORWARDED = 69,
      GROUP_V4_ADD_INVITE_SENT = 70,
      GROUP_PARTICIPANT_ADD_REQUEST_JOIN = 71,
      CHANGE_EPHEMERAL_SETTING = 72,
      E2E_DEVICE_CHANGED = 73,
      VIEWED_ONCE = 74,
      E2E_ENCRYPTED_NOW = 75,
      BLUE_MSG_BSP_FB_TO_BSP_PREMISE = 76,
      BLUE_MSG_BSP_FB_TO_SELF_FB = 77,
      BLUE_MSG_BSP_FB_TO_SELF_PREMISE = 78,
      BLUE_MSG_BSP_FB_UNVERIFIED = 79,
      BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 80,
      BLUE_MSG_BSP_FB_VERIFIED = 81,
      BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 82,
      BLUE_MSG_BSP_PREMISE_TO_SELF_PREMISE = 83,
      BLUE_MSG_BSP_PREMISE_UNVERIFIED = 84,
      BLUE_MSG_BSP_PREMISE_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 85,
      BLUE_MSG_BSP_PREMISE_VERIFIED = 86,
      BLUE_MSG_BSP_PREMISE_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 87,
      BLUE_MSG_CONSUMER_TO_BSP_FB_UNVERIFIED = 88,
      BLUE_MSG_CONSUMER_TO_BSP_PREMISE_UNVERIFIED = 89,
      BLUE_MSG_CONSUMER_TO_SELF_FB_UNVERIFIED = 90,
      BLUE_MSG_CONSUMER_TO_SELF_PREMISE_UNVERIFIED = 91,
      BLUE_MSG_SELF_FB_TO_BSP_PREMISE = 92,
      BLUE_MSG_SELF_FB_TO_SELF_PREMISE = 93,
      BLUE_MSG_SELF_FB_UNVERIFIED = 94,
      BLUE_MSG_SELF_FB_UNVERIFIED_TO_SELF_PREMISE_VERIFIED = 95,
      BLUE_MSG_SELF_FB_VERIFIED = 96,
      BLUE_MSG_SELF_FB_VERIFIED_TO_SELF_PREMISE_UNVERIFIED = 97,
      BLUE_MSG_SELF_PREMISE_TO_BSP_PREMISE = 98,
      BLUE_MSG_SELF_PREMISE_UNVERIFIED = 99,
      BLUE_MSG_SELF_PREMISE_VERIFIED = 100,
      BLUE_MSG_TO_BSP_FB = 101,
      BLUE_MSG_TO_CONSUMER = 102,
      BLUE_MSG_TO_SELF_FB = 103,
      BLUE_MSG_UNVERIFIED_TO_BSP_FB_VERIFIED = 104,
      BLUE_MSG_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 105,
      BLUE_MSG_UNVERIFIED_TO_SELF_FB_VERIFIED = 106,
      BLUE_MSG_UNVERIFIED_TO_VERIFIED = 107,
      BLUE_MSG_VERIFIED_TO_BSP_FB_UNVERIFIED = 108,
      BLUE_MSG_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 109,
      BLUE_MSG_VERIFIED_TO_SELF_FB_UNVERIFIED = 110,
      BLUE_MSG_VERIFIED_TO_UNVERIFIED = 111,
      BLUE_MSG_BSP_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 112,
      BLUE_MSG_BSP_FB_UNVERIFIED_TO_SELF_FB_VERIFIED = 113,
      BLUE_MSG_BSP_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 114,
      BLUE_MSG_BSP_FB_VERIFIED_TO_SELF_FB_UNVERIFIED = 115,
      BLUE_MSG_SELF_FB_UNVERIFIED_TO_BSP_PREMISE_VERIFIED = 116,
      BLUE_MSG_SELF_FB_VERIFIED_TO_BSP_PREMISE_UNVERIFIED = 117,
      E2E_IDENTITY_UNAVAILABLE = 118,
      GROUP_CREATING = 119,
      GROUP_CREATE_FAILED = 120,
      GROUP_BOUNCED = 121,
      BLOCK_CONTACT = 122,
      EPHEMERAL_SETTING_NOT_APPLIED = 123,
      SYNC_FAILED = 124,
      SYNCING = 125,
      BIZ_PRIVACY_MODE_INIT_FB = 126,
      BIZ_PRIVACY_MODE_INIT_BSP = 127,
      BIZ_PRIVACY_MODE_TO_FB = 128,
      BIZ_PRIVACY_MODE_TO_BSP = 129,
      DISAPPEARING_MODE = 130,
      E2E_DEVICE_FETCH_FAILED = 131,
      ADMIN_REVOKE = 132,
      GROUP_INVITE_LINK_GROWTH_LOCKED = 133,
      COMMUNITY_LINK_PARENT_GROUP = 134,
      COMMUNITY_LINK_SIBLING_GROUP = 135,
      COMMUNITY_LINK_SUB_GROUP = 136,
      COMMUNITY_UNLINK_PARENT_GROUP = 137,
      COMMUNITY_UNLINK_SIBLING_GROUP = 138,
      COMMUNITY_UNLINK_SUB_GROUP = 139,
      GROUP_PARTICIPANT_ACCEPT = 140,
      GROUP_PARTICIPANT_LINKED_GROUP_JOIN = 141,
      COMMUNITY_CREATE = 142,
      EPHEMERAL_KEEP_IN_CHAT = 143,
      GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST = 144,
      GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE = 145,
      INTEGRITY_UNLINK_PARENT_GROUP = 146,
      COMMUNITY_PARTICIPANT_PROMOTE = 147,
      COMMUNITY_PARTICIPANT_DEMOTE = 148,
      COMMUNITY_PARENT_GROUP_DELETED = 149,
      COMMUNITY_LINK_PARENT_GROUP_MEMBERSHIP_APPROVAL = 150,
      GROUP_PARTICIPANT_JOINED_GROUP_AND_PARENT_GROUP = 151,
      MASKED_THREAD_CREATED = 152,
      MASKED_THREAD_UNMASKED = 153,
      BIZ_CHAT_ASSIGNMENT = 154,
      CHAT_PSA = 155,
      CHAT_POLL_CREATION_MESSAGE = 156,
      CAG_MASKED_THREAD_CREATED = 157,
      COMMUNITY_PARENT_GROUP_SUBJECT_CHANGED = 158,
      CAG_INVITE_AUTO_ADD = 159,
      BIZ_CHAT_ASSIGNMENT_UNASSIGN = 160,
      CAG_INVITE_AUTO_JOINED = 161,
      SCHEDULED_CALL_START_MESSAGE = 162,
      COMMUNITY_INVITE_RICH = 163,
      COMMUNITY_INVITE_AUTO_ADD_RICH = 164,
      SUB_GROUP_INVITE_RICH = 165,
      SUB_GROUP_PARTICIPANT_ADD_RICH = 166,
      COMMUNITY_LINK_PARENT_GROUP_RICH = 167,
      COMMUNITY_PARTICIPANT_ADD_RICH = 168,
      SILENCED_UNKNOWN_CALLER_AUDIO = 169,
      SILENCED_UNKNOWN_CALLER_VIDEO = 170,
      GROUP_MEMBER_ADD_MODE = 171,
      GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD = 172,
      COMMUNITY_CHANGE_DESCRIPTION = 173,
      SENDER_INVITE = 174,
      RECEIVER_INVITE = 175,
      COMMUNITY_ALLOW_MEMBER_ADDED_GROUPS = 176,
      PINNED_MESSAGE_IN_CHAT = 177,
      PAYMENT_INVITE_SETUP_INVITER = 178,
      PAYMENT_INVITE_SETUP_INVITEE_RECEIVE_ONLY = 179,
      PAYMENT_INVITE_SETUP_INVITEE_SEND_AND_RECEIVE = 180,
      LINKED_GROUP_CALL_START = 181,
      REPORT_TO_ADMIN_ENABLED_STATUS = 182,
      EMPTY_SUBGROUP_CREATE = 183,
      SCHEDULED_CALL_CANCEL = 184,
      SUBGROUP_ADMIN_TRIGGERED_AUTO_ADD_RICH = 185,
      GROUP_CHANGE_RECENT_HISTORY_SHARING = 186,
      PAID_MESSAGE_SERVER_CAMPAIGN_ID = 187,
      GENERAL_CHAT_CREATE = 188,
      GENERAL_CHAT_ADD = 189,
      GENERAL_CHAT_AUTO_ADD_DISABLED = 190,
      SUGGESTED_SUBGROUP_ANNOUNCE = 191,
      BIZ_BOT_1P_MESSAGING_ENABLED = 192,
      CHANGE_USERNAME = 193,
      BIZ_COEX_PRIVACY_INIT_SELF = 194,
      BIZ_COEX_PRIVACY_TRANSITION_SELF = 195,
      SUPPORT_AI_EDUCATION = 196,
      BIZ_BOT_3P_MESSAGING_ENABLED = 197,
      REMINDER_SETUP_MESSAGE = 198,
      REMINDER_SENT_MESSAGE = 199,
      REMINDER_CANCEL_MESSAGE = 200,
      BIZ_COEX_PRIVACY_INIT = 201,
      BIZ_COEX_PRIVACY_TRANSITION = 202,
      GROUP_DEACTIVATED = 203,
      COMMUNITY_DEACTIVATE_SIBLING_GROUP = 204,
      EVENT_UPDATED = 205,
      EVENT_CANCELED = 206,
      COMMUNITY_OWNER_UPDATED = 207,
      COMMUNITY_SUB_GROUP_VISIBILITY_HIDDEN = 208,
      CAPI_GROUP_NE2EE_SYSTEM_MESSAGE = 209,
      STATUS_MENTION = 210,
      USER_CONTROLS_SYSTEM_MESSAGE = 211,
      SUPPORT_SYSTEM_MESSAGE = 212,
      CHANGE_LID = 213,
      BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_IN_MESSAGE = 214,
      BIZ_CUSTOMER_3PD_DATA_SHARING_OPT_OUT_MESSAGE = 215,
      CHANGE_LIMIT_SHARING = 216,
      GROUP_MEMBER_LINK_MODE = 217,
      BIZ_AUTOMATICALLY_LABELED_CHAT_SYSTEM_MESSAGE = 218,
      PHONE_NUMBER_HIDING_CHAT_DEPRECATED_MESSAGE = 219,
      QUARANTINED_MESSAGE = 220,
      GROUP_MEMBER_SHARE_GROUP_HISTORY_MODE = 221,
      GROUP_OPEN_BOT_ADDED = 222,
      GROUP_TEE_BOT_ADDED = 223,
      CONTACT_INFO = 224,
      SCHEDULED_MESSAGE_CREATED = 225,
      IDENTITY_TRUST_MARKED = 226,
      IDENTITY_TRUST_UNMARKED = 227,
      IDENTITY_TRUST_REVOKED = 228,
      CTWA_CONSUMER_DISCLOSURE = 230,
    }
  }
  interface IWebMessageInfoWithMessageBytes { [key: string]: any }
  class WebMessageInfoWithMessageBytes implements IWebMessageInfoWithMessageBytes {
    [key: string]: any;
    constructor(properties?: IWebMessageInfoWithMessageBytes);
    static create(properties?: IWebMessageInfoWithMessageBytes): WebMessageInfoWithMessageBytes;
    static encode(message: IWebMessageInfoWithMessageBytes, writer?: any): any;
    static encodeDelimited(message: IWebMessageInfoWithMessageBytes, writer?: any): any;
    static decode(reader: any, length?: number): WebMessageInfoWithMessageBytes;
    static decodeDelimited(reader: any): WebMessageInfoWithMessageBytes;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WebMessageInfoWithMessageBytes;
    static toObject(message: WebMessageInfoWithMessageBytes, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWebNotificationsInfo { [key: string]: any }
  class WebNotificationsInfo implements IWebNotificationsInfo {
    [key: string]: any;
    constructor(properties?: IWebNotificationsInfo);
    static create(properties?: IWebNotificationsInfo): WebNotificationsInfo;
    static encode(message: IWebNotificationsInfo, writer?: any): any;
    static encodeDelimited(message: IWebNotificationsInfo, writer?: any): any;
    static decode(reader: any, length?: number): WebNotificationsInfo;
    static decodeDelimited(reader: any): WebNotificationsInfo;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WebNotificationsInfo;
    static toObject(message: WebNotificationsInfo, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWrapTransportSigningPublicKeyInput { [key: string]: any }
  class WrapTransportSigningPublicKeyInput implements IWrapTransportSigningPublicKeyInput {
    [key: string]: any;
    constructor(properties?: IWrapTransportSigningPublicKeyInput);
    static create(properties?: IWrapTransportSigningPublicKeyInput): WrapTransportSigningPublicKeyInput;
    static encode(message: IWrapTransportSigningPublicKeyInput, writer?: any): any;
    static encodeDelimited(message: IWrapTransportSigningPublicKeyInput, writer?: any): any;
    static decode(reader: any, length?: number): WrapTransportSigningPublicKeyInput;
    static decodeDelimited(reader: any): WrapTransportSigningPublicKeyInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WrapTransportSigningPublicKeyInput;
    static toObject(message: WrapTransportSigningPublicKeyInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWrapTransportSigningPublicKeyResult { [key: string]: any }
  class WrapTransportSigningPublicKeyResult implements IWrapTransportSigningPublicKeyResult {
    [key: string]: any;
    constructor(properties?: IWrapTransportSigningPublicKeyResult);
    static create(properties?: IWrapTransportSigningPublicKeyResult): WrapTransportSigningPublicKeyResult;
    static encode(message: IWrapTransportSigningPublicKeyResult, writer?: any): any;
    static encodeDelimited(message: IWrapTransportSigningPublicKeyResult, writer?: any): any;
    static decode(reader: any, length?: number): WrapTransportSigningPublicKeyResult;
    static decodeDelimited(reader: any): WrapTransportSigningPublicKeyResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WrapTransportSigningPublicKeyResult;
    static toObject(message: WrapTransportSigningPublicKeyResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWrapTransportSigningSecretKeyInput { [key: string]: any }
  class WrapTransportSigningSecretKeyInput implements IWrapTransportSigningSecretKeyInput {
    [key: string]: any;
    constructor(properties?: IWrapTransportSigningSecretKeyInput);
    static create(properties?: IWrapTransportSigningSecretKeyInput): WrapTransportSigningSecretKeyInput;
    static encode(message: IWrapTransportSigningSecretKeyInput, writer?: any): any;
    static encodeDelimited(message: IWrapTransportSigningSecretKeyInput, writer?: any): any;
    static decode(reader: any, length?: number): WrapTransportSigningSecretKeyInput;
    static decodeDelimited(reader: any): WrapTransportSigningSecretKeyInput;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WrapTransportSigningSecretKeyInput;
    static toObject(message: WrapTransportSigningSecretKeyInput, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
  interface IWrapTransportSigningSecretKeyResult { [key: string]: any }
  class WrapTransportSigningSecretKeyResult implements IWrapTransportSigningSecretKeyResult {
    [key: string]: any;
    constructor(properties?: IWrapTransportSigningSecretKeyResult);
    static create(properties?: IWrapTransportSigningSecretKeyResult): WrapTransportSigningSecretKeyResult;
    static encode(message: IWrapTransportSigningSecretKeyResult, writer?: any): any;
    static encodeDelimited(message: IWrapTransportSigningSecretKeyResult, writer?: any): any;
    static decode(reader: any, length?: number): WrapTransportSigningSecretKeyResult;
    static decodeDelimited(reader: any): WrapTransportSigningSecretKeyResult;
    static verify(message: { [key: string]: any }): string | null;
    static fromObject(object: { [key: string]: any }): WrapTransportSigningSecretKeyResult;
    static toObject(message: WrapTransportSigningSecretKeyResult, options?: any): { [key: string]: any };
    toJSON(): { [key: string]: any };
    static getTypeUrl(typeUrlPrefix?: string): string;
  }
}
export default proto;
