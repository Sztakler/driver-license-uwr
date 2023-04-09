import React from "react";
import parse from 'html-react-parser';

import Sidebar from "../../molecules/Sidebar";

import { Container, Content } from "./styles";

export default function Theory({navigation, content}) {
	return (
		<Container>
			<Sidebar navigation={navigation}></Sidebar>
			<Content>
				{parse(content)}
			</Content>
		</Container>
	);
}
