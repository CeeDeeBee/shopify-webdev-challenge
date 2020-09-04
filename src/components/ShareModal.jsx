import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/ShareModal.scss";

const ShareModal = ({ displayShareModal, setDisplayShareModal, movies }) => {
	const [shareLink, setShareLink] = useState("");
	const [needNewShareLink, setNeedNewShareLink] = useState(false);

	useEffect(() => {
		setNeedNewShareLink(true);
	}, [movies]);

	useEffect(() => {
		if (needNewShareLink && displayShareModal) {
			setShareLink("");
			// shorten link
			axios
				.post(
					// req url
					"https://firebasedynamiclinks.googleapis.com/v1/shortLinks?" +
						`key=${process.env.REACT_APP_FIREBASE_KEY}`,
					// req body
					{
						longDynamicLink:
							// firebase dynamic link url
							"https://shoppies.page.link/?" +
							// deployed netlify url
							"link=https://happy-neumann-c400ec.netlify.app?" +
							// base 64 encoded, stringified movies array
							`share=${btoa(JSON.stringify(movies))}`,
						suffix: { option: "SHORT" },
					}
				)
				.then((res) => {
					setShareLink(res.data.shortLink);
					setNeedNewShareLink(false);
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}, [displayShareModal, movies, needNewShareLink]);

	const handleClick = (e) => {
		if (e.target.className === "share-modal-bg") setDisplayShareModal(false);
	};

	return (
		displayShareModal && (
			<div className="share-modal-bg" onClick={handleClick}>
				<div className="share-modal">
					<h2>Shareable Link</h2>
					<p>{shareLink}</p>
					<button
						className="share-modal-close"
						onClick={() => setDisplayShareModal(false)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
						>
							<path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
						</svg>
					</button>
				</div>
			</div>
		)
	);
};

export default ShareModal;
