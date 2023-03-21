import React from "react";
import Bubble from "../../molecules/Bubble";
import {
	FooterContainer,
	FooterWrapper,
	Left,
	Center,
	Column,
	ContactOptions,
	Right,
	Text,
} from "./styles";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import Separator from "../../atoms/Separator";

export default function Footer() {
	return (
		<FooterContainer>
			<FooterWrapper>
				<Left>
					<Button bold size="2xl">
						Superlogo
					</Button>
					<p>Jakieś hasło promocyjne czy coś XD</p>
				</Left>
				<Center>
					<Column>
						<Heading level={3}>O nas</Heading>
						<ul>
							<li>Strona główna</li>
							<li>FAQ</li>
						</ul>
					</Column>
					<Column>
						<Heading level={3}>Oferta</Heading>
						<ul>
							<li>Symulacja egzaminu</li>
							<li>Tryb nauki</li>
						</ul>
					</Column>
					<Column>
						<Heading level={3}>Oferta</Heading>
						<ul>
							<li>Symulacja egzaminu</li>
							<li>Tryb nauki</li>
						</ul>
					</Column>
				</Center>
				<Right>
					<Heading level={3}>Kontakt</Heading>
					<ContactOptions>
						<Bubble size="xl">
							<MailOutlineIcon fontSize="large" />
						</Bubble>
						<Bubble size="xl">
							<LocalPhoneOutlinedIcon fontSize="large" />
						</Bubble>
						<Bubble size="xl">
							<FacebookOutlinedIcon fontSize="large" />
						</Bubble>
					</ContactOptions>
				</Right>
			</FooterWrapper>
		</FooterContainer>
	);
}
