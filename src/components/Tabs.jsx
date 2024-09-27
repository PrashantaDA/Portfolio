/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Cards from "./Cards";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Tabs = ({ projects }) => {
	const [activeTab, setActiveTab] = useState("All");
	const [visibleProjects, setVisibleProjects] = useState(8);
	const [currentPage, setCurrentPage] = useState(1);

	const cardRef = useRef(null);

	useGSAP(() => {
		gsap.fromTo(cardRef.current, { autoAlpha: 0, x: -100, y: 100 }, { autoAlpha: 1, x: 0, y: 0, duration: 0.8, scrollTrigger: { trigger: cardRef.current } });
	});

	useEffect(() => {
		cardRef.current.scrollIntoView({ behavior: "smooth" });
	}, [currentPage]);

	const filterProjects = (tab) => {
		if (tab === "All") {
			return projects;
		}
		return projects.filter((project) => project.category === tab);
	};

	const tabContent = {
		All: filterProjects("All"),
		"Web Page": filterProjects("Web Page"),
		"Web App": filterProjects("Web App"),
	};

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const visibleProjectsCount = tabContent[activeTab].length;
	const totalPages = Math.ceil(visibleProjectsCount / visibleProjects);

	return (
		<div className="w-full mx-auto p-4">
			<div className="flex space-x-4 border rounded-md bg-dark2 text-light dark:bg-dark">
				{Object.keys(tabContent).map((tab) => (
					<button
						key={tab}
						className={`w-1/3 mx-auto py-2 px-4 font-semibold focus:outline-none ${
							activeTab === tab ? "dark:bg-darker bg-light dark:text-light font-bold text-darker" : "text-slate-600"
						}`}
						onClick={() => {
							setActiveTab(tab);
							setCurrentPage(1); // Reset current page
						}}
					>
						{tab}
					</button>
				))}
			</div>
			<div
				ref={cardRef}
				className=" mt-8 w-[90%] mx-auto flex flex-wrap gap-y-16 gap-x-3"
			>
				{tabContent[activeTab].slice((currentPage - 1) * visibleProjects, currentPage * visibleProjects).map((project, index) => (
					<Cards
						key={index}
						{...project}
					/>
				))}
			</div>
			<div className="w-full flex justify-center mt-8">
				<div className="flex space-x-2">
					{Array.from({ length: totalPages }, (_, i) => (
						<button
							key={i}
							onClick={() => handlePageChange(i + 1)}
							className={`px-4 py-2 ${currentPage === i + 1 ? "bg-darker text-white" : "bg-light text-darker"} rounded-md`}
						>
							{i + 1}
						</button>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tabs;
