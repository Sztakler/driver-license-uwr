import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import Heading from "../../atoms/Heading";
import Tile from "../../molecules/Tile";

import { Wrapper, Tiles, OptionsContainer } from "./styles";

export default function TiledMenu({ data, headings, ...props }) {
	const navigate = useNavigate();
	const [tiles, setTiles] = useState(null);
	const [level, setLevel] = useState(0);
	const [appear, setAppear] = useState(false);
	const [pickedOption, setPickedOption] = useState({
		type: { name: "", displayable: "" },
		mode: { name: "", displayable: "" },
		question_set: { name: "", displayable: "" },
	});

	function readUserPick(pick) {
		setPickedOption((prevState) => {
			let newPickedOption = prevState;
			switch (pick.type) {
				case "training_type":
					newPickedOption.type.name = pick.alt;
					newPickedOption.type.displayable = pick.title;
					break;
				case "mode":
					newPickedOption.mode.name = pick.alt;
					newPickedOption.mode.displayable = pick.title;
					break;
				case "question_set":
					newPickedOption.question_set.name = pick.alt;
					newPickedOption.question_set.displayable = pick.title;
					break;
				default:
					break;
			}
			return newPickedOption;
		});
		return;
	}

	useEffect(() => {
		setTiles(data);
		setAppear(true);
	}, []);

	const handleOptionPick = (pick) => {
		setAppear(false);
		readUserPick(pick);
		setTimeout(() => {
			if (!pick.children) {
				navigate("/training/" + pickedOption.type.name, {
					state: pickedOption,
				});
			}
			setTiles(pick.children);
			setLevel(level + 1);
			setAppear(true);
		}, 1850);
	};

	return (
		<Wrapper>
			<OptionsContainer show={appear}>
				{tiles && (
					<>
						<Heading level={2} styles="mb-12">
							{headings[level]}
						</Heading>
						<Tiles>
							{tiles.map((tile, index) => {
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
						</Tiles>
					</>
				)}
			</OptionsContainer>
		</Wrapper>
	);
}
