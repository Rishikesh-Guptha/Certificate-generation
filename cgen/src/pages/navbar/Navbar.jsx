/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className="navbar-contents">
				<Link to="/Details">
					<p className="generation">Generate</p>
				</Link>
				<Link to="/Validate">
					<p className="validation">Vaildation</p>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
