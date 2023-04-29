import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import {
	Container,
	ChapterList,
	Navigation,
	ChapterTitle,
	Chapter,
	TopicList,
	Item,
} from "./styles";

export default function Sidebar({ navigation }) {
	const navigate = useNavigate();
	const [chapters, setChapters] = useState(null);
	const [expanded, setExpanded] = useState(-1);

	useEffect(() => {
		setChapters(navigation);
	}, []);

	let handleChapterClick = (id) => {
		setExpanded(id === expanded ? -1 : id);
	};

	let handleTopicClick = (path) => {
		console.log(path)
		navigate("/trening/teoria/" + path);
	}

	return (
		<Container className="relative">
			<Navigation>
			<label className="before:w-[60px] after:w-[60px] absolute top-0 right-[-120px] flex flex-col cursor-pointer">
				<svg width="29" height="22" viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M10.5141 1L1 10.5141L10.5141 20.0282" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M27.6454 10.5144H1.26611" stroke="#292D32" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				<p className="rotate-90 translate-y-16 relative right-[40px] bottom-[10px]">Zwiń spis treści</p>
				<input type="checkbox" className="appearance-none w-[60px] checked:bg-blue-500">
				</input>
			</label>
				<ChapterList>
					{chapters &&
						chapters.map((chapter) => {
							return (
								<Chapter>
									<ChapterTitle
										onClick={() => {
											handleChapterClick(chapter.id);
										}}
										active={expanded === chapter.id}
									>
										{chapter.name.toUpperCase()}
										<KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
									</ChapterTitle>
									{chapter.id === expanded && chapter.topics && (
										<TopicList>
											{chapter.topics.map((topic) => {
												return <Item onClick={() => handleTopicClick(topic.alt)}>{topic.name}</Item>;
											})}
										</TopicList>
									)}
								</Chapter>
							);
						})}
				</ChapterList>
			</Navigation>
		</Container>
	);
}
