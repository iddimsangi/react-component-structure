import React from 'react'
import Car from './Car/Car';

function CarsList(props) {
    return (
        <div>
            {
                props.cars.map((car, index) =>{
                    return <Car 
                    carName={car.carName} 
                    milesCoverd={car.miles}
                    key={car.id}
                    clicked={() =>props.delHandler(index)}/>
                })
            }
        </div>
    )
}

export default CarsList

