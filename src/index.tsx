import { LocationProvider, Route, Router, hydrate, prerender as ssr } from "preact-iso";

import type { PrerenderResult } from "preact-iso/prerender";
import Home from "./pages/Home";

export function App() {
	return (
		<LocationProvider>
			<header class="frame">
				<h1 class="frame__title">Octal AI Assistant</h1>
				<a class="frame__back" href="https://tympanus.net/codrops/?p=77970">
					Read the tutorial
				</a>
				<a class="frame__archive" href="https://tympanus.net/codrops/demos/">
					All demos
				</a>
				<a class="frame__github" href="https://github.com/guilanier/codrops-sdf-lensblur">
					GitHub
				</a>
				<nav class="frame__tags">
					<a href="https://tympanus.net/codrops/demos/?tag=scroll">#webgl</a>
					<a href="https://tympanus.net/codrops/demos/?tag=three-js">#three.js</a>
					<a href="https://tympanus.net/codrops/demos/?tag=webgl">#shader</a>
				</nav>
				<nav class="frame__demos">
					<span>Variations:</span>
					<a data-var="0" href="index.html?var=0">
						1
					</a>
					<a data-var="1" href="index.html?var=1">
						2
					</a>
					<a data-var="2" href="index.html?var=2">
						3
					</a>
					<a data-var="3" href="index.html?var=3">
						4
					</a>
				</nav>
			</header>
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/home" component={Home} />
				</Router>
			</main>
		</LocationProvider>
	);
}

const root = document.querySelector("root");

if (typeof window !== "undefined" && root !== null) {
	hydrate(<App />, root);
}

export async function prerender(): Promise<PrerenderResult> {
	return await ssr(<App />);
}
