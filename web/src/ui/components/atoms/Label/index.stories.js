import React from "react";
import Label from ".";

export default {
	title: "Components/Atoms/Label",
	component: Label,
};
const Template = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
	size: "m",
	children: "default",
};
export const Small = Template.bind({});
Small.args = {
	size: "s",
	children: "default",
};

export const Medium = Template.bind({});
Medium.args = {
	size: "m",
	children: "default",
};

export const Large = Template.bind({});
Large.args = {
	size: "l",
	children: "default",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
	size: "xl",
	children: "default",
};

export const ExtraExtraLarge = Template.bind({});
ExtraExtraLarge.args = {
	size: "2xl",
	children: "default",
};
