import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Là ou j'ai eu la chance d'aller déjà</h1>
        </header>
        <Travel
          destination="Kununurra"
          distance = "14 293 km"
          country="Australie"
          photo="https://content.knightfrank.com/property/3594600/images/1724c83e-ee90-4992-9ec7-2da363890fd9-73.jpg"
        />
        <Travel
          destination="New York"
          distance="5 798 km"
          country="Etats-Unis"
          photo="https://www.sensationsdumonde.com/img/destination/87/skyline_nyc__empire_state_building__shutterstock_2018_768a.jpg"
        />
      </div>
    );
  }
}

export default App;
