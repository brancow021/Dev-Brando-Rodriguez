import React from "react";
import AssignmentIcon from '@material-ui/icons/Assignment';import { metadata } from "../../metaDataPages";

export const HomeHeader = () => {
	return (
		<>
			<div className="flex justify-center items-center w-full h-5/6">
				<div className="">
					<div>
						<h1 className="text-5xl text-white antonFont text-center">
							Hello, I am{" "}
							<span className="text-blue-400">{metadata.author}</span>
						</h1>
					</div>

					<div>
						<p className="text-center lg:p-5 p-8 text-white antonFont text-lg">
							I AM <span className="text-blue-400">Full-stack</span> web and mobile developer, Javascript
							specialist
						</p>
					</div>

					<div className="flex justify-center mt-1">
						<button className="py-2 px-4 bg-blue-600 rounded-lg text-white antonFont transition duration-500 ease-in-out hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110 flex">
                     <AssignmentIcon/>
							<p className="mx-1">See Curriculum vitae</p>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};
