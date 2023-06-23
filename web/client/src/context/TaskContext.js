import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [task, setTask] = useState(null);
	const [pickedAnswer, setPickedAnswer] = useState(null);
	const [taskStarted, setTaskStarted] = useState(false);
	const [savedQuestions, setSavedQuestions] = useState([]);

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
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
