const pool = require("../DatabaseConfiguration/database");

const questionsCount = () => {
	return pool.query(
		`
		SELECT COUNT(*) AS record_count FROM questions;
		`
	);
};

const practiceQuestions = (user_id, filters) => {
	let acceptedKnowledgeLevels = [];

	if (filters.lowKnowledgeQuestions === "true") {
		acceptedKnowledgeLevels.push("0", "1");
	}
	if (filters.mediumKnowledgeQuestions === "true") {
		acceptedKnowledgeLevels.push("2");
	}
	if (filters.highKnowledgeQuestions === "true") {
		acceptedKnowledgeLevels.push("3");
	}

	return pool.query(
		`
		WITH all_questions AS (
			SELECT 
					questions.*, 
					CASE
							WHEN saved_questions.user_id IS NOT NULL THEN true
							ELSE false
					END AS is_saved
			FROM 
					questions
			LEFT JOIN
					saved_questions
			ON
					questions.id = ANY(saved_questions.questions)
					AND saved_questions.user_id = $2
	), result AS (SELECT * FROM all_questions
		WHERE $1 = true OR is_saved = true)
	
	SELECT 
			result.*, 
			COALESCE(user_knowledge_levels.knowledge_level, 0) AS knowledge_level
	FROM 
			result
	LEFT JOIN 
			user_knowledge_levels
	ON 
			user_knowledge_levels.user_id = $2 AND user_knowledge_levels.question_id = result.id 
	WHERE COALESCE(user_knowledge_levels.knowledge_level, 0) = ANY($3)
	ORDER BY
			RANDOM();
	
`,
		[filters.onlySavedQuestions === "false", user_id, acceptedKnowledgeLevels]
	);
};

const examBasicQuestions = () => {
	return pool.query(
		`(
      SELECT *
      FROM questions
      WHERE structure_scope = 'PODSTAWOWY' AND points = 3
			ORDER BY RANDOM()
      LIMIT 10
    )
    UNION ALL
		(
      SELECT *
      FROM questions
      WHERE structure_scope = 'PODSTAWOWY' AND points = 2
			ORDER BY RANDOM()
      LIMIT 6
    )
		UNION ALL
		(
      SELECT *
      FROM questions
      WHERE structure_scope = 'PODSTAWOWY' AND points = 1
			ORDER BY RANDOM()
      LIMIT 4
    );`
	);
};

const examSpecialistQuestions = () => {
	return pool.query(
		`
    (
      SELECT *
      FROM questions
      WHERE structure_scope = 'SPECJALISTYCZNY' AND points = 3
			ORDER BY RANDOM()
      LIMIT 6
    )
		UNION ALL
		(
      SELECT *
      FROM questions
      WHERE structure_scope = 'SPECJALISTYCZNY' AND points = 2
			ORDER BY RANDOM()
      LIMIT 4
    )
		UNION ALL
		(
      SELECT *
      FROM questions
      WHERE structure_scope = 'SPECJALISTYCZNY' and points = 1
			ORDER BY RANDOM()
      LIMIT 2
    )
		;`
	);
};

const examResults = (userID) => {
	return pool.query(
		`SELECT * FROM results WHERE user_id = ${userID} ORDER BY RANDOM() LIMIT 1;`
	);
};

const examResultsId = (userID, itemId) => {
	return pool.query(
		`SELECT * FROM results WHERE user_id = ${userID} and id = ${itemId}`
	);
};

const highKnowledgeQuestionsCount = (userId) => {
	return pool.query(
		`
	SELECT COUNT(*)
	AS record_count
	FROM user_knowledge_levels
	WHERE user_knowledge_levels.knowledge_level = 3 AND user_knowledge_levels.user_id = $1;
		`,
		[userId]
	);
};

const mediumKnowledgeQuestionsCount = async (userId) => {
	return await pool.query(
		`
	SELECT COUNT(*)
	AS record_count
	FROM user_knowledge_levels
	WHERE user_knowledge_levels.knowledge_level = 2 AND user_knowledge_levels.user_id = $1;
		`,
		[userId]
	);
};

const weeklyExams = (userId, from, to) => {
	return pool.query(
		`
		SELECT created_at
		FROM results
		WHERE user_id = $1 AND created_at BETWEEN $2 AND $3;
		`,
		[userId, from, to]
	);
};

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
};

const savedQuestionsKnowledgeLevels = (userId) => {
	return pool.query(
		`
	WITH saved_questions_with_knowledge AS (SELECT COALESCE(user_knowledge_levels.knowledge_level, 0) AS knowledge_level
			FROM questions q
	INNER JOIN (SELECT user_id, questions 
			FROM saved_questions 
			WHERE user_id = $1) AS saved_questions
	ON 
		q.id = ANY(saved_questions.questions)
	LEFT JOIN (SELECT * 
			FROM user_knowledge_levels
			WHERE user_id = $1) AS user_knowledge_levels
	ON 
		q.id = user_knowledge_levels.question_id)

	SELECT knowledge_level, COUNT(*) 
		FROM saved_questions_with_knowledge
	GROUP BY knowledge_level
	ORDER BY knowledge_level;
	`,
		[userId]
	);
};

const userName = (userId) => {
	return pool.query(
		`
	SELECT name FROM users WHERE id=$1
	`,
		[userId]
	);
};

const existingUserByEmail = (email) => {
	return pool.query(`
	SELECT * FROM users WHERE email = '${email}';
	`);
};

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
		`INSERT INTO saved_questions (user_id, questions) VALUES ('${userId}', '{}');`
	);
};

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
};

const existingUserById = (user_id) => {
	return pool.query(`
	SELECT * FROM users WHERE id = '${user_id}';
	`);
};

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
};

const updateSavedQuestion = (question_id, user_id) => {
	return pool.query(`UPDATE saved_questions
		SET questions = 
				CASE 
						WHEN questions @> ARRAY[${question_id}] THEN array_remove(questions, ${question_id})
						ELSE array_append(questions, ${question_id})
				END
		WHERE user_id = ${user_id};`);
};

const updateUserKnowledgeLevels = (question_id, knowledgeLevel, user_id) => {
	return pool.query(
		`      
  INSERT INTO user_knowledge_levels (user_id, question_id, knowledge_level)
      VALUES ($1, $2, $3)
  ON CONFLICT (user_id, question_id)
      DO UPDATE SET knowledge_level = $3;`,
		[user_id, question_id, knowledgeLevel]
	);
};

module.exports.questionsCount = questionsCount;
module.exports.practiceQuestions = practiceQuestions;
module.exports.examSpecialistQuestions = examSpecialistQuestions;
module.exports.examBasicQuestions = examBasicQuestions;
module.exports.examResults = examResults;
module.exports.examResultsId = examResultsId;
module.exports.highKnowledgeQuestionsCount = highKnowledgeQuestionsCount;
module.exports.mediumKnowledgeQuestionsCount = mediumKnowledgeQuestionsCount;
module.exports.weeklyExams = weeklyExams;
module.exports.savedQuestions = savedQuestions;
module.exports.savedQuestionsKnowledgeLevels = savedQuestionsKnowledgeLevels;
module.exports.userName = userName;
module.exports.existingUserByEmail = existingUserByEmail;
module.exports.insertUser = insertUser;
module.exports.createSavedQuestionsEntryFor = createSavedQuestionsEntryFor;
module.exports.updateExamResults = updateExamResults;
module.exports.existingUserById = existingUserById;
module.exports.updateUserData = updateUserData;
module.exports.updateSavedQuestion = updateSavedQuestion;
module.exports.updateUserKnowledgeLevels = updateUserKnowledgeLevels;
