import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import { UI } from "./components/UI";
import { HomePage } from "./components/HomePage";
import { LevelsPage } from "./components/LevelsPage";
import { JournalPage } from "./components/JournalPage";
import { PrototypesPage } from "./components/PrototypesPage";

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<UI />}>
					<Route index element={<HomePage />} />
					<Route path='levels' element={<LevelsPage />} />
					{/*
                        <Route path=":levelId" element={<Level />} />
                    */}
					<Route path='journal' element={<JournalPage />} />
					<Route path='prototypes' element={<PrototypesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
