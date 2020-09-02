import React, { useState, useEffect } from "react";
import axios from "axios";

import SearchDropdown from "./SearchDropdown";

import "../styles/Search.scss";

const Search = ({ searchFocused }) => {
	const [searchResults, setSearchResults] = useState([]);

	const handleSearch = (e) => {
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
		} else {
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

	return (
		<div className="search-wrapper">
			<h2>Search Movies</h2>
			<input type="text" className="search" onChange={handleSearch} />
			<SearchDropdown
				searchResults={searchResults}
				searchFocused={searchFocused}
			/>
		</div>
	);
};

export default Search;
