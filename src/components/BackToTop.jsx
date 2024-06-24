import { useState, useEffect } from "react";
import { BiUpArrow } from "react-icons/bi";

const BackToTop = () => {
	const [isVisible, setIsVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			className={`fixed bottom-5 right-5 flex z-[999] dark:text-dtext bg-dark text-light w-[30px] h-[30px] rounded-full items-center justify-center cursor-pointer transition-all duration-300 ease-in-out ${
				isVisible ? "opacity-100 visible" : "opacity-0 invisible"
			} }`}
			onClick={scrollToTop}
		>
			<BiUpArrow size={24} />
		</div>
	);
};

export default BackToTop;
