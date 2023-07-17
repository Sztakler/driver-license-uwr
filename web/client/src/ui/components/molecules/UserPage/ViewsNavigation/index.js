import React from "react";

import { NavigationItem, ViewsNavigationContainer } from "./styles";
import Image from "../../../atoms/Image";
import Illustrations from "../../../../../assets/images/svg/icons/Illustrations";
import Text from "../../../atoms/Text";

export default function ViewsNavigation({ selectedView, changeSelectedView }) {
	return (
		<ViewsNavigationContainer>
			<NavigationItem
				active={selectedView === 0}
				onClick={() => {
					changeSelectedView(0);
				}}
			>
				<Image src={Illustrations.stats} />
				<Text className="text-[16px] font-medium w-full">Statystyki</Text>
			</NavigationItem>
			<NavigationItem
				active={selectedView === 1}
				onClick={() => {
					changeSelectedView(1);
				}}
			>
				<Image src={Illustrations.star} />
				<Text className="text-[16px] font-medium w-full">Zapisane pytania</Text>
			</NavigationItem>
			<NavigationItem
				active={selectedView === 2}
				onClick={() => {
					changeSelectedView(2);
				}}
			>
				<Image src={Illustrations.settings} />
				<Text className="text-[16px] font-medium w-full">Ustawienia konta</Text>
			</NavigationItem>
		</ViewsNavigationContainer>
	);
}
