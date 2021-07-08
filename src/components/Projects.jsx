import React from "react";

export const Projects = () => {
	return (
		<>
			<div className="mt-10 flex justify-center items-center flex-col lg:px-5">
				<div className="w-30 border-blue-500 border-b-4 rounded mb-10">
					<h2 className="antonFont text-3xl text-center text-gray-900 uppercase">
						Projects
					</h2>
				</div>
				<div className="pt-10 w-full">
					<ul className="lg:flex justify-center grid grid-cols-2 gap-2">
						<li className="lg:mx-4 mx-1 h-8 lg:w-32 w-full bg-gray-800 uppercase md:flex items-center justify-center text-white text-center font-bold">
							All
						</li>
						<li className="lg:mx-4 mx-1 h-8 lg:w-32 w-full bg-gray-800 uppercase md:flex items-center justify-center text-white text-center font-bold">
							React
						</li>
						<li className="lg:mx-4 mx-1 h-8 lg:w-32 w-full bg-gray-800 uppercase md:flex items-center justify-center text-white text-center font-bold">
							React Native
						</li>
						<li className="lg:mx-4 mx-1 h-8 lg:w-32 w-full bg-gray-800 uppercase md:flex items-center justify-center text-white text-center font-bold">
							Javascript
						</li>
						<li className="lg:mx-4 mx-1 h-8 lg:w-32 w-full bg-gray-800 uppercase md:flex items-center justify-center text-white text-center font-bold">
							Laravel
						</li>
					</ul>
				</div>
				<div className="flex flex-col lg:grid grid-cols-3 gap-4 my-10">
					<div className="bg-gray-200">
						<div>
							<img
								src="https://www.clasesdeperiodismo.com/wp-content/uploads/2016/09/gif-animados.jpg"
								alt=""
							/>
						</div>
						<div className="p-1 w-full text-center bg-blue-500 rounded-b-lg text-white">View Site</div>
					</div>
               <div className="bg-gray-200 h-full">
						<div>
							<img
								src="https://www.clasesdeperiodismo.com/wp-content/uploads/2016/09/gif-animados.jpg"
								alt=""
							/>
						</div>
						<div className="p-1 w-full text-center bg-blue-500 rounded-b-lg text-white">View Site</div>
					</div>
               <div className="bg-gray-200 h-full">
						<div>
							<img
								src="https://www.clasesdeperiodismo.com/wp-content/uploads/2016/09/gif-animados.jpg"
								alt=""
							/>
						</div>
						<div className="p-1 w-full text-center bg-blue-500 rounded-b-lg text-white">View Site</div>
					</div>
               <div className="bg-gray-200 h-full">
						<div>
							<img
								src="https://www.clasesdeperiodismo.com/wp-content/uploads/2016/09/gif-animados.jpg"
								alt=""
							/>
						</div>
						<div className="p-1 w-full text-center bg-blue-500 rounded-b-lg text-white">View Site</div>
					</div>
				</div>
			</div>
		</>
	);
};
