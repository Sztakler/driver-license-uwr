create TABLE questions(
	id serial primary key,
	pytanie varchar(400),
	odpowiedzi varchar(400) [],
	poprawna_odpowiedz integer,
	media varchar(255),
	zakres_struktury varchar(50),
	liczba_punktow integer,
	kategorie varchar(255),
)
insert into questions (
		"pytanie",
		"odpowiedzi",
		"poprawna_odpowiedz",
		"media",
		"zakres_struktury",
		"liczba_punktow",
		"kategorie",
	)
values (
		'Randomowe pytanko testowe',
		Array ['Tak', 'Nie'],
		1,
		'https://exam-media.s3.eu-north-1.amazonaws.com/2-9.2021.mp4',
		2,
		'PODSTAWOWY'
	),
	(
		'Czy w przedstawionej sytuacji masz prawo - mimo podawanego sygnału - skręcić w prawo?',
		Array ['Tak', 'Nie'],
		0,
		'https://exam-media.s3.eu-north-1.amazonaws.com/test.jpg',
		2,
		'PODSTAWOWY'
	),
	(
		'Jaką odległość należy zachować między jadącymi kolumnami samochodów ciężarowych?',
		Array ['Nie mniejszą niż 800 metrów', 'Nie mniejszą niż 500 metrów', 'Nie mniejszą niż 200 metrów'],
		1,
		'https://exam-media.s3.eu-north-1.amazonaws.com/test.jpg',
		3,
		'SPECJALISTYCZNY'
	);