import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
	const [task, setTask] = useState(null);
	const [pickedAnswer, setPickedAnswer] = useState(null);
	const [taskStarted, setTaskStarted] = useState(false);

	function getRandomTask() {
		return fetch("http://localhost:5000/api/practice/random")
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}

	useEffect(() => {
		const fetchRandomTask = async () => {
			const newTask = await getRandomTask();
			setTask({ ...newTask });
		};

		fetchRandomTask();
		return;
	}, []);

	const setNewTask = (newTask) => {
		setTask(newTask);
	};

	const setNewPickedAnswer = (newTask) => {
		setPickedAnswer(newTask);
	};

	const setNewTaskStarted = (newTask) => {
		setTaskStarted(newTask);
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
			}}
		>
			{children}
		</TaskContext.Provider>
	);
};

export default TaskContext;
