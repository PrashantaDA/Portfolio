/* eslint-disable react/prop-types */

import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Cards = ({ img, title, desc, tech, github, link }) => (
	<div className="relative xs:w-full md:w-[300px] mx-auto xs:p-4 md:p-6 dark:bg-dark2 border-none cursor-pointer flex flex-col shadow-md hover:shadow-lg dark:shadow-white items-center rounded-lg transition-all duration-300">
		<div className="relative group">
			<div>
				<img
					alt="website"
					src={img}
					className="w-full h-[160px] rounded-lg "
				/>
			</div>
			<div className="absolute top-0 right-0 rounded-lg items-center justify-center gap-x-4 hidden group-hover:flex p-2 bg-black w-full opacity-70 h-full">
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="text-light hover:text-[#00ccff]"
				>
					<FaExternalLinkAlt size={22} />
				</a>
				<a
					href={github}
					target="_blank"
					rel="noreferrer"
					className="text-light hover:text-[#00ff7b] "
				>
					<FaGithub size={24} />
				</a>
			</div>
		</div>

		<div className="dark:text-dtext flex flex-col gap-2 mt-2 text-center">
			<h2 className="text-xl font-semibold mt-4">{title}</h2>
			<p className="max-w-[90%] mx-auto text-gray-500 leading-6 ">{desc}</p>
			<h3 className="text-sm font-semibold items-end">
				{tech.map((item, index) => (
					<span key={index}>
						{item}
						{index !== tech.length - 1 && " | "}
					</span>
				))}
			</h3>
		</div>
	</div>
);

export default Cards;
