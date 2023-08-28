import React, { createContext, useState, useEffect } from "react";

const PracticeContext = createContext();

export const PracticeProvider = ({ children }) => {
	const [task, setTask] = useState(null);
	const [pickedAnswer, setPickedAnswer] = useState(null);
	const [taskStarted, setTaskStarted] = useState(false);
	const [savedQuestions, setSavedQuestions] = useState([]);
	const [videoIsPlaying, setVideoIsPlaying] = useState(false);
	const [imageIsLoaded, setImageIsLoaded] = useState(false);
	const [favoriteTask, setFavoriteTask] = useState(false);
	const [knowledgeLevel, setKnowledgeLevel] = useState("-");
	const [examFinished, setExamFinished] = useState(false);

	const setNewTask = (newTask) => {
		setTask(newTask);
	};

	const setNewPickedAnswer = (newTask) => {
		setPickedAnswer(newTask);
	};

	const setNewTaskStarted = (newTask) => {
		setTaskStarted(newTask);
	};

	const setNewSavedQuestions = (newSavedQuestions) => {
		setSavedQuestions(newSavedQuestions);
	};

	const setNewVideoIsPlaying = (newVideoIsPlaying) => {
		setVideoIsPlaying(newVideoIsPlaying);
	};

	const setNewImageIsLoaded = (newImageIsLoaded) => {
		setImageIsLoaded(newImageIsLoaded);
	};

	const setNewFavoriteTask = (newFavoriteTask) => {
		setFavoriteTask(newFavoriteTask);
	};

	const setNewKnowledgeLevel = (newKnowledgeLevel) => {
		setKnowledgeLevel(newKnowledgeLevel);
	};

	const setNewExamFinished = (newExamFinished) => {
		setExamFinished(newExamFinished);
	};

	useEffect(() => {
		if (task) {
			setFavoriteTask(task.is_saved);
			setKnowledgeLevel(task.knowledge_level);
		}
	}, [task]);

	return (
		<PracticeContext.Provider
			value={{
				task,
				setNewTask,
				pickedAnswer,
				setNewPickedAnswer,
				taskStarted,
				setNewTaskStarted,
				savedQuestions,
				setNewSavedQuestions,
				videoIsPlaying,
				setNewVideoIsPlaying,
				imageIsLoaded,
				setNewImageIsLoaded,
				favoriteTask,
				setNewFavoriteTask,
				knowledgeLevel,
				setNewKnowledgeLevel,
				examFinished,
				setNewExamFinished,
			}}
		>
			{children}
		</PracticeContext.Provider>
	);
};

export default PracticeContext;
