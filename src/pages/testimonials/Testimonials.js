import React, { useState } from 'react'
import {testimonials} from '../../data/testimonials'
import Card from '../../components/testimonial/Card'
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'
import { useGlobalContext } from '../../components/myContext/context';
import './testimonials.css'

const Testimonials = () => {
  const value = useGlobalContext();
  const { dispatch} = value;
  const [ clients , setClients] = useState(testimonials);
  let[index, setIndex]=useState(0);

  const handleClick=(type)=>{
      if (type==='next') {
        let total=index+1
        setIndex(total)
          if (total==clients.length) {
           setIndex(0)
          }
      }
      if (type==='previous') {
          if (index==0) {
           setIndex(clients.length)
          }
          setIndex((index)=>index-1)
      }
  }

  return (
    <div className='testimonials-container' onClick={() => dispatch({type:'off'})}>
        <h1
        > <span className='stroke-text'>What Clients</span> Say Regardings <span className='stroke-text'>to Me?</span> </h1>
        <div className="reviews">
          <div className="cards">
            <div
                className='card fade'>
                {<Card {...clients[index]}/>}
            </div>
          </div>
          <div className="change-btn">
              <button className='left-btn btn' onClick={()=>handleClick('previous')}>{<FiArrowLeftCircle style={{fontSize:'2rem'}}/>}</button>
              <button className='right-btn btn' onClick={()=>handleClick('next')}>{<FiArrowRightCircle style={{fontSize:'2rem'}}/>}</button>
          </div>
        </div>
    </div>
  )
}

export default Testimonials
