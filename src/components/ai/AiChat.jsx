import { useEffect, useMemo, useState } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export function AIAssistantSidebar({
	openAssistant,
	setAssistantOpen,
	initialMessage,
}) {
	const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
	const blog = [
		{
			heading: "Understanding Transfer Learning",
			text: "Transfer learning is a powerful concept in machine learning where a model developed for one task is reused as the starting point for a model on a second task. It leverages pre-trained models—networks that have already been trained on large datasets and have learned to extract relevant features.This approach is particularly useful in domains like image classification, where training a deep convolutional neural network (CNN) from scratch is time-consuming and data-intensive. Instead of training a model from the ground up, you take a model that has already been trained on a large dataset (like ImageNet) and fine-tune it for your specific task—in our case, animal classification.",
		},

		{
			heading: "Why ImageNet?",
			text: "ImageNet is a massive dataset of over 14 million labeled images across more than 20,000 categories. It played a critical role in the development of modern deep learning models through the ImageNet Large Scale Visual Recognition Challenge (ILSVRC).",
		},
		{
			heading: "How it works?",
			text: "You load a pre-trained ImageNet model, remove its original classification layer, and add a new layer that matches your animal classes (e.g., cat, dog, elephant). You then train only the new layers using your animal dataset. For better accuracy, you can also unfreeze and fine-tune some of the deeper layers.",
		},
		{
			heading: "Conclusion",
			text: "In summary, transfer learning with ImageNet makes animal classification fast, efficient, and accessible—even for small datasets or limited resources.",
		},
	];
	const [message, setMessage] = useState("");
	const [conversation, setConversation] = useState([]);
	const llm = useMemo(
		() =>
			new ChatGoogleGenerativeAI({
				apiKey: apiKey,
				model: "gemini-1.5-flash-8b",
				temperature: 0,
				maxRetries: 2,
				maxOutputTokens: 256,
			}),
		[]
	);

	useEffect(() => {
		if (initialMessage) {
			const fetchInitialResponse = async () => {
				const initialConversation = [{ role: "user", content: initialMessage }];
				setConversation(initialConversation);

				try {
					const response = await llm.invoke(initialConversation);
					setConversation((prev) => [
						...prev,
						{ role: "ai", content: response.content },
					]);
				} catch (error) {
					console.error("Error getting AI response:", error);
					setConversation((prev) => [
						...prev,
						{
							role: "ai",
							content: "Something went wrong with initial message.",
						},
					]);
				}
			};

			fetchInitialResponse();
		}
	}, [initialMessage, llm]);

	const handleSend = async () => {
		if (!message.trim()) return;

		const newConversation = [
			{
				role: "system",
				content:
					"Answer as concisely as possible. You are an assistant of a blog page so please answer in a concise way. User asks blog-related questions or selects part of the blog.Note that this just for your context if it needed you can answer it using your knowledge. Here's the complete blog: " +
					blog,
			},
			...conversation.filter((msg) => msg.role !== "system"),
			{ role: "user", content: message },
		];
		setConversation([...conversation, { role: "user", content: message }]);
		setMessage("");

		try {
			// Get AI response using LangChain's Gemini wrapper
			const response = await llm.invoke(newConversation);

			// Add AI response to conversation
			setConversation((prev) => [
				...prev,
				{ role: "ai", content: response.content },
			]);
		} catch (error) {
			console.error("Error getting AI response:", error);
			setConversation((prev) => [
				...prev,
				{ role: "ai", content: "Something went wrong. Please try again." },
			]);
		}
	};

	return (
		<>
			{/* Sidebar */}
			<div
				className={`fixed top-0 right-0 w-[350px] h-screen bg-white shadow-lg z-40 transform transition-transform duration-300 ${
					openAssistant ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<Card className="w-full h-full flex flex-col">
					<CardHeader>
						<div className="flex justify-between items-center">
							<div>
								<CardTitle>AI Assistant</CardTitle>
								<CardDescription>
									Ask me anything about your data
								</CardDescription>
							</div>
							<Button
								variant="ghost"
								size="sm"
								onClick={() => setAssistantOpen(false)}
							>
								✕
							</Button>
						</div>
					</CardHeader>

					<CardContent className="flex-1 overflow-y-auto px-4">
						{conversation
							.filter((msg) => msg.role !== "system")
							.map((msg, index) => (
								<div
									key={index}
									className={`mb-2 ${
										msg.role === "ai" ? "text-blue-600 text-left" : "text-right"
									}`}
								>
									<strong>{msg.role === "ai" ? "AI: " : "You: "}</strong>
									{msg.content}
								</div>
							))}
					</CardContent>

					<CardFooter className="flex gap-2 px-4 pb-4">
						<Input
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							placeholder="Type your message..."
							onKeyDown={(e) => e.key === "Enter" && handleSend()}
						/>
						<Button onClick={handleSend}>Send</Button>
					</CardFooter>
				</Card>
			</div>
		</>
	);
}
