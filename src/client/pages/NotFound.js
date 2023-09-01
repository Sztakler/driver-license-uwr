import React from "react";
import { useNavigate } from "react-router";

import PageTemplate from "client/components/templates/PageTemplate";
import Paragraph from "client/components/atoms/Paragraph";
import Navbar from "client/components/organisms/Navbar";
import Button from "client/components/atoms/Button";
import Text from "client/components/atoms/Text";

export default function NotFound() {
	const navigate = useNavigate();
	return (
		<PageTemplate header={<Navbar />}>
			<div className="flex bg-[#FFFAED] h-full w-full justify-center items-center flex-col">
				<div className="flex flex-col w-[1000px] items-center justify-center">
					<Text className="text-7xl mb-6">Ups... błąd 404</Text>
					<Paragraph style="text-2xl mb-6">
						Strona o podanym adresie nie istnieje!
					</Paragraph>
					<Button primary size="l" onClick={() => navigate("/")}>
						Wróć na stronę główną
					</Button>
				</div>
			</div>
		</PageTemplate>
	);
}
