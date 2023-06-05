import json
import csv


def get_answers(entry):
    if entry[8] == "SPECJALISTYCZNY":
        return entry[3:6]
    else:
        return ["Tak", "Nie"]


def get_correct_answers_index(entry):
    correct_answer = entry[6]
    if correct_answer in "AT":
        return 0
    elif correct_answer in "BN":
        return 1
    else:
        return 2


def create_entry_dict(entry, basic_counter, special_counter):
    if "B" not in entry[10] and ",B" not in entry[10] and ",B," not in entry[10]:
        return ""

    if entry[8] == "PODSTAWOWY":
        if basic_counter == 50:
            return ""
    else:
        if special_counter == 50:
            return ""

    entry_dict = {
        # "nazwa_pytania": entry[0],
        # "numer_pytania": entry[1],
        "pytanie": entry[2],
        "odpowiedzi": get_answers(entry),
        "poprawna_odpowiedz": get_correct_answers_index(entry),
        "media": entry[7],
        "zakres_struktury": entry[8],
        "liczba_punktow": entry[9],
        "kategorie": entry[10],
        # "nazwa_bloku": entry[11],
        # "zrodlo_pytania": entry[12],
        # "o_co_chcemy_zapytac": entry[13],
        # "jaki_ma_zwiazek_z_bezpieczenstwem": entry[14],
        # "status": entry[15],
        # "podmiot": entry[16],
    }

    return entry_dict


file = open("./Baza_pytan_na_egzamin_na_prawo_jazdy_22_02_2022r.csv")

csv_data = file.read()
lines = csv_data.splitlines()
data = list(csv.reader(lines))

data_dict = []

basic_counter = 0
special_counter = 0

for i in range(len(data)):
    entry = create_entry_dict(data[i], basic_counter, special_counter)
    if entry != "":
        data_dict.append(entry)
        if entry["zakres_struktury"] == "PODSTAWOWY":
            basic_counter += 1
        else:
            special_counter += 1
    if basic_counter == 50 and special_counter == 50:
        break

formatted_data = json.dumps(data_dict, indent=2)

with open("data.json", "w") as file:
    file.write(formatted_data)
