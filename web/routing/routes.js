import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainingPage from "../src/ui/pages/TrainingPage";
import PracticePage from "../src/ui/pages/PracticeTrainingPage";
import HomePage from "../src/ui/pages/HomePage";
import ExamPage from "../src/ui/pages/ExamPage";
import LoginPage from "../src/ui/pages/LoginPage";
import ContactPage from "../src/ui/pages/ContactPage";
import FaqPage from "../src/ui/pages/FaqPage";

const Routing = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/exam" element={<ExamPage />} />
			<Route path="/training" element={<TrainingPage />} />
			<Route path="/training/practice" element={<PracticePage />} />
			<Route path="/training/theory" element={<PracticePage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/faq" element={<FaqPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);

export default Routing;
