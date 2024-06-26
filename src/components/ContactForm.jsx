/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic (e.g., send data to an API)
		const serviceID = import.meta.env.VITE_APP_SERVICE_KEY;
		const templateID = import.meta.env.VITE_APP_TEMPLATE_KEY;
		const userID = import.meta.env.VITE_APP_PUBLIC_KEY;

		emailjs.send(serviceID, templateID, formData, userID).then(
			(response) => {
				console.log("SUCCESS!", response.status, response.text);
				toast.success("Message sent successfully!");
				setFormData({ name: "", email: "", message: "" });
			},
			(error) => {
				console.error("FAILED...", error);
				toast.error("Failed to send message. Please try again.");
			}
		);
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white dark:bg-dark dark:text-dtext rounded-lg shadow-md dark:shadow-dtext hover:shadow-lg">
			<h2 className="text-2xl font-bold mb-6 text-center">Contact Me</h2>
			<form
				onSubmit={handleSubmit}
				netlify
			>
				<div className="mb-4">
					<label
						className="block  text-sm font-bold mb-2"
						htmlFor="name"
					>
						Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-sm font-bold mb-2"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
						required
					/>
				</div>
				<div className="mb-6">
					<label
						className="block text-sm font-bold mb-2"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						value={formData.message}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
						required
					></textarea>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className=" dark:bg-darker hover:dark:bg-dtext bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default ContactForm;
