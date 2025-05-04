import React from "react";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import { AIAssistantSidebar } from "../ai/AiChat";
import { Button } from "@/components/ui/button";
import { MediumLogo, NotificationIcon, WriteIcon } from "../../utils/Icons";

const Header = () => {
	return (
		<div className="h-[57px] w-full flex items-center pr-6 pl-6 sticky">
			<div className="flex items-center flex-grow flex-shrink-0 basis-auto">
				{/* Logo */}
				<a className="cursor-pointer m-0 p-0 border-none flex" href="/">
					<MediumLogo />
				</a>

				{/* Search bar */}
				<div className="ml-[24px]">
					<SearchBar />
				</div>
			</div>

			{/* Write Section */}
			<div className="hidden md:flex">
				<div className="flex mr-8">
					{/* Write Icon */}
					<div className="relative flex items-center leading-5 font-[400px] cursor-pointer group">
						<WriteIcon />
						<div className="ml-2 text-[#6b6b6b] text-sm group-hover:text-[#2f2f2f]">
							Write
						</div>
					</div>
				</div>
			</div>

			{/* Notification */}
			<div className="flex mr-8">
				<div className="flex items-center relative text-sm leading-5 font-[400] cursor-pointer">
					<NotificationIcon />
				</div>
			</div>

			{/* profile */}
			<div className="flex">
				<Profile />
			</div>
		</div>
	);
};

export default Header;
