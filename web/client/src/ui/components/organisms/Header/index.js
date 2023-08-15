import React from "react";

import {
	HeaderContainer,
	TitleContainer,
	IllustrationContainer,
	Title,
	Buttons,
} from "./styles";
import Subtitle from "../../atoms/Subtitle";

export default function Header({ title, subtitle, illustration, children }) {
	return (
		<HeaderContainer>
			<TitleContainer>
				<Title>{title}</Title>
				<Subtitle>{subtitle}</Subtitle>
				{/* <div className="flex flex-row">
					<Title>
						A<br />
						Ą<br />
						B<br />
						C<br />
						Ć<br />
						D<br />
					</Title>

					<Title>
						E<br />
						Ę<br />
						F<br />
						G<br />
						H<br />
						I<br />
						J<br />
						K<br />
					</Title>

					<Title>
						L<br />
						Ł<br />
						M<br />
						N<br />
						Ń<br />
						O<br />
						Ó<br />
						P<br />
					</Title>

					<Title>
						R<br />
						S<br />
						Ś<br />
						T<br />
						U<br />
						X<br />
						Y<br />
						V<br />
					</Title>

					<Title>
						Z<br />
						Ź<br />
						Ż<br />
					</Title>
				</div>


				AĄBCĆDEĘFGHIJKLŁMNŃOÓPRSŚTUXYVZŹŻ */}
			</TitleContainer>
			<IllustrationContainer />
			<Buttons>{children}</Buttons>
		</HeaderContainer>
	);
}
