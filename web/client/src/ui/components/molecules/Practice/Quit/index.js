import React, { useState } from "react";
import { useRecoilState } from "recoil";

import {
	cachedAnswersState,
	inReviewModeState,
} from "../../../../../recoil/atoms";

import Modal from "../../Modal";
import Button from "../../../atoms/Button";
import Heading from "../../../atoms/Heading";

import Cancel from "../../../../../icons/Cancel";

import { QuitOptions } from "./styles";
import { useNavigate } from "react-router";

export default function Quit() {
	const navigate = useNavigate();

	const [exitModalShow, setExitModalShow] = useState(false);
	const [inReviewMode, setInReviewMode] = useRecoilState(inReviewModeState);
	const [cachedAnswers] = useRecoilState(cachedAnswersState);

	function handleFinishTraining(selectedYes) {
		if (selectedYes) {
			if (cachedAnswers.length) {
				setInReviewMode(true);
				navigate("/trening/podsumowanie");
			} else {
				navigate("/");
			}
		} else {
			setExitModalShow(false);
		}
	}

	return (
		<QuitOptions>
			<span>{inReviewMode ? "Wróć do podsumowania" : "Zakończ trening"}</span>
			<Button bubble hover size="m" onClick={() => setExitModalShow(true)}>
				<Cancel />
			</Button>

			<Modal onClose={() => setExitModalShow(false)} show={exitModalShow}>
				<Heading level={4}>
					{inReviewMode
						? "Czy napewno chcesz wrócić do podsumowania?"
						: "Czy napewno chcesz zakończyć trening?"}
				</Heading>
				<div>
					<Button primary hover onClick={() => handleFinishTraining(true)}>
						TAK
					</Button>
					<Button primary hover onClick={() => handleFinishTraining(false)}>
						NIE
					</Button>
				</div>
			</Modal>
		</QuitOptions>
	);
}
