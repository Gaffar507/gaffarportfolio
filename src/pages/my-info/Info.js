import React from 'react'
import gaffar from '../../images/my-img.png'
import {FaHandHoldingUsd} from 'react-icons/fa'
import { FaArrowTurnDown,FaGripfire } from "react-icons/fa6";
import {FcBusinessman} from 'react-icons/fc'
import { useGlobalContext } from '../../components/myContext/context';
import './info.css'
import cv from '../../data/cv.docx'
const Info = () => {
  const value = useGlobalContext();
  const { dispatch} = value;

  return (
    <div className='info-container' onClick={() => dispatch({type:'off'})}>
        <section className='image-container'>
          <img src={gaffar} alt="my image" />
        </section>
        <section className='title-container'>
          <div className="title-sec">
              <h2>This is <span className='stroke-text'>Abdul Gaffar</span> </h2>
              <h4>Academic Qualifications & Others <FaArrowTurnDown className='icon-arrow'/></h4>
              <article>BA Hons, Faculty of Arts, University of Dhaka</article>
              <article>Nationality : Bangladeshi</article>
              <article>Religion : Islam </article>
              <a href={cv} download={true}><button className='cv-btn'>Download My CV</button></a>
          </div>
          <div className="info-sec">
            <h4>About Myself <FaArrowTurnDown className='icon-arrow'/></h4>
            <ul>
              <li><FaHandHoldingUsd className='icon-hand' /> Here I've a dream have to be a Multi-millionaire.</li>
              <li><FaGripfire className='icon-fire'/> I'm a confident & industrious person I can do whatever I want and I'm passionate about my task.</li>
              <li><FcBusinessman className='icon'/> I'm an open-growth-minded & business oriented guy that's way I can make you beneficiary.</li>
            </ul>
          </div>
        </section>
    </div>
  )
}

export default Info
