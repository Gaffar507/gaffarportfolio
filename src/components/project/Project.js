import React from 'react';
import './project.css';
import {FaHandPointRight} from 'react-icons/fa'

const Project = ({img, link, title}) => {
  return (
    <div className='project'>
      <img src={img} alt={title} />
      <div className="project-title">
        <h4>{title}</h4>
        <a href={link} target='_blank'><FaHandPointRight style={{color:'white'}}/> Go to this website</a>
      </div>
    </div>
  )
}

export default Project
