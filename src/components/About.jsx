import React from "react";
import DevicesIcon from "@material-ui/icons/Devices";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import SecurityIcon from "@material-ui/icons/Security";
import { metadata } from "../../metaDataPages";

export const About = () => {
	return (
		<>
			<div className="flex justify-center items-center flex-col mt-10">
				<div className="p-2 w-full flex items-center flex-col ">
					<div className="w-20 border-blue-500 border-b-4 rounded">
						<h2 className="antonFont text-3xl text-center text-gray-900 uppercase">
							About
						</h2>
					</div>
					<div className="w-full my-10 px-5 text-center font-semibold">
						<p>{metadata.aboutMe}</p>
					</div>
				</div>
				<div className="flex lg:flex-row flex-col w-full justify-center">
					<div className="w-full h-full flex justify-center items-center mt-5 lg:mx-3">
						<div className="bg-gray-100 rounded-xl mt-2 border border-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-800 lg:overflow-hidden flex items-center flex-col h-72 text-center mb-2">
							<div className="rounded-t-xl mb-3 bg-gray-200 w-full p-2">
								<h3 className="text-center antonFont text-xl font-normal">
									Responsive
								</h3>
							</div>

							<div className="p-4 flex justify-center items-center flex-col">
								<div className="mb-2">
									<DevicesIcon
										className="text-yellow-500"
										style={{ fontSize: "90px" }}
									/>
								</div>

								<p className="text-black">
									My layouts will work on any device, big or small.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full h-full flex justify-center items-center mt-5 lg:mx-3">
						<div className="bg-gray-100 rounded-xl mt-2 border border-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-800 lg:overflow-hidden flex items-center flex-col h-72 text-center mb-2">
							<div className="rounded-t-xl mb-3 bg-gray-200 w-full p-2">
								<h3 className="text-center antonFont text-xl font-normal">
									Performance
								</h3>
							</div>
							<div className="p-4 flex justify-center items-center flex-col">
								<div className="mb-2">
									<FlashOnIcon
										className="text-purple-500"
										style={{ fontSize: "90px" }}
									/>
								</div>
								<p className="text-black">
									Fast load times and lag free interaction, my highest
									priority.
								</p>
							</div>
						</div>
					</div>
					<div className="w-full h-full flex justify-center items-center mt-5 lg:mx-3">
						<div className="bg-gray-100 rounded-xl mt-2 border border-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-800 lg:overflow-hidden flex items-center flex-col h-72 text-center mb-2">
							<div className="rounded-t-xl mb-3 bg-gray-200 w-full p-2">
								<h3 className="text-center antonFont text-xl font-normal">
									Dynamic
								</h3>
							</div>
							<div className="p-4 flex justify-center items-center flex-col">
								<div className="mb-2">
									<DynamicFeedIcon
										className="text-blue-500"
										style={{ fontSize: "90px" }}
									/>
								</div>
								<p className="text-black">
									{
										"Websites don't have to be static, I love making pages come to life."
									}
								</p>
							</div>
						</div>
					</div>
					<div className="w-full h-full flex justify-center items-center mt-5 lg:mx-3">
						<div className="bg-gray-100 rounded-xl mt-2 border border-gray-300 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-gray-800 lg:overflow-hidden flex items-center flex-col h-72 text-center mb-2">
							<div className="rounded-t-xl mb-3 bg-gray-200 w-full p-2">
								<h3 className="text-center antonFont text-xl font-normal">
									Secure
								</h3>
							</div>
							<div className="p-4 flex justify-center items-center flex-col">
								<div className="mb-2">
									<SecurityIcon
										className="text-green-600"
										style={{ fontSize: "90px" }}
									/>
								</div>
								<p className="text-black">
									The applications that I develop are quite robust
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
