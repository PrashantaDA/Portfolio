/* eslint-disable react/prop-types */

import { FaGithub } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const Cards = ({ img, title, desc, tech, github, link }) => (
	<div className="relative group xs:w-full md:w-[250px] mx-auto xs:p-2 md:p-4 dark:bg-dark2 border border-gray-300 cursor-pointer flex flex-col shadow-md hover:shadow-lg dark:shadow-white items-center rounded-lg transition-all duration-300">
		<div className="relative">
			<div>
				<img
					alt="website"
					src={img}
					className="w-full rounded-lg h-[120px]"
				/>
			</div>
			<div className="absolute inset-0 hover:flex items-center justify-center gap-x-4 hidden group-hover:flex bg-black bg-opacity-50 rounded-lg">
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="text-white hover:text-[#0091ff]"
				>
					<FaExternalLinkAlt size={20} />
				</a>
				<a
					href={github}
					target="_blank"
					rel="noreferrer"
					className="text-white hover:text-[#00ff15]"
				>
					<FaGithub size={22} />
				</a>
			</div>
		</div>

		<div className="dark:text-dtext flex flex-col gap-1 mt-2 text-center h-full">
			<h2 className="text-lg font-semibold mt-2">{title}</h2>
			<p className="px-2 text-center text-gray-500 leading-6">{desc}</p>
			<h3 className="text-sm font-semibold pt-2 mt-auto">
				{tech &&
					tech.map((item, index) => (
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
