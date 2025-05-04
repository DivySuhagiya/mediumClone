import React from "react";
import TechBadge from "../../utils/TechBadge";
import TooltipWrapper from "../../utils/TooltipWrapper";
import MoreMenu from "../../utils/MoreMenu";
import { ClapIcon, RespondIcon, SaveIcon, ShareIcon } from "../../utils/Icons";

const BlogFooter = () => {
	const bio = `if(brain!=empty) {keepCoding();} else{ orderCoffee();}`;
	return (
		<>
			<div className="flex justify-center mt-8">
				<div className="ml-16 mr-16 max-w-[1192px] w-full flex gap-20">
					<div className="max-w-[680px] w-full ml-63 mr-63">
						{/* tech stack */}
						<div className="flex gap-2">
							<TechBadge techName="Machine Learning" />
							<TechBadge techName="Transfer Learning" />
							<TechBadge techName="Image Classification" />
						</div>
						{/* options */}
						<div className="flex items-center pt-4 pb-4 mt-9 text-[#6b6b6b] text-sm">
							<TooltipWrapper tooltip="clap">
								<ClapIcon />
							</TooltipWrapper>
							<TooltipWrapper
								tooltip="view Claps"
								className="ml-1 text-[#6b6b6b] hover:text-[#242424] cursor-pointer"
							>
								979
							</TooltipWrapper>
							<div className="group flex items-center ml-6">
								<TooltipWrapper tooltip="Respond">
									<RespondIcon />
								</TooltipWrapper>
								<span className="ml-1 text-[#6b6b6b] group-hover:text-[#242424] cursor-pointer">
									6
								</span>
							</div>
							<div className="ml-auto flex items-center gap-8">
								<TooltipWrapper tooltip="Save">
									<SaveIcon />
								</TooltipWrapper>
								<TooltipWrapper tooltip="Share">
									<ShareIcon />
								</TooltipWrapper>

								<MoreMenu />
							</div>
						</div>
						{/* profile */}
						<div className="flex flex-row gap-4 mt-14 justify-between">
							<div className="items-center">
								<img
									src="https://miro.medium.com/v2/resize:fill:64:64/0*lSHWEp6-FrCOFZyi"
									className="w-[42px] h-[42px] rounded-full cursor-pointer mt-2"
									alt="Divy Suhagiya"
								/>
							</div>
							<div className="flex flex-col">
								<div className="font-[600] font-inter tracking-tight text-xl">
									<h2 className="">Written by Divy Suhagiya</h2>
								</div>
								<div className="flex flex-col">
									<div className="flex ">
										<span className="text-[#6b6b6b] font-[300] text-sm mt-1 cursor-pointer">
											2k Followers •
										</span>
										<span className="text-[#6b6b6b] font-[300] text-sm mt-1 ml-1 cursor-pointer hover:underline">
											55 Following
										</span>
									</div>
									<span className="text-sm mt-2"> {bio}</span>
								</div>
							</div>
							<div className="ml-42 mt-2">
								<div className="border rounded-full border-spacing-5 px-4 py-2 border-black">
									<span className="text-sm text-[#242424] font-[400] cursor-pointer">
										Follow
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="mt-20 border-b" />
		</>
	);
};

export default BlogFooter;
