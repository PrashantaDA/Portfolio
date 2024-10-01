import { FaHtml5, FaReact, FaNpm, FaNodeJs, FaGithub, FaGit } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiTailwindcss, SiMysql, SiMongodb, SiVisualstudiocode, SiNetlify, SiVite, SiStrapi } from "react-icons/si";

import { Movie, Store, YTube, Restro, Pf3d, Poke, Rexipe, Hotelix } from "../images/index";

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
	},
	{
		name: "CSS",
		icon: <IoLogoCss3 size={24} />,
	},
	{
		name: "Javascript",
		icon: (
			<SiJavascript
				size={24}
				className="rounded-full"
			/>
		),
	},
	{
		name: "React",
		icon: <FaReact size={24} />,
	},
	{
		name: "Tailwind",
		icon: <SiTailwindcss size={24} />,
	},
];
const Backend = [
	{
		name: "NodeJS",
		icon: <FaNodeJs size={24} />,
	},
	{
		name: "NPM",
		icon: <FaNpm size={24} />,
	},
	{
		name: "MongoDB",
		icon: <SiMongodb size={24} />,
	},
	{
		name: "MySQL",
		icon: <SiMysql size={24} />,
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
	},
	{
		name: "GitHub",
		icon: <FaGithub size={24} />,
	},
	{
		name: "Visual Studio Code",
		icon: <SiVisualstudiocode size={24} />,
	},
	{
		name: "Vite",
		icon: <SiVite size={24} />,
	},
	{
		name: "Netlify",
		icon: <SiNetlify size={24} />,
	},
];

const ProjectDetails = [
	{
		id: 1,
		title: "Moveie",
		desc: "Movie search and details app.",
		img: Movie,
		tech: ["React", "Styled Components", "TMDB API"],
		category: "Web App",
		link: "https://moveie.netlify.app/",
		github: "https://github.com/PrashantaDA/movyedb",
	},
	{
		id: 2,
		title: "Silsaga",
		desc: "Clothing and Jewellery Store.",
		img: Store,
		tech: ["React", "Tailwind CSS", "Fakestore API"],
		category: "Web App",
		link: "https://silsaga.netlify.app/",
		github: "https://github.com/PrashantaDA/SilhouetteXsaga",
	},
	{
		id: 3,
		title: "Portfolio_3D",
		desc: "Portfolio with 3D animations.",
		img: Pf3d,
		tech: ["React", "Three JS", "Tailwind CSS"],
		category: "Web Page",
		link: "https://prashantapf3d2.netlify.app/",
		github: "https://github.com/PrashantaDA/3d_pf",
	},
	{
		id: 4,
		title: "YTube",
		desc: "YouTube Clone.",
		img: YTube,
		tech: ["React", "Material-UI", "Rapid API"],
		category: "Web App",
		link: "https://ytubecl.netlify.app/",
		github: "https://github.com/PrashantaDA/YTube",
	},
	{
		id: 5,
		title: "Gericht Restaurant",
		desc: "Restaurant Landing Page.",
		img: Restro,
		tech: ["React", "CSS"],
		category: "Web Page",
		link: "https://modrestro.netlify.app/",
		github: "https://github.com/PrashantaDA/ModernRestro",
	},
	{
		id: 6,
		title: "Pokedex",
		desc: "Pokemon Finder.",
		img: Poke,
		tech: ["React", "SASS", "Poke API"],
		category: "Web App",
		link: "https://oakedex.netlify.app/",
		github: "https://github.com/PrashantaDA/Pokedex",
	},
	{
		id: 7,
		title: "HotelIX",
		desc: "Hotel Landing Page.",
		img: Hotelix,
		tech: ["React", "Tailwind CSS", "Vite"],
		category: "Web Page",
		link: "https://hotelix.netlify.app/",
		github: "https://github.com/PrashantaDA/hotelix",
	},
	{
		id: 8,
		title: "Rexipe",
		desc: "Culinary creations platform.",
		img: Rexipe,
		tech: ["React", "Tailwind CSS", "Spoonacular API"],
		category: "Web App",
		link: "https://rexipe.netlify.app/",
		github: "https://github.com/PrashantaDA/rexipe",
	},
];

export { Navlinks, Frontend, Backend, Tools, ProjectDetails };
