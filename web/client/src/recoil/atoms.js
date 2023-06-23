import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({ storage: localStorage });

export const resultsState = atom({
	key: "resultsState",
	default: {
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	},
	effects_UNSTABLE: [persistAtom],
});

export const resultsExamState = atom({
	key: "resultsExam",
	default: {
		questionCounter: 0,
		scoredPoints: 0,
		correctAnswers: 0,
		incorrectAnswers: 0,
		skippedQuestions: 0,
	},
});

export const inReviewModeState = atom({
	key: "inReviewMode",
	default: false,
	effects_UNSTABLE: [persistAtom],
});

export const cachedAnswersState = atom({
	key: "cachedAnswers",
	default: [],
	effects_UNSTABLE: [persistAtom],
});
