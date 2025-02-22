export type CATEGORY_ICON_TYPE =
	| "spread-sheet"
	| "trending-up"
	| "exchange"
	| "credit-card"
	| "hand-coins";

export type ERPChat = {
	id: string;
	title: string;
	created_at: string;
};

export type ERPCategories = {
	id: string;
	title: string;
	url: string;
	icon: CATEGORY_ICON_TYPE;
	created_at: string;
	chats: ERPChat[];
};
