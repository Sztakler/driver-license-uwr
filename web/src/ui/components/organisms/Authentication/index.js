import React from "react";
import Separator from "../../atoms/Separator";

import LoginForm from "../../molecules/LoginForm";
import NewUser from "../../molecules/NewUser";

export default function Authentication() {
	return (
		<div className="flex flex-row w-4/6 h-[38rem] rounded-3xl bg-[#ffffff] bg-opacity-80">
			<LoginForm />
			<Separator vertical />
			<NewUser />
		</div>
	);
}
