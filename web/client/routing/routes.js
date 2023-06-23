import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrainingMenuPage from "../src/ui/pages/TrainingMenuPage";
import PracticePage from "../src/ui/pages/PracticePage";
import TheoryPage from "../src/ui/pages/TheoryPage";
import HomePage from "../src/ui/pages/HomePage";
import ExamPage from "../src/ui/pages/ExamPage";
import ExamMenuPage from "../src/ui/pages/ExamMenu";
import LoginPage from "../src/ui/pages/LoginPage";
import ContactPage from "../src/ui/pages/ContactPage";
import FaqPage from "../src/ui/pages/FaqPage";
import RegisterPage from "../src/ui/pages/RegisterPage";
import SummaryPage from "../src/ui/pages/SummaryPage";
import NotFound from "../src/ui/pages/NotFound";
import ReviewPage from "../src/ui/pages/ReviewPage";

import { TaskProvider } from "../src/context/TaskContext";

const Routing = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/egzamin" element={<ExamMenuPage />} />
			<Route
				path="/egzamin/test"
				element={
					<TaskProvider>
						<ExamPage />
					</TaskProvider>
				}
			/>
			<Route
				path="/egzamin/przeglad-odpowiedzi/:id"
				element={
					<TaskProvider>
						<ReviewPage />
					</TaskProvider>
				}
			/>
			<Route path="/trening" element={<TrainingMenuPage />} />
			<Route
				path="/trening/praktyka"
				element={
					<TaskProvider>
						<PracticePage />
					</TaskProvider>
				}
			/>

			<Route path="/trening/teoria" element={<TheoryPage />} />
			<Route path="/podrecznik/" element={<TheoryPage />} />
			<Route path="/podrecznik/znaki-ostrzegawcze" element={<TheoryPage />} />
			<Route path="/podrecznik/znaki-nakazu" element={<TheoryPage />} />
			<Route path="/podrecznik/znaki-zakazu" element={<TheoryPage />} />
			<Route
				path="/podrecznik/znaki-kierunku-i-miejscowosci"
				element={<TheoryPage />}
			/>
			<Route path="/podrecznik/znaki-informacyjne" element={<TheoryPage />} />
			<Route path="/podrecznik/znaki-uzupelniajace" element={<TheoryPage />} />
			<Route
				path="/trening/podsumowanie"
				element={<SummaryPage isTraining={true} />}
			/>
			<Route
				path="/egzamin/podsumowanie/:id"
				element={<SummaryPage isTraining={false} />}
			/>
			<Route path="/kontakt" element={<ContactPage />} />
			<Route path="/faq" element={<FaqPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/register" element={<RegisterPage />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	</BrowserRouter>
);

export default Routing;
