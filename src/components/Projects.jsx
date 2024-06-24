import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	return (
		<main id="projects">
			<h1 className="text-4xl font-bold">Projects</h1>
		</main>
	);
};

export default Projects;
