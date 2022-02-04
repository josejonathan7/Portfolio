import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, AboutMe, Projects, Stacks } from "./screens";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stacks" element={<Stacks />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<AboutMe />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
