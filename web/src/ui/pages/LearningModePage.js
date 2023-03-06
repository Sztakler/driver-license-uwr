import React from "react";

import PageTemplate from "../components/templates/PageTemplate";
import Navbar from "../components/organisms/Navbar";
import Footer from "../components/organisms/Footer";
import TiledMenu from "../components/organisms/TiledMenu";

import rocket from "../../../../src/assets/images/rocket.png";

const tiles = [
	{
		icon: rocket,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet lacus augue. Sed interdum volutpat urna sed lobortis. Suspendisse fermentum eu metus vel consectetur. Quisque erat nibh, rutrum eget quam ut, convallis lacinia ante. Vestibulum nisl ligula, commodo non neque placerat, vulputate dignissim lorem. Maecenas faucibus metus tincidunt, dapibus justo vitae, tincidunt sapien. In tristique velit sed luctus ultricies. Cras ultricies quis nisi sit amet dapibus. ",
		title: "Opcja nr1",
		navigationTarget: "option1",
	},
	{
		icon: rocket,
		description:
			"Lorem ipsum dolor sit amet. Quisque erat nibh, rutrum eget quam ut, convallis lacinia ante. Vestibulum nisl ligula, commodo non neque placerat, vulputate dignissim lorem. Maecenas faucibus metus tincidunt, dapibus justo vitae, tincidunt sapien. In tristique velit sed luctus ultricies. Cras ultricies quis nisi sit amet dapibus. ",
		title: "Opcja nr2",
		navigationTarget: "option2",
	},
	{
		icon: rocket,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet lacus augue. Sed interdum volutpat urna sed lobortis. Suspendisse fermentum eu metus vel consectetur. Quisque erat nibh, rutrum eget quam ut, convallis lacinia ante. Vestibulum nisl ligula, commodo non neque placerat, vulputate dignissim lorem. Maecenas faucibus metus tincidunt, dapibus justo vitae, tincidunt sapien. In tristique velit sed luctus ultricies. Cras ultricies quis nisi sit amet dapibus. ",
		title: "Opcja nr3",
		navigationTarget: "option3",
	},
	{
		icon: rocket,
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus imperdiet lacus augue. Sed interdum volutpat urna sed lobortis. Suspendisse fermentum eu metus vel consectetur. Quisque erat nibh, rutrum eget quam ut, convallis lacinia ante. Vestibulum nisl ligula, commodo non neque placerat, vulputate dignissim lorem. Maecenas faucibus metus tincidunt, dapibus justo vitae, tincidunt sapien. In tristique velit sed luctus ultricies. Cras ultricies quis nisi sit amet dapibus. ",
		title: "Opcja nr4",
		navigationTarget: "option4",
	},
];

export default function HomePage() {
	return (
		<PageTemplate header={<Navbar />} footer={<Footer />}>
			<TiledMenu tiles={tiles} />
		</PageTemplate>
	);
}
