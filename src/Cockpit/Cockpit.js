import React,{useEffect} from 'react'
// import CarsList from '../Components/CarsList/CarsList'
function Cockpit(props) {
    useEffect(() =>{
        console.log('[Cockpit.js] useEffect used');
    })
    const style ={
        color:'#fff',
        border:'1px solid orange',
        padding:'15px 30px',
        backgroundColor:'orange',
        textDecoration:'none',
        borderRadius:'200px',
        cursor:'pointer',
       
    }
    return (
        <div>
            <p>
            Edit <code> By iddiMsangi, </code>simple App.
            </p> 
            <a href="#" 
            style={style}  
            className="btn"
            onClick={props.clickToggle}>Toggle cars</a>
            {/* <CarsList  /> */}
        </div>
    )
}

export default Cockpit
