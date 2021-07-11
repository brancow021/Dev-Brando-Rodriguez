import Image from "next/image";
import { projectsData } from "../data/projects";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useState } from "react";

export const Projects = () => {

   const [filterData, setfilterData] = useState(projectsData);
   const [techs] = useState(['All', 'React', 'React Native', 'Javascript', 'NextJs'])


   const handleFilterData = (text) => {
      if(text === 'All'){ return setfilterData(projectsData) }

      let dataProjectsFilter = projectsData.filter((project) => {
         return project.tecnologys.find(data => data === text)
      })

      setfilterData(dataProjectsFilter);
   }

	return (
		<>
			<div className="mt-10 flex justify-center items-center flex-col lg:px-10">
				<div className="w-30 border-blue-500 border-b-4 rounded mb-10">
					<h2 className="antonFont text-3xl text-center text-gray-900 uppercase">
						Projects
					</h2>
				</div>
				<div className="pt-10 w-full">
					<ul className="lg:flex justify-center grid grid-cols-2 gap-2">
                  {techs.map((tech, index) => (
                     <li key={index} onClick={() => handleFilterData(tech)} className="lg:mx-4 mx-1 h-8 lg:w-32 w-full bg-gray-800 uppercase md:flex items-center justify-center text-white text-center font-bold cursor-pointer hover:bg-blue-500 rounded-xl">
                        { tech }
                     </li>
                  ))}
					</ul>
				</div>
				<div className="flex flex-col lg:grid grid-cols-3 gap-4 my-10">
					{filterData?.map((project, index) => (
						<div
							key={index}
							className="bg-gray-200 border rounded-t-xl rounded-b-xl animate__animated animate__fadeInLeft"
						>
							<div className="rounded-t-xl bg-gray-200 border-gray-400 border-t-2 w-full p-2">
								<h3 className="text-center antonFont text-xl font-normal uppercase">
									{project.name}
								</h3>
							</div>
							<div className="bg-white w-full">
								<Image
									className="object-cover w-full"
									src={project.source}
									alt={project.name}
								/>
							</div>
							<div className="bg-white h-28 flex items-center">
								<div className="p-4 text-center font-semibold">
									{project.description}
								</div>
							</div>
							<a
								href={project.url}
								rel="noreferrer"
								target="_blank"
								className="py-2 px-4 bg-blue-600 rounded-b-lg text-white transition duration-500 ease-in-out hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-100 flex justify-center"
							>
								<div className="text-white mx-2">
									<GitHubIcon />
								</div>
								<div className="text-white text-center">View Code</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</>
	);
};
