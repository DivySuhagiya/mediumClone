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
		"Classifying animals using deep learning has become significantly more efficient with the help of transfer learning. Instead of building a convolutional neural network (CNN) from scratch, which requires large datasets and extensive training time, transfer learning allows us to leverage pre-trained models like those trained on ImageNet—a massive dataset with over a million images across 1,000 categories. These models have already learned to identify general features such as edges, textures, and shapes, which are often applicable across different image classification tasks, including animal recognition.",
		"In a typical animal classification pipeline using transfer learning, we begin by selecting a pre-trained model such as ResNet50, VGG16, or MobileNet. These models act as feature extractors, and we can either freeze their convolutional base layers to retain learned weights or fine-tune them to adapt better to our animal dataset. After loading the model, we replace the top (fully connected) layers with new layers that match the number of animal classes we want to predict. This is followed by training on a relatively smaller animal dataset, such as a curated subset containing images of cats, dogs, elephants, tigers, and birds.",
		"Image preprocessing is a key step, where images are resized and normalized to match the input requirements of the pre-trained network. During training, techniques such as data augmentation—rotating, flipping, and zooming images—help improve generalization. Once trained, the model can accurately classify unseen animal images by leveraging the generalized features learned from the vast ImageNet dataset.",
		"This approach is not only faster and less resource-intensive than training from scratch but also yields high accuracy, even with limited labeled data. Transfer learning bridges the gap between data scarcity and model performance, making it ideal for real-world applications such as wildlife monitoring, pet breed identification, and conservation efforts. The success of ImageNet-based transfer learning in animal classification showcases the power of reusing knowledge from large-scale datasets to solve more specific, targeted problems effectively.",
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
