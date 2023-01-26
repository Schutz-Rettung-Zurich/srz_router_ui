import requests
import pandas as pd
import json
import csv 

# Case 1: Emergency Routing from Triemli to Schmiede Wiedikon
url = "https://apps.rescuetrack.com/api/routing/emergency/v2/point-to-point"

payload = json.dumps({
  "start": [
    47.36629,
    8.49707
  ],
  "stop": [
    47.37015,
    8.519277
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Cookie': 'rt-sso-sid=f4ce5577-b294-43eb-b232-91e8f4a01ae8'
}

response = requests.request("POST", url, headers=headers, data=payload)
pretty_json = json.loads(response.text)

my_array = []
my_array.append(pretty_json)

print (json.dumps(pretty_json, indent=2))

with open('./src/json/case1_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(my_array, outfile, ensure_ascii=False, indent=4)

# Case 2: Emergency Routing through Bellevue
url = "https://apps.rescuetrack.com/api/routing/emergency/v2/point-to-point"

payload = json.dumps({
  "start": [
    47.366469,
    8.541671
  ],
  "stop": [
    47.367954,
    8.546296
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Cookie': 'rt-sso-sid=f4ce5577-b294-43eb-b232-91e8f4a01ae8'
}

response = requests.request("POST", url, headers=headers, data=payload)
pretty_json = json.loads(response.text)

my_array = []
my_array.append(pretty_json)

print (json.dumps(pretty_json, indent=2))

with open('./src/json/case2_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(my_array, outfile, ensure_ascii=False, indent=4)

# Case 3: Emergency Routing from Hinwil to Ausfahrt Rüti
url = "https://apps.rescuetrack.com/api/routing/emergency/v2/point-to-point"

payload = json.dumps({
  "start": [
    47.299924,
    8.836084
  ],
  "stop": [
    47.263607,
    8.831684
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Cookie': 'rt-sso-sid=f4ce5577-b294-43eb-b232-91e8f4a01ae8'
}

response = requests.request("POST", url, headers=headers, data=payload)
pretty_json = json.loads(response.text)

my_array = []
my_array.append(pretty_json)

print (json.dumps(pretty_json, indent=2))

with open('./src/json/case3_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(my_array, outfile, ensure_ascii=False, indent=4)

# Case 4: Emergency Routing, Return way from Case 3, Ausfahrt Rüti to Hinwil
url = "https://apps.rescuetrack.com/api/routing/emergency/v2/point-to-point"

payload = json.dumps({
  "start": [
    47.263607,
    8.831684
  ],
  "stop": [
    47.299924,
    8.836084
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Cookie': 'rt-sso-sid=f4ce5577-b294-43eb-b232-91e8f4a01ae8'
}

response = requests.request("POST", url, headers=headers, data=payload)
pretty_json = json.loads(response.text)

my_array = []
my_array.append(pretty_json)

print (json.dumps(pretty_json, indent=2))

with open('./src/json/case4_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(my_array, outfile, ensure_ascii=False, indent=4)

#Case 5: Emergency through Affoltern am Albis
url = "https://apps.rescuetrack.com/api/routing/emergency/v2/point-to-point"

payload = json.dumps({
  "start": [
    47.281295,
    8.454321
  ],
  "stop": [
    47.272287,
    8.439255
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Cookie': 'rt-sso-sid=f4ce5577-b294-43eb-b232-91e8f4a01ae8'
}

response = requests.request("POST", url, headers=headers, data=payload)
pretty_json = json.loads(response.text)

my_array = []
my_array.append(pretty_json)

print (json.dumps(pretty_json, indent=2))

with open('./src/json/case5_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(my_array, outfile, ensure_ascii=False, indent=4)

#Case 6: Routing Umfahrung Baar
url = "https://apps.rescuetrack.com/api/routing/emergency/v2/point-to-point"

payload = json.dumps({
  "start": [
    47.190992,
    8.515526
  ],
  "stop": [
    47.187274,
    8.539625
  ]
})
headers = {
  'Content-Type': 'application/json',
  'Cookie': 'rt-sso-sid=f4ce5577-b294-43eb-b232-91e8f4a01ae8'
}

response = requests.request("POST", url, headers=headers, data=payload)

pretty_json = json.loads(response.text)
print (json.dumps(pretty_json, indent=2))

with open('./src/json/case6_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(my_array, outfile, ensure_ascii=False, indent=4)