import React from 'react';
import Dog from '../components/Dog';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Todo from '../images/Todo.png';
import IpTracker from '../images/IPtracker.jpg';

export default function Landing() {
  return (
    <div className="Landing">
      <nav>
        <Link to="/about" className="btn btn-about">About me</Link>
        <Link to="/portfolio" className="btn btn-portfolio">Portfolio</Link>
        <Link to="/contact" className="btn btn-contact">Contact</Link>
      </nav>
      <div className="Landing__title">
        <h1>Hi, I'm Bianca</h1>
        <h2>
          <span>A front-end developer located in Canada</span>
          <FaCanadianMapleLeaf size={50} color="rgba(192, 57, 43, 1)"className="canada-icon" />
        </h2>
      </div>
      <div className="Landing__projects">
        <span>Check out some of my projects</span>
        <div className="teste1">
        <div className="teste">
          <a 
          href="https://affectionate-khorana-2a1719.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link--1">
            <img src={Todo} alt="Todo list"></img>
            <h3>To-do List</h3>
          </a>
          </div>
          <div className="teste">
          <a 
          href="https://eloquent-engelbart-326571.netlify.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link--1">
            <img src={IpTracker} alt="IP tracker"></img>
            <h3>Ip tracker</h3>
          </a>
        </div>
        </div>
      </div>
      <Dog />
    </div>
  )
}
