import './App.css';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet'
//import Map from "./components/Map/Map";
import Case1Standard from './json/case1_standard.json';
import Case1Emergency from './json/case1_emergency.json';
import Case2Standard from './json/case2_standard.json';
import Case2Emergency from './json/case2_emergency.json';
import Case3Standard from './json/case3_standard.json';
import Case3Emergency from './json/case3_emergency.json';
import Case4Standard from './json/case4_standard.json';
import Case4Emergency from './json/case4_emergency.json';
import Case5Standard from './json/case5_standard.json';
import Case5Emergency from './json/case5_emergency.json';
import Case6Standard from './json/case6_standard.json';
import Case6Emergency from './json/case6_emergency.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SRZ Router Comparison Tool</h1>
      </header>
      <body className="container-App">
        <div className="App-body">
        <h2>Testfall 1 - Schmiede Wiedikon</h2>
        {
          Case1Standard && Case1Standard.map(record => {
            return(
              <div className="App-box-standard" key={record.route}>
                <strong>Standard Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
              </div>
            )
          })
        }
        {
          Case1Emergency && Case1Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={ record.route}>
                <strong>Emergency Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
              </div>
            )
          })
        }
        {/*
        <div className="Map">
        return (
        <MapContainer id='map' center={[47.39595583, 8.637702055]} zoom={11} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.osm.ch/osm-swiss-style/{z}/{x}/{y}.png"
        />
        <GeoJSON data={'./src/json/case1_ors.geojson'} />
        </MapContainer>
        );
        </div>
        */}
        <h2>Testfall 2 - Bellevue</h2>
        {
          Case2Standard && Case2Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Standard Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <div className="Map">
                  <script>
                    
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case2Emergency && Case2Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={record.route}>
                <strong>Emergency Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> {record.traveldistance}</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> {record.traveltime}</i></strong>
                <br></br>
              </div>
            )
          })
        }
        <h2>Testfall 3 -  From Hinwil to Ausfahrt Rüti</h2>
        {
          Case3Standard && Case3Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Standard Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <div className="Map">
                  <script>
                    
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case3Emergency && Case3Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={ record.route}>
                <strong>Emergency Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
              </div>
            )
          })
        }
        <h2>Testfall 4 - Ausfahrt Rüti nach Hinwil</h2>
        {
          Case4Standard && Case4Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Standard Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <div className="Map">
                  <script>
                    
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case4Emergency && Case4Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={record.route}>
                <strong>Emergency Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> {record.traveldistance}</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> {record.traveltime}</i></strong>
                <br></br>
              </div>
            )
          })
        }
        <h2>Testfall 5 - Affoltern am Albis</h2>
        {
          Case5Standard && Case5Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Standard Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <div className="Map">
                  <script>
                    
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case5Emergency && Case5Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={record.route}>
                <strong>Emergency Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> {record.traveldistance}</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> {record.traveltime}</i></strong>
                <br></br>
              </div>
            )
          })
        }
        <h2>Testfall 6 - Umfahrung Baar</h2>
        {
          Case6Standard && Case6Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Standard Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <div className="Map">
                  <script>
                    
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case6Emergency && Case6Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={record.route}>
                <strong>Emergency Routing</strong>
                <br></br>
                <br></br>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> {record.traveldistance}</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> {record.traveltime}</i></strong>
                <br></br>
              </div>
            )
          })
        }
        </div>
      </body>
      <footer className="App-footer">
        <p>2022 chnuessli.ch</p>
      </footer>
    </div>
  );
}

export default App;
