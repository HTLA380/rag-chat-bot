import { notFound } from "next/navigation";
import { fetchCategories, fetchChat } from "@/lib/api";
import ChatViewPage from "@/features/chat/components/chat-view";

export async function generateMetadata({
	params
}: {
	params: Promise<{ category: string; chat: string }>;
}) {
	const { category, chat } = await params;
	const { chat: chatData } = await fetchChat(category, chat);

	if (!chatData) {
		notFound();
	}

	return { title: chatData.title };
}

export async function generateStaticParams() {
	const categories = await fetchCategories();

	return categories.flatMap((category) =>
		category.chats.slice(0, 10).map((chat) => ({
			category: category.url,
			chat: chat.id
		}))
	);
}

export default async function Chat({
	params
}: {
	params: Promise<{ category: string; chat: string }>;
}) {
	const { category, chat } = await params;
	const { chat: chatData } = await fetchChat(category, chat);

	if (!chatData) {
		notFound();
	}

	return <ChatViewPage chat={chatData} />;
}
