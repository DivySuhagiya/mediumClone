import React from "react";

const TechBadge = ({ techName }) => {
	return (
		<div className="flex items-center ">
			<div className="relative px-2 py-4 whitespace-nowrap border-[1px] border-solid border-[rgba(229,229,229)] rounded-[100px] bg-[#f2f2f2] text-[#242424] leading-5 text-sm font-[400]">
				<span className="mx-4 my-0.5">{techName}</span>
			</div>
		</div>
	);
};

export default TechBadge;
