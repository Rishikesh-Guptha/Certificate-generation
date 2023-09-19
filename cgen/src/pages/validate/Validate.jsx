/** @format */

import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Validate.css";
import file from "../../assets/naveen.png";
// import { createHash } from "crypto";

const Validate = () => {
	const [value, setValue] = useState("");
	let hash_value = "";
	const Clicked = () => {
		if (hash_value === "") {
			setValue("No file is uploaded");
		} else {
			setValue(hash_value);
		}
	};

	// const fs = require("fs");
	// const buff = fs.readFileSync("file");
	// const hash = createHash("sha256").update(buff).digest("hex");
	// console.log(hash);
	// // Create a FileReader object.
	// const reader = new FileReader();

	// // Add an event listener to the FileReader object's onload event.
	// reader.onload = async function () {
	// 	// Get the contents of the file as a byte array.
	// 	const fileBytes = reader.result;

	// 	// Calculate the SHA256 hash of the file.
	// 	const hash = await crypto.subtle.digest("SHA-256", fileBytes);

	// 	// Get the SHA256 hash as a hexadecimal string.
	// 	const hashString = await hash.digest().then((arrayBuffer) => {
	// 		return arrayBufferToHex(arrayBuffer);
	// 	});

	// 	// Do something with the SHA256 hash string.
	// 	console.log(hashString);
	// };

	// // Read the PNG file.
	// reader.readAsArrayBuffer(file);

	// // Convert an array buffer to a hexadecimal string.
	// function arrayBufferToHex(arrayBuffer) {
	// 	const byteArray = new Uint8Array(arrayBuffer);
	// 	const hexString = byteArray.reduce((hex, byte) => {
	// 		return hex + byte.toString(16).padStart(2, "0");
	// 	}, "");
	// 	return hexString;
	// }
	return (
		<div>
			<div className="validate-contents">
				<Link to="/Landing">
					<button className="back">back</button>
				</Link>
				<div className="input-file-area">
					<form action="">
						<label
							htmlFor=""
							className="upload-text">
							Upload the file to Verify
						</label>
						<input type="file" />
					</form>
				</div>
				<button
					onClick={Clicked}
					className="click-btn">
					clickme
				</button>
				<p className="hash-denoting">The Hash is:</p>
				<div className="result">{value === "" ? "" : value}</div>
			</div>
		</div>
	);
};

export default Validate;
