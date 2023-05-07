import tw from "tailwind-styled-components";

const NavbarContainer = tw.div`
	flex 
	flex-[0_1_auto]
	max-lg:flex-col
	items-center 
	bg-[#ffefd0]

	lg:justify-between
	max-lg:justify-center
	lg:px-8
	pt-[30px]
	pr-[30px]
	pl-[30px]
	`;

const BrandTitle = tw.div`
	block
	text-2xl 
	px-5
	py-2
	hover:cursor-pointer
`;

const NavigationArea = tw.div`
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

	max-lg:items-center
	max-lg:flex-col
`;

export {
	NavbarContainer,
	BrandTitle,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
};
