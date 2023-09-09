/** @format */

import React, { useState } from "react";

const Details = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [courseName, setCourseName] = useState("");
	const [courseProvider, setCourseProvider] = useState("");
	const [percentage, setPercentage] = useState("");

    const generate_clicked = () => {
			const form_value = {
				name: name.trim(), // trim() removes the white space at both ends of a string and returns it as new value to be stored
				email: email.trim(),
				coursename: courseName.trim(),
				courseprovider: courseProvider.trim(),
				percentage: percentage.trim(),
			};
			setName("");
			setEmail("");
			setCourseName("");
			setCourseProvider("");
			setPercentage("");
			console.log(form_value);
		};
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
								value={name}
								onChange={(e) => {
									setName(e.target.value);
								}}
							/>
						</>
						<>
							<label htmlFor="email">Email id:</label>
							<input
								type="email"
								name="email"
								placeholder="Enter your email id"
								value={email}
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</>
						<>
							<label htmlFor="course-title">Course Title:</label>
							<input
								type="text"
								name="course-title"
								placeholder="Enter the Course Title"
								value={courseName}
								onChange={(e) => {
									setCourseName(e.target.value);
								}}
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
								value={courseProvider}
								onChange={(e) => {
									setCourseProvider(e.target.value);
								}}
							/>
						</>
						<>
							<label htmlFor="percentage">Percentage:</label>
							<input
								type="text"
								name="percentage"
								placeholder="Enter the Percentage"
								value={percentage}
								onChange={(e) => {
									setPercentage(e.target.value);
								}}
							/>
						</>
					</form>
					<div className="generate-area">
						<button
							className="generate"
							onClick={generate_clicked}>
							Generate
						</button>
					</div>
				</div>
			</div>
		);
};

export default Details;
