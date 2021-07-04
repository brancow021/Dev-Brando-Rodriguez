import React, { useState } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import { metadata } from "../../metaDataPages";

export const Footer = () => {
	const [date] = useState(new Date().getFullYear());

	return (
		<>
			<div className="flex justify-center items-center h-full w-full flex-col">
				<div className="flex flex-row">
					<div className="mx-3">
						<a
							href={metadata.linkedinUrl}
							target="blank"
							className="p-4 bg-gray-800 rounded-xl hover:bg-blue-400 hover: transition duration-700 ease-in-out"
						>
							<LinkedInIcon style={{ color: "white" }} />
						</a>
					</div>
					<div className="mx-3">
						<a
							href={metadata.githubUrl}
							target="blank"
							className="p-4 bg-gray-800 rounded-xl hover:bg-blue-400 hover: transition duration-700 ease-in-out"
						>
							<GitHubIcon style={{ color: "white" }} />
						</a>
					</div>
					<div className="mx-3">
						<a
							href={metadata.githubUrl}
							target="blank"
							className="p-4 bg-gray-800 rounded-xl hover:bg-blue-400 hover: transition duration-700 ease-in-out"
						>
							<InstagramIcon style={{ color: "white" }} />
						</a>
					</div>
				</div>
				<div>
					<p className="text-center pt-6 text-white font-sans capitalize">
						{metadata.author} &copy;{" "}
						<span className="font-bold">{date}</span>
					</p>
				</div>
			</div>
		</>
	);
};
