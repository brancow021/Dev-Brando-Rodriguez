import { useState } from "react";
import Head from "next/head";
import { metadata } from "../metaDataPages";
import { Footer } from "../src/layouts/Footer";
import { HomeHeader } from "../src/layouts/Home";
import { Navbar } from "../src/layouts/Navbar";
import { About } from "../src/components/About";
import { Skills } from "../src/components/Skills";

export default function Home() {
	return (
		<div>
			<Head>
				<title>{metadata.title}</title>
				<meta name="description" content={metadata.description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="h-screen">
				<header className="w-full h-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900">
					<nav>
						<Navbar />
					</nav>
					<HomeHeader />
				</header>

				<div className="py-6 h-auto bg-gray-100 w-full lg:px-40 sm:px-20 md-px-20 px-10">
					<About />
					<Skills />
				</div>
			</main>

			{/* <footer className="bottom-0 bg-gray-900 w-full h-40 flex justify-center items-center">
            <Footer/>
         </footer> */}
		</div>
	);
}
