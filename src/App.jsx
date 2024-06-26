import { useState, useEffect } from "react";

import Header from "./components/Header";
import Loader from "./components/Loader";
import Home from "./components/Home";
import SocialIcons from "./components/SocialIcons";
import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1700);
		return () => clearTimeout(timer);
	}, []);

	if (loading) {
		return <Loader />;
	}

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<Header />
			<SocialIcons />
			<main>
				<Home />
				<About />
				<Projects />
				<Contact />
			</main>
			<Footer />
			<BackToTop />
		</>
	);
};

export default App;
