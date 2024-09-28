/* eslint-disable react/no-unescaped-entities */

import Stack from "./Stack";
import { Backend, Frontend, Tools } from "../constants/index";

const About = () => {
	return (
		<main
			id="about"
			className="w-full py-16 dark:bg-dark2 bg-light dark:text-dtext"
		>
			<div className="flex justify-center flex-col items-center gap-4">
				<h2 className="text-4xl font-bold">
					About <span className="text-[#0091ff]">Me</span>
				</h2>
				<p className="text-sm capitalize px-4 text-center">
					Always <strong className="text-[#0866FF]">learning</strong>. Always <strong className="text-[#0866FF]">growing</strong>. Looking for{" "}
					<strong className="text-[#0866FF]">new challenges</strong>.{" "}
				</p>
			</div>
			<div className="max-w-[80%] mx-auto flex justify-center">
				<p className="mt-12 text-lg text-gray-600 px-4 xs:max-w-full lg:max-w-[60%] text-justify">
					I am a self-driven, career-oriented web developer specializing in front-end development. My expertise lies in building interactive web applications using JavaScript,
					React, and TypeScript.
					<br />
					<br />I have completed my bachelor's degree in Computer Engineering from Tribhuvan University. I strongly believe in continuous learning and self development in every
					situation.
				</p>
			</div>
			<div className="max-w-[85%] mx-auto flex flex-col items-center gap-y-8 justify-center mt-16">
				<h1 className="text-4xl font-bold pb-10">Tech Stack</h1>
				<div className="w-full mx-auto flex-wrap items-center flex justify-center gap-x-20 gap-y-12">
					<Stack
						header="Frontend"
						stacks={Frontend}
					/>
					<Stack
						header="Backend"
						stacks={Backend}
					/>
					<Stack
						header="Tools & Platform"
						stacks={Tools}
					/>
				</div>
			</div>
		</main>
	);
};

export default About;
