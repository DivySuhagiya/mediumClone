import React, { useState } from "react";

const BlogBody = ({ onAskAI }) => {
	// Assume onAskAI is passed from parent component
	const [highlights, setHighlights] = useState([]);
	const [selectedRange, setSelectedRange] = useState(null);
	const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
	const [showPopup, setShowPopup] = useState(false);
	const [selectedText, setSelectedText] = useState("");

	const paragraphs = [
		"This is the third article in the series 'Web Performance Stuff for React Developers.'",
		"In the previous articles, we learned the basics of performance metrics for measuring initial load, what CSR (Client-Side rendering) is, why it's so popular, and how to record, read and interpret the performance Flame Chart. We also learned two of the most significant downsides of Client-Side Rendering: it negatively affects the initial load and doesn't work in environments without JavaScript.",
		"In the previous articles, we learned the basics of performance metrics for measuring initial load, what CSR (Client-Side rendering) is, why it's so popular, and how to record, read and interpret the performance Flame Chart. We also learned two of the most significant downsides of Client-Side Rendering: it negatively affects the initial load and doesn't work in environments without JavaScript.",
		"In the previous articles, we learned the basics of performance metrics for measuring initial load, what CSR (Client-Side rendering) is, why it's so popular, and how to record, read and interpret the performance Flame Chart. We also learned two of the most significant downsides of Client-Side Rendering: it negatively affects the initial load and doesn't work in environments without JavaScript.",
	];

	const processText = (text, paraIndex) => {
		const paraHighlights = highlights.filter(
			(h) => h.paragraphIndex === paraIndex
		);
		paraHighlights.sort((a, b) => a.start - b.start);

		let parts = [];
		let lastEnd = 0;

		paraHighlights.forEach((hl) => {
			if (hl.start > lastEnd) {
				parts.push(text.slice(lastEnd, hl.start));
			}
			parts.push(
				<span
					key={`${paraIndex}-${hl.start}`}
					style={{ backgroundColor: "yellow" }}
				>
					{text.slice(hl.start, hl.end)}
				</span>
			);
			lastEnd = hl.end;
		});

		if (lastEnd < text.length) {
			parts.push(text.slice(lastEnd));
		}

		return parts;
	};

	const handleMouseUp = () => {
		const selection = window.getSelection();
		if (selection.isCollapsed) {
			setShowPopup(false);
			return;
		}

		const range = selection.getRangeAt(0);
		const selectedText = selection.toString().trim();
		if (!selectedText) return;

		const startContainer = range.startContainer;
		const paragraphNode = startContainer.parentElement.closest("p");

		if (!paragraphNode) {
			setShowPopup(false);
			return;
		}

		const container = paragraphNode.parentNode;
		const paraIndex = Array.from(container.children).indexOf(paragraphNode) - 1;

		if (paraIndex < 0) return;

		// const textContent = paragraphNode.textContent;
		const preSelectionRange = range.cloneRange();
		preSelectionRange.selectNodeContents(paragraphNode);
		preSelectionRange.setEnd(range.startContainer, range.startOffset);
		const start = preSelectionRange.toString().length;
		const end = start + selectedText.length;

		const rect = range.getBoundingClientRect();
		setPopupPosition({
			x: rect.left + window.scrollX,
			y: rect.top + window.scrollY - 40,
		});

		setSelectedRange({ paragraphIndex: paraIndex, start, end });
		setSelectedText(selectedText);
		setShowPopup(true);
	};

	const handleHighlight = () => {
		if (!selectedRange) return;

		setHighlights([
			...highlights,
			{
				paragraphIndex: selectedRange.paragraphIndex,
				start: selectedRange.start,
				end: selectedRange.end,
			},
		]);
		closePopup();
	};

	const handleAskAI = () => {
		if (!selectedText) return;

		// Here you would typically connect to your AI assistant
		// This could be a context function, Redux action, or prop callback
		if (onAskAI) {
			onAskAI(selectedText);
		}

		// Alternatively, you could open a chat interface here
		closePopup();
	};

	const closePopup = () => {
		setShowPopup(false);
		setSelectedText("");
		window.getSelection().removeAllRanges();
	};

	return (
		<div className="flex justify-center mt-8">
			<div className="ml-16 mr-16 max-w-[1192px] w-full flex gap-20">
				<div
					className="max-w-[680px] w-full ml-63 mr-63"
					onMouseUp={handleMouseUp}
				>
					<img src="Animal_classification.jpeg" className="w-auto h-auto" />

					{paragraphs.map((text, index) => (
						<p
							key={index}
							className="mt-[2.14em] tracking-tight leading-8 text-xl mb-[-0.46em] break-words text-[#242424]"
						>
							{processText(text, index)}
						</p>
					))}

					{/* ... keep the pre element the same ... */}

					{showPopup && (
						<div
							className="absolute bg-white border border-gray-300 p-2 rounded shadow-lg flex gap-2"
							style={{
								left: `${popupPosition.x}px`,
								top: `${popupPosition.y}px`,
							}}
						>
							<button
								className="px-3 py-1 bg-yellow-200 hover:bg-yellow-300 rounded text-sm"
								onClick={handleHighlight}
							>
								Highlight
							</button>
							<button
								className="px-3 py-1 bg-blue-200 hover:bg-blue-300 rounded text-sm"
								onClick={handleAskAI}
							>
								Ask AI Assistant
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BlogBody;
