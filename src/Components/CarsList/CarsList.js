import React,{ useState } from 'react'
import Car from './Car/Car';

function CarsList(props) {
    const [dragId, setDragId] = useState();

  const handleDrag = (ev) => {
    setDragId(ev.currentTarget.id);
  };

  const handleDrop = (ev) => {
    const dragBox = props.boxes.find((box) => box.id === dragId);
    const dropBox = props.boxes.find((box) => box.id === ev.currentTarget.id);

    const dragBoxOrder = dragBox.order;
    const dropBoxOrder = dropBox.order;

    const newBoxState = props.boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder;
      }
      if (box.id === ev.currentTarget.id) {
        box.order = dragBoxOrder;
      }
      return box;
    });

    // setBoxes(newBoxState);
    // props.setBoxes(newBoxState);
    props.setBoxes = newBoxState;
  };
    return (
        <div>
            {
                props.cars.sort((a, b) => a.order - b.order).map((car, index) =>{
                    return <Car 
                    carName={car.carName} 
                    milesCoverd={car.miles}
                    key={car.id}
                    clicked={() =>props.delHandler(index)}
                    changed={(event) => props.nameChanger(event, car.id)}
                    handleDrag={(ev) =>handleDrag(car.id)}
                    handleDrop={(ev) =>handleDrop(car.id)}/>
                })
            }
        </div>
    )
}

export default CarsList

