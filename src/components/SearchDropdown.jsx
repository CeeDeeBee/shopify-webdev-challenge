import React from "react";

import "../styles/SearchDropdown.scss";

const SearchDropdown = ({ searchResults, searchFocused }) => {
	return (
		searchFocused && (
			<div className="search-dropdown">
				{searchResults.map((result) => (
					<div key={result.imdbID} className="search-dropdown-item">
						{result.Title}
					</div>
				))}
			</div>
		)
	);
};

export default SearchDropdown;
