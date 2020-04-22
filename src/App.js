import React from 'react';
import InputForm from './components/inputForm';
import ResultsTable from './components/resultsTable';
import ResultsGraph from './components/resultsGraph';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="columns">
            <div className="col-8 col-mx-auto">
              <div className="card">
                <InputForm/>
                <ResultsTable/>
                <ResultsGraph/>          
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;