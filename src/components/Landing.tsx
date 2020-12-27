// import { FiMenu } from 'react-icons/fi';
import React from 'react';
import Dog from './Dog';

export default function Landing() {
  return (
    <div className="Landing">
      <nav>
        {/* <FiMenu size={46} color="$light-grey" className="Landing__menu-icon"/> */}
        <a href="#" className="btn btn-about">About me</a>
        <a href="#" className="btn btn-portfolio">Portfolio</a>
        <a href="#" className="btn btn-contact">Contact</a>
      </nav>
      <div className="Landing__title">
        <h1>Hi, I'm Bianca</h1>
        <h2>A front-end developer located in Canada.</h2>
      </div>
      <Dog />
    </div>
  )
}
