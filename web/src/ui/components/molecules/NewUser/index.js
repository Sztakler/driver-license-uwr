import React from "react";

import Button from "../../atoms/Button";
import Separator from "../../atoms/Separator";
import UnorderedList from "../../atoms/UnorderedList";

import { NewUserContainer, Row, Column, Heading4, Heading5 } from "./styles";

export default function NewUser(props) {
	return (
		<NewUserContainer>
			<Column>
				<Row>
					<Heading4>Jesteś nowym użytkownikiem?</Heading4>
					<Button primary size="xl">
						Załóż konto
					</Button>
				</Row>
				<Separator horizontal />
				<Row>
					<Heading5>Co zyskujesz?</Heading5>
					<UnorderedList primary>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							pellentesque venenatis ipsum sed mollis. Quisque.
						</li>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							pellentesque venenatis ipsum sed mollis. Quisque.
						</li>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							pellentesque venenatis ipsum sed mollis. Quisque.
						</li>
						<li>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
							pellentesque venenatis ipsum sed mollis. Quisque.
						</li>
					</UnorderedList>
				</Row>
			</Column>
		</NewUserContainer>
	);
}
