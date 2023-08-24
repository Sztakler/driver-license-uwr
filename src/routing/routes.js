import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedComponent from "client/utils/ProtectedComponent";
import TrainingMenuPage from "client/pages/TrainingMenuPage";
import TrainingFilters from "client/pages/TrainingFilters";
import PracticePage from "client/pages/TrainingPage";
import TheoryPage from "client/pages/TheoryPage";
import HomePage from "client/pages/HomePage";
import ExamPage from "client/pages/ExamPage";
import ExamMenuPage from "client/pages/ExamMenu";
import LoginPage from "client/pages/LoginPage";
import RegisterPage from "client/pages/RegisterPage";
import SummaryPage from "client/pages/SummaryPage";
import NotFound from "client/pages/NotFound";
import ReviewPage from "client/pages/ReviewPage";
import UserPage from "client/pages/UserPage";

import { TaskProvider } from "context/TaskContext";
import { TrainingFiltersProvider } from "context/TrainingFiltersContext";
import BlockedFromUser from "client/utils/BlockedFromUser";

function Routing() {
	return (
		<BrowserRouter basename="/driver-license-uwr">
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route element={<BlockedFromUser />}>
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register" element={<RegisterPage />} />
				</Route>
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
