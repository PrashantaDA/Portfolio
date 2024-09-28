import ContactForm from "./ContactForm";
import { PiMailbox } from "react-icons/pi";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
	return (
		<main
			id="contact"
			className=" py-16 bg-light dark:bg-dark2"
		>
			<div>
				<div className="w-full text-center px-6 ">
					<h1 className="text-4xl font-bold">
						Take a <span className="text-[#0091ff]">Coffee</span> & Chat With <span className="text-[#0091ff]">Me</span>
					</h1>
				</div>
				<div className="w-full px-6 mt-8 ">
					<div className="flex flex-col gap-4">
						<a
							className="transition-all duration-300 border rounded-lg w-[260px] bg-[#FEF4F5]   hover:bg-[#ffd6d6] mx-auto p-4 flex items-center justify-center gap-4 text-xl cursor-pointer"
							href="mailto:apras.dixit@gmail.com"
						>
							<PiMailbox
								size={24}
								className="text-[#ff0040]"
							/>
							<p className="text-center ">apras.dixit@gmail.com</p>
						</a>
						<a
							href="tel:+9779860664666"
							className=" border rounded-lg transition-all duration-300 w-[260px] bg-[#cbF4F5] hover:bg-[#cefdff] mx-auto p-4 flex items-center justify-start gap-4 text-xl cursor-pointer"
						>
							<IoMdCall
								size={24}
								className="text-[#0091ff]"
							/>
							<p className="text-center ">+(977) 98606****6</p>
						</a>
					</div>

					<ContactForm />
				</div>
			</div>
		</main>
	);
};

export default Contact;
