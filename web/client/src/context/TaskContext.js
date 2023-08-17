import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [task, setTask] = useState(null);
	const [pickedAnswer, setPickedAnswer] = useState(null);
	const [taskStarted, setTaskStarted] = useState(false);
	const [savedQuestions, setSavedQuestions] = useState([]);
	const [videoIsPlaying, setVideoIsPlaying] = useState(false);
	const [imageIsLoaded, setImageIsLoaded] = useState(false);

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

	return (
		<TaskContext.Provider
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
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
