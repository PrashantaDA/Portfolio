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
