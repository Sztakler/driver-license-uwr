import tw from "tailwind-styled-components";

const NavbarContainer = tw.div`
	flex 
	max-lg:flex-col
	items-center 
	justify-between
  px-1
`;

const AccountArea = tw.div`
	flex
	flex-row
	gap-4
`;

const NavigationArea = tw.div`
	${(props) => (props.active ? "max-lg:w-full" : "max-lg:hidden")}
`;

const NavbarItem = tw.li`
	my-0
	mx-5
`;

const HamburgerOptionArea = tw.div`
	lg:hidden
	absolute
	top-8
	right-8
`;

const NavbarLinks = tw.ul`
	flex
	max-lg:items-center
	max-lg:flex-col
`;

export {
	NavbarContainer,
	AccountArea,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
};
