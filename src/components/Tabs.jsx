/* eslint-disable react/prop-types */
import { useState } from "react";
import Cards from "./Cards";

const Tabs = ({ projects }) => {
	const [activeTab, setActiveTab] = useState("All");

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

	return (
		<div className="w-full mx-auto p-4">
			<div className="flex space-x-4 border rounded-md bg-darker text-light dark:bg-dark">
				{Object.keys(tabContent).map((tab) => (
					<button
						key={tab}
						className={`w-2/3 py-2 px-4 focus:outline-none ${activeTab === tab ? "dark:bg-darker text-light dark:text-dtext" : "text-slate-600"}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="mt-4 flex gap-4 gap-y-10 flex-wrap">
				{tabContent[activeTab].map((project, index) => (
					<Cards
						key={index}
						{...project}
					/>
				))}
			</div>
		</div>
	);
};

export default Tabs;
