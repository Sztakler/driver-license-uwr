import tw from "tailwind-styled-components";

const NavbarContainer = tw.div`
	flex 
	flex-row 
	items-center 
	justify-between
`;

const LogoArea = tw.div`
	flex 
	justify-center 
	items-center
`;

const NavigationArea = tw.div`
	flex 
	flex-row 
	gap-4
`;

export { NavbarContainer, LogoArea, NavigationArea };
