import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Tabs from "./Tabs";
import { ProjectDetails } from "../constants/index";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	return (
		<main
			id="projects"
			className="xs:w-full sm:w-[90%] md:w-[85%] mx-auto py-16 flex flex-col items-center justify-center"
		>
			<div className="w-full text-center">
				<h2 className="text-4xl font-bold mb-10">
					My Creative <span className="text-[#0091ff]">Portfolio</span>
				</h2>
			</div>
			<div className="w-full">
				<Tabs projects={ProjectDetails} />
			</div>
		</main>
	);
};

export default Projects;
