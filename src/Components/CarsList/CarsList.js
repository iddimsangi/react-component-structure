import React from 'react'
import Car from './Car/Car';

function CarsList(props) {
console.log(props);
    return (
        <div>
            {
                props.cars.map((car, index) =>{
                    return <Car 
                    // carName={car.carName} 
                    // milesCoverd={car.miles}
                    key={car.id}
                    carObj = {car}
                    clicked={() =>props.delHandler(car.id)}
                    changed={(event) => props.nameChanger(event, car.id)}
                   />
                })
            }
        </div>
    )
}

export default CarsList

