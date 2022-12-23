import './App.css';
import Standard from './standard.json';
import Emergency from './emergency.json';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>SRZ Router Testing</h1>
      </header>
      <body className="App-body">
        <h2>Standard Router</h2>
        <details>
        <summary>Ausklappen</summary>
      {
        Standard && Standard.map( record => {
          return(
            <div className="App-box-standard" key={ record.id}>
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
      </details>
        <h2>Blaulicht Router</h2>
        <details>
        <summary>Ausklappen</summary>
      {
        Emergency && Emergency.map( record => {
          return(
            <div className="App-box-emergency" key={ record.id}>
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
      </details>
      </body>
      <footer className="App-footer">
        2022 NUC
      </footer>
    </div>
  );
}

export default App;
