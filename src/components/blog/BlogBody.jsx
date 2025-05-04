import React, { useState } from "react";

const BlogBody = ({ onAskAI }) => {
	// Assume onAskAI is passed from parent component
	const [highlights, setHighlights] = useState([]);
	const [selectedRange, setSelectedRange] = useState(null);
	const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
	const [showPopup, setShowPopup] = useState(false);
	const [selectedText, setSelectedText] = useState("");

	const paragraphs = [
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
		if (onAskAI) {
			onAskAI(selectedText);
		}
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

					{paragraphs.map((para, index) => (
						<div key={index}>
							{para.heading && (
								<h2 className="text-2xl font-semibold mt-8 mb-2 text-[#1a1a1a]">
									{para.heading}
								</h2>
							)}
							<p className="mt-[20px] tracking-tight leading-8 text-xl mb-[-0.46em] break-words text-[#242424]">
								{processText(para.text, index)}
							</p>
						</div>
					))}

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
