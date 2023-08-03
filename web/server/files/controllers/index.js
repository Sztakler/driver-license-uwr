const passport = require("passport");
const services = require("../services");
const { checkRequestAuthentication, questionsCountService, practiceService, examService, examResultsService, examResultsIdService, statisticsService, savedQuestionsService, userKnowledgeLevelsService, registrationService } = services;

const authenticationController = (req, res, next) => {
  console.log("request", req)
  const isAuthenticated = req.isAuthenticated;
  const user = req.session.user;

  let responseObject = checkRequestAuthentication(isAuthenticated, user);
  res.json(responseObject);
}

const questionsCountController = async (req, res) => {
  try {
    const questions_count = await questionsCountService();
    res.json(Number(questions_count.rows[0].record_count));
  } catch (err) {
    console.error(err.message);
  }
}

const practiceController = async (req, res) => {
  try {
    const allTasks = await practiceService(req.user.id);
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
}

const examController = async (req, res) => {
  try {
    const allTasks = await examService();
    res.json(allTasks.rows);
  } catch (err) {
    console.error(err.message);
  }
}

const examResultsController = async (req, res) => {
  try {
    const randomResult = await examResultsService();
    res.json(randomResult.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const examResultsIdController = async (req, res) => {
  const itemId = req.params.id;

  try {
    const randomResult = await examResultsIdService(itemId);
    res.json(randomResult.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
}

const statisticsController = async (req, res) => {
  try {
    const from = req.params["from"];
    const to = req.params["to"];
    const userId = req.user.id;

    console.log("STATISTICS", from, to, userId)

    const { low_count, medium_count, high_count, weekly_exams } = await statisticsService(userId, from, to);

    console.log(low_count, medium_count, high_count, weekly_exams);

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
}

const savedQuestionsController = async (req, res) => {
	try {
    const userId = req.user.id;
		const results = await savedQuestionsService(userId); 
		res.json(results.rows);
	} catch {
		res.status(400).json({ message: "Error" });
	}
}

const userKnowledgeLevelsController = async (req, res) => {
	try {
    const userId = req.user.id;
    const {medium_knowledge_questions_count, high_knowledge_questions_count} = await userKnowledgeLevelsService(userId);
		res.json({
			high_count: Number(high_knowledge_questions_count.rows[0].record_count),
			medium_count: Number(
				medium_knowledge_questions_count.rows[0].record_count
			),
		});
	} catch (err) {
		console.error(err.message);
	}
}

const registrationController = async (req, res) => {
	try {
		const { name, email, password } = req.body;

    const {status, message} = await registrationService(name, email, password);
		res.status(status).json({ message: message });
	} catch {
		res.status(400).json({ message: "Registration unsuccessful" });
	}
}

const loginController = (req, res, next) => {
  
}
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

module.exports.authenticationController = authenticationController;
module.exports.questionsCountController = questionsCountController;
module.exports.practiceController = practiceController;
module.exports.examController = examController;
module.exports.examResultsController = examResultsController;
module.exports.examResultsIdController = examResultsIdController;
module.exports.statisticsController = statisticsController;
module.exports.savedQuestionsController = savedQuestionsController;
module.exports.userKnowledgeLevelsController = userKnowledgeLevelsController;
module.exports.registrationController = registrationController;
module.exports.loginController = loginController;
