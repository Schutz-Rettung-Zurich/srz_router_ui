import requests
import pandas as pd
import json
import geojson

# Case 3: Standard Routing from Hinwil to Ausfahrt Rüti
url = "https://api.openrouteservice.org/v2/directions/driving-car/geojson"
payload = json.dumps({
  "coordinates": [
    [
      8.836084,
      47.299924
    ],
    [
      8.831684,
      47.263607
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

with open('./src/json/case3_ors.geojson', 'w', encoding='utf-8') as outfile:
    json.dump(pretty_json, outfile, ensure_ascii=False, indent=4)
