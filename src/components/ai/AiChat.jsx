import { useEffect, useState } from "react";
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

export function AIAssistantSidebar({ openAssistant, setAssistantOpen, initialMessage }) {
	const [message, setMessage] = useState("");
	const [conversation, setConversation] = useState([]);

    useEffect(() => {
        if (initialMessage) {
          setMessage(initialMessage);
          setConversation((prev) => [
            ...prev,
            { role: "user", content: initialMessage },
            { role: "ai", content: "This is a simulated AI response." }, // Replace with real AI
          ]);
        }
      }, [initialMessage]);

	const handleSend = () => {
		if (message.trim()) {
			setConversation([
				...conversation,
				{ role: "user", content: message },
				{ role: "ai", content: "This is a simulated AI response." },
			]);
			setMessage("");
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
						{conversation.map((msg, index) => (
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
