import requests
import pandas as pd
import json
import csv

# Case 4: Standard Routing, Return way from Case 3, Ausfahrt Rüti to Hinwil
url = "https://apps.rescuetrack.com/api/routing/standard/v2/point-to-point"

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
print (json.dumps(pretty_json, indent=2))

with open('data/case4_standard.json', 'w', encoding='utf-8') as outfile:
    json.dump(pretty_json, outfile, ensure_ascii=False, indent=4)

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
print (json.dumps(pretty_json, indent=2))

with open('data/case4_emergency.json', 'w', encoding='utf-8') as outfile:
    json.dump(pretty_json, outfile, ensure_ascii=False, indent=4)