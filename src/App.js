import React, { useState } from "react";
import "./App.css";

import Search from "./components/Search";

function App() {
	const [movies, setMovies] = useState([]);
	const [searchFocused, setSearchFocused] = useState(false);

	const handleClick = () => {
		if (document.activeElement.className === "search") setSearchFocused(true);
		else setSearchFocused(false);
	};

	return (
		<div className="App" onClick={handleClick}>
			<Search searchFocused={searchFocused} />
		</div>
	);
}

export default App;
