import React from 'react';
import './App.css';



import NavBar from './components/NavBar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';




class App extends React.Component {

  


  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <div className="row">
            <CountriesList  />
            <CountryDetails />
           
          </div>
          <div>
  
          </div>
  
        </div>
      </div>
    );

  }

}

export default App;
