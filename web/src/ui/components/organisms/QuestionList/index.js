import React, { useState } from "react";

import Button from "../../atoms/Button";

import { QuestionListWrapper, ListItem, Question, Answer } from "./styles";

export default function QuestionList(props) {
	const [itemsList, setItemsList] = useState([
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
		{
			id: 0,
			question: "Jakieś randomowe pytanie byle cooooo?",
			answer:
				"Adipisicing dolore culpa tempor ea deserunt excepteur ut tempor et qui.",
			expand: false,
		},
	]);

	const toggleExpand = (expand) => {
		setItemsList(() => {
			const newItemsList = itemsList.map((item) => {
				item.expand = expand;
				console.log(item);
				return item;
			});

			console.log(newItemsList);
			return newItemsList;
		});
	};

	const hideAll = () => {};

	return (
		<QuestionListWrapper>
			<Button primary onClick={() => toggleExpand(true)}>
				Expand all
			</Button>
			<Button primary onClick={() => toggleExpand(false)}>
				Hide all
			</Button>
			{itemsList.map((item, index) => {
				return (
					<ListItem key={index}>
						<Question>{item.question}</Question>
						{item.expand && <Answer>{item.answer}</Answer>}
					</ListItem>
				);
			})}
		</QuestionListWrapper>
	);
}
