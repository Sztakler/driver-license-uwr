const pool = require("../DatabaseConfiguration/database")

const questionsCount = () => {
	return pool.query(
		`
		SELECT COUNT(*) AS record_count FROM questions;
			`
	);
}

const practiceQuestions = (user_id) => {
	return pool.query(
		`
SELECT 
    questions.*, 
    saved_questions.user_id IS NOT NULL AS is_saved,
    COALESCE(user_knowledge_levels.knowledge_level, 0) AS knowledge_level
FROM 
    questions
LEFT JOIN 
    (SELECT user_id, questions 
    FROM saved_questions 
    WHERE user_id = $1) AS saved_questions 
ON 
    questions.id = ANY(saved_questions.questions)
LEFT JOIN 
  (SELECT *
    FROM user_knowledge_levels 
    WHERE user_id = $1) AS user_knowledge_levels
ON
    questions.id = user_knowledge_levels.question_id
ORDER BY
    RANDOM()
LIMIT 25;
    `,
		[user_id]
	);
}

const examQuestions = () => {
	return pool.query(
		`(
      SELECT *
      FROM questions
      WHERE zakres_struktury = 'PODSTAWOWY'
      LIMIT 20
    )
    UNION ALL
    (
      SELECT *
      FROM questions
      WHERE zakres_struktury = 'SPECJALISTYCZNY'
      LIMIT 12
    );`
	);
}

const examResults = () => {
	return pool.query(
		"SELECT * FROM results ORDER BY RANDOM() LIMIT 1;"
	);
}

const examResultsId = (itemId) => {
	return pool.query(
		`SELECT * FROM results WHERE id = ${itemId}`
	);
}

const highKnowledgeQuestionsCount = (userId) => {
	return pool.query(
		`
	SELECT COUNT(*)
	AS record_count
	FROM user_knowledge_levels
	WHERE user_knowledge_levels.knowledge_level = 2 AND user_knowledge_levels.user_id = $1;
		`,
		[userId]
	);
}

const mediumKnowledgeQuestionsCount = (userId) => {
	return pool.query(
		`
	SELECT COUNT(*)
	AS record_count
	FROM user_knowledge_levels
	WHERE user_knowledge_levels.knowledge_level = 1 AND user_knowledge_levels.user_id = $1;
		`,
		[userId]
	);
}

const weeklyExams = (userId, from, to) => {
	return pool.query(
		`
		SELECT created_at
		FROM results
		WHERE user_id = $1 AND created_at BETWEEN $2 AND $3;
		`,
		[userId, from, to]
	);
}

const savedQuestions = (userId) => {
	return pool.query(
		"SELECT q.*, uk.knowledge_level " +
		"FROM questions q " +
		"LEFT JOIN user_knowledge_levels uk ON q.id = uk.question_id AND uk.user_id = $1 " +
		"WHERE q.id = ANY (" +
		"SELECT unnest(questions) FROM saved_questions WHERE user_id = $1" +
		");",
		[userId]
	);
}

const existingUserByEmail = (email) => {
	return pool.query(`
	SELECT * FROM USERS WHERE email = '${email}';
	`);
}

const insertUser = (name, email, hashedPassword) => {
	return pool.query(`
	INSERT INTO USERS (name, email, password)
	VALUES (
		'${name}',
		'${email}',
		'${hashedPassword}'
	)
	returning id;
	`);
};

const createSavedQuestionsEntryFor = (userId) => {
	return pool.query(
		`INSERT INTO saved_questions (user_id) VALUES ('${userId}');`
	);
}

const updateExamResults = (user_id, questions, summary) => {
	return pool.query(`
	INSERT INTO results (user_id, questions, summary)
	VALUES (
		${user_id},
		'${JSON.stringify(questions)}',
		'${JSON.stringify(summary)}'
	)
	RETURNING id;
	`);
}

const existingUserById = (user_id) => {
	return pool.query(`
	SELECT * FROM USERS WHERE user_id = '${user_id}';
	`);
}

const updateUserData = (newData, user_id) => {
	return pool.query(
		`
    UPDATE users
    SET name = $1,
    email = $2,
    password = $3
    WHERE id = ${user_id};`,
		[newData.name, newData.email, newData.password]
	);
}

const updateSavedQuestion = (question_id, user_id) => {
	return pool.query(`UPDATE saved_questions
		SET questions = 
				CASE 
						WHEN questions @> ARRAY[${question_id}] THEN array_remove(questions, ${question_id})
						ELSE array_append(questions, ${question_id})
				END
		WHERE user_id = ${user_id};`);
}

const updateUserKnowledgeLevels = (question_id, knowledgeLevel, user_id) => {
	return pool.query(
		`      
  INSERT INTO user_knowledge_levels (user_id, question_id, knowledge_level)
      VALUES ($1, $2, $3)
  ON CONFLICT (user_id, question_id)
      DO UPDATE SET knowledge_level = EXCLUDED.knowledge_level;`,
		[user_id, question_id, knowledgeLevel]
	);
}

module.exports.questionsCount = questionsCount;
module.exports.practiceQuestions = practiceQuestions;
module.exports.examQuestions = examQuestions;
module.exports.examResults = examResults;
module.exports.examResultsId = examResultsId;
module.exports.highKnowledgeQuestionsCount = highKnowledgeQuestionsCount;
module.exports.mediumKnowledgeQuestionsCount = mediumKnowledgeQuestionsCount;
module.exports.weeklyExams = weeklyExams;
module.exports.savedQuestions = savedQuestions;
module.exports.existingUserByEmail = existingUserByEmail;
module.exports.insertUser = insertUser;
module.exports.createSavedQuestionsEntryFor = createSavedQuestionsEntryFor;
module.exports.updateExamResults = updateExamResults;
module.exports.existingUserById = existingUserById;
module.exports.updateUserData = updateUserData;
module.exports.updateSavedQuestion = updateSavedQuestion;
module.exports.updateUserKnowledgeLevels = updateUserKnowledgeLevels;