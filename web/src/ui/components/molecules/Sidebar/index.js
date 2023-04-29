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
