/**
 * Type declarations for lib/Utils/MessageBuilder.js
 * Hand-written (this file had no .d.ts before — not shipped by upstream
 * either). Public chaining API only; internal/private members omitted.
 */

export const MESSAGE_BUILDER_VERSION: string; // = package.json version

export abstract class BaseBuilder {
	setTitle(title: string): this;
	setSubtitle(subtitle: string): this;
	setBody(body: string): this;
	setFooter(footer: string): this;
	/** Mark Meta AI participant fbid(s) in messageContextInfo.botMetadata.botGroupMetadata (no args clears). */
	setBotGroupParticipants(...fbids: string[]): this;
	setContextInfo(obj: Record<string, any>): this;
	addPayload(obj: Record<string, any>): this;
}

export interface LimitedTimeOfferParams {
	text?: string;
	url?: string;
	copy_code?: string;
	expiration_time?: number;
}

export interface BottomSheetParams {
	in_thread_buttons_limit?: number;
	divider_indices?: number[];
	list_title?: string;
	button_title?: string;
}

export interface TapTargetConfigurationParams {
	title?: string;
	description?: string;
	canonical_url?: string;
	domain?: string;
	buttonIndex?: number;
}

/**
 * A2UI/Bloks "basic" catalog node types — confirmed from captured traffic (see
 * /areas/vanzxy-baileys.md), not a public spec, so treat this as best-effort autocomplete
 * rather than an exhaustive guarantee. `ref` is a builder-only tag (stripped before send) so
 * another node can reference this one via `BloksRef`.
 */
export interface BloksRef {
	$ref: string;
}
export interface BloksNodeBase {
	/** Builder-only tag so another node can reference this one via `{ $ref: ref }`. Stripped before send. */
	ref?: string;
}
export interface ColumnRowNode extends BloksNodeBase {
	component: 'Column' | 'Row';
	weight?: number;
	justify?: string;
	children?: BloksNode[];
}
export interface TextNode extends BloksNodeBase {
	component: 'Text';
	text: string;
	variant?: string;
}
export interface IconNode extends BloksNodeBase {
	component: 'Icon';
	name: string;
}
export interface DividerNode extends BloksNodeBase {
	component: 'Divider';
}
export interface ImageNode extends BloksNodeBase {
	component: 'Image';
	url: string;
	variant?: string;
	fit?: string;
}
export interface VideoNode extends BloksNodeBase {
	component: 'Video';
	url: string;
}
export interface ListNode extends BloksNodeBase {
	component: 'List';
	children?: BloksNode[];
}
export interface TextFieldNode extends BloksNodeBase {
	component: 'TextField';
	label?: string;
	value?: string;
	variant?: string;
}
export interface DateTimeInputNode extends BloksNodeBase {
	component: 'DateTimeInput';
	label?: string;
	value?: string;
	enableDate?: boolean;
	enableTime?: boolean;
}
export interface SliderNode extends BloksNodeBase {
	component: 'Slider';
	label?: string;
	min?: number;
	max?: number;
	value?: number;
}
export interface CheckBoxNode extends BloksNodeBase {
	component: 'CheckBox';
	label?: string;
	value?: boolean;
}
export interface ChoicePickerNode extends BloksNodeBase {
	component: 'ChoicePicker';
	label?: string;
	variant?: string;
	displayStyle?: string;
	options?: Array<{ label: string; value: string }>;
	value?: string;
}
/**
 * Unlike the CTA/native-flow `Button` class elsewhere in this file, an A2UI Button node has no
 * `label`/`type`+`name` — its label comes from a nested `child` (usually a `Text` node), and
 * tapping it fires `action.call` (with `action.args`), not a native-flow button name.
 */
export interface BloksButtonNode extends BloksNodeBase {
	component: 'Button';
	child?: BloksNode;
	variant?: string;
	action?: { call: string; args?: Record<string, any> };
}
export interface ModalNode extends BloksNodeBase {
	component: 'Modal';
	trigger: string | BloksRef;
	content: BloksNode | string | BloksRef;
}
export interface TabsNode extends BloksNodeBase {
	component: 'Tabs';
	tabs: Array<{ title: string; child: BloksNode }>;
}
export interface CardNode extends BloksNodeBase {
	component: 'Card';
	child?: BloksNode;
}
export interface AudioPlayerNode extends BloksNodeBase {
	component: 'AudioPlayer';
	url: string;
	description?: string;
}
/** Fallback for components not yet confirmed on the wire — still works at runtime, just no prop-level autocomplete. */
export interface AnyBloksNode extends BloksNodeBase {
	component: string;
	[key: string]: any;
}
export type BloksNode =
	| ColumnRowNode
	| TextNode
	| IconNode
	| DividerNode
	| ImageNode
	| VideoNode
	| ListNode
	| TextFieldNode
	| DateTimeInputNode
	| SliderNode
	| CheckBoxNode
	| ChoicePickerNode
	| BloksButtonNode
	| ModalNode
	| TabsNode
	| CardNode
	| AudioPlayerNode
	| AnyBloksNode;

export class Button extends BaseBuilder {
	/** `request_contact_info` native-flow button (paramless, as sent by the official client). */
	addRequestContactInfo(display_text?: string): this;
	constructor(client: any);
	setVideo(path: string | Buffer, options?: Record<string, any>): this;
	setImage(path: string | Buffer, options?: Record<string, any>): this;
	setDocument(path: string | Buffer, options?: Record<string, any>): this;
	setMedia(obj: Record<string, any>): this;
	clearButtons(): this;
	setParams(obj: Record<string, any>): this;
	setBloksWidget(tree: BloksNode, options?: { uuid?: string; catalogId?: string; surfaceId?: string; version?: string }): this;
	addButton(name: string, params: string | Record<string, any>): this;
	makeRow(header?: string, title?: string, description?: string, id?: string): this;
	makeSection(title?: string, highlight_label?: string): this;
	addSelection(title: string, options?: Record<string, any>): this;
	addReply(display_text: string, id: string, options?: Record<string, any>): this;
	/** cta_call. Note (v4.7): keys on `phone_number`, not `id` — fixed from a prior version that silently mis-keyed this field. */
	addCall(display_text: string, phone_number: string, options?: Record<string, any>): this;
	addReminder(display_text: string, id: string, options?: Record<string, any>): this;
	addCancelReminder(display_text: string, id: string, options?: Record<string, any>): this;
	addAddress(display_text: string, id: string, options?: Record<string, any>): this;
	addLocation(options?: Record<string, any>): this;
	addUrl(display_text: string, url: string, webview_interaction?: boolean, options?: Record<string, any>): this;
	addCopy(display_text: string, copy_code: string, options?: Record<string, any>): this;
	/** open_webview — opens a titled in-app webview. */
	addOpenWebview(title: string, url: string, options?: Record<string, any>): this;
	/** cta_catalog — opens the sender's WhatsApp Business catalog. Business-account gated. */
	addCatalog(display_text?: string, options?: Record<string, any>): this;
	/** automated_greeting_message_view_catalog. Business-account gated. */
	addViewCatalog(options?: Record<string, any>): this;
	/** call_permission_request. */
	addCallPermission(display_text?: string, options?: Record<string, any>): this;
	/** payment_info — structured payment-settings payload (e.g. PIX). Payment-enabled accounts only. */
	addPaymentInfo(payload?: Record<string, any>): this;
	/** review_and_pay — order/payment summary flow. Server-validated by WhatsApp. */
	addReviewAndPay(payload?: Record<string, any>): this;
	/** wa_payment_transaction_details. */
	addTransactionDetails(payload?: Record<string, any>): this;
	/** mpm — multi-product message. Business-catalog accounts only. */
	addMultiProduct(payload?: Record<string, any>): this;
	addCardMessage(payload?: Record<string, any>): this;
	addOrderDetails(payload?: Record<string, any>): this;
	addOrderStatus(payload?: Record<string, any>): this;
	addPaymentStatus(payload?: Record<string, any>): this;
	addPaymentMethod(payload?: Record<string, any>): this;
	addTrackOrder(id: string, display_text?: string): this;
	addReorder(id: string, display_text?: string): this;
	addCancelOrder(id: string, display_text?: string): this;
	addClearChat(): this;
	addNavigateToScreen(screen: string, data?: Record<string, any>): this;
	addFlow(flow: Record<string, any>, display_text?: string): this;
	addVoiceCall(id: string, display_text?: string): this;
	addVideoCall(id: string, display_text?: string): this;
	setLimitedTimeOffer(params?: LimitedTimeOfferParams): this;
	setBottomSheet(params?: BottomSheetParams): this;
	setTapTargetConfiguration(params?: TapTargetConfigurationParams): this;
	toCard(): Promise<Record<string, any>>;
	build(jid: string, options?: Record<string, any>): Promise<Record<string, any>>;
	send(jid: string, options?: Record<string, any>): Promise<any>;

	/** Native-flow names WA renders with a dedicated node instead of the generic v=9 "mixed" node. */
	static SPECIAL_FLOW: Record<string, { v: string; name: string }>;

	// Presets attached at runtime via attachPresets() from MessageKit.js.
	static confirm?: (client: any, text: string, options?: Record<string, any>) => Button;
	static yesNo?: (client: any, text: string, options?: Record<string, any>) => Button;
	static menu?: (client: any, options?: Record<string, any>) => Button;
}

export class RowBuilder {
	constructor();
	buttons: Record<string, any>[];
	button(displayText: string, buttonId?: string): this;
}

export class CardBuilder {
	constructor(client: any);
	title(text: string): this;
	text(text: string): this;
	image(path: string | Buffer, options?: Record<string, any>): this;
	button(displayText: string, buttonId?: string): this;
}

export class ButtonV2 extends BaseBuilder {
	constructor(client: any);
	addButton(displayText: string, buttonId?: string): this;
	/** Alias for addButton(). */
	button(displayText: string, buttonId?: string): this;
	/** Fluent row helper — group buttons via a callback instead of chaining addButton(). */
	row(cb: (row: RowBuilder) => void): this;
	addRawButton(obj: Record<string, any>): this;
	setThumbnail(path: string | Buffer): this;
	setMedia(obj: Record<string, any>): this;
	/** @param options.viewOnce Default true — some clients require this for legacy buttonsMessage to render; pass false for a normal (non-disappearing) message. */
	build(jid: string, options?: Record<string, any> & { viewOnce?: boolean }): Promise<Record<string, any>>;
	send(jid: string, options?: Record<string, any> & { viewOnce?: boolean }): Promise<any>;
}

/**
 * Legacy `templateMessage` / `hydratedFourRowTemplate` builder — WA's Generation-1
 * button protocol (predates the nativeFlow format Button/ButtonV2 use). Capped at
 * 3 buttons (quickReply/url/call only), no interactive list/flow support.
 */
export class ButtonV3 extends BaseBuilder {
	constructor(client: any);
	/** Load an existing templateMessage (e.g. from a fetched/quoted message) for editing. */
	loadFrom(msg: Record<string, any>): this;
	setImage(path: string | Buffer, options?: Record<string, any>): this;
	setVideo(path: string | Buffer, options?: Record<string, any>): this;
	setDocument(path: string | Buffer, options?: Record<string, any>): this;
	setMedia(obj: Record<string, any>): this;
	clearButtons(): this;
	/** Max 3 buttons — throws past the limit. */
	addButton(hydratedButton: Record<string, any>): this;
	addReply(display_text?: string, id?: string): this;
	addUrl(display_text?: string, url?: string, options?: Record<string, any>): this;
	addCall(display_text?: string, phone_number?: string): this;
	toTemplate(): Promise<Record<string, any>>;
	build(jid: string, options?: Record<string, any>): Promise<Record<string, any>>;
	send(jid: string, options?: Record<string, any>): Promise<any>;
}

export class Carousel extends BaseBuilder {
	constructor(client: any);
	/** WhatsApp caps carousels at this many cards (10); addCard() throws past it. */
	static MAX_CARDS: number;
	addCard(card: Record<string, any> | Record<string, any>[]): this;
	build(jid: string, options?: Record<string, any>): Record<string, any>;
	send(jid: string, options?: Record<string, any>): Promise<any>;
}

export class Poll extends BaseBuilder {
	constructor(client: any);
	setName(name: string): this;
	addOption(name: string): this;
	addOptions(names: string[]): this;
	setSelectable(count: number): this;
	setMultiSelect(canSelectMultiple?: boolean): this;
	setHideVoter(hide?: boolean): this;
	setCanAddOption(allow?: boolean): this;
	setAnnouncementGroup(isAnnouncement?: boolean): this;
	setEndDate(date: Date | string | number): this;
	/** Defers hash/version handling to the socket's own sendMessage({poll}) logic — see .js docblock. */
	setQuiz(correctOptionName: string): this;
	build(): { poll: Record<string, any> };
	send(jid: string, options?: Record<string, any>): Promise<any>;
}

export interface AddTextOptions {
	/** `[label](>url)` deeplink entities (default true; only triggers on the leading `>`) */
	deeplink?: boolean;
	hyperlink?: boolean;
	citation?: boolean;
	latex?: boolean;
}

export interface AddInlineImageOptions {
	text?: string;
	alignment?: string;
	tapLinkUrl?: string;
	resolveUrl?: boolean;
}

/** Chainable WhatsApp event builder (name/start/end/location/reminder/extra guests/bot fbid). Wraps sendMessage({ event }). */
export class Event {
	constructor(client: { sendMessage: (...a: any[]) => Promise<any> });
	setName(name: string): this;
	setDescription(text: string): this;
	/** Date or unix seconds */
	setStart(when: Date | number): this;
	setEnd(when: Date | number): this;
	setLocation(location: { degreesLatitude?: number; degreesLongitude?: number; name?: string; address?: string }): this;
	setCall(kind: 'audio' | 'video'): this;
	setCancelled(v?: boolean): this;
	setExtraGuestsAllowed(v?: boolean): this;
	setScheduleCall(v?: boolean): this;
	/** seconds BEFORE start (3600 = 1h); implies hasReminder */
	setReminder(seconds: number): this;
	clearReminder(): this;
	setBotFbid(...fbids: string[]): this;
	build(): { event: Record<string, any> };
	send(jid: string, options?: Record<string, any>): Promise<any>;
}

/** Chainable album builder (2..10 images/videos). Wraps sock.sendAlbumMessage(). */
export class Album {
	constructor(client: { sendAlbumMessage?: (...a: any[]) => Promise<any>; sendMessage?: (...a: any[]) => Promise<any> });
	static readonly MAX_ITEMS: number;
	addImage(source: any, caption?: string, extra?: Record<string, any>): this;
	addVideo(source: any, caption?: string, extra?: Record<string, any>): this;
	addMany(items: Array<{ image?: any; video?: any; caption?: string; [k: string]: any }>): this;
	/** AlbumMessage.caption (client rendering unverified) */
	setCaption(caption: string): this;
	setDelay(ms: number): this;
	setContinueOnError(v?: boolean): this;
	build(): { album: Array<Record<string, any>>; caption?: string };
	send(jid: string, options?: Record<string, any>): Promise<any>;
}

export class AIRichError extends Error { code: string; constructor(message: string, code?: string, meta?: Record<string, any>); }
export class ItemNotFoundError extends AIRichError {}
export class DuplicateIdError extends AIRichError {}
export class InvalidTargetError extends AIRichError {}
export class ContentValidationError extends AIRichError {}

/** Wraps any builder exposing send() and deletes the sent message after `seconds` (default 30). */
export class Expiring {
	constructor(client: { sendMessage: (...a: any[]) => Promise<any> }, builder: { send: (...a: any[]) => Promise<any> }, seconds?: number);
	send(jid: string, opts?: Record<string, any>): Promise<any>;
}
export { Expiring as ExpiringButton };

export class A2UI {
	constructor(client?: any, ...rest: any[]);
	slider(o?: { id?: string; value?: number; min?: number; max?: number; step?: number; label?: string }): string;
	/** Date/time picker (`DateTimeInput`); `value` is ISO-8601 or ''. */
	dateTimeInput(label: string, o?: { id?: string; value?: string; enableDate?: boolean; enableTime?: boolean }): string;
	switch(label: string, o?: { id?: string; value?: boolean }): string;
	list(children: string[], o?: { id?: string }): string;
	progressBar(value: number, o?: { id?: string; min?: number; max?: number; variant?: string }): string;
	avatar(url: string, o?: { id?: string; variant?: string; size?: number }): string;
	badge(childId: string, o?: { id?: string; label?: string }): string;
	spacer(o?: { id?: string; height?: number }): string;
	tabs(items: Array<{ title: string; child: string }> | string[], o?: { id?: string; activeTab?: number }): string;
	[key: string]: any;
}

/** `{ id, insertAt, replace }` block-tracking options accepted by every AIRich add*() call. */
export interface BlockOptions { id?: string; insertAt?: string; replace?: string }

export class AIRich extends BaseBuilder {
	constructor(client: any);
	/** true while a loadFrom()'ed message with a genuine Meta signature is unchanged and will be re-sent byte-for-byte */
	readonly isSignaturePreserved: boolean;
	addFooterSection(section: Record<string, any>): this;
	clearFooterSections(): this;
	addEmbeddedScreen(screen: Record<string, any>): this;
	setBotMetadata(extra: Record<string, any>): this;
	setResponseMeta(meta: Record<string, any>): this;
	setNotification(v: boolean, options?: { disclaimerText?: string }): this;
	addSubmessage(submessage: Record<string, any>): this;
	addSection(section: Record<string, any>): this;
	addText(text: string, options?: AddTextOptions): this;
	addCode(language: string, code: string): this;
	addTable(table: string[][], options?: AddTextOptions): this;
	addPaymentKeyInfo(payload?: Record<string, any>): this;
	addBookingConfirmation(payload?: Record<string, any>): this;
	addLinks(links?: Record<string, any>[]): this;
	addContentItems(items?: Record<string, any>[]): this;
	addInlineVideo(): this;
	addSource(sources?: Record<string, any>[], options?: { resolveUrl?: boolean }): this;
	addReels(reelsItems?: Record<string, any>[], options?: { resolveUrl?: boolean }): this;
	addImage(imageUrl: string, options?: { resolveUrl?: boolean }): this;
	addInlineImage(imageUrl: string, options?: AddInlineImageOptions): this;
	addVideo(videoUrl: string, options?: { autoFill?: boolean; resolveUrl?: boolean }): this;
	addProduct(data?: Record<string, any>, options?: { resolveUrl?: boolean }): this;
	addPost(data?: Record<string, any>, options?: { resolveUrl?: boolean }): this;
	addTip(text: string): this;
	addMetadata(text: string): this;
	setResponseId(id: string): this;
	refreshResponseId(): this;
	setBotResponseId(id: string): this;
	refreshBotResponseId(): this;
	hasId(id: string): boolean;
	getIds(): string[];
	peek(id: string): { id: string; sections: any[]; submessages: any[] } | null;
	delete(id: string): this;
	/** FOATextPrimitive — large heading text, distinct from addText()'s paragraph text. */
	addHeading(text: string): this;
	/** GenAI3PExtWidgetPrimitive — experimental, reverse-engineered; see JSDoc in the .js file for caveats. */
	addWidget(data: Record<string, any> | Record<string, any>[], options?: { layout?: 'Single' | 'HScroll' | 'ActionRow' | string }): this;
	/** GenAIFooterActionPrimitive — footer action link chips (e.g. "Join our Group"). */
	addFooterAction(actions: { text: string; url: string; type?: string } | { text: string; url: string; type?: string }[]): this;
	/** GenAIDividerPrimitive — plain horizontal line, no content. */
	addDivider(): this;
	/** GenAISpacerPrimitive — blank vertical spacing. */
	addSpacer(spacing?: number): this;
	/** GenAILatexUXPrimitive — has a real AI_RICH_RESPONSE_LATEX submessage (unlike most primitives here). */
	addLatex(expression: string): this;
	/** GenAITaskPrimitive — task/checklist card. */
	addTask(data: { task_id?: string; title: string; subtitle?: string; status?: string; textFallback?: boolean }): this;
	/** GenAIBotProgressStatusPrimitive — one-shot "searching/working" status chip. */
	addProgressStatus(title: string, options?: { icon?: string; is_in_progress?: boolean; target_secondary_screen_id?: string; target_secondary_screen_tab_id?: string }): this;

	/** Image card with separate preview / full-res urls (gridImageMetadata + GenAIImaginePrimitive). */
	addImageCard(previewUrl: string | Buffer, fullUrl?: string | Buffer, options?: { width?: number; height?: number; status?: string; update_text?: string; resolveUrl?: boolean; id?: string; replace?: string; insertAt?: string }): this;
	addComment(comment: { actorName?: string; actor_name?: string; commentText?: string; comment_text?: string; subtitle?: string }, options?: { id?: string; replace?: string; insertAt?: string }): this;
	addActionList(rows: { title: string; subtitle?: string }[], options?: { id?: string; replace?: string; insertAt?: string }): this;
	addChainOfThoughtStep(title: string, body?: string, options?: { id?: string; replace?: string; insertAt?: string }): this;
	/** THINKING banner via GenAIBotProgressStatusPrimitive (renders, unlike addThinkingStatus). */
	addThinking(title?: string, options?: { icon?: string; is_in_progress?: boolean; id?: string; replace?: string; insertAt?: string }): this;
	/** Generic escape hatch: push any GenAI* primitive as a Single layout. */
	addPrimitive(typeName: string, payload: Record<string, any>, options?: { id?: string; replace?: string; insertAt?: string }): this;
	addContentRaw(section: any, submessage?: any, options?: { id?: string; replace?: string; insertAt?: string }): this;
	/** GenAIBotThinkingStatusPrimitive — one-shot "thinking" status chip. */
	addThinkingStatus(title: string, options?: { icon?: string; is_in_progress?: boolean; target_secondary_screen_id?: string; target_secondary_screen_tab_id?: string; textFallback?: boolean }): this;
	/** GenAIMetaSubsQuotaUpsellPrimitive — subscription-quota-limit upsell card. */
	addQuotaUpsell(data: { title: string; body?: string; body_line1?: string; body_line2?: string; buttons?: { label: string; action?: string; deeplink?: string }[] }): this;
	/** FOABloksPrimitive — raw Bloks payload; most experimental primitive, fields passed through as-is. */
	addBloks(data: { type: string; data?: string; uuid?: string; initial_response?: any; versioning_id?: string; textFallback?: boolean }): this;
	addSuggest(suggestion: Record<string, any>, options?: { scroll?: boolean; layout?: string }): this;
	/** Override `forwardedAiBotMessageInfo.botJid` on forwarded builds (must end with `@bot`). */
	setForwardBotJid(jid: string): this;

	/** Alias of `setForwardBotJid()`. */
	setForwardBotJID(jid: string): this;
	/** Toggle `botMetadata.verificationMetadata` (default `true`; the proof is random bytes — the Go reference defaults it OFF). */
	setVerificationMetadata(enabled?: boolean): this;
	/** Default for `build/send({ notification })`; `text` = user-visible disclaimer (defaults to the `setTitle()` text). */
	setNotification(enabled?: boolean, text?: string): this;
	setMentions(...jids: (string | string[])[]): this;
	setQuoted(quoted?: Record<string, any> | null, participant?: string): this;
	setNoContextInfo(enabled?: boolean): this;
	setDynamicIDs(enabled?: boolean): this;
	setUnifiedResponseData(data: Record<string, any> | string | Buffer | null): this;
	setMessageSecret(enabled?: boolean): this;
	setUnsupportedTypeAlert(enabled?: boolean): this;
	setByPassDownload(enabled?: boolean): this;
	/** Shortcut for `botMetadata.capabilityMetadata.capabilities` (`BotCapabilityType` names or numbers). */
	setCapabilities(capabilities: Array<string | number>): this;
	/** Shortcut for `botMetadata.botRenderingConfigMetadata`. */
	setBotRenderingConfig(bloksVersioningId: string, pixelDensity?: number): this;
	/** Shortcut for `botMetadata.botThreadInfo.clientInfo.type` (UNKNOWN / DEFAULT / INCOGNITO / SIDE_CHAT). */
	setThreadType(type: string | number): this;
	/** Shortcut for `botMetadata.imagineMetadata.imagineType`. */
	setImagineType(type: string | number): this;
	/** Shortcut for `botMetadata.subscriptionUpsellMetadata.requestType` (UNSPECIFIED / THINK_HARD / IMAGE_GEN / VIDEO_GEN). */
	setSubscriptionUpsell(requestType: string | number): this;
	/** Native-format edit: top-level protocolMessage EDIT + bot metadata (CLIPPY) + non-E2EE attestation. Use if `buildEdit()`/`sendEdit()` doesn't re-render the bubble. */
	buildEditNative(targetJid: string, targetId: string, options?: { msg?: Record<string, any>; messageId?: string; [key: string]: any }): Promise<any>;
	/** Send the native-format edit. Defaults to the jid/id of the last send(). Pass `send(jid, { nativeEdit: true })` to use it for the automatic follow-up edit. */
	sendEditNative(jid?: string, id?: string, options?: { msg?: Record<string, any>; messageId?: string; additionalNodes?: any[]; [key: string]: any }): Promise<any>;
	/** EXPERIMENTAL (captured-traffic shape; WA decides whether it renders): `GenAIChainingSuggestionPrimitive`. */
	addChainingSuggestionV2(options: BlockOptions & { promptText: string; title?: string; imageUri?: string; externalConversationId?: string; topic?: string; cardId?: string }): this;
	/** EXPERIMENTAL: `GenAIPlaceEntityItem`. */
	addPlaceEntity(options: BlockOptions & { name: string; placeId?: string; imageUrl?: string; motivation?: string; key?: string; latitude?: number | string; longitude?: number | string; itemType?: string; address?: { streetAddress?: string; region?: string; country?: string; postalCode?: string; locality?: string; street?: string }; category?: { displayName?: string; categoryId?: string }; rating?: number | string }): this;
	/** EXPERIMENTAL: `GenAISearchResultV2Primitive`. Needs at least one of searchQuery / reelsUrl / postId / primitives. */
	addSearchResultV2(options: BlockOptions & { searchQuery?: string; metadata?: string; postId?: string; reelsUrl?: string; reelsDeeplink?: string; reelsTitle?: string; thumbnailUrl?: string; avatarUrl?: string; creator?: string; isVerified?: boolean; sourceApp?: string; timestamp?: string; originalWidth?: number; originalHeight?: number; primitives?: Record<string, any>[] }): this;
	/** EXPERIMENTAL: `GenAIContextualSourcesViewModel`. */
	addContextualSources(sources: Array<{ faviconUri?: string; displayName: string; uri: string }>, contextualSources?: string | Record<string, any>, options?: BlockOptions): this;
	/** EXPERIMENTAL: `GenAIMediaItem` (media addressed by url and/or media_id). */
	addMediaItem(options: BlockOptions & { url?: string; mediaId?: string; mimeType?: string; urlFallback?: string; fileLength?: number; width?: number; height?: number; durationMs?: number; expirationTimestampMs?: number; thumbnail?: string; encryption?: { mediaKey: string; directPath: string; fileSha256: string; fileEncSha256: string; scansSidecar?: string; scanLengths?: number[]; mediaKeyTimestamp?: number; fileLength?: number } }): this;
	/** GenAIImaginePrimitive with status GENERATING — pending-generation placeholder, distinct from addImage()/addVideo()'s READY status. */
	addGenerating(options?: { imagine_type?: 'IMAGE' | 'ANIMATE'; estimated_completion_time?: number; textFallback?: boolean }): this;
	build(): Record<string, any>;
	send(jid: string, options?: Record<string, any>): Promise<any>;

	static tokenizer(code: string, lang?: string): Record<string, any>;
	static toTableMetadata(arr: string[][], options?: AddTextOptions): Record<string, any>;
	static newLayout(name: string, data: Record<string, any> | Record<string, any>[], extra?: Record<string, any>): Record<string, any>;
	/** Send a support-ticket marker message (messageContextInfo.supportPayload). */
	static sendSupportPayload(client: any, jid: string, text: string, options?: { ticketId?: string; isAiMessage?: boolean; shouldShowSystemMessage?: boolean; version?: number }): Promise<any>;
	/** Send an image + video as one paired-media unit (messageAssociation). */
	static sendPairedMedia(client: any, jid: string, media: { image: string | Buffer; video: string | Buffer }): Promise<any>;
}

// Same class as AIRich — exported under alternate names (see Vanz@Alias in
// MessageBuilder.js). All four are structurally identical to AIRich.
export { AIRich as AIVanzxy, AIRich as LeafRich, AIRich as VanzxyAI, AIRich as VanzxyRich };

/** `class ORich extends AIRich {}` — plain re-export alias, no additional members. */
export class ORich extends AIRich {}

export class Toolkit {
	static extractIE(text: string, options?: AddTextOptions): Record<string, any>;
	static getMp4Duration(buffer: Buffer, options?: { silent?: boolean }): Promise<number>;
	static getMp4Preview(
		videoBuffer: Buffer,
		options?: { time?: number; result?: 'buffer' | string; resize?: boolean; width?: number; height?: number; silent?: boolean }
	): Promise<Buffer | Record<string, any>>;
}

/** Syntax-highlight tokenizer used by `AIRich#addCode()`. Returns the code-block metadata + unified-response tokens. */
export function tokenizeCodeForRich(code: string, lang?: string): any;
