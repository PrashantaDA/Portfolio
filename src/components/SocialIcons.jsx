import { BsFacebook, BsTwitterX, BsInstagram, BsGithub } from "react-icons/bs";

const SocialIcons = () => {
	return (
		<div className="flex flex-col items-start justify-center h-screen fixed px-8 gap-4 left-0 top-10 z-50">
			<a
				className="text-[#0866FF] social-icon"
				href="https://www.facebook.com/PrasDixit/"
				target="_blank"
				rel="noreferrer"
			>
				<BsFacebook />
			</a>
			<a
				className="dark:text-light social-icon"
				href="https://www.X.com/prdix_1"
				target="_blank"
				rel="noreferrer"
			>
				<BsTwitterX />
			</a>
			<a
				className="text-[#e1306c] social-icon"
				href="https://www.instagram.com/prasdixit"
				target="_blank"
				rel="noreferrer"
			>
				<BsInstagram />
			</a>
			<a
				className="dark:text-light social-icon"
				href="https://www.github.com/prashantada"
				target="_blank"
				rel="noreferrer"
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default SocialIcons;
