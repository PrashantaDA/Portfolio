import { useEffect, useState } from "react";

import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const ThemeToggle = () => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
			document.documentElement.classList.add("dark");
			setTheme("dark");
		} else {
			document.documentElement.classList.remove("dark");
			setTheme("light");
		}
	}, []);

	const toggleTheme = () => {
		if (theme === "dark") {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
			window.scrollTo(0, 0);
			setTheme("light");
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
			window.scrollTo(0, 0);
			setTheme("dark");
		}
	};

	return <button onClick={toggleTheme}>{theme === "dark" ? <BsFillSunFill className="hover:scale-105 " /> : <BsFillMoonFill className="hover:scale-105" />}</button>;
};

export default ThemeToggle;
