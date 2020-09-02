import React from "react";

import "../styles/Header.scss";
import shopifyIcon from "../images/shopify-icon.auto";

const Header = () => {
	return (
		<header>
			<img src={shopifyIcon} alt="Shopify Icon" />
			<h1>The Shoppies Nomination Page</h1>
		</header>
	);
};

export default Header;
