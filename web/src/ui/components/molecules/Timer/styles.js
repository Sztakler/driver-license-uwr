import tw from "tailwind-styled-components";

const Container = tw.div`
		${(props) => props.secondary ? secondaryTimerClasses : primaryTimerClasses}
`;

const primaryTimerClasses = "bg-gray-500 w-full text-center text-yellow-50 relative [&>*]:left-[45%]"

const secondaryTimerClasses = "w-full rounded-[3rem] px-4 py-3 bg-[#FFE49E] border-[#8D8D8D] border-2 text-xl"

export {
    Container,
};