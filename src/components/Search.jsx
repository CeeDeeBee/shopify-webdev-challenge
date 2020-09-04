import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

import SearchDropdown from "./SearchDropdown";

import "../styles/Search.scss";

const Search = ({ searchFocused, addMovie, movies }) => {
	const [searchResults, setSearchResults] = useState([]);
	const [clearSearchDisplayStatus, setClearSearchDisplayStatus] = useState(
		"none"
	);
	const [searchInput, setSearchInput] = useState("");
	const [searchTimeout, setSearchTimeout] = useState(null);
	const [searchError, setSearchError] = useState(null);
	const searchInputRef = useRef(null);

	// this useEffect will only send an API request half a second after the user has stopped typing
	// used in order to reduce API calls
	useEffect(() => {
		// function to make API call
		const callOMDBAPI = () => {
			axios
				.get(
					"https://www.omdbapi.com/?type=movie&r=json" +
						`&apikey=${process.env.REACT_APP_OMDB_KEY}` +
						`&s=${searchInput}`
				)
				.then((res) => {
					if (res.data.Response === "True") {
						setSearchError(null);
						setSearchResults(res.data.Search);
					} else {
						setSearchError(`Error: ${res.data.Error}`);
					}
				})
				.catch((err) => {
					console.log(err);
					if (err.response) {
						setSearchError(`Error: ${err.response}`);
					} else if (err.message) {
						setSearchError(`Error: ${err.message}`);
					}
				});
		};

		// handle timeouts for API calls
		if (searchInput !== "") {
			const timeout = setTimeout(() => {
				callOMDBAPI();
			}, 500);
			setSearchTimeout(timeout);
			return () => clearTimeout(timeout);
		}
	}, [searchInput]);

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
		// if there is one, cancel the waiting API call whenever the user changes the search
		if (setSearchTimeout !== null) clearTimeout(searchTimeout);
		if (e.target.value === "") {
			setSearchResults([]);
			setClearSearchDisplayStatus("none");
			setSearchError(null);
		} else {
			setClearSearchDisplayStatus("block");
		}
	};

	const clearSearchInput = () => {
		setSearchInput("");
		setClearSearchDisplayStatus("none");
		setSearchResults([]);
		setSearchError(null);
	};

	return (
		<div className="search-wrapper">
			<h2>Search Movies</h2>
			<div className="search-bar">
				<button
					className="search-button"
					onClick={() => searchInputRef.current.focus()}
				>
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
						<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
					</svg>
				</button>
				<div className="input-dropdown-wrapper">
					<input
						type="text"
						className="search"
						onChange={handleSearch}
						placeholder="Eg: Titanic"
						ref={searchInputRef}
						value={searchInput}
					/>
					{searchError && <div className="search-error">{searchError}</div>}
					<SearchDropdown
						searchResults={searchResults}
						searchFocused={searchFocused}
						addMovie={addMovie}
						movies={movies}
					/>
				</div>
				<button
					className="clear"
					onClick={clearSearchInput}
					disabled={clearSearchDisplayStatus === "none" ? true : false}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						display={clearSearchDisplayStatus}
					>
						<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Search;
