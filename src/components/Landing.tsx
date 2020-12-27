import React from 'react';
import Dog from './Dog';
import { FaCanadianMapleLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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
      <Dog />
    </div>
  )
}
