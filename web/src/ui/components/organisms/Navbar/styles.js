import tw from "tailwind-styled-components";

const NavbarContainer = tw.div`
	flex 
	flex-[0_1_auto]
	max-lg:flex-col
	items-center 
	bg-[#FF5500]

	lg:justify-between
	max-lg:justify-center
	lg:px-8
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
	hover:font-extrabold
	text-white
	font-medium
	${(props) => (props.active ? "font-extrabold" : null)}

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
	max-lg:w-full

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
