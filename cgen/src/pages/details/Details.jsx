/** @format */

import React, { useState } from "react";

const Details = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [courseName, setCourseName] = useState("");
	const [courseProvider, setCourseProvider] = useState("");
	const [percentage, setPercentage] = useState("");
	return (
		<div>
			<>
				<p className="detail-title">User Details</p>
			</>
			<div className="form-area">
				<form>
					<>
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
						/>
					</>
					<>
						<label htmlFor="email">Email id:</label>
						<input
							type="email"
							name="email"
							placeholder="Enter your email id"
						/>
					</>
					<>
						<label htmlFor="course-title">Course Title:</label>
						<input
							type="text"
							name="course-title"
							placeholder="Enter the Course Title"
						/>
					</>
					<>
						<label htmlFor="course-provider">
							Enter the Course Provider name:
						</label>
						<input
							type="text"
							name="course-provider"
							placeholder="Enter the Course Provider Name"
						/>
					</>
					<>
						<label htmlFor="percentage">Percentage:</label>
						<input
							type="text"
							name="percentage"
							placeholder="Enter the Percentage"
						/>
					</>
				</form>
				<div className="generate-area">
					<button className="generate">Generate</button>
				</div>
			</div>
		</div>
	);
};

export default Details;
