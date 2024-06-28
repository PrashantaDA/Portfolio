/* eslint-disable react/prop-types */
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Stack = ({ header, stacks }) => {
	const containerRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(containerRef.current, { autoAlpha: 0, x: -100 }, { autoAlpha: 1, x: 0, duration: 1, scrollTrigger: { trigger: containerRef.current } });
	});

	return (
		<div className="relative flex items-center justify-center">
			<div
				ref={containerRef}
				className="relative p-10 md:p-8 sm:p-6 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50"
			>
				{stacks.map((stack, index) => (
					<button
						key={index}
						className={` ${index === 0 ? "left-[45px] top-[-4px] md:left-[35px] md:top-[-10px] xl:left-[45px] xl:top-[-4px]" : ""}
               ${index === 1 ? "right-[45px] top-[-4px] md:right-[35px] md:top-[-10px] xl:right-[45px] xl:top-[-4px]" : ""}
               ${index === 2 ? "-left-6 top-28 xl:-left-6 xl:top-28 md:-left-5 md:top-24 " : ""}
               ${index === 3 ? "-right-6 top-28 xl:-right-6 xl:top-28 md:-right-5 md:top-24 " : ""}
               ${index === 4 ? "-bottom-[20px] left-[118px] xl:-bottom-[20px] xl:left-[118px] md:-bottom-[18px] md:left-[95px] " : ""}
               absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
					>
						<div className="flex items-center justify-center transition-all duration-500 rounded-full z-[2] dark:bg-dark bg-darker text-light dark:text-dtext p-2 icons">
							<div className="hover:rotate-[360deg] transition-all cursor-pointer duration-1000">{stack.icon}</div>
						</div>
					</button>
				))}
				<button className="w-[200px] h-[200px] xl:w-[200px] xl:h-[200px] md:w-[150px] md:h-[150px]  p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
					<div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
						<div className="w-full h-full flex items-center justify-center">
							<h1 className="text-3xl md:text-2xl xs:text-xl dark:text-dark">{header}</h1>
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Stack;
