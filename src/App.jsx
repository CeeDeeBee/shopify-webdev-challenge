import React, { useState } from "react";

import Header from "./components/Header";
import Search from "./components/Search";
import Nominations from "./components/Nominations";
import Footer from "./components/Footer";

import "./styles/App.scss";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchFocused, setSearchFocused] = useState(false);

	// used to determine if user has searchbar focused in order to toggle search dropdown
	const handleClick = () => {
		if (document.activeElement.className === "search") setSearchFocused(true);
		else setSearchFocused(false);
	};

	return (
		<div className="App" onClick={handleClick}>
			<Header />
			<Search searchFocused={searchFocused} />
			<Nominations movies={movies} />
			<Footer />
		</div>
	);
}

export default App;
