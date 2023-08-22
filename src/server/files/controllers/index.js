const passport = require("passport");
const services = require("../services");
const {
	checkRequestAuthentication,
	questionsCountService,
	practiceService,
	examService,
	examResultsService,
	examResultsIdService,
	statisticsService,
	savedQuestionsService,
	savedQuestionsKnowledgesService,
	userKnowledgeLevelsService,
	registrationService,
	updateExamResultsService,
	updateUserSettingsService,
	updateSavedQuestionsService,
	updateUserKnowledgeLevelsService,
} = services;

const authenticationController = (req, res, next) => {
	const isAuthenticated = req.isAuthenticated();
	const user = req.session.user;

	let responseObject = checkRequestAuthentication(isAuthenticated, user);
	res.json(responseObject);
};

const questionsCountController = async (req, res) => {
	try {
		const questions_count = await questionsCountService();
		res.json(Number(questions_count.rows[0].record_count));
	} catch (err) {
		console.error(err.message);
	}
};

const practiceController = async (req, res) => {
	const filters = req.query;

	try {
		const allTasks = await practiceService(req.user.id, filters);
		res.json(allTasks.rows);
	} catch (err) {
		console.error(err.message);
	}
};

const examController = async (req, res) => {
	try {
		const allTasks = await examService();
		res.json(allTasks);
	} catch (err) {
		console.error(err.message);
	}
};

const examResultsController = async (req, res) => {
	try {
		const randomResult = await examResultsService();
		res.json(randomResult.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
};

const examResultsIdController = async (req, res) => {
	const itemId = req.params.id;

	try {
		const randomResult = await examResultsIdService(itemId);
		res.json(randomResult.rows[0]);
	} catch (err) {
		console.error(err.message);
	}
};

const statisticsController = async (req, res) => {
	try {
		const from = req.params["from"];
		const to = req.params["to"];
		const userId = req.user.id;

		const { low_count, medium_count, high_count, weekly_exams } =
			await statisticsService(userId, from, to);

		res.json({
			material_progress: {
				low_count: low_count,
				medium_count: medium_count,
				high_count: high_count,
			},
			weekly_exams: weekly_exams.rows,
		});
	} catch (err) {
		console.error(err.message);
	}
};

const savedQuestionsController = async (req, res) => {
	try {
		const userId = req.user.id;
		const results = await savedQuestionsService(userId);
		res.json(results.rows);
	} catch {
		res.status(400).json({ message: "Error" });
	}
};

const savedQuestionsKnowledgeLevelsController = async (req, res) => {
	try {
		const userId = req.user.id;
		const results = await savedQuestionsKnowledgesService(userId);

		let retrievedResult = { low_count: 0, medium_count: 0, high_count: 0 };
		results.rows.forEach((row) => {
			if (row.knowledge_level === 0 || row.knowledge_level === 1) {
				retrievedResult.low_count = Number(row.count);
			} else if (row.knowledge_level === 2) {
				retrievedResult.medium_count = Number(row.count);
			} else if (row.knowledge_level === 3) {
				retrievedResult.high_count = Number(row.count);
			}
		});

		res.json(retrievedResult);
	} catch {
		res.status(400).json({ message: "Error" });
	}
};

const userKnowledgeLevelsController = async (req, res) => {
	try {
		const userId = req.user.id;
		const {
			allQuestionsCountQueryResult,
			mediumKnowledgeQuestionsCountQueryResult,
			highKnowledgeQuestionsCountQueryResult,
		} = await userKnowledgeLevelsService(userId);

		let highCountNumber = Number(
			highKnowledgeQuestionsCountQueryResult.rows[0].record_count
		);
		let mediumCountNumber = Number(
			mediumKnowledgeQuestionsCountQueryResult.rows[0].record_count
		);
		let lowCountNumber =
			Number(allQuestionsCountQueryResult.rows[0].record_count) -
			highCountNumber -
			mediumCountNumber;

		res.json({
			low_count: lowCountNumber,
			medium_count: mediumCountNumber,
			high_count: highCountNumber,
		});
	} catch (err) {
		console.error(err.message);
	}
};

const registrationController = async (req, res) => {
	try {
		const { name, email, password } = req.body;

		const { status, message } = await registrationService(
			name,
			email,
			password
		);
		res.status(status).json({ message: message });
	} catch {
		res.status(400).json({ message: "Registration unsuccessful" });
	}
};

// TODO -- nie mam pomysłu, ja kto ruszyć :/
const loginController = (req, res, next) => {
	passport.authenticate("local", (err, user, info) => {
		if (err) {
			console.log("ERROR");
			throw err;
		}
		if (!user) {
			console.log("USER NOT FOUND");
			res.status(400).json({ message: "User does not exist!" });
		} else {
			req.logIn(user, (err) => {
				if (err) throw err;
				req.session.user = user;
				console.log("USER AUTHENTICATED");
				res.status(200).json(user);
				return;
			});
		}
	})(req, res, next);
};

// TODO -- nie mam pomysłu, ja kto ruszyć :/
const logoutController = (req, res, next) => {
	req.logout((err) => {
		if (err) {
			console.log("LOGOUT ERROR");
			throw err;
		}
		console.log("LOGOUT SUCCESSFUL");
		res.status(200).send();
	});
};

const updateExamResultsController = async (req, res) => {
	try {
		const { user_id, questions, summary } = req.body;
		const result = await updateExamResultsService(user_id, questions, summary);
		res.json({ id: result.rows[0].id });
	} catch (error) {
		console.error(error.message);
	}
};

const updateUserSettingsController = async (req, res) => {
	try {
		const providedPassword = req.body.providedPassword;
		const requestBody = req.body;
		const user_id = req.user.id;
		const { status, message } = await updateUserSettingsService(
			providedPassword,
			user_id,
			requestBody
		);
		res.status(status).json({ message: message });
	} catch {
		res.status(400).json({ message: "Error" });
	}
};

const updateSavedQuestionsController = async (req, res) => {
	try {
		const { question_id } = req.body;
		const user_id = req.user.id;
		const { status, message } = await updateSavedQuestionsService(
			question_id,
			user_id
		);

		res.status(status).json({ message: message });
	} catch {
		res
			.status(400)
			.json({ message: "Modyfikacja pytania zakończyła się niepowodzeniem" });
	}
};

const updateUserKnowledgeLevelsController = async (req, res) => {
	try {
		const { question_id, knowledgeLevel } = req.body;
		const user_id = req.user.id;
		const { status, message } = await updateUserKnowledgeLevelsService(
			question_id,
			knowledgeLevel,
			user_id
		);
		res.status(status).json({ message: message });
	} catch {
		res.status(400).json({
			message:
				"Modyfikacja poziomu znajomości pytania zakończyła się niepowodzeniem",
		});
	}
};

module.exports.authenticationController = authenticationController;
module.exports.questionsCountController = questionsCountController;
module.exports.practiceController = practiceController;
module.exports.examController = examController;
module.exports.examResultsController = examResultsController;
module.exports.examResultsIdController = examResultsIdController;
module.exports.statisticsController = statisticsController;
module.exports.savedQuestionsController = savedQuestionsController;
module.exports.savedQuestionsKnowledgeLevelsController =
	savedQuestionsKnowledgeLevelsController;
module.exports.userKnowledgeLevelsController = userKnowledgeLevelsController;
module.exports.registrationController = registrationController;
module.exports.loginController = loginController;
module.exports.logoutController = logoutController;
module.exports.updateExamResultsController = updateExamResultsController;
module.exports.updateUserSettingsController = updateUserSettingsController;
module.exports.updateSavedQuestionsController = updateSavedQuestionsController;
module.exports.updateUserKnowledgeLevelsController =
	updateUserKnowledgeLevelsController;
