import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainingPage from "../src/ui/pages/TrainingPage";
import PracticePage from "../src/ui/pages/PracticePage";
import TheoryPage from "../src/ui/pages/TheoryPage";
import HomePage from "../src/ui/pages/HomePage";
import ExamPage from "../src/ui/pages/ExamPage";
import LoginPage from "../src/ui/pages/LoginPage";
import ContactPage from "../src/ui/pages/ContactPage";
import FaqPage from "../src/ui/pages/FaqPage";
import RegisterPage from "../src/ui/pages/RegisterPage";

const Routing = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/exam" element={<ExamPage />} />
			<Route path="/training" element={<TrainingPage />} />
			<Route path="/training/practice" element={<PracticePage />} />
			<Route path="/training/theory" element={<TheoryPage />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/faq" element={<FaqPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	</BrowserRouter>
);

export default Routing;
