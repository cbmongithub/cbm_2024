import Header from "../components/Header";
import R3FScene from "../components/r3f/R3FScene";
import "../style.css";

const Home = () => {
	return (
		<div class="r3f_wrapper">
			<main id="app">
				<Header/>
			<R3FScene />
			</main>
		</div>
	);
};

export default Home;
