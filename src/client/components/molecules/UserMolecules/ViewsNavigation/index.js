import React from "react";

import Image from "client/components/atoms/Image";
import Illustrations from "assets/images/svg/icons/Illustrations";
import Text from "client/components/atoms/Text";

import { NavigationItem, ViewsNavigationContainer } from "./styles";

export default function ViewsNavigation({ selectedView, changeSelectedView }) {
	return (
		<ViewsNavigationContainer>
			<NavigationItem
				active={selectedView === 0}
				onClick={() => {
					changeSelectedView(0);
				}}
			>
				<Image src={Illustrations.Stats} />
				<Text className="text-[16px] font-medium w-full">Statystyki</Text>
			</NavigationItem>
			<NavigationItem
				active={selectedView === 1}
				onClick={() => {
					changeSelectedView(1);
				}}
			>
				<Image src={Illustrations.SavedQuestions} />
				<Text className="text-[16px] font-medium w-full">Zapisane pytania</Text>
			</NavigationItem>
			<NavigationItem
				active={selectedView === 2}
				onClick={() => {
					changeSelectedView(2);
				}}
			>
				<Image src={Illustrations.Settings} />
				<Text className="text-[16px] font-medium w-full">Ustawienia konta</Text>
			</NavigationItem>
		</ViewsNavigationContainer>
	);
}
