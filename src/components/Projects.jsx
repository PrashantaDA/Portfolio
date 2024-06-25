import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	return (
		<main
			id="projects"
			className="w-[80%] mx-auto py-20 flex flex-col items-center justify-center"
		>
			<h1 className="text-4xl font-bold">
				My Creative <span className="text-[#0091ff]">Portfolio</span>
			</h1>
		</main>
	);
};

export default Projects;
