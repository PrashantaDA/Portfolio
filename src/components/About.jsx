/* eslint-disable react/no-unescaped-entities */

import Stack from "./Stack";
import { frontend, backend, tools } from "../constants/index";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
	useGSAP(() => {
		gsap.fromTo(
			"#about",
			{ autoAlpha: 0, transform: "translateX(100%)" },
			{
				autoAlpha: 1,
				transform: "translateX(0)",
				duration: 0.5,
				delay: 0.2,
				scrollTrigger: {
					trigger: "#about",
				},
			}
		);
	});

	return (
		<main
			id="about"
			className="w-full py-20 dark:bg-dark2 bg-light dark:text-dtext"
		>
			<div className="flex justify-center flex-col items-center gap-4">
				<h1 className="text-4xl font-bold">
					About <span className="text-[#0091ff]">Me</span>
				</h1>
				<p className="text-sm capitalize px-4 text-center">
					Always <strong className="text-[#0866FF]">learning</strong>. Always <strong className="text-[#0866FF]">growing</strong>. Looking for{" "}
					<strong className="text-[#0866FF]">new challenges</strong>.{" "}
				</p>
			</div>
			<div className="max-w-[80%] mx-auto flex justify-center">
				<p className="mt-16 text-lg text-gray-600 px-4 xs:max-w-full lg:max-w-[60%] text-justify">
					I am a self-driven, career oriented specializing in front-end development. My expertise lies in building interactive web applications. Currently, I am working with
					technologies like JavaScript and Typescript. <br />
					<br />I have completed my bachelor's degree in Computer Engineering from Tribhuvan University. I strongly believe in continuous learning and self development in every
					situation.
				</p>
			</div>
			<div className="max-w-[85%] mx-auto flex flex-col items-center gap-y-8 justify-center mt-16">
				<h1 className="text-4xl font-bold">Tech Stack</h1>
				<div className="w-full mx-auto flex-wrap items-center flex justify-center gap-x-16 gap-y-12">
					<Stack
						header="FrontEnd"
						stacks={frontend}
					/>
					<Stack
						header="BackEnd"
						stacks={backend}
					/>
					<Stack
						header="Tools & Platform"
						stacks={tools}
					/>
				</div>
			</div>
		</main>
	);
};

export default About;
