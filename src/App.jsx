import React, { useState } from "react";

import Banner from "./components/Banner";
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

	const addMovie = (movie) => {
		setMovies([movie, ...movies]);
	};

	const removeMovie = (imdbID) => {
		setMovies(movies.filter((movie) => movie.imdbID !== imdbID));
	};

	return (
		<div className="App" onClick={handleClick}>
			<Banner movies={movies} />
			<Header />
			<Search
				searchFocused={searchFocused}
				addMovie={addMovie}
				movies={movies}
			/>
			<Nominations movies={movies} removeMovie={removeMovie} />
			<Footer />
		</div>
	);
}

export default App;
