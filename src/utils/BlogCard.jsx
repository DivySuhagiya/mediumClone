import React, { useState } from "react";
import AuthorHoverCard from "../components/blog/AuthorHoverCard";
import TooltipWrapper from "./TooltipWrapper";
import MoreMenu from "./MoreMenu";
import { ClapIcon, RespondIcon, SaveIcon } from "./Icons";

const BlogCard = () => {
	const [showHoverCard, setShowHoverCard] = useState(false);
	const [hoverTimeout, setHoverTimeout] = useState(null);

	const handleMouseEnter = () => {
		const timeout = setTimeout(() => {
			setShowHoverCard(true);
		}, 1000); // 1-second delay
		setHoverTimeout(timeout);
	};

	const handleMouseLeave = () => {
		clearTimeout(hoverTimeout);
		setShowHoverCard(false);
	};

	return (
		<div>
			<div className="w-[330px] mt-14">
				<img
					src="Animal_classification.jpeg"
					className="aspect-[2] overflow-clip object-cover w-full cursor-pointer"
				/>
			</div>
			<div
				className="flex items-center relative group"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				<img
					src="https://miro.medium.com/v2/resize:fill:64:64/0*lSHWEp6-FrCOFZyi"
					className="w-[24px] h-[24px] rounded-full cursor-pointer mt-2"
					alt="Divy Suhagiya"
				/>
				<span className="mt-[6px] ml-1 text-[#242424] font-semibold text-sm">
					Divy Suhgaiya
				</span>
				{showHoverCard && (
					<div className="hidden group-hover:block">
						<AuthorHoverCard />
					</div>
				)}
			</div>
			<div>
				<h2 className="mt-3 font-bold text-lg">Animal Classification</h2>
				<p className="text-[#6b6b6b] mt-1 text-sm max-w-[330px]">
					Animal Classification using Machine Learning and transfer learning...
				</p>
			</div>
			<div className="mt-3 flex flex-row">
				<span className="text-[#6b6b6b] text-sm">may 1</span>
				<div className="mt-[1px] ml-2">
					<TooltipWrapper tooltip="clap">
						<ClapIcon/>
					</TooltipWrapper>
				</div>
				<div className="group flex ml-2 mt-0.5">
					<RespondIcon/>
				</div>
				<div className="mt-[1px] ml-40">
					<SaveIcon/>
				</div>
                <div className="mt-[1px] ml-2">
                <MoreMenu />
                </div>
			</div>
		</div>
	);
};

export default BlogCard;
