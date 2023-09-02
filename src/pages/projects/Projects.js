import React from 'react';
import {projects} from '../../data/projects'
import{BiDownvote} from 'react-icons/bi'
import Project from '../../components/project/Project';
import github from '../../images/github.png'
import {FaHandPointRight} from 'react-icons/fa'
import { useGlobalContext } from '../../components/myContext/context';
import './projects.css';

const Projects = () => {
  const value = useGlobalContext();
  const { dispatch} = value;
  return (
    <div className='projects-container' onClick={() => dispatch({type:'off'})}>
      <div className="projects-title">
        <h1> <span className='stroke-text'>Welcome </span>To My <span className='stroke-text'>Projects</span> </h1>
        <p>All I learned and earned knowledge through practicing below projects.</p>
        <span><BiDownvote className='down-icon'/></span>
      </div>
      <div className="projects">
        {projects.map((project, index)=><Project key={index} {...project}/>)}
      </div>
      <div className="more-projects">
        <p>Would you like to know more regardings to my skills and experiences?  You can explore my Github account. </p>
        <span>Please click on this <FaHandPointRight style={{color:'blue', margin:'.6rem'}}/> <a href="https://github.com/Gaffar507?tab=repositories" target='_blank'><img className='github' src={github} alt="github link" /></a></span>
      </div>
    </div>
  )
}

export default Projects
