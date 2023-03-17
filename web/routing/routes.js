import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LearningModePage from "../src/ui/pages/LearningModePage";
import LearningModeOption from "../src/ui/pages/LearningModeOption";
import HomePage from "../src/ui/pages/HomePage";
import ExamPage from "../src/ui/pages/ExamPage";
import LoginPage from "../src/ui/pages/LoginPage";
import ContactPage from "../src/ui/pages/ContactPage";
import FaqPage from "../src/ui/pages/FaqPage/FaqPage";

const Routing = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/exam" element={<ExamPage />} />
			<Route path="/learning" element={<LearningModePage />} />
			<Route path="/learning/practice" element={<LearningModePage />} />
			<Route path="/learning/theory" element={<LearningModePage />} />
			<Route path="/learning/option1" element={<LearningModeOption />} />
			<Route path="/learning/option2" element={<LearningModeOption />} />
			<Route path="/learning/option3" element={<LearningModeOption />} />
			<Route path="/learning/option4" element={<LearningModeOption />} />
			<Route path="/contact" element={<ContactPage />} />
			<Route path="/faq" element={<FaqPage />} />
			<Route path="/login" element={<LoginPage />} />
		</Routes>
	</BrowserRouter>
);

export default Routing;
