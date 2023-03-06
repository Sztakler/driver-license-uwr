import React from "react";

import Heading from "../../atoms/Heading";
import Button from "../../atoms/Button";
import Separator from "../../atoms/Separator";
import UnorderedList from "../../atoms/UnorderedList";

export default function NewUser(props) {
	return (
		<div className="h-full w-1/2 rounded-3xl ">
			<div className="container flex flex-col p-4">
				<div className="flex flex-col items-start justify-start p-4 gap-4">
					<Heading level={4}>Jesteś nowym użytkownikiem?</Heading>
					<Button primary size="xl">
						Załóż konto
					</Button>
				</div>
				<Separator horizontal />
				<div className="flex flex-col items-start justify-start p-4">
					<Heading level={5}>Co zyskujesz?</Heading>
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
				</div>
			</div>
		</div>
	);
}
