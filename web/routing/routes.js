import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningModePage from "../src/ui/pages/LearningModePage";
import LearningModeOption from "../src/ui/pages/LearningModeOption";
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
			<Route path="/training" element={<LearningModePage />} />
			<Route path="/training/practice" element={<LearningModeOption />} />
			<Route path="/training/theory" element={<LearningModeOption />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/faq" element={<FaqPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);

export default Routing;
