import React from "react";

import RegistrationForm from "../../molecules/RegistrationForm";

import {
	RegistrationContainer,
} from "./styles";
import Input from "../../atoms/Input";
import Paragraph from "../../atoms/Paragraph";
import Button from "../../atoms/Button";
import BulletList from "../../molecules/BulletList";

import Illustrations from "../../../../../../src/assets/images/svg/icons/Illustrations";
import Image from "../../atoms/Image";

export default function Registration() {

	const points = [
		"wglądu w Twoje statystyki i analizy",
		"zapisywania wybranych pytań",
		"śledzenia swoich postępów"
	]

	return (
		<RegistrationContainer>
			<div className="hidden lg:flex flex-col gap-y-20 py-11">
				<div className="flex flex-col gap-y-4">
					<h1 className="font-display">Załóż darmowe konto</h1>
					<div>
						<p className="text-xl">Zyskasz możliwości:</p>
						<BulletList points={points} bullet="•" />
					</div>
				</div>
				<div>

					<Image src={Illustrations.RegistrationIllustration}></Image>
				</div>
			</div>

			<div className="flex flex-col bg-[#fffaed] border border-[#0d0d0d] rounded-[46px] p-32 pt-8">
				<p className="self-end mb-16"><span className="text-[#808080]">Masz już konto?</span> <button className="font-semibold underline">Zaloguj się</button></p>
				<div>
					<h1 className="font-display mb-12">Zarejestruj się</h1>
					<form className="flex flex-col gap-y-10">
						<div className="flex flex-row justify-between gap-x-6">
							<label for="name" className="flex flex-col pb-2">
								<Paragraph style="text-base font-bold">Imię</Paragraph>
								<Input register id="name" type="text" placeholder="Jan"></Input>
							</label>
							<label for="login" className="flex flex-col pb-2">
								<Paragraph style="text-base font-bold">Login</Paragraph>
								<Input register id="login" type="text" placeholder="djjanek227"></Input>
							</label>
						</div>

						<div className="flex flex-col gap-y-10">
							<label for="email" className="flex flex-col pb-2">
								<Paragraph style="text-base font-bold">E-mail</Paragraph>
								<Input register id="email" type="text" placeholder="jan@example.com"></Input>
							</label>
							<label for="password" className="flex flex-col pb-2">
								<Paragraph style="text-base font-bold">Hasło</Paragraph>
								<Input register id="password" type="password" placeholder="••••••••••••••••"></Input>
							</label>
						</div>

						<div>
							<p className="text-xs text-[#808080] max-w-prose py-4">Klikając przycisk Załóż konto, akceptujesz nasz <span className="underline">Regulamin</span>, <span className="underline">Zasady ochrony prywatności</span> i <span className="underline">Zasady dotyczące plików cookie</span>.</p>
							<Button submit className="bg-[#ffd363] text-base font-semibold text-[#0d0d0d] border border-[#0d0d0d] rounded-[18px]">Załóż konto</Button>
						</div>
					</form>
				</div>
			</div>
		</RegistrationContainer>
	);
}
