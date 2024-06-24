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
			className="h-[200vh] w-full py-10 dark:bg-dark2 bg-light dark:text-dtext"
		>
			<div className="flex justify-center flex-col items-center gap-4">
				<h1 className="text-4xl font-bold">About Me</h1>
				<p className="text-sm capitalize px-4 text-center">
					Always <strong className="text-[#0866FF]">learning</strong>. Always <strong className="text-[#0866FF]">growing</strong>. Looking for{" "}
					<strong className="text-[#0866FF]">new challenges</strong>.{" "}
				</p>
			</div>
			<div></div>
		</main>
	);
};

export default About;
