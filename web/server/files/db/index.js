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

const existingUser = (email) => {
	return pool.query(`
	SELECT * FROM USERS WHERE email = '${email}';
	`);
}

const insertUser = (name, email, password) => {
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

module.exports.questionsCount = questionsCount;
module.exports.practiceQuestions = practiceQuestions;
module.exports.examQuestions = examQuestions;
module.exports.examResults = examResults;
module.exports.examResultsId = examResultsId;
module.exports.highKnowledgeQuestionsCount = highKnowledgeQuestionsCount;
module.exports.mediumKnowledgeQuestionsCount = mediumKnowledgeQuestionsCount;
module.exports.weeklyExams = weeklyExams;
module.exports.savedQuestions = savedQuestions;
module.exports.existingUser = existingUser;
module.exports.insertUser = insertUser;
module.exports.createSavedQuestionsEntryFor = createSavedQuestionsEntryFor;