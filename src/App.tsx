import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotFound } from "./components";
import { Home, AboutMe, Projects, Stacks } from "./screens";

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/stacks" element={<Stacks />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/about" element={<AboutMe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
