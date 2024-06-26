/* eslint-disable react/prop-types */
import { useState } from "react";
import Cards from "./Cards";

const Tabs = ({ projects }) => {
	const [activeTab, setActiveTab] = useState("All");
	const [visibleProjects, setVisibleProjects] = useState(6);

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

	const handleLoadMore = () => {
		setVisibleProjects((prev) => prev + 6);
	};

	const handleShowLess = () => {
		setVisibleProjects(6);
	};

	return (
		<div className="w-full mx-auto p-4">
			<div className="flex space-x-4 border rounded-md bg-dark2 text-light dark:bg-dark">
				{Object.keys(tabContent).map((tab) => (
					<button
						key={tab}
						className={`w-1/3 mx-auto py-2 px-4 font-semibold focus:outline-none ${activeTab === tab ? "dark:bg-darker bg-light dark:text-light text-darker" : "text-slate-600"}`}
						onClick={() => {
							setActiveTab(tab);
							setVisibleProjects(6); // Reset visible projects
						}}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="mt-8 w-[80%] mx-auto flex flex-wrap gap-x-6 gap-y-16 justify-between">
				{tabContent[activeTab].slice(0, visibleProjects).map((project, index) => (
					<Cards
						key={index}
						{...project}
					/>
				))}
			</div>
			<div className="w-full flex justify-center mt-8">
				{visibleProjects < tabContent[activeTab].length && (
					<button
						onClick={handleLoadMore}
						className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 mx-2"
					>
						Load More
					</button>
				)}
				{visibleProjects > 6 && (
					<button
						onClick={handleShowLess}
						className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700 mx-2"
					>
						Show Less
					</button>
				)}
			</div>
		</div>
	);
};

export default Tabs;
