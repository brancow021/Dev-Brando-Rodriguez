import { useState } from "react";
import Head from "next/head";
import { metadata } from "../metaDataPages";
import { Footer } from "../src/layouts/Footer";
import { HomeHeader } from "../src/layouts/Home";
import { Navbar } from "../src/layouts/Navbar";
import { About } from "../src/components/About";
import { Skills } from "../src/components/Skills";
import { Projects } from "../src/components/Projects";


export default function Home() {
   
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<header className="w-full h-screen bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
					<nav>
						<Navbar />
					</nav>
					<HomeHeader />
				</header>

				<div className="py-6 h-auto bg-gray-100 w-full lg:px-40 sm:px-20 md-px-20 px-8">
               <div id="about">
                  <About />
               </div>
               <div id="skills">
					   <Skills />
               </div>
               <div id="projects">
                  <Projects />
               </div>
				</div>
			</main>

			<footer className="relative bg-gray-900 w-full h-32 flex justify-center items-center flex-col">
            <Footer/>
         </footer>
		</div>
	);
}
