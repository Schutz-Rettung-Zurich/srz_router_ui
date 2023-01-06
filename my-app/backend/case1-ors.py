import requests
import pandas as pd
import json
import geojson

# Case 1: Standard Routing from Triemli to Schmiede Wiedikon
url = "https://api.openrouteservice.org/v2/directions/driving-car/geojson"
payload = json.dumps({
  "coordinates": [
    [
      8.49707,
      47.36629
    ],
    [
      8.519277,
      47.37015
    ]
  ]
})
headers = {
  'Authorization': '5b3ce3597851110001cf624862634a8272b64463a9b9a74ad3feff86',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

pretty_json = json.loads(response.text)
print (json.dumps(pretty_json, indent=2))

with open('./src/json/case1_standard.geojson', 'w', encoding='utf-8') as outfile:
    json.dump(pretty_json, outfile, ensure_ascii=False, indent=4)
