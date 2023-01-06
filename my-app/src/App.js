import './App.css';
import Case1Standard from './json/case1_standard.json';
import Case1Emergency from './json/case1_emergency.json';


function App() {
  return (
    <div className="App">
      <head>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
     integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI="
     crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
     integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM="
     crossorigin=""></script>
      </head>
      <header className="App-header">
        <h1>SRZ Router Testing</h1>
      </header>
      <body className="container-App">
        <div className="App-body">
        <h2>Testfall 1 - Schmiede Wiedikon</h2>
        {
          Case1Standard && Case1Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <strong>Routen-ID:<i className="orange"> { record.route }</i></strong>
                <div className="map" id="map">
                  <script>
                  var map = L.map('map').setView([51.505, -0.09], 13);
                  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case1Emergency && Case1Emergency.map( record => {
            return(
              <div className="App-box-emergency" key={ record.route}>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <strong>Routen-ID:<i className="orange"> { record.route }</i></strong>
              </div>
            )
          })
        }
        </div>
      </body>
      <footer className="App-footer">
        2022 chnuessli.ch
      </footer>
    </div>
  );
}

export default App;
