import React, { useState } from "react";

import ShareModal from "./ShareModal";

import "../styles/ShareButton.scss";

const ShareButton = ({ movies }) => {
	const [displayShareModal, setDisplayShareModal] = useState(false);

	const handleClick = () => {
		setDisplayShareModal(true);
	};

	return (
		<>
			<button
				className="share-button"
				onClick={handleClick}
				disabled={movies.length === 0}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M6 17c2.269-9.881 11-11.667 11-11.667v-3.333l7 6.637-7 6.696v-3.333s-6.17-.171-11 5zm12 .145v2.855h-16v-12h6.598c.768-.787 1.561-1.449 2.339-2h-10.937v16h20v-6.769l-2 1.914z" />
				</svg>
			</button>
			<ShareModal
				displayShareModal={displayShareModal}
				setDisplayShareModal={setDisplayShareModal}
				movies={movies}
			/>
		</>
	);
};

export default ShareButton;