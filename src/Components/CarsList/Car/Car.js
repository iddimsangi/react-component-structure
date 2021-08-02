import React from 'react'
import './Car.css'
export default function Car(props) {
    const{ carName, milesCoverd} = props.carObj
    return (
        <div className="car-box">
            <p>Hey there!.This is {carName} and {milesCoverd} covered.</p>
            <button onClick={props.clicked}>delete card</button>
            <input type="text" onChange={props.changed}/>
        </div>
    )
}
