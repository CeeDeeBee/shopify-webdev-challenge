import React, { useState, useRef } from "react";
import axios from "axios";

import SearchDropdown from "./SearchDropdown";

import "../styles/Search.scss";

const Search = ({ searchFocused, addMovie, movies }) => {
	const [searchResults, setSearchResults] = useState([]);
	const [clearDisplayStatus, setClearDisplayStatus] = useState("none");
	const [searchInput, setSearchInput] = useState("");
	const searchInputRef = useRef(null);

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
		// axios
		// 	.get(
		// 		"http://www.omdbapi.com/?type=movie&r=json" +
		// 			`&apikey=${process.env.REACT_APP_OMDB_KEY}` +
		// 			`&s=${e.target.value}`
		// 	)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		if (e.target.value === "") {
			setSearchResults([]);
			setClearDisplayStatus("none");
		} else {
			setClearDisplayStatus("block");
			setSearchResults([
				{
					Title: "Titanic",
					Year: "1997",
					imdbID: "tt0120338",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
				},
				{
					Title: "Titanic II",
					Year: "2010",
					imdbID: "tt1640571",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMTMxMjQ1MjA5Ml5BMl5BanBnXkFtZTcwNjIzNjg1Mw@@._V1_SX300.jpg",
				},
				{
					Title: "Titanic: The Legend Goes On...",
					Year: "2000",
					imdbID: "tt0330994",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg",
				},
				{
					Title: "Titanic",
					Year: "1953",
					imdbID: "tt0046435",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMTU3NTUyMTc3Nl5BMl5BanBnXkFtZTgwOTA2MDE3MTE@._V1_SX300.jpg",
				},
				{
					Title: "Raise the Titanic",
					Year: "1980",
					imdbID: "tt0081400",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BM2MyZWYzOTQtMTYzNC00OWIyLWE2NWItMzMwODA0OGQ2ZTRkXkEyXkFqcGdeQXVyMjI4MjA5MzA@._V1_SX300.jpg",
				},
				{
					Title: "The Legend of the Titanic",
					Year: "1999",
					imdbID: "tt1623780",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMjMxNDU5MTk1MV5BMl5BanBnXkFtZTgwMDk5NDUyMTE@._V1_SX300.jpg",
				},
				{
					Title: "In Search of the Titanic",
					Year: "2004",
					imdbID: "tt1719665",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMTAzNjY0NDA2NzdeQTJeQWpwZ15BbWU4MDIwMzc1MzEx._V1_SX300.jpg",
				},
				{
					Title: "Titanic",
					Year: "1943",
					imdbID: "tt0036443",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BNDk4Yzc2MmItMDVhMy00Yjg1LTliNmYtOTUzZDg0ZDMyZDhhXkEyXkFqcGdeQXVyNjQzNDI3NzY@._V1_SX300.jpg",
				},
				{
					Title: "The Chambermaid on the Titanic",
					Year: "1997",
					imdbID: "tt0129923",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BMWUzYjgyNDEtNTAyMi00M2JjLTlhMzMtMDJmOGM1ZmYzNzY4XkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_SX300.jpg",
				},
				{
					Title: "S.O.S. Titanic",
					Year: "1979",
					imdbID: "tt0079836",
					Type: "movie",
					Poster:
						"https://m.media-amazon.com/images/M/MV5BZDdkYjQ1YTgtYjQ0My00ZWQwLTgyZjktNDI4NzkzOTg5NTdlXkEyXkFqcGdeQXVyNjMzMDgxMzk@._V1_SX300.jpg",
				},
			]);
		}
	};

	const clearSearchInput = () => {
		setSearchInput("");
		setClearDisplayStatus("none");
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
					disabled={clearDisplayStatus === "none" ? true : false}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						display={clearDisplayStatus}
					>
						<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Search;
