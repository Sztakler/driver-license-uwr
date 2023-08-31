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
	const [expanded, setExpanded] = useState(0);

	useEffect(() => {
		setChapters(navigation);
		setExpanded(navigation[0].id);
	}, []);

	let handleChapterClick = (id, index) => {
		setExpanded(id === expanded ? -1 : id);
		let path = chapters[index].alt;
		if (path) {
			navigate(`/podrecznik/${path}`);
		}
	};

	let handleTopicClick = (path) => {
		navigate(`/podrecznik/${path}`);
	};

	return (
		<Container className="relative">
			<Navigation>
				<ChapterList>
					{chapters &&
						chapters.map((chapter, index) => {
							return (
								<Chapter>
									<ChapterTitle
										onClick={() => {
											handleChapterClick(chapter.id, index);
										}}
										active={expanded === chapter.id}
									>
										{chapter.name.toUpperCase()}
										{chapter.topics.length ? (
											<KeyboardArrowDownIcon sx={{ fontSize: 32 }} />
										) : (
											""
										)}
									</ChapterTitle>
									{chapter.id === expanded && chapter.topics && (
										<TopicList>
											{chapter.topics.map((topic) => {
												return (
													<Item onClick={() => handleTopicClick(topic.alt)}>
														{topic.name}
													</Item>
												);
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
