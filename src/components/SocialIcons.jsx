import { BsFacebook, BsTwitterX, BsInstagram, BsGithub } from "react-icons/bs";

const SocialIcons = () => {
	return (
		<div className="xs:hidden sm:flex flex-col items-start justify-center h-screen fixed md:px-8 gap-4 left-0 top-10 z-50 xs:px-4">
			<a
				className="text-[#0866FF] social-icon"
				href="https://www.facebook.com/PrasDixit/"
				target="_blank"
				rel="noreferrer"
				alt="Facebook Profile"
			>
				<BsFacebook />
			</a>
			<a
				className="dark:text-light social-icon"
				href="https://www.X.com/prdix_1"
				target="_blank"
				rel="noreferrer"
				alt="X | Twitter Profile"
			>
				<BsTwitterX />
			</a>
			<a
				className="text-[#e1306c] social-icon"
				href="https://www.instagram.com/prasdixit"
				target="_blank"
				rel="noreferrer"
				alt="Instagram Profile"
			>
				<BsInstagram />
			</a>
			<a
				className="dark:text-light social-icon"
				href="https://www.github.com/prashantada"
				target="_blank"
				rel="noreferrer"
				alt="Github Profile"
			>
				<BsGithub />
			</a>
		</div>
	);
};

export default SocialIcons;
