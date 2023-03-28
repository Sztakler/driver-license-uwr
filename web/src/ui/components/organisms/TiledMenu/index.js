import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Heading from "../../atoms/Heading";
import Paragraph from "../../atoms/Paragraph";
import Tile from "../../molecules/Tile";

import {
	TiledMenuWrapper,
	InfoSection,
	Options,
	OptionsContainer,
} from "./styles";



export default function TiledMenu({ data, ...props }) {
	const par =
		"Lorem excepteur officia ad excepteur ea duis dolore occaecat fugiat est labore. Ipsum irure fugiat laborum tempor dolor ipsum irure incididunt ullamco culpa Lorem officia dolor ut. Et mollit duis aute reprehenderit ullamco tempor adipisicing magna aliquip veniam mollit qui. Velit laboris ad consectetur nulla laborum aute dolor dolore irure non. Mollit esse aliquip ea incididunt in id elit velit commodo ad laboris. Velit reprehenderit nostrud exercitation consectetur in aliqua cillum aliquip enim dolore deserunt esse anim. Amet pariatur nulla reprehenderit non est dolor magna non sunt sunt officia eiusmod.";
	const [options, changeOptions] = useState(null);
	const [appear, setAppear] = useState(false);
	const [pickedOption, setPickedOption] = useState({
		type: null,
		mode: null,
		question_set: null,
	});
	const navigate = useNavigate();

	function readUserPick(pick) {
		setPickedOption((prevState) => {
			let newPickedOption = prevState;
			switch (pick.type) {
				case "training_type":
					newPickedOption.type = pick.alt;
					break;
				case "mode":
					newPickedOption.mode = pick.alt;
					break;
				case "question_set":
					newPickedOption.question_set = pick.alt;
					break;
				default:
					break;
			}
			return newPickedOption;
		});
		return;
	}

	useEffect(() => {
		changeOptions(data);
		setAppear(true);
	}, []);

	const handleOptionPick = (pick) => {
		setAppear(false);
		readUserPick(pick);
		setTimeout(() => {
			if (pick.children) {
				changeOptions(pick.children);
			} else {
				navigate("/training/theory", {state: pickedOption});
			}
			setAppear(true);
		}, 1850);
	};

	return (
		<TiledMenuWrapper>
			{/* <InfoSection>
				<Heading level={2}>Tryby nauki</Heading>
				<Paragraph innerHTML={par}></Paragraph>
			</InfoSection> */}
			<OptionsContainer>
				<Heading level={2} styles="mb-12">
					Czego się dzisiaj uczymy?
				</Heading>
				<Options show={appear}>
					{options &&
						options.map((tile, index) => {
							return (
								<Tile
									key={index}
									title={tile.title}
									description={tile.description}
									onClick={() => {
										handleOptionPick(tile);
									}}
								/>
							);
						})}
				</Options>
			</OptionsContainer>
			{/* <OptionsContainer>
				<Heading level={3}>Teoria</Heading>
				<Options>
					{tiles2.map((tile, index) => {
						return <Tile key={index} data={tile} />;
					})}
				</Options>
			</OptionsContainer> */}
		</TiledMenuWrapper>
	);
}
