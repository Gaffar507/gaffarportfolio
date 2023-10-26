import React from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import me from '../../images/Gaffar.png'
import gesture from '../../images/gesture.jpg'
import web from '../../images/web.webp'
import code from '../../images/code.jpg'
import BoxAni from '../../components/animation/BoxAni'
import { useGlobalContext } from '../../components/myContext/context';
import Typed from 'typed.js';
const Home = () => {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Web Developer.','Freelancer.', 'Web Designer.' ],
      typeSpeed: 200,
      loop:true,
      backSpeed:200,
      backDelay: 20,
      smartBackspace:true,
      cursorChar:'🖋️'
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const value = useGlobalContext();
  const { dispatch} = value;
  return (
    <div className='home-container' onClick={() => dispatch({type:'off'})}>
      <div className='background'></div>
      <div className="home">
            <div className="left-home">
              <img src={code} alt="code background" />
              <img src={me} alt="Mr. Gaffar" />
            </div>
            <div className="right-home">
                <h1 >Hey, I'm A Stunning </h1><br /> <h1><span ref={el} /></h1>
                <p>You can get an astonishing service from me that can make your business vast. I'm extremly passionate about my job. I'm super confident that I can make precious your task and also make you beneficiary.</p>
                <div className="right-image">
                  <img src={gesture} alt="gesture sign" />
                <img src={web} alt="thumpsup sign" />
                </div>
            </div>
      </div>
      <div className="box-animation">
        <BoxAni height={'3rem'} width={'3rem'} animationDelay={'1s'}/>
        <BoxAni height={'2rem'} width={'2rem'} animationDelay={'10s'}/>
        <BoxAni height={'3.5rem'} width={'3.5rem'} animationDelay={'5s'}/>
        <BoxAni height={'4rem'} width={'4rem'} animationDelay={'7s'}/>
        <BoxAni height={'2.8rem'} width={'2.8rem'} animationDelay={'2s'}/>
        <BoxAni height={'4rem'} width={'4rem'} animationDelay={'10s'}/>
        <BoxAni height={'2rem'} width={'2rem'} animationDelay={'3s'}/>
        <BoxAni height={'3.5rem'} width={'3.5rem'} animationDelay={'6s'}/>
        <BoxAni height={'4rem'} width={'4rem'} animationDelay={'9s'}/>
        <BoxAni height={'5rem'} width={'5rem'} animationDelay={'4s'}/>
      </div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Home
