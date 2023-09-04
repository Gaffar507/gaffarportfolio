import React from 'react'
import './boxAni.css'
const BoxAni = ({height,width,animationDelay}) => {
  return (
    <div className="box" style={{height, width,animationDelay}}></div>
  )
}

export default BoxAni