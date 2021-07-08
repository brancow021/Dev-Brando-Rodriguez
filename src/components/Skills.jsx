import React, { useEffect } from "react";
import dynamic from "next/dynamic";

const SkillBar = dynamic(() => import("react-skillbars"), { ssr: false });

export const Skills = () => {
	const skills = [
      { type: "HTML", level: 90 },
      { type: "CSS", level: 90 },
		{ type: "Javascript", level: 85 },
		{ type: "React", level: 83 },
		{ type: "NextJS", level: 75 },
		{ type: "Laravel", level: 42 },
		{ type: "React/Native", level: 83 },
		{ type: "MySQL", level: 79 },
		{ type: "NodeJS", level: 80 },
      { type: "Tailwinds", level: 84 },
	];

   const colors = {
      "bar": "#3C8BC1",
      "title": {
        "text": "#fff",
        "background": "#086DB2"
      }
    }

	return (
		<>
			<div className="mt-10 flex justify-center items-center flex-col lg:px-10">
				<div className="w-20 border-blue-500 border-b-4 rounded mb-10">
					<h2 className="antonFont text-3xl text-center text-gray-900 uppercase">
						Skills
					</h2>
				</div>
				<div className="w-full">
					<SkillBar colors={colors} skills={skills} />
				</div>
			</div>
		</>
	);
};
