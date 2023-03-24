import React, { useState } from "react";
import { useNavigate } from "react-router";

import Bubble from "../../molecules/Bubble";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import Paragraph from "../../atoms/Paragraph";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import {
	FooterContainer,
	FooterWrapper,
	Left,
	Center,
	FeatureList,
	Feature,
	Column,
	Top,
	Bottom,
	ContactOptions,
	Right,
	Popup,
} from "./styles";

export default function Footer() {
	const navigate = useNavigate();

	const featureList = [
		{
			id: 0,
			name: "Symulacja egzaminu",
			navigationTarget: "/exam",
		},
		{
			id: 1,
			name: "Tryb nauki1",
			navigationTarget: "/learning/option1",
		},
		{
			id: 2,
			name: "Tryb nauki2",
			navigationTarget: "/learning/option2",
		},
		{
			id: 3,
			name: "Tryb nauki3",
			navigationTarget: "/learning/option3",
		},
		{
			id: 4,
			name: "Tryb nauki4",
			navigationTarget: "/learning/option4",
		},
	]
	const aboutUsList = [
		{
			id: 0,
			name: "Strona główna",
			navigationTarget: "/",
		},
		{
			id: 1,
			name: "FAQ",
			navigationTarget: "/faq",
		},
	]
	const [contactOptions, setContactOptions] = useState([
		{
			id: 0,
			icon: <MailOutlineIcon fontSize="large" />,
			popup: null,
			isActive: false,
		},
		{
			id: 1,
			icon: <LocalPhoneOutlinedIcon fontSize="large" />,
			popup: "Twój stary napierdala z łuku",
			isActive: false,
		},
		{
			id: 2,
			icon: <FacebookOutlinedIcon fontSize="large" />,
			popup: null,
			isActive: false,
		},
	]);

	const activateBubble = (id) => {
		setContactOptions((prevState) => {
			const idx = prevState.findIndex((item) => item.id === id);
			prevState[idx].isActive = true;

			return [...prevState];
		});

		setTimeout(() => {
			setContactOptions((prevState) => {
				const idx = prevState.findIndex((item) => item.id === id);
				prevState[idx].isActive = false;

				return [...prevState];
			});
		}, 4000);
	};

	return (
		<FooterContainer>
			<FooterWrapper>
				<Left>
					<Column>
						<Button bold size="2xl">
							Superlogo
						</Button>
						<Paragraph innerHTML="Jakieś hasło promocyjne czy coś XD"/>
					</Column>
				</Left>
				<Center>
					<Column>
						<Top>
							<Heading level={3}>O nas</Heading>
						</Top>
						<Bottom>
							<FeatureList>
								{aboutUsList.map((item)=>{
									return(<Feature onClick={()=>navigate(item.navigationTarget)}>{item.name}</Feature>)
								})}
							</FeatureList>
						</Bottom>
					</Column>
					<Column>
						<Top>
							<Heading level={3}>Oferta</Heading>
						</Top>
						<Bottom>
							<FeatureList>
								{featureList.map((item)=>{
									return(<Feature onClick={()=>navigate(item.navigationTarget)}>{item.name}</Feature>)
								})}
							</FeatureList>
						</Bottom>
					</Column>
				</Center>
				<Right>
					<Heading level={3}>Kontakt</Heading>
					<ContactOptions>
						{contactOptions.map((option) => {
							return (
								<Bubble size="xl" onClick={() => activateBubble(option.id)}>
									{option.popup && option.isActive && (
										<Popup>{option.popup}</Popup>
									)}
									{option.icon}
								</Bubble>
							);
						})}
					</ContactOptions>
				</Right>
			</FooterWrapper>
		</FooterContainer>
	);
}
