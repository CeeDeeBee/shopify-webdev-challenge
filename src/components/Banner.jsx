import React from "react";

import "../styles/Banner.scss";

const Banner = ({ movies }) => {
	return (
		<div
			className="banner"
			style={{
				height: movies.length >= 5 ? "50px" : "0",
			}}
		>
			You have selected five films. Thank you for participating. Feel free to
			share your choices using the share button below.
		</div>
	);
};

export default Banner;
