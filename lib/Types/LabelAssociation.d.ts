/** Association type */
export declare enum LabelAssociationType {
    Chat = "label_jid",
    Message = "label_message"
}
/** Association for chat */
export interface ChatLabelAssociation {
    type: LabelAssociationType.Chat;
    chatId: string;
    labelId: string;
}
/** Association for message */
export interface MessageLabelAssociation {
    type: LabelAssociationType.Message;
    chatId: string;
    messageId: string;
    labelId: string;
}
export type LabelAssociation = ChatLabelAssociation | MessageLabelAssociation;
/** Body for adding/removing chat labels */
export interface ChatLabelAssociationActionBody {
    labelId: string;
}
/** Body for adding/removing message labels */
export interface MessageLabelAssociationActionBody {
    labelId: string;
    messageId: string;
}
