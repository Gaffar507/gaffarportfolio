import React from 'react';
import { HiSortDescending } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import image2 from '../../images/learning.svg';
import { useGlobalContext } from '../myContext/context';
import './navbar.css';

const Navbar = () => {
    const value = useGlobalContext();
    const { dispatch, toggle } = value;
    return (
        <div className="navbar">
            <div className="n-left">
                <NavLink to="/">
                    <img className="nav-img" src={image2} alt="icon" />
                </NavLink>
                <div className="toggle" onClick={() => dispatch({type:'toggle'})}>
                    {toggle ? <RxCross2 className="cross" /> : <HiSortDescending className="bars" />}
                </div>
            </div>
            <div className="n-right">
                <ul className={`${toggle ? 'contact-links show-link' : ' contact-links'}`}>
                    <li>
                        <NavLink to="/" onClick={() => dispatch({type:'toggle'})}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/my-info" onClick={() => dispatch({type:'toggle'})}>My Info</NavLink>
                    </li>
                    <li>
                        <NavLink to="/skills" onClick={() => dispatch({type:'toggle'})}>Skills</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects" onClick={() => dispatch({type:'toggle'})}>Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/testimonials" onClick={() => dispatch({type:'toggle'})}>Testimonials</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" onClick={() => dispatch({type:'toggle'})}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
