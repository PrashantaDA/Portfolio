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
				className=" relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50"
			>
				{stacks.map((stack, index) => (
					<button
						key={index}
						className={` ${index === 0 ? "xs:left-[95px] xs:top-[-20px] md:left-[45px] md:-top-[4px]" : ""}
               ${index === 1 ? " xs:right-[-13px] md:right-[45px] md:-top-[4px]" : ""}
               ${index === 2 ? " xs:left-[-12px] xs:top-[45px] md:-left-6 md:top-28" : ""}
               ${index === 3 ? "xs:left-[14px] xs:bottom-[5px] md:-right-6 md:top-28" : ""}
               ${index === 4 ? "xs:bottom-[8px] xs:right-[10px] md:-bottom-[20px] md:left-[118px]" : ""}
               absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500`}
					>
						<div className="flex items-center justify-center  transition-all duration-500 rounded-full z-[2] dark:bg-dark bg-darker text-light dark:text-dtext p-2 icons">
							<div className="hover:rotate-[360deg] transition-all cursor-pointer duration-1000">{stack.icon}</div>
						</div>
					</button>
				))}
				<button className="xs:w-[150px] xs:h-[150px] md:w-[200px] md:h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
					<div className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500">
						<div className="w-full h-full flex items-center justify-center">
							<h1 className="xs:text-2xl md:text-3xl  dark:text-dark">{header}</h1>
						</div>
					</div>
				</button>
			</div>
		</div>
	);
};

export default Stack;
