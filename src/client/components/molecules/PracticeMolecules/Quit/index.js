import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import PracticeContext from "context/PracticeContext";
import { urlToServer } from "client/configure_build";

import Modal from "client/components/molecules/Modal";
import Button from "client/components/atoms/Button";
import Heading from "client/components/atoms/Heading";
import Image from "client/components/atoms/Image";
import Illustrations from "assets/images/svg/icons/Illustrations";

import { QuitOptions } from "./styles";
import { useMediaQuery } from "react-responsive";

// Exam/Training quit component, checks if we are in exam (then send result to DB)
// and if we are in training it just navigate us to homepage
export default function Quit({ isReview, isExam, result }) {
	const navigate = useNavigate();
	const [exitModalShow, setExitModalShow] = useState(false);
	const { savedQuestions, examFinished, setNewExamFinished } =
		useContext(PracticeContext);

	let { id } = useParams();

	async function sendResultsToDatabase() {
		let data = {
			questions: savedQuestions,
			summary: result,
		};
		try {
			const response = await fetch(`${urlToServer}/api/exam/results`, {
				method: "POST",
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const responseData = await response.json();
				return responseData.id;
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

	useEffect(() => {
		const sendData = async () => {
			let id = await sendResultsToDatabase();
			setNewExamFinished(false);
			navigate(`/egzamin/podsumowanie/${id}`);
			return;
		};
		if (examFinished) {
			sendData();
		}
	}, [examFinished]);

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<QuitOptions>
			<Button
				bubble
				hover={isDesktop}
				size="l"
				className=""
				onClick={() => setExitModalShow(true)}
				title="Zakończ trening"
			>
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
