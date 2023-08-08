import tw from "tailwind-styled-components";

const NavbarContainer = tw.div`
	fixed
	top-0
	w-full
	z-10
	flex 
	flex-[0_1_auto]
	max-lg:flex-col
	min-h-[145px]
	items-center 
	lg:justify-between
	max-lg:justify-center
	lg:px-8
	lg:pb-8

	`;

const BrandTitle = tw.div`
	block
	text-2xl 
	px-5
	py-2
	hover:cursor-pointer
`;

const NavigationArea = tw.div`
	flex
	items-start
	text-center
	h-full
	${(props) => (props.active ? "max-lg:w-full max-lg:flex" : " max-lg:hidden")}
`;

const NavbarItem = tw.li`
	flex
	items-center
	justify-center
	hover:cursor-pointer
	text-[#0D0D0D]
	font-medium

	lg:h-full
	max-lg:w-full
`;

const HamburgerOptionArea = tw.div`
	absolute
	-top-1
	right-0

	lg:hidden
`;

const NavbarLinks = tw.ul`
	flex
	gap-x-[8px]
	max-lg:w-full
	max-h-min
	items-center
	max-lg:items-center
	max-lg:flex-col
`;

const Logout = tw.button`
	flex
	items-center
	justify-center
	hover:cursor-pointer
	text-[#0D0D0D]
	font-medium
	
	lg:h-full
	max-lg:w-full
`;

export {
	NavbarContainer,
	BrandTitle,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
	Logout,
};
