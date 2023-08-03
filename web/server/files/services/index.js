const bcrypt = require("bcrypt");
const dbRequests = require('../db');

const checkRequestAuthentication = (isAuthenticated, user) => {
  if (isAuthenticated) {
    return { isAuthenticated: true, user: user };
  } else {
    return { isAuthenticated: false, user: {} };
  }
}

const questionsCountService = async () => {
  try {
    return await dbRequests.questionsCount();
  } catch (e) {
    throw new Error(e.message);
  }
}

const practiceService = async (user_id) => {
  try {
    return await dbRequests.practiceQuestions(user_id);
  } catch (e) {
    throw new Error(e.message);
  }
}

const examService = async () => {
  try {
    return await dbRequests.examQuestions();
  } catch (e) {
    throw new Error(e.message);
  }
}

const examResultsService = async () => {
  try {
    return await dbRequests.examResults();
  } catch (e) {
    throw new Error(e.message);
  }
}

const examResultsIdService = async (itemId) => {
  try {
    return await dbRequests.examResultsId(itemId);
  } catch (e) {
    throw new Error(e.message);
  }
}

const statisticsService = async (userId, from, to) => {
  try {
    const questions_count = await dbRequests.questionsCount();
    const medium_knowledge_questions_count = await dbRequests.mediumKnowledgeQuestionsCount(userId);
    const high_knowledge_questions_count = await dbRequests.highKnowledgeQuestionsCount(userId);

    let total_count = Number(questions_count.rows[0].record_count);
    let medium_count = Number(
      medium_knowledge_questions_count.rows[0].record_count
    );
    let high_count = Number(
      high_knowledge_questions_count.rows[0].record_count
    );
    let low_count = total_count - medium_count - high_count;

    const weekly_exams = await dbRequests.weeklyExams(userId, from, to);

    return { low_count, medium_count, high_count, weekly_exams };

  } catch (e) {
    throw new Error(e.message);
  }
}

const savedQuestionsService = async (userId) => {
  try {
    return await dbRequests.savedQuestions(userId);
  } catch (e) {
    throw new Error(e.message);
  }
}

const userKnowledgeLevelsService = async (userId) => {
  try {
    const medium_knowledge_questions_count = await dbRequests.mediumKnowledgeQuestionsCount(userId);
    const high_knowledge_questions_count = await dbRequests.highKnowledgeQuestionsCount(userId);
    console.log("WIEDZA", medium_knowledge_questions_count, high_knowledge_questions_count)

    return { medium_knowledge_questions_count, high_knowledge_questions_count };
  } catch (e) {
    throw new Error(e.message);
  }
}

const registrationService = async (name, email, password) => {
  const existingUser = await dbRequests.existingUser(email);

  if (existingUser.rows.length > 0) {
    return { status: 400, message: "Email already in use" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await dbRequests.insertUser(name, email, hashedPassword);
  const userId = result.rows[0].id;
  await dbRequests.createSavedQuestionsEntryFor(userId);

  return { status: 200, message: "Registration successful" };
}

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
}