import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import MovingLine from "./MovingLine";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
	const [open, setOpen] = useState(false);

	const navList = [
		{
			id: 1,
			title: "About",
		},
		{
			id: 2,
			title: "Projects",
		},

		{
			id: 3,
			title: "Contact",
		},
	];

	return (
		<div className="w-full fixed shadow-sm top-0 z-20 backdrop-blur backdrop-filter dark:bg-dark dark:text-dtext xl:px-20">
			<div className="flex items-center justify-between px-8 gap-20">
				<a
					href="#home"
					className="flex items-center"
				>
					<img
						className="xs:w-[54px] xs:h-[54px] md:w-[65px] md:h-[65px] py-2"
						src="images/Logo.png"
						alt="Prashanta"
					/>
					<h1 className="text-lg font-semibold xs:hidden md:flex">Prashanta D Acharya</h1>
				</a>

				<ul className="items-center gap-10 text-lg font-medium flex ">
					{navList.map((item) => (
						<li
							key={item.id}
							className="xs:hidden lg:flex hover:text-dtext hover:dark:text-light transition-all duration-300"
						>
							<a href={`#${item.title.toLowerCase()}`}>{item.title}</a>
						</li>
					))}
					<li>
						<div className="flex items-center gap-4">
							<ThemeToggle />
							<div className="xs:flex lg:hidden">
								{open ? (
									<>
										<MdClose
											onClick={() => setOpen(!open)}
											className="text-3xl cursor-pointer hover:rotate-90 transition-transform duration-300 ease-in-out"
										/>

										<ul className={`z-50 absolute right-[0] xs:top-[54px] md:top-[65px] bg-dark2 text-light dark:bg-darker w-full flex flex-col items-center gap-y-8 py-8`}>
											{navList.map((item) => (
												<li
													key={item.id}
													className="hover:text-dtext hover:shadow-bs1 px-2 transition-all duration-300 "
												>
													<a
														href={`#${item.title.toLowerCase()}`}
														onClick={() => setOpen(!open)}
													>
														{item.title}
													</a>
												</li>
											))}
										</ul>
									</>
								) : (
									<BiMenuAltRight
										onClick={() => setOpen(!open)}
										className="text-3xl cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out"
									/>
								)}
							</div>
						</div>
					</li>
				</ul>
			</div>
			<MovingLine />
		</div>
	);
};

export default Header;
