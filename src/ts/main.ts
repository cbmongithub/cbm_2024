import React from "react";
import { createRoot } from "react-dom/client";
import "../css/style.css";
import type R3FCanvas from "../ts/motion";

const MainComponent = () => {
	return (
		<>
			<R3FCanvas />
		</>
	);
};

const main = () => {
	const main = document.querySelector("main");

	if (!main) {
		throw new Error("Missing #main dom element.");
	}

	const root = createRoot(main);

	root.render(<MainComponent />);
};

main();
