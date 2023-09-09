/** @format */
import Landing from "./pages/landingpage/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./pages/details/Details";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route
						index
						element={<Landing />}
					/>
					<Route
						path="/Details"
						element={<Details />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
