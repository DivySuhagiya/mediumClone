import React from "react";

const AuthorHoverCard = () => {
	return (
		<div className="absolute border-t-2 top-8 left-0 w-64 h-64 bg-white rounded-sm shadow-xl p-4 z-50">
			<div className="flex items-center gap-3 mt-4">
				<img
					src="https://miro.medium.com/v2/resize:fill:64:64/0*lSHWEp6-FrCOFZyi"
					alt="Divy Suhagiya"
					className="w-14 h-14 rounded-full object-cover"
				/>
				<button className="ml-auto px-3 py-2 bg-black text-white text-sm font-inter rounded-full">
					Follow
				</button>
			</div>
			<div className="mt-2">
				<p className="font-semibold text-black">Divy Suhagiya</p>
				<p className="text-gray-500 text-sm">1.5K Followers</p>
			</div>
			<div className="mt-2 text-sm text-gray-700">
				LinkedIn: <br />
				<a
					href="https://www.linkedin.com/in/divy-suhagiya-627299236"
					className="text-[#6b6b6b] underline"
					target="_blank"
					rel="noopener noreferrer"
				>
					Divysuhagiya
				</a>
			</div>
			<div className="mt-3">
				<span className="inline-flex items-center gap-1 text-blue-600 font-medium text-sm">
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
					Book Author
				</span>
			</div>
		</div>
	);
};

export default AuthorHoverCard;
