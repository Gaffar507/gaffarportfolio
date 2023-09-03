import React from 'react';
import{BiDownvote} from 'react-icons/bi'
import{ html, css, bootstrap, tailwind, js, react,github} from '../../images/index'
import { useGlobalContext } from '../../components/myContext/context';
import './skills.css';

const Skills = () => {
  const value = useGlobalContext();
  const { dispatch} = value;
  return (
    <div className='skills-container' onClick={() => dispatch({type:'off'})}>
        <section className='skill-title'>
          <h1 className='stroke-text'>All I Learned and Get Experienced</h1>
          <h3>Are Given Below</h3>
          <BiDownvote className='down-arrow'/>
        </section>
        <div className="skills">
        <div className="skill">
          <div className="main-circle">
              <div className="image-circle">
                <img src={html} alt="html" />
              </div>
              <div className="image-circle">
                <img src={css} alt="css" />
              </div>
              <div className="image-circle">
                <img src={bootstrap} alt="bootstrap" />
              </div>
              <div className="image-circle">
                <img src={tailwind} alt="tailwind" />
              </div>
              <div className="image-circle">
                <img src={js} alt="javascript" />
              </div>
              <div className="image-circle">
                <img src={react} alt="react js" />
              </div>
              <div className="image-circle">
                <img src={github} alt="github" />
              </div>
          </div>
          <div className="yellow-circle"></div>
          <div className="blue-circle"></div>
      </div>
    </div>
    </div>
  )
}

export default Skills
