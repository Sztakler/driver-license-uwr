create TABLE zadania(
	id_zadania serial primary key,
	pytanie varchar(255),
	odpowiedzi varchar(100) [],
	poprawna_odpowiedz integer,
	media bytea,
	liczba_punktow integer,
	zakres_struktury varchar(50)
)
insert into zadania (
		pytanie,
		odpowiedzi,
		poprawna_odpowiedz,
		media,
		liczba_punktow,
		zakres_struktury
	)
values (
		'pytanie 1',
		ARRAY ['odpowiedz_a', 'odpowiedz_b', 'odpowiedz_c'],
		0,
		pg_read_file('/tmp/test')::bytea,
		2,
		' SPECJALISTYCZNY '
	);