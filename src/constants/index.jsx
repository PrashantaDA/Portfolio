import { FaHtml5, FaReact, FaNpm, FaNodeJs, FaGithub, FaGit } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiVisualstudiocode, SiNetlify, SiVite, SiStrapi } from "react-icons/si";

const Navlinks = [
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

const Frontend = [
	{
		name: "HTML",
		icon: <FaHtml5 size={24} />,
		site: "https://www.w3schools.com/html/",
	},
	{
		name: "CSS",
		icon: <IoLogoCss3 size={24} />,
		site: "https://www.w3schools.com/css/",
	},
	{
		name: "Javascript",
		icon: (
			<SiJavascript
				size={24}
				className="rounded-full"
			/>
		),
		site: "https://www.javascript.com/",
	},
	{
		name: "React",
		icon: <FaReact size={24} />,
		site: "https://reactjs.org/",
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss size={24} />,
		site: "https://tailwindcss.com/",
	},
];
const Backend = [
	{
		name: "NodeJS",
		icon: <FaNodeJs size={24} />,
		site: "https://nodejs.org/en/",
	},
	{
		name: "NPM",
		icon: <FaNpm size={24} />,
		site: "https://www.npmjs.com/",
	},
	{
		name: "MongoDB",
		icon: <SiMongodb size={24} />,
		site: "https://www.mongodb.com/",
	},
	{
		name: "MySQL",
		icon: <SiMysql size={24} />,
		site: "https://www.mysql.com/",
	},
	{
		name: "Strapi",
		icon: (
			<SiStrapi
				size={24}
				className="rounded-full"
			/>
		),
		site: "https://strapi.io/",
	},
];
const Tools = [
	{
		name: "Git",
		icon: <FaGit size={24} />,
		site: "https://git-scm.com/",
	},
	{
		name: "GitHub",
		icon: <FaGithub size={24} />,
		site: "https://github.com/",
	},
	{
		name: "Visual Studio Code",
		icon: <SiVisualstudiocode size={24} />,
		site: "https://code.visualstudio.com/",
	},
	{
		name: "Vite",
		icon: <SiVite size={24} />,
		site: "https://vitejs.dev/",
	},
	{
		name: "Netlify",
		icon: <SiNetlify size={24} />,
		site: "https://www.netlify.com/",
	},
];

const ProjectDetails = [];

export { Navlinks, Frontend, Backend, Tools, ProjectDetails };
