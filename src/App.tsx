import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { UI } from "./components/UI";
import { HomePage } from "./components/HomePage";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<UI />}>
					<Route index element={<HomePage />} />
					{/* <Route path="levels" element={<Levels />}>
                        <Route path=":levelId" element={<Level />} />
                    </Route> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
