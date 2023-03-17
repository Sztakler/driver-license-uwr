import React, { useEffect, useState } from "react";

import Button from "../../atoms/Button";

import {
	QuestionListWrapper,
	QuickActions,
	ListContainer,
	ListItem,
	Question,
	Answer,
	QuestionSection,
	AnswerSection,
	Arrow,
} from "./styles";

export default function QuestionList(props) {
	const defaultItemsList = [
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
		{
			id: 1,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
		{
			id: 2,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
		{
			id: 3,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
		{
			id: 4,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
		{
			id: 5,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
		{
			id: 6,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Sint pariatur qui exercitation irure sint. Incididunt consequat consectetur ex culpa eu dolor. Deserunt culpa Lorem adipisicing et cillum aliqua commodo commodo. Sunt mollit labore officia ut nisi enim est sunt. Enim consectetur nostrud amet proident commodo est ad tempor eu dolor officia. Tempor Lorem nulla veniam ad labore excepteur amet ad.",
			expand: false,
		},
	];
	const [itemsList, setItemsList] = useState(defaultItemsList);

	useEffect(() => {
		const newItemsList =
			JSON.parse(window.localStorage.getItem("itemsList")) || defaultItemsList;
		setItemsList(newItemsList);
	}, []);

	useEffect(() => {
		window.localStorage.setItem("itemsList", JSON.stringify(itemsList));
	}, [itemsList]);

	const toggleExpandAll = (expand) => {
		setItemsList((prevState) => {
			const newItemsList = prevState.map((item) => {
				item.expand = expand;
				return item;
			});

			return newItemsList;
		});
	};

	const toggleExpandSpecific = (id) => {
		setItemsList((prevState) => {
			const idx = prevState.findIndex((item) => item.id === id);
			prevState[idx].expand = !prevState[idx].expand;

			return [...prevState];
		});
	};

	return (
		<QuestionListWrapper>
			<QuickActions>
				<Button bold underscored onClick={() => toggleExpandAll(true)}>
					Rozwiń wszystkie
				</Button>
				<Button bold underscored onClick={() => toggleExpandAll(false)}>
					Zwiń wszystkie
				</Button>
			</QuickActions>
			<ListContainer>
				{itemsList.map((item, index) => {
					return (
						<ListItem key={index}>
							<QuestionSection>
								<Arrow onClick={() => toggleExpandSpecific(item.id)}>
									{item.expand ? "expand_less" : "expand_more"}
								</Arrow>
								<Question>{item.question}</Question>
							</QuestionSection>
							<AnswerSection>
								{item.expand && <Answer>{item.answer}</Answer>}
							</AnswerSection>
						</ListItem>
					);
				})}
			</ListContainer>
		</QuestionListWrapper>
	);
}