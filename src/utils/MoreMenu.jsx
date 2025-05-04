import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";
import TooltipWrapper from "./TooltipWrapper";
import { MoreIcon } from "./Icons";

const MoreMenu = () => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<TooltipWrapper tooltip="More">
					<MoreIcon />
				</TooltipWrapper>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[230px] mt-2 rounded-md p-2 shadow-md">
				<DropdownMenuItem className="pt-2 pb-2 font-medium cursor-pointer focus:bg-white">
					<div className="flex items-center gap-2 group justify-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="none"
							viewBox="0 0 24 24"
							className="text-[#6b6b6b] cursor-pointer group-hover:text-[#242424] scale-150 ml-2"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18M8.25 12h7.5"
							></path>
						</svg>
						<p className="text-[#6b6b6b] group-hover:text-[#242424] ml-2">
							Show less like this
						</p>
					</div>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="border-[#6b6b6b] border-solid  opacity-40" />

				<DropdownMenuItem className="pt-2 pb-2 text-sm text-[#6b6b6b] font-medium justify-between focus:bg-white cursor-pointer">
					Show highlights{" "}
					<div className="rounded-[2px]  pl-1 pr-1 border-[3px] border-accent ">
						<span className="text-[#6b6b6b] text-xs">Ctrl /</span>
					</div>
				</DropdownMenuItem>
				<DropdownMenuSeparator className="border-[#6b6b6b] border-solid opacity-40" />

				<DropdownMenuItem className="pt-2 pb-2 text-sm text-[#6b6b6b] font-medium cursor-pointer focus:bg-white">
					Follow author
				</DropdownMenuItem>
				<DropdownMenuSeparator className="text-[#6b6b6b] border-solid  opacity-40" />

				<DropdownMenuItem className="pt-2 pb-2 text-sm text-[#6b6b6b] font-medium cursor-pointer focus:bg-white">
					Mute author
				</DropdownMenuItem>

				<DropdownMenuSeparator className="text-[#6b6b6b] border-solid  opacity-40" />

				<DropdownMenuItem className="text-sm text-red-500 font-medium cursor-pointer focus:bg-white">
					Report story…
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default MoreMenu;
