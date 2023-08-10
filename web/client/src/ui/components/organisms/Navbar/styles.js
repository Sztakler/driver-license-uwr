import tw from "tailwind-styled-components";

const NavbarContainer = tw.div`
	fixed
	top-0
	w-full
	z-10
	flex 
	flex-[0_1_auto]
	max-md:flex-col
	min-h-[145px]
	max-md:min-h-[70px]
	items-center 
	md:justify-between
	max-md:justify-center
	md:pr-24
	md:pl-32
	md:pb-8
	bg-gradient-to-b from-[0px] from-[#FFF1DBff] via-[90px]  via-[#FFF1DBff] to-[#FFFBF300] to-[130px] 
	${(props) =>
		props.hamburgerExpand
			? "max-md:via-[100px] max-md:to-[200px] pb-4"
			: "max-md:via-[50px] max-md:to-[90px]"}
	`;

const BrandTitle = tw.div`
	block
	text-2xl 
	py-2
	hover:cursor-pointer

	max-md:absolute
	max-md:top-[3px]
	max-md:left-4
`;

const Shortcut = tw.div`
	absolute
	top-4
	right-16
`;

const NavigationArea = tw.div`
	flex
	items-start
	text-center
	h-full
	${(props) =>
		props.hamburgerExpand
			? "max-md:w-full max-md:flex pt-[50px]"
			: " max-md:hidden"}
`;

const NavbarItem = tw.li`
	flex
	items-center
	justify-center
	hover:cursor-pointer
	text-[#0D0D0D]
	font-medium

	md:h-full
	max-md:w-full
`;

const HamburgerOptionArea = tw.div`
	block
	text-2xl 
	py-2
	hover:cursor-pointer

	max-md:absolute
	max-md:top-[14px]
	max-md:right-3
	md:hidden
`;

const NavbarLinks = tw.ul`
	flex
	gap-x-[8px]
	max-md:w-full
	max-h-min
	items-center
	max-md:items-center
	max-md:flex-col
`;

export {
	NavbarContainer,
	BrandTitle,
	Shortcut,
	NavbarItem,
	HamburgerOptionArea,
	NavbarLinks,
	NavigationArea,
};
