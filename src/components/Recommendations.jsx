import React from "react";
import BlogCard from "../utils/BlogCard";

const Recommendations = () => {
	return (
		<>
			<div className="flex justify-center mt-8 bg-[#f9f9f9]">
				<div className="ml-16 mr-16 max-w-[1192px] w-full flex gap-20">
					<div className="max-w-[680px] w-full ml-63 mr-63">
                        <div className="mt-10">
                        <h2 className="font-bold text-xl mt-34">Recommended from Medium</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-1">
                            <BlogCard/>
                            <BlogCard/>
                            <BlogCard/>
                            <BlogCard/>
                        </div>
                        <div className="border mt-8"/>
                        <div className="rounded-full border border-[#242424] px-4 mt-6 w-[250px] text-sm items-center justify-center py-2">
                            <span className="items-center mx-3">See more recommendations</span>
                        </div>
                        <div className="mt-30"/>
                    </div>
				</div>
			</div>
		</>
	);
};

export default Recommendations;
