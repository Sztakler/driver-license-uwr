const bcrypt = require("bcrypt");
const dbRequests = require("../db");
const { request } = require("express");
const { shuffleArray } = require("../utils/utils");

const checkRequestAuthentication = (isAuthenticated, user) => {
	if (isAuthenticated) {
		return { isAuthenticated: true, user: user };
	} else {
		return { isAuthenticated: false, user: {} };
	}
};

const questionsCountService = async () => {
	try {
		return await dbRequests.questionsCount();
	} catch (e) {
		throw new Error(e.message);
	}
};

const practiceService = async (user_id) => {
	try {
		return await dbRequests.practiceQuestions(user_id);
	} catch (e) {
		throw new Error(e.message);
	}
};

const examService = async () => {
	try {
		let basicQuestions = await dbRequests.examBasicQuestions();
		let specialistQuestions = await dbRequests.examSpecialistQuestions();
		shuffleArray(basicQuestions.rows);
		shuffleArray(specialistQuestions.rows);
		return [...basicQuestions.rows, ...specialistQuestions.rows];
	} catch (e) {
		throw new Error(e.message);
	}
};

const examResultsService = async (userID) => {
	try {
		let examResults = await dbRequests.examResults(userID);
		if (!examResults) {
			return { status: 401, message: `User ${userID} is not authorized to acces this data.` };
		}
		return examResults;
	} catch (e) {
		throw new Error(e.message);
	}
};

const examResultsIdService = async (userID, itemId) => {
	try {
		let examResults = await dbRequests.examResultsId(userID, itemId);
		console.log("BBBBBBBBBBBBBUUUUUUUUUUUUUUUUUUU")
		console.log("EXAM RESULTS: " + examResults);
		if (!examResults) {
			return { status: 401, message: `User ${userID} is not authorized to acces this data.` };
		}
		return examResults;
	} catch (e) {
		throw new Error(e.message);
	}
};

const statisticsService = async (userId, from, to) => {
	try {
		const questions_count = await dbRequests.questionsCount();
		const medium_knowledge_questions_count =
			await dbRequests.mediumKnowledgeQuestionsCount(userId);
		const high_knowledge_questions_count =
			await dbRequests.highKnowledgeQuestionsCount(userId);

		let total_count = Number(questions_count.rows[0].record_count);
		let medium_count = Number(
			medium_knowledge_questions_count.rows[0].record_count
		);
		let high_count = Number(
			high_knowledge_questions_count.rows[0].record_count
		);
		console.log("we read", total_count, medium_count, high_count);
		let low_count = total_count - medium_count - high_count;

		const weekly_exams = await dbRequests.weeklyExams(userId, from, to);

		return { low_count, medium_count, high_count, weekly_exams };
	} catch (e) {
		throw new Error(e.message);
	}
};

const savedQuestionsService = async (userId) => {
	try {
		return await dbRequests.savedQuestions(userId);
	} catch (e) {
		throw new Error(e.message);
	}
};

const userKnowledgeLevelsService = async (userId) => {
	try {
		const medium_knowledge_questions_count =
			await dbRequests.mediumKnowledgeQuestionsCount(userId);
		const high_knowledge_questions_count =
			await dbRequests.highKnowledgeQuestionsCount(userId);

		return { medium_knowledge_questions_count, high_knowledge_questions_count };
	} catch (e) {
		throw new Error(e.message);
	}
};

const registrationService = async (name, email, password) => {
	const existingUser = await dbRequests.existingUserByEmail(email);

	if (existingUser.rows.length > 0) {
		return { status: 400, message: "Email already in use" };
	}

	const hashedPassword = await bcrypt.hash(password, 10);
	const result = await dbRequests.insertUser(name, email, hashedPassword);
	const userId = result.rows[0].id;
	await dbRequests.createSavedQuestionsEntryFor(userId);

	return { status: 200, message: "Registration successful" };
};

const updateExamResultsService = async (user_id, questions, summary) => {
	try {
		return await dbRequests.updateExamResults(user_id, questions, summary);
	} catch (e) {
		throw new Error(e.message);
	}
};

const updateUserSettingsService = async (
	providedPassword,
	user_id,
	requestBody
) => {
	let userData = await dbRequests.existingUserById(user_id);
	let result = await bcrypt.compare(
		providedPassword,
		userData.rows[0].password
	);

	if (result === false) {
		return { status: 400, message: "Wprowadzone hasło jest niepoprawne" };
	}

	let newName =
		request.userName !== "" ? request.userName : userData.rows[0].name;
	let newEmail =
		request.userEmail !== "" ? request.userEmail : userData.rows[0].email;
	let newPassword =
		request.newPassword !== ""
			? await bcrypt.hash(request.newPassword, 10)
			: userData.rows[0].password;

	const newData = { name: newName, email: newEmail, password: newPassword };

	await dbRequests.updateUserData(newData, user_id);
	return { status: 200, message: "Poprawnie zmodyfikowano dane użytkownika" };
};

const updateSavedQuestionsService = async (question_id, user_id) => {
	await dbRequests.updateSavedQuestion(question_id, user_id);
	return { status: 200, message: "Poprawnie zmodyfikowano pytanie" };
};

const updateUserKnowledgeLevelsService = async (
	question_id,
	knowledgeLevel,
	user_id
) => {
	await dbRequests.updateUserKnowledgeLevels(
		question_id,
		knowledgeLevel,
		user_id
	);
	return {
		status: 200,
		message: "Poprawnie zmodyfikowano poziom znajomości pytania",
	};
};

module.exports = {
	checkRequestAuthentication,
	questionsCountService,
	practiceService,
	examService,
	examResultsService,
	examResultsIdService,
	statisticsService,
	savedQuestionsService,
	userKnowledgeLevelsService,
	registrationService,
	updateExamResultsService,
	updateUserSettingsService,
	updateSavedQuestionsService,
	updateUserKnowledgeLevelsService,
};
