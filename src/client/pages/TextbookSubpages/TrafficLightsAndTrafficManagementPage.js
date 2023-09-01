import React from "react";

import MainContent from "client/components/organisms/MainContent";
import TextbookTemplate from "client/components/templates/TextbookTemplate";
import Navbar from "client/components/organisms/Navbar";

const body = (
	<div className="">
		<h3>Sygnalizacja świetlna</h3>
		<p className="text-base">
			Sygnalizacja świetlna odgrywa kluczową rolę w regulowaniu ruchu drogowego.
			Składa się z różnych kolorów i kombinacji świateł, które kierowcy muszą
			zrozumieć i przestrzegać. Poniżej znajdziesz najważniejsze informacje
			dotyczące sygnalizacji świetlnej:
		</p>
		<br />
		<div className="flex w-full flex-row flex-wrap pt-2 gap-2">
			<ul className="flex flex-col flex-[1_1_50%] gap-4 pt-2">
				<li>
					<div>
						<span className="font-medium">Czerwone światło: </span>
						<span>
							Czerwone światło oznacza pełny zakaz ruchu. Musisz natychmiast
							zatrzymać się przed linią zatrzymania lub skrzyżowaniem, i
							pozostać tam do momentu, aż światło zmieni się na zielone.
						</span>
					</div>
				</li>
				<li>
					<div>
						<span className="font-medium">Zielone światło: </span>
						<span>
							Zielone światło pozwala na kontynuowanie jazdy, jeśli jesteś
							pewny, że możesz to zrobić bezpiecznie. Zawsze dawaj pierwszeństwo
							pieszym i innym pojazdom, które mogą mieć zielone światło na
							skrzyżowaniu.
						</span>
					</div>
				</li>
				<li>
					<div>
						<span className="font-medium">Żółte światło: </span>
						<span>
							Żółte światło sygnalizuje, że światło zmieni się na czerwone.
							Jeśli jesteś w trakcie jazdy, staraj się zatrzymać przed linią
							zatrzymania, jeśli to możliwe, aby uniknąć naruszenia sygnalizacji
							świetlnej. Nie wolno przyspieszać, aby przejechać przez
							skrzyżowanie, gdy jest zapalone żółte światło.
						</span>
					</div>
				</li>
				<li>
					<div>
						<span className="font-medium">Żółte migające światło: </span>
						<span>
							Żółte migające światło oznacza ostrożność. Powinieneś zwolnić i
							zachować szczególną uwagę, gdy zbliżasz się do skrzyżowania lub
							przejścia dla pieszych.
						</span>
					</div>
				</li>
			</ul>
			<div className="flex w-[600px] max-md:w-[calc(100vw-48px)] justify-center items-center">
				<img
					className="h-auto w-full self-center rounded-[39px]"
					alt="Przykład sygnalizacji świetlnej"
					src={require("assets/images/textbook/sygnalizacja/lights.jpg")}
				/>
			</div>
		</div>
		<br />
		<h3>Kierowanie ruchem</h3>
		<h4>Gesty</h4>
		<p>
			W Polsce ruch prowadzić mogą policjanci, którzy kierują ruchem na
			skrzyżowaniach. Wyróżniamy trzy główne gesty wykorzystywane do kierowania
			ruchem:
		</p>
		<ul className="flex flex-col flex-[1_1_50%] gap-2 md:pr-8 pt-4 list-disc">
			<li>
				<div>
					<span className="font-medium">
						Kierujący ruchem zwrócony przodem lub tyłem do nadjeżdżającego
						pojazdu,{" "}
					</span>
					<span>jest równoznaczny z czerwonym sygnałem świetlnym (stój).</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Podniesienie ręki do góry przez kierującego ruchem,{" "}
					</span>
					<span>
						oznacza mającą nastąpić zmianę dotychczas nadawanego sygnału.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Kierujący ruchem zwrócony bokiem do nadjeżdżającego pojazdu,{" "}
					</span>
					<span>jest równoznaczny z zielonym sygnałem świetlnym (jedź).</span>
				</div>
			</li>
		</ul>
		<br />
		<h4>Podstawowe zasady</h4>
		<p>
			Pamiętaj o następujących zasadach, kiedy spotykasz się z osobą kierującą
			ruchem:
		</p>
		<ul className="flex flex-col flex-[1_1_50%] gap-2 md:pr-8 pt-4 list-decimal">
			<li>
				<div>
					<span className="font-medium">Podporządkuj się: </span>
					<span>
						Zawsze podporządkuj się wskazaniom osoby kierującej ruchem. Jej
						gesty i sygnały mają pierwszeństwo przed sygnalizacją świetlną lub
						znakami drogowymi.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">Zachowuj Ostrożność: </span>
					<span>
						Mimo że osoba kierująca ruchem może Cię skierować do ruchu, zachowuj
						ostrożność i upewnij się, że możesz przejechać bezpiecznie.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Nie Rozmawiaj z Osobą Kierującą Ruchem:
					</span>
					<span>
						Nie próbuj rozmawiać ani rozprawiać się z osobą kierującą ruchem,
						chyba że to konieczne. Skup się na jej wskazaniach.
					</span>
				</div>
			</li>
			<li>
				<div>
					<span className="font-medium">
						Nie Ignoruj Osoby Kierującej Ruchem:
					</span>
					<span>
						Ignorowanie wskazań osoby kierującej ruchem jest naruszeniem
						przepisów drogowych i może prowadzić do wypadku lub mandatu.
					</span>
				</div>
			</li>
		</ul>
		<br />
	</div>
);

const pageContent = {
	title: "Sygnalizacja świetlna i kierowanie ruchem",
	subtitle: "",
	body: body,
};

export default function TrafficLightsAndTrafficManagementPage() {
	return (
		<TextbookTemplate header={<Navbar />}>
			<MainContent pageContent={pageContent} />
		</TextbookTemplate>
	);
}
