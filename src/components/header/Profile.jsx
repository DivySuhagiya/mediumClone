import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sparkles } from "lucide-react";
import {
	LibraryIcon,
	ProfileIcon,
	StatsIcon,
	StoryIcon,
} from "../../utils/Icons";

const menuItems = {
	section1: [
		{
			label: "Profile",
			icon: <ProfileIcon />,
		},
		{
			label: "Library",
			icon: <LibraryIcon />,
		},
		{
			label: "Stories",
			icon: <StoryIcon />,
		},
		{
			label: "Stats",
			icon: <StatsIcon />,
		},
	],
	section2: [
		"Settings",
		"Refine recommendations",
		"Manage publications",
		"Help",
	],
	section3: [
		{
			label: "Become a Medium member",
			icon: <Sparkles className="w-4 h-4 text-yellow-500 ml-1" />,
		},
		"Create a Mastodon account",
		"Apply for author verification",
		"Apply to the Partner Program",
		"Gift a membership",
	],
};

export default function ProfileMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<img
					src="https://miro.medium.com/v2/resize:fill:64:64/0*lSHWEp6-FrCOFZyi"
					alt="Avatar"
					className="w-8 h-8 rounded-full cursor-pointer border-none"
				/>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[280px] mt-2">
				{/* Section 1 */}
				<div className="pt-4 pb-4">
					{menuItems.section1.map((item) => (
						<div
							className="group items-start text-sm font-[500] cursor-pointer "
							key={item.label}
						>
							<DropdownMenuItem className="flex items-center gap-4 px-6 py-2 text-sm text-[#6b6b6b] font-[400] focus:bg-white group-hover:text-[#242424] cursor-pointer">
								{item.icon}
								<span>{item.label}</span>
							</DropdownMenuItem>
						</div>
					))}
				</div>

				<DropdownMenuSeparator />

				{/* Section 2 */}
				<div className="pt-4 pb-4">
					{menuItems.section2.map((label) => (
						<DropdownMenuItem
							key={label}
							className="px-6 text-sm text-[#6b6b6b] font-[400] focus:bg-white focus:text-[#242424] cursor-pointer"
						>
							{label}
						</DropdownMenuItem>
					))}
				</div>

				<DropdownMenuSeparator />

				{/* Section 3 */}
				<div className="pt-4 pb-4">
					{menuItems.section3.map((item) =>
						typeof item === "string" ? (
							<DropdownMenuItem
								key={item}
								className="px-6  text-sm text-[#6b6b6b] font-[400] focus:bg-white focus:text-[#242424] cursor-pointer"
							>
								{item}
							</DropdownMenuItem>
						) : (
							<DropdownMenuItem
								key={item.label}
								className="px-6  text-sm text-[#6b6b6b] font-[400] flex items-center justify-between focus:bg-white focus:text-[#242424]"
							>
								<span>{item.label}</span>
								{item.icon}
							</DropdownMenuItem>
						)
					)}
				</div>

				<DropdownMenuSeparator />

				{/* Sign Out */}
				<div className="pt-4 pb-4">
					<DropdownMenuItem className="px-6 py-2 text-sm text-[#6b6b6b] font-[400] focus:bg-white focus:text-[#242424] cursor-pointer">
						Sign out
					</DropdownMenuItem>
					<div className="px-6 text-sm text-[#6b6b6b]">
						di••••••••@gmail.com
					</div>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
