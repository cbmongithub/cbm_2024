import { useLocation } from "preact-iso";

const links = [
	{
		href: "/",
		text: "Home",
	},
	{
		href: "/home",
		text: "Home",
	},
	{
		href: "/not-found",
		text: "404",
	},
];

const Header = () => {
	const { url } = useLocation();
	return (
		<header className="frame">
			<h1 className="frame__title">Octal AI Assistant</h1>
			<a className="frame__back" href="https://tympanus.net/codrops/?p=77970">
				Read the tutorial
			</a>
			<a className="frame__archive" href="https://tympanus.net/codrops/demos/">
				All demos
			</a>
			<a className="frame__github" href="https://github.com/guilanier/codrops-sdf-lensblur">
				GitHub
			</a>
			<nav className="frame__tags">
				<a href="https://tympanus.net/codrops/demos/?tag=scroll">#webgl</a>
				<a href="https://tympanus.net/codrops/demos/?tag=three-js">#three.js</a>
				<a href="https://tympanus.net/codrops/demos/?tag=webgl">#shader</a>
			</nav>
			<nav className="frame__demos">
				{links.map(({ href, text }) => (
					<a key={href} href={href} className={url === href ? "active" : "disabled"}>
						{text}
					</a>
				))}
			</nav>
		</header>
	);
};

export default Header;
