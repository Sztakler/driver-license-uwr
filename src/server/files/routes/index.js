const express = require("express");
const controllers = require("../controllers");

const router = express.Router();

router.get("/check-auth", controllers.authenticationController);
router.get("/api/questions-count", controllers.questionsCountController);
router.get("/api/practice/", controllers.practiceController);
router.get("/api/exam/", controllers.examController);
router.get("/api/exam/results", controllers.examResultsController);
router.get("/api/exam/results/:id", controllers.examResultsIdController);
router.get("/api/statistics/:from/:to", controllers.statisticsController);
router.get("/api/saved-questions", controllers.savedQuestionsController);
router.get(
	"/api/saved-questions/knowledge-levels",
	controllers.savedQuestionsKnowledgeLevelsController
);
router.get(
	"/api/user-knowledge-levels",
	controllers.userKnowledgeLevelsController
);

router.post("/register", controllers.registrationController);
router.post("/login", controllers.loginController);
router.post("/logout", controllers.logoutController);
router.post("/api/exam/results", controllers.updateExamResultsController);
router.post("/api/user-settings", controllers.updateUserSettingsController);
router.post("/api/saved-questions", controllers.updateSavedQuestionsController);
router.post(
	"/api/user-knowledge-levels",
	controllers.updateUserKnowledgeLevelsController
);

module.exports = router;
