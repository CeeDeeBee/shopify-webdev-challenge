import React from "react";

import "../styles/Nominations.scss";

const Nominations = ({ movies }) => {
	return (
		<div className="nominations-wrapper">
			<h2>Selected Nominations</h2>
			<div className="nomination-list">
				{/* display an onboarding message if no movies are in state */}
				{movies.length > 0 ? (
					movies.map((movie) => (
						<div className="nomination-item">
							<img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
							<h3>
								{movie.Title} - {movie.Year}
							</h3>
						</div>
					))
				) : (
					<div className="no-nominations-message">
						<h3>You haven't selected any movies</h3>
						<p>
							Search for movies in the bar above and pick from the dropdown to
							add to your nominations
						</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Nominations;
