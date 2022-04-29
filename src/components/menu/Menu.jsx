import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
	return (
		<div className={`menu ${menuOpen ? "active" : ""}`}>
			<ul>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#intro">Home</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#about">About</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#techstack">Tech Stack</a>
				</li>
				<li onClick={() => setMenuOpen(false)}>
					<a href="#portfolio">Projects</a>
				</li>

				<li onClick={() => setMenuOpen(false)}>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</div>
	);
}
