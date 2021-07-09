import React, { useState } from "react";
import Link from 'next/link';
import MenuIcon from "@material-ui/icons/Menu";

export const Navbar = () => {
	const [activeBarResponsive, setactiveBarResponsive] = useState(false);

	const handleActiveBarMobile = () => {
		setactiveBarResponsive(!activeBarResponsive);
	};

	return (
		<>
			<div className="w-full lg:px-20 lg:py-2 lg:flex lg:items-center lg:justify-between flex-col lg:flex-row">
            <div className="flex flex-row items-center w-full justify-between px-3 ">
               <div>
                  <a href={'/'}>
                     <p className="antonFont text-white text-3xl duration-500 ease-in-out hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110 cursor-pointer">
                        {"<BR/>"}
                     </p>
                  </a>
               </div>
               <div className="flex justify-end lg:hidden p-3">
                  <div
                     className="cursor-pointer text-white"
                     onClick={handleActiveBarMobile}
                  >
                     <MenuIcon fontSize="large" />
                  </div>
               </div>
            </div>
				<div
					className={
						activeBarResponsive
							? "bg-gray-700 opacity-90 lg:bg-gray-900 block transition duration-500 ease-in-out absolute w-full"
							: "hidden lg:block"
					}
				>
					<ul className="flex flex-col lg:flex-row p-3">
						<a href="#home">
							<li className="lg:mx-2 p-2 text-white hover:text-blue-400 font-semibold">
								<p className="antonFont font-normal">Home</p>
							</li>
						</a>
						<a href="#about">
							<li className="lg:mx-2 p-2 text-white hover:text-blue-400 font-semibold">
								<p className="antonFont font-normal">About</p>
							</li>
						</a>
						<a href="#skills">
							<li className="lg:mx-2 p-2 text-white hover:text-blue-400 font-semibold">
								<p className="antonFont font-normal">Skills</p>
							</li>
						</a>
                  <a href="#projects">
							<li className="lg:mx-2 p-2 text-white hover:text-blue-400 font-semibold">
								<p className="antonFont font-normal">Projects</p>
							</li>
						</a>
						<a href="#contact">
							<li className="lg:mx-2 p-2 text-white hover:text-blue-400 font-semibold">
								<p className="antonFont font-normal">Contact</p>
							</li>
						</a>
					</ul>
				</div>
			</div>
		</>
	);
};
