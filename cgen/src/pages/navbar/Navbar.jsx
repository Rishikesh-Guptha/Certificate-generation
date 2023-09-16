/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<div className="navbar-main">
			<div className="navbar-contents">
				<Link
					to="/Details"
					style={{ textDecoration: "none", color: "black" }}>
					<p className="generation">Generate</p>
				</Link>
				<Link
					to="/Validate"
					style={{ textDecoration: "none", color: "black" }}>
					<p className="validation">Vaildation</p>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
