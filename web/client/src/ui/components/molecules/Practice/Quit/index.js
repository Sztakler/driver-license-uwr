import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router";
import TaskContext from "../../../../../context/TaskContext";

import Text from "../../../atoms/Text";
import Modal from "../../Modal";
import Button from "../../../atoms/Button";
import Heading from "../../../atoms/Heading";
import Image from "../../../atoms/Image";
import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";

import { QuitOptions } from "./styles";

export default function Quit({ isReview, isExam, result }) {
	const navigate = useNavigate();
	const [exitModalShow, setExitModalShow] = useState(false);
	const { savedQuestions } = useContext(TaskContext);

	let { id } = useParams();

	async function sendResultsToDatabase() {
		let data = {
			user_id: 34,
			questions: savedQuestions,
			summary: result,
		};
		try {
			const response = await fetch("http://localhost:5000/api/exam/results", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				console.log("Data submitted successfully");
				const responseData = await response.json();

				return responseData.id;
				// Additional actions or state updates after successful submission
			} else {
				console.error("Error submitting data");
			}
		} catch (error) {
			console.error("Network error:", error);
		}

		return 0;
	}

	async function handleFinishTest(selectedYes) {
		if (selectedYes) {
			if (!isExam) {
				navigate("/trening");
				return;
			}

			if (savedQuestions.length) {
				if (!isReview) {
					id = await sendResultsToDatabase();
				}
				navigate(`/egzamin/podsumowanie/${id}`);
				return;
			} else {
				navigate("/");
				return;
			}
		} else {
			setExitModalShow(false);
		}
		return;
	}

	return (
		<QuitOptions>
			<Text>
				{isReview
					? "Wróć do podsumowania"
					: isExam
					? "Zakończ egzamin"
					: "Zakończ trening"}
			</Text>
			<Button bubble hover size="m" onClick={() => setExitModalShow(true)}>
				<Image src={Illustrations.Cancel} />
			</Button>

			<Modal onClose={() => setExitModalShow(false)} show={exitModalShow}>
				<Heading level={4}>
					{isReview
						? "Czy napewno chcesz wrócić do podsumowania?"
						: isExam
						? "Czy napewno chcesz zakończyć egzamin?"
						: "Czy napewno chcesz zakończyć trening?"}
				</Heading>
				<div>
					<Button
						primary
						size="xs"
						hover
						onClick={() => handleFinishTest(true)}
					>
						TAK
					</Button>
					<Button
						primary
						hover
						size="xs"
						onClick={() => handleFinishTest(false)}
					>
						NIE
					</Button>
				</div>
			</Modal>
		</QuitOptions>
	);
}
