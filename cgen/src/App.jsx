/** @format */
// cd Certificate_generation\cgen 
import Landing from "./pages/landingpage/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";
import Navbar from "./pages/navbar/Navbar";
import Validate from "./pages/validate/Validate";
import "./App.css";

function App() {
	return (
		<div
			className="App"
			style={{ width: "100%", height: "100%", padding: "0%", margin: "0px" }}>
			<BrowserRouter>
				<Navbar />

				<Routes>
					<Route
						path="/Landing"
						element={<Landing />}
					/>
					<Route
						index
						element={<Landing />}
					/>
					<Route
						path="/Details"
						element={<Details />}
					/>
					<Route
						path="/Validate"
						element={<Validate />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
