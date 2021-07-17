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
    nameChangerHandler = (event, id) =>{
      const nameCarIndex = this.state.cars.findIndex(carIndex => {
        return carIndex.id === id;
      });

      const carObj = {...this.state.cars[nameCarIndex]}
      carObj.carName = event.target.value;
      const updatedCars = [...this.state.cars];
      updatedCars[nameCarIndex] = carObj;
      this.setState({
        cars:updatedCars
      })
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Cockpit  />   
          <CarsList 
          cars={this.state.cars}
          nameChanger={this.nameChangerHandler} /> 
        </header>
      </div>
    );
  }
}









