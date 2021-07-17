import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Cockpit from '../Cockpit/Cockpit';
import CarsList from '../Components/CarsList/CarsList'
export default class App extends Component {
    state = {
        cars:[
          {id:'009', carName:'BMW', miles:'5000km'},
          {id:'002', carName:'BENz', miles:'35000km'},
          {id:'008', carName:'IST', miles:'50900km'},
          {id:'900', carName:'RANGE ROVER', miles:'588000km'},
        ],
        showCars:false
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Cockpit  />   
          <CarsList cars={this.state.cars} /> 
        </header>
      </div>
    );
  }
}









