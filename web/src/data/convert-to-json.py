import json
import csv


def create_entry_dict(entry):
    entry_dict = {
        "nazwa_pytania": entry[0],
        "numer_pytania": entry[1],
        "pytanie": entry[2],
        "odpowiedz_a": entry[3],
        "odpowiedz_b": entry[4],
        "odpowiedz_c": entry[5],
        "poprawna_odpowiedz": entry[6],
        "media": entry[7],
        "zakres_struktury": entry[8],
        "liczba_punktow": entry[9],
        "kategorie": entry[10],
        "nazwa_bloku": entry[11],
        "zrodlo_pytania": entry[12],
        "o_co_chcemy_zapytac": entry[13],
        "jaki_ma_zwiazek_z_bezpieczenstwem": entry[14],
        "status": entry[15],
        "podmiot": entry[16],
        }

    return entry_dict

file = open("./Baza_pytan_na_egzamin_na_prawo_jazdy_22_02_2022r.csv")

csv_data = file.read()
lines = csv_data.splitlines()
data = list(csv.reader(lines))

data_dict = {}

for i in range(len(data)):
    
    # entry_dict.append(entry_dict(entry))
    data_dict[i] = create_entry_dict(data[i])

print(data_dict)
# for key, value in data_dict.items():
#     print(f"{key}: {value}")
#     print()
