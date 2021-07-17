import React from 'react'
import './Car.css'
export default function Car(props) {
    return (
        <div className="car-box">
            <p>Hey there!.This is {props.carName} and {props.milesCoverd} covered.</p>
            <button onClick={props.clicked}>delete card</button>
            <input type="text" onChange={props.changed} />
        </div>
    )
}
