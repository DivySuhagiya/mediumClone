import React from "react";

const Footer = () => {
	const options = [
		"Help",
		"Status",
		"About",
		"Careers",
		"Press",
		"Blog",
		"Privacy",
		"Rules",
		"Terms",
		"Text to speech",
	];
	return (
		<div className="bg-[#f9f9f9]">
			<div className="border" />
			<div className="flex justify-center mt-8">
				<div className="ml-16 mr-16 max-w-[1192px] w-full flex gap-20">
					<div className="max-w-[680px] w-full ml-63 mr-63">
						<div className="flex flex-row items-center justify-center mt-[-20px]">
							{options.map((option) => (
								<span key={option} className="text-[#6b6b6b] text-sm ml-2 cursor-pointer">
									{option}
								</span>
							))}
						</div>
					</div>
                    <div className="h-[10px]"/>
				</div>
			</div>
		</div>
	);
};

export default Footer;
