import { SUGGESTION_ITEMS, SuggestionItem } from "../constants";
import { HiSparkles } from "react-icons/hi";
import { LuSearch, LuSend } from "react-icons/lu";
import { Button } from "@mijn-ui/react-button";
import { Input } from "@mijn-ui/react-input";
import { cn } from "@mijn-ui/react-theme";

const ChatMain = () => (
	<>
		<div className="absolute inset-x-0 top-[calc(50%-52px)] flex -translate-y-1/2 flex-col items-center justify-center gap-6">
			<GeneralRecommandation suggestionItems={SUGGESTION_ITEMS} />
		</div>

		<ChatMainFooter>
			<Input
				classNames={{
					wrapper: "max-w-screen-md",
					base: "bg-default pr-12",
					endIcon: "right-0 group/end-icon"
				}}
				startIcon={<LuSearch />}
				placeholder="Some text for an ai..."
				endIcon={
					<Button variant="ghost">
						<LuSend
							className="text-muted-foreground group-hover/end-icon:text-foreground"
							size={16}
						/>
					</Button>
				}
			/>
		</ChatMainFooter>
	</>
);

/* -------------------------------------------------------------------------- */

type GeneralRecommandationProps = {
	suggestionItems: SuggestionItem[];
};

const GeneralRecommandation = ({
	suggestionItems
}: GeneralRecommandationProps) => (
	<div className="flex flex-col gap-6 px-4">
		<div className="flex flex-col items-start justify-center gap-2 md:items-center">
			<h3 className="flex items-center gap-2 text-lg font-semibold">
				<HiSparkles size={20} />
				Let&apos;s get you started
			</h3>
			<p className="text-small text-muted-foreground">
				Type a question or choose one of these examples.
			</p>
			<Button size="sm" color="primary" className="gap-2">
				<HiSparkles />
				What Can I ask?
			</Button>
		</div>
		<div className="flex max-w-screen-sm flex-wrap items-center justify-start gap-4 md:justify-center">
			{suggestionItems.map((item) => (
				<Button key={item.id} size="sm" radius="full">
					{item.icon}
					{item.text}
				</Button>
			))}
		</div>
	</div>
);

/* -------------------------------------------------------------------------- */

const ChatMainFooter = ({
	className,
	...props
}: React.ComponentPropsWithRef<"div">) => {
	return (
		<div
			className={cn(
				"absolute bottom-8 z-30 flex w-full items-center justify-center px-4",
				className
			)}
			{...props}
		/>
	);
};

export default ChatMain;
