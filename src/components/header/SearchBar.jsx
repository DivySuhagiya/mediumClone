import React from "react";
import { SearchIcon } from "../../utils/Icons";

const SearchBar = () => {
	return (
		<div className="flex items-center w-[240px] h-[40px] bg-[#f9f9f9] rounded-[20px] border-none">
			{/* Search Icon */}
			<div className="flex items-center ml-3 mr-3 ">
				<SearchIcon/>
			</div>

			{/* Input Field */}
			<input
				className="focus:outline-none pt-2.5 pb-2.5 pr-5 w-full text-sm border-none leading-5 bg-transparent text-[#242424] placeholder:font-medium"
				placeholder="Search"
                type="text"
			></input>
		</div>
	);
};

export default SearchBar;
