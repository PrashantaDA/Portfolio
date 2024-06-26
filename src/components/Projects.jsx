import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "./Tabs";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	return (
		<main
			id="projects"
			className="w-[80%] mx-auto py-20 flex flex-col items-center justify-center"
		>
			<div>
				<h1
					className="text-4xl font-bold mb-16
				
				"
				>
					My Creative <span className="text-[#0091ff]">Portfolio</span>
				</h1>
			</div>
			<div>
				<Tabs />
			</div>
		</main>
	);
};

export default Projects;
