import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { ShieldIcon } from "../utils/Icons";

const CommentSection = () => {
	const [comment, setComment] = useState("false");
	return (
		<>
			<div className="flex justify-center mt-8">
				<div className="ml-16 mr-16 max-w-[1192px] w-full flex gap-20">
					<div className="max-w-[680px] w-full ml-63 mr-63">
						<div className="flex justify-between">
							<h2 className="font-bold text-xl">No responses yet</h2>
							<ShieldIcon />
						</div>

						<div className="flex flex-col">
							<div className="flex items-center mt-10">
								<img
									src="https://miro.medium.com/v2/resize:fill:64:64/0*lSHWEp6-FrCOFZyi"
									className="w-[32px] h-[32px] rounded-full cursor-pointer mt-2"
									alt="Divy Suhagiya"
								/>
								<span className="ml-3 mt-2 text-sm font-[400]">
									DivySuhaiya
								</span>
							</div>
							<div className="bg-[#f9f9f9] h-[200px] w-full rounded-sm mt-2">
								<Textarea
									className="mx-4 my-8 w-[650px] h-[100px]"
									placeholder="Add a comment..."
									onChange={(e) => setComment(e.target.value)}
								/>
								<div className="flex justify-end flex-row items-center gap-2 px-4 mt-[-18px]">
									<button>Cancel</button>
									<button
										className={`${
											comment.length > 0
												? "bg-[#242424] text-white"
												: "text-[#6b6b6b] bg-[##e2e2e2]"
										} border rounded-full px-3 py-1 text-sm `}
									>
										Respond
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="h-[100px]"></div>
		</>
	);
};

export default CommentSection;
