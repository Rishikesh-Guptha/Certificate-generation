/** @format */

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Validate.css";

const Validate = () => {
	const [value, setValue] = useState("");
	const Clicked = () => {
		setValue("The value is set");
	};
	return (
		<div>
			<div className="validate-contents">
				<Link to="/Landing">
					<button className="back">back</button>
				</Link>
				<div className="input-file-area">
					<form action="">
						<label htmlFor="">Upload the file to Verify</label>
						<input type="file" />
					</form>
				</div>
				<button onClick={Clicked}>clickme</button>
				<div className="result">{value === "" ? "" : value}</div>
			</div>
		</div>
	);
};

export default Validate;
