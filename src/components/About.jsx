/* eslint-disable react/no-unescaped-entities */

import Card from "./Card";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import { FaHtml5, FaReact, FaNpm, FaNodeJs, FaGithub, FaGit } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiVisualstudiocode, SiNetlify, SiVite, SiStrapi } from "react-icons/si";

const frontend = [
	{
		name: "HTML",
		icon: <FaHtml5 size={24} />,
		site: "https://www.w3schools.com/html/",
	},
	{
		name: "CSS",
		icon: <IoLogoCss3 size={24} />,
		site: "https://www.w3schools.com/css/",
	},
	{
		name: "Javascript",
		icon: (
			<SiJavascript
				size={24}
				className="rounded-full"
			/>
		),
		site: "https://www.javascript.com/",
	},
	{
		name: "React",
		icon: <FaReact size={24} />,
		site: "https://reactjs.org/",
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss size={24} />,
		site: "https://tailwindcss.com/",
	},
];
const backend = [
	{
		name: "NodeJS",
		icon: <FaNodeJs size={24} />,
		site: "https://nodejs.org/en/",
	},
	{
		name: "NPM",
		icon: <FaNpm size={24} />,
		site: "https://www.npmjs.com/",
	},
	{
		name: "MongoDB",
		icon: <SiMongodb size={24} />,
		site: "https://www.mongodb.com/",
	},
	{
		name: "MySQL",
		icon: <SiMysql size={24} />,
		site: "https://www.mysql.com/",
	},
	{
		name: "Strapi",
		icon: (
			<SiStrapi
				size={24}
				className="rounded-full"
			/>
		),
		site: "https://strapi.io/",
	},
];
const tools = [
	{
		name: "Git",
		icon: <FaGit size={24} />,
		site: "https://git-scm.com/",
	},
	{
		name: "GitHub",
		icon: <FaGithub size={24} />,
		site: "https://github.com/",
	},
	{
		name: "Visual Studio Code",
		icon: <SiVisualstudiocode size={24} />,
		site: "https://code.visualstudio.com/",
	},
	{
		name: "Vite",
		icon: <SiVite size={24} />,
		site: "https://vitejs.dev/",
	},
	{
		name: "Netlify",
		icon: <SiNetlify size={24} />,
		site: "https://www.netlify.com/",
	},
];

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
					<Card
						header="FrontEnd"
						cards={frontend}
					/>
					<Card
						header="BackEnd"
						cards={backend}
					/>
					<Card
						header="Tools & Platform"
						cards={tools}
					/>
				</div>
			</div>
		</main>
	);
};

export default About;
