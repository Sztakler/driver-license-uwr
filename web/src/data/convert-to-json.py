import json
import csv

def get_answers(entry):
    if entry[8] == "SPECJALISTYCZNY":
        return entry[3:6]
    else:
        return ["Tak", "Nie"]

def get_correct_answers_index(entry):
    correct_answer = entry[6]
    if correct_answer in "AT" :
        return 0
    elif correct_answer in "BN":
        return 1
    else:
        return 2

def create_entry_dict(entry):
    entry_dict = {
        "nazwa_pytania": entry[0],
        "numer_pytania": entry[1],
        "pytanie": entry[2],
        "odpowiedzi": get_answers(entry),
        "poprawna_odpowiedz": get_correct_answers_index(entry),
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

# print(json.loads(str(data_dict).replace("'", '"')))
formatted_data = json.dumps(data_dict, indent=2)

print(formatted_data)
# for key, value in data_dict.items():
#     print(f"{key}: {value}")
#     print()
