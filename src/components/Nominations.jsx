import React from "react";

import ShareButton from "./ShareButton";

import "../styles/Nominations.scss";

const Nominations = ({ movies, removeMovie }) => {
	return (
		<div className="nominations-wrapper">
			<div className="nominations-top-row">
				<h2>Selected Nominations</h2>
				<ShareButton movies={movies} />
			</div>
			{/* display an onboarding message if no movies are in state */}
			{movies.length > 0 ? (
				<div className="nomination-list">
					{movies.map((movie) => (
						<div className="nomination-item" key={`nom-${movie.imdbID}`}>
							<img src={movie.Poster} alt={`Poster for ${movie.Title}`} />
							<div className="bottom-row">
								<h3>
									{movie.Title} - {movie.Year}
								</h3>
								<button
									className="remove-nomination"
									onClick={() => removeMovie(movie.imdbID)}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
									>
										<path d="M21 6l-3 18h-12l-3-18h2.028l2.666 16h8.611l2.666-16h2.029zm-4.711-4c-.9 0-1.631-1.099-1.631-2h-5.316c0 .901-.73 2-1.631 2h-5.711v2h20v-2h-5.711z" />
									</svg>
								</button>
							</div>
						</div>
					))}
				</div>
			) : (
				<div className="no-nominations-message">
					<h3>You haven't selected any movies</h3>
					<p>
						Please choose your five favorite films that you feel should be up
						for nomination
					</p>
					<p>
						Search for movies in the bar above and pick from the dropdown to add
						to your nominations
					</p>
				</div>
			)}
		</div>
	);
};

export default Nominations;
