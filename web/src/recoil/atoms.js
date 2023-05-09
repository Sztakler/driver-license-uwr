import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

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

export const inReviewModeState = atom({
	key: "inReviewMode",
	default: false,
	effects_UNSTABLE: [persistAtom],
});
