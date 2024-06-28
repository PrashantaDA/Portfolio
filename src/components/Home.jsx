/* eslint-disable react/no-unescaped-entities */

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
		gsap.fromTo(
			".el",
			{
				autoAlpha: 0,
				transform: "translateY(-100px)",
			},
			{
				autoAlpha: 1,
				duration: 1.5,
				transform: "translateY(0)",
				scrollTrigger: {
					trigger: ".el",
				},
			}
		);
		gsap.fromTo(
			"#home",
			{ opacity: 0, transform: "translateX(-100%)" },
			{
				opacity: 1,
				transform: "translateX(0)",
				duration: 1,
				scrollTrigger: {
					trigger: ".el",
				},
			}
		);
	});

	return (
		<main
			id="home"
			className="lg:h-[90vh] xs:h-screen lg:py-36 xs:py-10 mt-10 flex relative items-center dark:bg-dark dark:text-dtext text-dark "
		>
			<div className="flex xs:flex-col items-center xs:gap-2 lg:gap-10 lg:flex-row justify-between w-[70%] mx-auto el">
				<div className="flex flex-1 flex-col items-center">
					<div>
						<img
							className="pic xs:w-60 xs:h-60 lg:w-80 lg:h-80 rounded-custom xs:mb-8"
							src="assets/dxb-.jpg"
							alt="Profile"
						/>
					</div>
				</div>
				<div className="details flex flex-1">
					<div className="xs:text-xl lg:text-3xl text-center flex flex-col ">
						<p className="text-gray-500">Hi, I`m </p> <br /> <p className="font-bold xs:text-2xl lg:text-4xl">Prashanta Dixit Acharya.</p>
						<p className="flex gap-2 justify-center items-center xs:text-md sm:text-xl  lg:text-3xl font-semibold my-6 text-gray-600">
							<span>💻</span> Programmer. <br />
							Web Developer. <span>💻</span>
						</p>
						<div className="flex flex-wrap xs:text-sm md:text-lg justify-center xs:gap-4 md:gap-8 font-semibold ">
							<button
								className="transition-all duration-300 border-2 border-light dark:border-b-dtext dark:border-r-dtext bg-dark text-light hover:bg-darker hover:shadow-bs1 hover:dark:border-light hover:dark:shadow-bs1
							 hover:dark:border-t-dtext hover:dark:border-l-dtext px-5 py-3 rounded-full"
							>
								<a
									href="/PrashantaRes.pdf"
									target="_blank"
									rel="noreferrer"
								>
									Download CV
								</a>
							</button>
							<button
								className="border-2 dark:border-dtext dark:bg-dark dark:text-light px-5 py-3 rounded-full transition-all duration-300 dark:border-b-[#fff] dark:border-r-[#fff] hover:dark:shadow-bs2 hover:dark:bg-darker hover:dark:border-light hover:shadow-bs2
							 hover:dark:border-t-dtext hover:dark:border-r-dtext"
							>
								<a href="mailto:apras.dixit@gmail.com">Let's Connect</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
