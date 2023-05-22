create TABLE questions(
  id serial primary key,
  pytanie varchar(400),
  odpowiedzi varchar(400) [],
  poprawna_odpowiedz integer,
  media bytea,
  liczba_punktow integer,
  zakres_struktury varchar(50),
)
insert into questions (
  "pytanie",
  "odpowiedzi",
  "poprawna_odpowiedz",
  "liczba_punktow",
  "zakres_struktury"
)
values 
(
  'Czy w przedstawionej sytuacji masz prawo - mimo podawanego sygnału - skręcić w prawo?',
  Array['Tak', 'Nie'],
  0,
  3,
  'PODSTAWOWY'
),
(
  'Jaką odległość należy zachować między jadącymi kolumnami samochodów ciężarowych?',
  Array['Nie mniejszą niż 800 metrów', 'Nie mniejszą niż 500 metrów', 'Nie mniejszą niż 200 metrów'],
  1,
  3,
  'SPECJALISTYCZNY'
);
