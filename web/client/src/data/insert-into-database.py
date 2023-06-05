import psycopg2
import json


with open('/home/bartosz/Study/driver-license-uwr/web/client/src/data/data.json', 'r') as file:
    json_data = file.read()

# Parse the JSON data into a Python list
data = json.loads(json_data)

script = "INSERT INTO questions(pytanie, odpowiedzi, poprawna_odpowiedz, media, zakres_struktury, liczba_punktow, kategorie) VALUES"

index = 0
for item in data:
    index += 1
    # if index == 500:
    #     break
    script += "("

    # Extract the values from the JSON item
    pytanie = item["pytanie"]
    odpowiedzi = item["odpowiedzi"]
    poprawna_odpowiedz = item["poprawna_odpowiedz"]
    media = item["media"]
    zakres_struktury = item["zakres_struktury"]
    liczba_punktow = item["liczba_punktow"]
    kategorie = item["kategorie"]

    odpowiedzi_str = ", ".join(
        [f"'{odpowiedz}'" for odpowiedz in odpowiedzi])

    script += f"'{pytanie}', ARRAY[{odpowiedzi_str}], {poprawna_odpowiedz}, '{media}', '{zakres_struktury}', {liczba_punktow}, '{kategorie}'),"

with open("script.sql", "w") as file:
    file.write(script)
