import React, { useState } from "react";

const BlogBody = ({ onAskAI }) => {
	// Assume onAskAI is passed from parent component
	const [highlights, setHighlights] = useState([]);
	const [selectedRange, setSelectedRange] = useState(null);
	const [popupPosition, setPopupPosition] = useState({ x: 0, y: 0 });
	const [showPopup, setShowPopup] = useState(false);
	const [selectedText, setSelectedText] = useState("");

	const paragraphs = [
		"Classifying animals using deep learning has become significantly more efficient with the help of transfer learning. Instead of building a convolutional neural network (CNN) from scratch, which requires large datasets and extensive training time, transfer learning allows us to leverage pre-trained models like those trained on ImageNet—a massive dataset with over a million images across 1,000 categories. These models have already learned to identify general features such as edges, textures, and shapes, which are often applicable across different image classification tasks, including animal recognition.",
		"In a typical animal classification pipeline using transfer learning, we begin by selecting a pre-trained model such as ResNet50, VGG16, or MobileNet. These models act as feature extractors, and we can either freeze their convolutional base layers to retain learned weights or fine-tune them to adapt better to our animal dataset. After loading the model, we replace the top (fully connected) layers with new layers that match the number of animal classes we want to predict. This is followed by training on a relatively smaller animal dataset, such as a curated subset containing images of cats, dogs, elephants, tigers, and birds.",
		"Image preprocessing is a key step, where images are resized and normalized to match the input requirements of the pre-trained network. During training, techniques such as data augmentation—rotating, flipping, and zooming images—help improve generalization. Once trained, the model can accurately classify unseen animal images by leveraging the generalized features learned from the vast ImageNet dataset.",
		"This approach is not only faster and less resource-intensive than training from scratch but also yields high accuracy, even with limited labeled data. Transfer learning bridges the gap between data scarcity and model performance, making it ideal for real-world applications such as wildlife monitoring, pet breed identification, and conservation efforts. The success of ImageNet-based transfer learning in animal classification showcases the power of reusing knowledge from large-scale datasets to solve more specific, targeted problems effectively.",
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

					{paragraphs.map((text, index) => (
						<p
							key={index}
							className="mt-[2.14em] tracking-tight leading-8 text-xl mb-[-0.46em] break-words text-[#242424]"
						>
							{processText(text, index)}
						</p>
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
