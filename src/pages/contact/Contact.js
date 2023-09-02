import React,{useRef, useState} from 'react';
import { useGlobalContext } from '../../components/myContext/context';
import contact from '../../images/contact.svg'
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [ action , setAction]=useState(false)
  const form =useRef()
  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_suxyid8', 'template_rsmjsoq', form.current, 'UyoDD-USBmHyvlcQL')
      .then((result) => {
            setAction(true)
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  const value = useGlobalContext();
  const { dispatch} = value;
  return (
    <div className='contact-container' onClick={() => dispatch({type:'off'})}>
      <div className="contact-img">
        <img src={contact} alt="contact" />
      </div>
      <div className="contact-form">
        <h2>Get In Touch!</h2>
        <form action="#" className='form-container' ref={form} onSubmit={sendEmail}>
          <div className="contact">
              <input type="text" placeholder='User Name' name='user_name' id='user_name' required/>
              <input type="email" placeholder='User Email' name='user_email' id='user_email' required/>
          </div>
          <div className="contact">
              <textarea type="text" placeholder='Message me..' name='message' id='message' required/>
          </div>
          <div>
            <button type='submit' className='btn'>Send</button>
            <span style={{color:'yellow'}}>{action? 'Email sent successful!':''}</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
