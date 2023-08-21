import React from "react";
import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";

import Button from "../../../atoms/Button";
import Subtitle from "../../../atoms/Subtitle";

import {
	Container,
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
} from "./styles";

export default function TrainingMenu({ data, headings, ...props }) {
	const navigate = useNavigate();

	let navigateToFilters = () => {
		navigate("/trening/filtry");
	};

	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

	return (
		<Container>
			<HeaderContainer>
				<TitleContainer>
					<Title>Trening</Title>
					<Subtitle>
						Zapraszamy Cię na sesję treningową! TRENING to pytania egzaminacyjne
						bez końca. Możesz użyć filtrów, aby wybrać pytania, których chcesz
						się dziś uczyć.
					</Subtitle>
					{!isDesktop && (
						<div className="flex flex-row flex-wrap w-full justify-center">
							<Button
								primary
								hover
								size="l"
								className="max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
								onClick={navigateToFilters}
							>
								Wybór pytań
							</Button>
						</div>
					)}
				</TitleContainer>
				<IllustrationContainer>
					{isDesktop && (
						<div className="w-full h-[371px] bg-training-menu bg-no-repeat bg-center bg-contain"></div>
					)}
				</IllustrationContainer>
				{isDesktop && (
					<div className="flex flex-row flex-wrap w-full justify-center mt-2 mb-6">
						<Button
							primary
							hover
							size="l"
							className="max-md:max-w-[256px] max-md:h-[48px] max-md:text-[20px]"
							onClick={navigateToFilters}
						>
							Wybór pytań
						</Button>
					</div>
				)}
			</HeaderContainer>
		</Container>
	);
}
