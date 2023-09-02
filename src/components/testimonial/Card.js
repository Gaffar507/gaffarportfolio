import React from 'react';
import {MdStar} from 'react-icons/md'
import {FaQuoteLeft} from 'react-icons/fa6'
import './card.css';

const Card = ({img,name,title, des}) => {
  const newArr=[]
  for (let index = 0; index <5; index++) {
    const element = <MdStar/>;
    newArr.push(element)
  }
  return (
    <div className='testimonial-card'>
      <div className="left">
        <span><FaQuoteLeft className='quote-icon'/></span>
        <img src={img} alt={name} />
      </div>
      <div className="right">
        <h2>{name}</h2>
        <h3>_{title}</h3>
        <p>{des}</p>
        <span>Rating to him : {newArr.map((i,index)=><span key={index}>{i}</span>)}</span>
      </div>
    </div>
  )
}

export default Card
