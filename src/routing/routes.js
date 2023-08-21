import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedComponent from "../client/ui/components/utils/ProtectedComponent";
import TrainingMenuPage from "../client/ui/pages/TrainingMenuPage";
import TrainingFilters from "../client/ui/pages/TrainingFilters";
import PracticePage from "../client/ui/pages/PracticePage";
import TheoryPage from "../client/ui/pages/TheoryPage";
import HomePage from "../client/ui/pages/HomePage";
import ExamPage from "../client/ui/pages/ExamPage";
import ExamMenuPage from "../client/ui/pages/ExamMenu";
import LoginPage from "../client/ui/pages/LoginPage";
import FaqPage from "../client/ui/pages/FaqPage";
import RegisterPage from "../client/ui/pages/RegisterPage";
import SummaryPage from "../client/ui/pages/SummaryPage";
import NotFound from "../client/ui/pages/NotFound";
import ReviewPage from "../client/ui/pages/ReviewPage";
import UserPage from "../client/ui/pages/UserPage";

import { TaskProvider } from "../context/TaskContext";
import { TrainingFiltersProvider } from "../context/TrainingFiltersContext";

function Routing() {
	return (
		<BrowserRouter basename="/driver-license-uwr">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/faq" element={<FaqPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
				<Route path="*" element={<NotFound />} />
				<Route element={<ProtectedComponent />}>
					<Route path="/konto" element={<UserPage />} />
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
					<Route
						path="/trening/podsumowanie"
						element={<SummaryPage isTraining={true} />}
					/>
					<Route
						path="/egzamin/podsumowanie/:id"
						element={<SummaryPage isTraining={false} />}
					/>
					<Route path="/trening" element={<TrainingMenuPage />} />
					<Route
						path="/trening/filtry"
						element={
							<TrainingFiltersProvider>
								<TrainingFilters />
							</TrainingFiltersProvider>
						}
					/>
					<Route
						path="/trening/praktyka"
						element={
							<TrainingFiltersProvider>
								<TaskProvider>
									<PracticePage />
								</TaskProvider>
							</TrainingFiltersProvider>
						}
					/>
					<Route path="/trening/teoria" element={<TheoryPage />} />
					<Route path="/podrecznik/" element={<TheoryPage />} />
					<Route
						path="/podrecznik/znaki-ostrzegawcze"
						element={<TheoryPage />}
					/>
					<Route path="/podrecznik/znaki-nakazu" element={<TheoryPage />} />
					<Route path="/podrecznik/znaki-zakazu" element={<TheoryPage />} />
					<Route
						path="/podrecznik/znaki-kierunku-i-miejscowosci"
						element={<TheoryPage />}
					/>
					<Route
						path="/podrecznik/znaki-informacyjne"
						element={<TheoryPage />}
					/>
					<Route
						path="/podrecznik/znaki-uzupelniajace"
						element={<TheoryPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
