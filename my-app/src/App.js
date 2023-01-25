import './App.css';
//import Map from "./components/Map/Map";
import Case1Standard from './json/case1_standard.json';
import Case1Emergency from './json/case1_emergency.json';
import Case2Standard from './json/case2_standard.json';
import Case2Emergency from './json/case2_emergency.json';


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
                <div className="Map">
                  <script>
                    
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
                <h2>Testfall 2 - Bellevue</h2>
        {
          Case1Standard && Case2Standard.map( record => {
            return(
              <div className="App-box-standard" key={ record.route}>
                <strong>Status:<i className="green"> {record.result}</i></strong>
                <br></br>
                <strong>Reisedistanz:<i className="lightblue"> { record.traveldistance }</i></strong>
                <br></br>
                <strong>Reisezeit:<i className="lightblue"> { record.traveltime }</i></strong>
                <br></br>
                <strong>Routen-ID:<i className="orange"> { record.route }</i></strong>
                <div className="Map">
                  <script>
                    
                  </script>
                </div>
              </div>
            )
          })
        }
        {
          Case1Emergency && Case2Emergency.map( record => {
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
