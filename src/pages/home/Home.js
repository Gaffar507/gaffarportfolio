import React from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import me from '../../images/Gaffar.png'
import gesture from '../../images/gesture.jpg'
import web from '../../images/web.webp'
import code from '../../images/code.jpg'
import { useGlobalContext } from '../../components/myContext/context';
const Home = () => {
  const value = useGlobalContext();
  const { dispatch, toggle } = value;
  return (
    <div className='home-container' onClick={() => dispatch({type:'off'})}>
      <div className='background'></div>
      <div className="home">
            <div className="left-home">
              <img src={code} alt="" />
              <img src={me} alt="My image" />
            </div>
            <div className="right-home">
                <h1 className='stroke-text'>Hey, I'm A Stunning <br /> Web Developer</h1>
                <p>You can get an astonishing service from me that can make your business vast. I'm extremly passionate about my job. I'm super confident that I can make precious your task and also make you beneficiary.</p>
                <div className="right-image">
                  <img src={gesture} alt="gesture image" />
                <img src={web} alt="thumpsup sign" />
                </div>
            </div>
      </div>
      <div className="footer">
        <Footer/>
      </div>
 
    </div>
  )
}

export default Home
