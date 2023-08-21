import React, { createContext, useState } from "react";

const TrainingFiltersContext = createContext();

export const TrainingFiltersProvider = ({ children }) => {
	const [trainingFiltersPicked, setTrainingFiltersPicked] = useState({
		questionCount: false,
		savedQuestionsCount: false,
		lowKnowledgeCount: false,
		mediumKnowledgeCount: false,
		highKnowledgeCount: false,
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
