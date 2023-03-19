import React from 'react'
import { useNavigate } from 'react-router-dom';

function Cards(props) {
 
  let navigate=useNavigate()
  return <>
                 <div className='ps-3'>
                <div className='card mt-3 shadow bg-body rounded cursor-pointer '  style={{width:"18rem"}} role='button' onClick={()=>{navigate(`/product/${props.id}`)}}>
                  <div>
                    <img src={props.img} style={{height:"210px", width:"287px"}} alt="..."/>
                  </div>
                  <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.description}</p>
                        <p> <span style={{color:"crimson"}}><b>{props.rupee}</b></span>{props.rupdes}</p>
                        <button className="btn btn-info">Book Now</button>
                    </div>
                </div>
                </div>
  </>
}

export default Cards
