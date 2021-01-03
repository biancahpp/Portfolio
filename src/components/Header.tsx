import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';
import Logo from './Logo';

export default function Header() {
  return (
    <div className="Header">
      <div>
        <Logo  className="logo"/>
      </div>
      <nav>
        <div className="btn-wrapper">
        <a 
          href="https://www.linkedin.com/in/bianca-procopio" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-linkedin">
          <FaLinkedin size={50} className="linkedin-icon" />
          <div className="icon-description">
            <p>Linkedin</p>
            </div>
        </a>
        </div>
        <div className="btn-wrapper">
        <a 
          href="https://github.com/biancahpp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-github">
          <FaGithub size={50} className="github-icon" />
          <div className="icon-description">Github</div>
        </a>
        </div>
        <div className="btn-wrapper">
        <a 
          href="https://drive.google.com/file/d/1Vh2rUU6an6wRac_9SAw9ROKoFeUa8BWa/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-resume">
          <FaUser size={50} className="resume-icon" />
          <div className="icon-description"> Resume</div>
        </a>
        </div>
        <div className="btn-wrapper">
        <a 
          href="mailto:bianca_procopio@hotmail.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-email">
          <FaEnvelope size={50} className="email-icon" />
          <div className="icon-description">Email</div>
        </a>
        </div>

      </nav>
    </div>
  )
}
