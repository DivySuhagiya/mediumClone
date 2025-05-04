import React, { useEffect, useState } from "react";
import AuthorHoverCard from "./AuthorHoverCard";
import TooltipWrapper from "../../utils/TooltipWrapper";
import MoreMenu from "../../utils/MoreMenu";
import { ClapIcon, ListenIcon, RespondIcon, SaveIcon } from "../../utils/Icons";
import ShareMenu from "../../utils/ShareMenu";

const BlogHeader = () => {
	const [hideSidebar, setHideSidebar] = useState(false);
	const [showHoverCard, setShowHoverCard] = useState(false);
	const [hoverTimeout, setHoverTimeout] = useState(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setHideSidebar(true);
			} else {
				setHideSidebar(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

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
			{/* Top Green Bar */}
			<div className="bg-[#80a316] w-full h-[3px]" />

			{/* Top Title Bar */}
			<div className="flex justify-center border border-[#f2f2f2]">
				<div className="mr-16 ml-16 w-full max-w-[1192px]">
					<div className="flex items-center h-14">
						<h2 className="text-[18px] font-semibold text-[#242424] whitespace-nowrap overflow-ellipsis overflow-hidden max-w-full font-inter">
							Data Science in Your Pocket
						</h2>
					</div>
				</div>
			</div>

			{/* Main Section */}
			<div className="flex justify-center mt-8">
				<div className="ml-16 mr-16 max-w-[1192px] w-full flex gap-20">
					{/* Left Sidebar */}
					<div
						className={`w-[148px] transition-all duration-300 ease-in-out ${
							hideSidebar ? "opacity-0 pointer-events-none" : "opacity-100"
						}`}
					>
						<div className="flex flex-col items-start">
							<img
								alt="Data Science in Your Pocket"
								className="w-[38px] h-[38px] border rounded-sm bg-[#F2F2F2]"
								src="https://miro.medium.com/v2/resize:fill:48:48/1*azLPGT6SA58kykLPlca3TQ.jpeg"
							/>
							<div className="mt-4" />
							<p className="text-[#6b6b6b] text-sm leading-5 font-normal">
								We are on Youtube: <br />
								<a
									href="https://youtu.be/AtUeDyo1ikU?si=gPbyCotKhXrPdtGc"
									target="_blank"
									rel="noopener noreferrer"
									className="underline text-[#6b6b6b] break-words"
								>
									https://www.youtube.com
								</a>
							</p>
							<div className="mt-4" />
							<p className="underline text-[#6b6b6b] text-sm leading-5 font-normal cursor-pointer">
								Follow publication
							</p>
						</div>
					</div>

					{/* Main Content */}
					<div className="max-w-[680px] w-full ml-6">
						<div className="mt-6" />
						<h2 className="text-[40px] leading-[52px] tracking-tighter font-bold font-inter text-[#242424]">
							What are 1-bit LLMs?
						</h2>
						<p className="text-[#6b6b6b] text-[20px] leading-7 tracking-tight mt-2 font-inter">
							The Era of 1-bit LLMs with BitNet b1.58
						</p>

						{/* Author Info */}
						<div
							className="flex items-center gap-1 mt-6 max-w-[500px] w-full "
							onMouseEnter={handleMouseEnter}
							onMouseLeave={handleMouseLeave}
						>
							<div className="relative group flex items-center cursor-pointer">
								<img
									src="https://miro.medium.com/v2/resize:fill:64:64/0*lSHWEp6-FrCOFZyi"
									className="w-[32px] h-[32px] rounded-full group:hover:opacity-80 cursor-pointer"
									alt="Divy Suhagiya"
								/>
								<span className="ml-2 text-sm tracking-tighter font-medium text-[#242424] group-hover:underline cursor-pointer">
									Divy Suhagiya
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="none"
									viewBox="0 0 16 16"
									className="items-center ml-1"
								>
									<path
										fill="#437AFF"
										d="M15.163 8c0 .65-.459 1.144-.863 1.575-.232.244-.471.5-.563.719s-.086.543-.092.875c-.006.606-.018 1.3-.49 1.781-.47.481-1.15.494-1.744.5-.324.006-.655.013-.857.094s-.465.337-.704.575c-.422.412-.906.881-1.542.881-.637 0-1.12-.469-1.543-.881-.239-.238-.49-.482-.704-.575-.214-.094-.532-.088-.857-.094-.593-.006-1.273-.019-1.744-.5s-.484-1.175-.49-1.781c-.006-.332-.012-.669-.092-.875-.08-.207-.33-.475-.563-.719-.404-.431-.863-.925-.863-1.575s.46-1.144.863-1.575c.233-.244.472-.5.563-.719.092-.219.086-.544.092-.875.006-.606.019-1.3.49-1.781s1.15-.494 1.744-.5c.325-.006.655-.012.857-.094.202-.081.465-.337.704-.575C7.188 1.47 7.671 1 8.308 1s1.12.469 1.542.881c.239.238.49.481.704.575s.533.088.857.094c.594.006 1.273.019 1.745.5.47.481.483 1.175.49 1.781.005.331.011.669.091.875s.33.475.563.719c.404.431.863.925.863 1.575"
									></path>
									<path
										fill="#fff"
										d="M7.328 10.5c.195 0 .381.08.519.22.137.141.215.331.216.53 0 .066.026.13.072.177a.24.24 0 0 0 .346 0 .25.25 0 0 0 .071-.177c.001-.199.079-.389.216-.53a.73.73 0 0 1 .519-.22h1.959c.13 0 .254-.053.346-.146a.5.5 0 0 0 .143-.354V6a.5.5 0 0 0-.143-.354.49.49 0 0 0-.346-.146h-1.47c-.324 0-.635.132-.865.366-.23.235-.359.552-.359.884v2.5c0 .066-.025.13-.071.177a.24.24 0 0 1-.346 0 .25.25 0 0 1-.072-.177v-2.5c0-.332-.13-.65-.359-.884A1.21 1.21 0 0 0 6.84 5.5h-1.47a.49.49 0 0 0-.346.146A.5.5 0 0 0 4.88 6v4c0 .133.051.26.143.354a.49.49 0 0 0 .347.146z"
									></path>
								</svg>

								{/* Hover Card */}
								{showHoverCard && (
									<div className="hidden group-hover:block">
										<AuthorHoverCard />
									</div>
								)}
							</div>

							<button className="ml-2 px-3 py-[6px] border rounded-full text-sm font-[400] cursor-pointer border-[#242424]">
								Follow
							</button>
							<span className="text-[#6b6b6b] text-sm tracking-tight">
								4 min read · Mar 3, 2024
							</span>
						</div>

						{/* Footer Stats */}
						<div className="flex items-center pt-4 pb-4 mt-9 text-[#6b6b6b] text-sm border-t-[1px] border-b-[1px] border-[#f2f2f2] border-solid">
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
								<TooltipWrapper tooltip="Listen">
									<ListenIcon />
								</TooltipWrapper>
								<ShareMenu />

								<MoreMenu />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogHeader;
