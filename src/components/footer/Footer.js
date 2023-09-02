import React from 'react';
import './footer.css';
import facebook from '../../images/Facebook.png'
import instagram from '../../images/instagram.png'
import email from '../../images/email.png'
import twitter from '../../images/twitter.png'
import linkedIn from '../../images/linkedin.png'
const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="left-f">
        <img src={facebook} alt="facebook" />
        <img src={instagram} alt="instagram" />
        <img src={twitter} alt="twitter" />
        <img src={linkedIn} alt="linkedin" />
        <img src={email} alt="email" />
      </div>
      <div className="right-f">
        <p>Copyright © 2023 – All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
