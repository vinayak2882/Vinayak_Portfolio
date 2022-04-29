import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
// import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import TechStack from "./components/techstack/TechStack.jsx";

function App() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className="app">
			<Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
			<div className="sections">
				<Intro />
				<About />
				<TechStack />
				<Portfolio />
				<Contact />
			</div>
		</div>
	);
}

export default App;
