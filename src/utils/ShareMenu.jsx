import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import TooltipWrapper from "./TooltipWrapper";
import { CopyLinkIcon, FacebookIcon, LinkedInIcon, ShareIcon, TwitterIcon } from "./Icons";

const ShareMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<TooltipWrapper tooltip="More">
					<ShareIcon />
				</TooltipWrapper>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[230px] mt-2 rounded-md p-2 shadow-md">
				<DropdownMenuItem className="pt-2 pb-2 font-medium cursor-pointer focus:bg-white">
					<div className="flex items-center gap-2 group justify-center">
						<CopyLinkIcon/>
						<p className="text-[#6b6b6b] group-hover:text-[#242424] ml-2">
							Copy link
						</p>
					</div>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="border-[#6b6b6b] border-solid  opacity-40" />

				<DropdownMenuItem className="pt-2 pb-2 text-sm text-[#6b6b6b] font-medium justify-between focus:bg-white cursor-pointer">
				<div className="flex items-center gap-2 group justify-center">
						<TwitterIcon/>
						<p className="text-[#6b6b6b] group-hover:text-[#242424] ml-2">
							Share on X
						</p>
					</div>
				</DropdownMenuItem>

				<DropdownMenuItem className="pt-2 pb-2 text-sm text-[#6b6b6b] font-medium cursor-pointer focus:bg-white">
				<div className="flex items-center gap-2 group justify-center">
						<FacebookIcon/>
						<p className="text-[#6b6b6b] group-hover:text-[#242424] ml-2">
							Share on Facebook
						</p>
					</div>
				</DropdownMenuItem>

				<DropdownMenuItem className="pt-2 pb-2 text-sm text-[#6b6b6b] font-medium cursor-pointer focus:bg-white">
				<div className="flex items-center gap-2 group justify-center">
						<LinkedInIcon/>
						<p className="text-[#6b6b6b] group-hover:text-[#242424] ml-2">
							Share on LinkedIn
						</p>
					</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ShareMenu;
