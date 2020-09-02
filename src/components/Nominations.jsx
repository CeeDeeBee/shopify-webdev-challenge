import React from "react";

import "../styles/Nominations.scss";

const Nominations = ({ movies }) => {
	return (
		<div className="nominations-wrapper">
			<h2>Selected Nominations</h2>
			<div className="nomination-list">
				{/* display an onboarding message if no movies are in state */}
				{movies.length > 0 ? (
					movies.map((movie) => <div>{movie.Title}</div>)
				) : (
					<div className="no-nominations-message">
						<h3>You Haven't Selected any Movies</h3>
						<p>Search for movies in the bar above to get started</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Nominations;
