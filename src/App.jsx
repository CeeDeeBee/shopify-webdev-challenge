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

	const addMovie = (movie) => {
		setMovies([...movies, movie]);
	};

	const removeMovie = (imdbID) => {
		setMovies(
			movies.filter((movie) => {
				if (movie.imdbID !== imdbID) return movie;
			})
		);
	};

	return (
		<div className="App" onClick={handleClick}>
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
