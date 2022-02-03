import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Stacks } from "./screens/Stacks";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stack" element={<Stacks />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
