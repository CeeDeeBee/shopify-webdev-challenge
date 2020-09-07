import React, { useState, useEffect } from "react";

import { useLocalStorage } from "./hooks/useLocalStorage";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Search from "./components/Search";
import Nominations from "./components/Nominations";
import Footer from "./components/Footer";

import "./styles/App.scss";

function App() {
	const [movies, setMovies] = useLocalStorage("nominatedMovies", []);
	// separate state in order to not overwrite nominations saved in localstorage
	const [sharedMovies, setSharedMovies] = useState([]);
	const [searchFocused, setSearchFocused] = useState(false);

	// load in movies from share link
	useEffect(() => {
		const query = new URLSearchParams(window.location.search);
		const sharedMoviesRaw = query.get("share");
		if (sharedMoviesRaw) setSharedMovies(JSON.parse(atob(sharedMoviesRaw)));
	}, [setSharedMovies]);

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
			<Nominations
				// display shared movies if there are any, default to localstorage otherwise
				movies={sharedMovies.length > 0 ? sharedMovies : movies}
				removeMovie={removeMovie}
			/>
			<Footer />
		</div>
	);
}

export default App;
