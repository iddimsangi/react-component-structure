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

    ondelHandler = (indexIdCar) => {
      const indexIdCars = [...this.state.cars];
      indexIdCars.splice(indexIdCar, 1);
      this.setState({
        cars:indexIdCars
      })
    }
    onToggle = () =>{
      const showCarTr = this.state.showCars;
      this.setState({
        showCars:!showCarTr
      })
    }
  render() {
    let toggleMessage = null;
    if(this.state.showCars){
      toggleMessage = (
        <CarsList 
          cars={this.state.cars}
          nameChanger={this.nameChangerHandler}
          delHandler={this.ondelHandler} 
          boxes={this.state.cars}
          setBoxes={this.state.cars}/> 
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Cockpit clickToggle={this.onToggle} />   
          {toggleMessage}
        </header>
      </div>
    );
  }
}









