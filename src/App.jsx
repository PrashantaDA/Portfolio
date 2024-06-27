import { useState, useEffect, Suspense, lazy } from "react";

import Loader from "./components/Loader";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const SocialIcons = lazy(() => import("./components/SocialIcons"));
const About = lazy(() => import("./components/About"));
const BackToTop = lazy(() => import("./components/BackToTop"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1800);
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
			<Suspense fallback={<></>}>
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
			</Suspense>
		</>
	);
};

export default App;
