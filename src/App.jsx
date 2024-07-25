import { useState, useEffect, Suspense, lazy } from "react";
import Loader from "./components/Loader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./components/Home"));
const SocialIcons = lazy(() => import("./components/SocialIcons"));
const About = lazy(() => import("./components/About"));
const BackToTop = lazy(() => import("./components/BackToTop"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
	const [loading, setLoading] = useState(true);
	const [showMainContent, setShowMainContent] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
			setTimeout(() => {
				setShowMainContent(true);
				document.body.style.overflow = "auto"; // Re-enable scrolling
			}, 300); // Match this duration with the CSS transition duration
		}, 1200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<ToastContainer
				position="top-center"
				autoClose={2500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<div className={`loader ${loading ? "" : "hidden"}`}>
				<Loader />
			</div>
			<Suspense fallback={<></>}>
				<div className={`main-content ${showMainContent ? "visible" : ""}`}>
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
				</div>
			</Suspense>
		</>
	);
};

export default App;
