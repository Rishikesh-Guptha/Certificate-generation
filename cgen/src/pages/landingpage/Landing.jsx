/** @format */

import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Landinpage.css";

const Landing = () => {
	return (
		<div>
			<>
				<p className="title">NFT based Certificate Generation and Validation</p>
			</>
			<>
				<Link to="/Details">
					<button className="get">Get Started</button>
				</Link>
			</>
		</div>
	);
};

export default Landing;
