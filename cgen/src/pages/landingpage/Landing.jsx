/** @format */

import React from "react";
import { Outlet, Link } from "react-router-dom";

const Landing = () => {
	return (
		<div>
			<>
				<p className="title">Landing page</p>
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
