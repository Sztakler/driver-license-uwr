import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProtectedComponent from "client/utils/ProtectedComponent";
import TrainingMenuPage from "client/pages/TrainingMenuPage";
import TrainingFilters from "client/pages/TrainingFilters";
import PracticePage from "client/pages/TrainingPage";
import TheoryPage from "client/pages/TheoryMenuPage";
import HomePage from "client/pages/HomePage";
import ExamPage from "client/pages/ExamPage";
import ExamMenuPage from "client/pages/ExamMenuPage";
import LoginPage from "client/pages/LoginPage";
import RegisterPage from "client/pages/RegisterPage";
import SummaryPage from "client/pages/SummaryPage";
import NotFound from "client/pages/NotFound";
import ReviewPage from "client/pages/ReviewPage";
import UserPage from "client/pages/UserPage";

import { PracticeProvider } from "context/PracticeContext";
import { TrainingFiltersProvider } from "context/TrainingFiltersContext";
import BlockedFromUser from "client/utils/BlockedFromUser";
import TheoryIntroductionPage from "client/pages/TextbookSubpages/TheoryIntroductionPage";
import WarningSignsPage from "client/pages/TextbookSubpages/VerticalRoadSignsSubpages/WarningSignsPage";
import MandatorySignsPage from "client/pages/TextbookSubpages/VerticalRoadSignsSubpages/MandatorySignsPage";
import ProhibitorySignsPage from "client/pages/TextbookSubpages/VerticalRoadSignsSubpages/ProhibitorySignsPage";
import LineSignsPage from "client/pages/TextbookSubpages/HorizontalRoadSignsSubpages/LineSignsPage";
import TrafficLightsAndTrafficManagementPage from "client/pages/TextbookSubpages/TrafficLightsAndTrafficManagementPage";

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
					<Route
						path="/konto"
						element={
							<PracticeProvider>
								<UserPage />
							</PracticeProvider>
						}
					/>
					<Route path="/egzamin" element={<ExamMenuPage />} />
					<Route
						path="/egzamin/test"
						element={
							<PracticeProvider>
								<ExamPage />
							</PracticeProvider>
						}
					/>
					<Route
						path="/egzamin/przeglad-odpowiedzi/:id"
						element={
							<PracticeProvider>
								<ReviewPage />
							</PracticeProvider>
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
								<PracticeProvider>
									<PracticePage />
								</PracticeProvider>
							</TrainingFiltersProvider>
						}
					/>
					<Route path="/trening/teoria" element={<TheoryPage />} />
					<Route path="/podrecznik/" element={<TheoryPage />} />
					<Route
						path="/podrecznik/wstep"
						element={<TheoryIntroductionPage />}
					/>

					<Route
						path="/podrecznik/znaki-ostrzegawcze"
						element={<WarningSignsPage />}
					/>
					<Route
						path="/podrecznik/znaki-nakazu"
						element={<MandatorySignsPage />}
					/>
					<Route
						path="/podrecznik/znaki-zakazu"
						element={<ProhibitorySignsPage />}
					/>
					<Route path="/podrecznik/znaki-linie" element={<LineSignsPage />} />
					<Route
						path="/podrecznik/sygnalizacja-swietlna-i-kierowanie-ruchem"
						element={<TrafficLightsAndTrafficManagementPage />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;
