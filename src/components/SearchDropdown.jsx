import React from "react";

import "../styles/SearchDropdown.scss";

const SearchDropdown = ({ searchResults, searchFocused }) => {
	return (
		searchResults.length > 0 &&
		searchFocused && (
			<div className="search-dropdown">
				{searchResults.map((result) => (
					<div key={result.imdbID} className="search-dropdown-item">
						{result.Title} - {result.Year}
					</div>
				))}
			</div>
		)
	);
};

export default SearchDropdown;
