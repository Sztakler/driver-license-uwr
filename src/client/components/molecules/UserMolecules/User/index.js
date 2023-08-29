import React from "react";

import Text from "client/components/atoms/Text";
import Illustrations from "assets/images/svg/icons/Illustrations";
import Image from "client/components/atoms/Image";

import { UserContainer, Info, ImageBox } from "./styles";

export default function User({ name }) {
	return (
		<UserContainer>
			<ImageBox>
				<Image
					className="object-cover min-w-full min-h-full"
					src={Illustrations.UserIcon}
				/>
			</ImageBox>
			<Info>
				<Text className="text-[20.4px]">Hej, </Text>
				<Text className="text-[20.4px] font-medium">
					{name}
					<Text className="text-[20.4px]">!</Text>
				</Text>
			</Info>
		</UserContainer>
	);
}
