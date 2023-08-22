import React, { createContext, useState } from "react";

const TrainingFiltersContext = createContext();

export const TrainingFiltersProvider = ({ children }) => {
	const [trainingFiltersPicked, setTrainingFiltersPicked] = useState({
		onlySavedQuestions: false,
		lowKnowledgeQuestions: true,
		mediumKnowledgeQuestions: true,
		highKnowledgeQuestions: true,
	});

	const setNewTrainingFiltersPicked = (newFiltersPicked) => {
		setTrainingFiltersPicked(newFiltersPicked);
	};

	return (
		<TrainingFiltersContext.Provider
			value={{
				trainingFiltersPicked,
				setNewTrainingFiltersPicked,
			}}
		>
			{children}
		</TrainingFiltersContext.Provider>
	);
};

export default TrainingFiltersContext;
