import React, { useState } from "react";
import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import BlogFooter from "./BlogFooter";
import { Button } from "@/components/ui/button";
import { AIAssistantSidebar } from "../ai/AiChat";

const BlogContent = () => {
	const [assistantOpen, setAssistantOpen] = useState(false);
	const [selectedText, setSelectedText] = useState("");

	const handleAskAI = (text) => {
		setSelectedText(text);
		setAssistantOpen(true);
	};

	return (
		<div>
			<BlogHeader initialMessage={selectedText} />

			<BlogBody onAskAI={handleAskAI} />

			<BlogFooter />

			<div className="fixed top-17 right-4">
				<Button
					variant="outline"
					className="hover:no-underline cursor-pointer"
					onClick={() => setAssistantOpen(true)}
				>
					Open Assistant
				</Button>
			</div>

			{/* AI Assistant Sidebar */}
			<AIAssistantSidebar
				openAssistant={assistantOpen}
				setAssistantOpen={setAssistantOpen}
				initialMessage={selectedText}
			/>
		</div>
	);
};

export default BlogContent;
