/** @format */
import Landing from "./pages/landingpage/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";

function App() {
	return (
		<div className="App">
			<div>hello</div>
			<BrowserRouter>
				<Routes>
					<Route
						to="/"
						element={<Landing />}
					/>

					<Route
						index
						element={<Landing />}
					/>
					<Route
						to="/Details"
						element={<Details />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
