import React from "react";

import Text from "../../../atoms/Text";

import { UserContainer, Info, ImageBox } from "./styles";
import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";
import Image from "../../../atoms/Image";

export default function User() {
	return (
		<UserContainer>
			<ImageBox>
				<Image
					className="object-cover min-w-full min-h-full"
					src={Illustrations.userIcon}
				/>
			</ImageBox>
			<Info>
				<Text className="text-[19.4px] font-normal">Kursantka</Text>
				<Text className="text-[20.4px] font-medium">Jan Kowalski</Text>
			</Info>
		</UserContainer>
	);
}
