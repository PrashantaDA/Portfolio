import { useState } from "react";
import Cards from "./Cards";

const Tabs = () => {
	const [activeTab, setActiveTab] = useState("All");

	const tabContent = {
		All: <Cards />,
		"Web Pages": <Cards />,
		"Web Apps": <Cards />,
	};

	return (
		<div className="mx-auto p-4">
			<div className="flex space-x-4 border rounded-md">
				{Object.keys(tabContent).map((tab) => (
					<button
						key={tab}
						className={`py-2 px-4 focus:outline-none ${activeTab === tab ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"}`}
						onClick={() => setActiveTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="mt-4">
				<div>{tabContent[activeTab]}</div>
			</div>
		</div>
	);
};

export default Tabs;
