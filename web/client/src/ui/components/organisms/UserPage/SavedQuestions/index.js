import React from "react";

import Text from "../../../atoms/Text";
import Input from "../../../atoms/Input";
import Paragraph from "../../../atoms/Paragraph";
import Image from "../../../atoms/Image";

import { ListAlign, InnerContainer, ListItem, Header, FiltersList, Filter, Name, ItemHeader, ItemBody, StatusIcon, Questions } from "./styles";

import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";

export default function SavedQuestions() {
	return (
		<ListAlign>
			<Text className="ml-auto mr-2 pb-2">Liczba zapisanych pytań: 25</Text>
			<InnerContainer>
				<Header>
					<FiltersList>
						<Name>Typ pytania:</Name>
						<Filter>
							<Input
								checkbox
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
							></Input>
							<Paragraph>Podstawowe</Paragraph>
						</Filter>
						<Filter>
							<Input
								checkbox
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
							></Input>
							<Paragraph>Specjalistyczne</Paragraph>
						</Filter>

					</FiltersList>

					<FiltersList>
						<Name>Poziom znajomości:</Name>
						<Filter>
							<Input
								checkbox
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
							></Input>
							<Paragraph>Niski</Paragraph>
						</Filter>
						<Filter>
							<Input
								checkbox
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
							></Input>
							<Paragraph>Średni</Paragraph></Filter>
						<Filter>
							<Input
								checkbox
								id="saved"
								type="checkbox"
								value="saved"
								className="mr-2"
							></Input>
							<Paragraph>Wysoki</Paragraph></Filter>
					</FiltersList>
				</Header>

				<Questions>
					<ListItem>
						<ItemHeader>
							<div className="flex flex-row gap-6">
							<Image src={Illustrations.Plus}></Image>
							<Text className="font-medium text-base">Czy w tej sytuacji masz pierwszeństwo przed pojazdem wjeżdżającym z lewej strony na pas ruchu?</Text>
							</div>
							<Text className="font-normal text-[15px]">Rodzaj pytania: <Text className="font-light">Podstawowe</Text></Text>
						</ItemHeader>
						<ItemBody></ItemBody>
					</ListItem>
				</Questions>
			</InnerContainer>
		</ListAlign>
	);
}
