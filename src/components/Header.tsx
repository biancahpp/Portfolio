import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaUser } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="Header">
      <nav>
        <a 
          href="https://www.linkedin.com/in/bianca-procopio" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-linkedin">
          <FaLinkedin size={50} color="rgba(192, 57, 43, 1)"className="linkedin-icon" />
          <span>Linkedin</span>
        </a>
        <a 
          href="https://github.com/biancahpp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-github">
          <FaGithub size={50} color="rgba(192, 57, 43, 1)"className="github-icon" />
          <span>Github</span>
        </a>
        <a 
          href="https://github.com/biancahpp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-resume">
          <FaUser size={50} color="rgba(192, 57, 43, 1)"className="resume-icon" />
          <span>Resume</span>
        </a>
        <a 
          href="https://github.com/biancahpp" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-email">
          <FaEnvelope size={50} color="rgba(192, 57, 43, 1)"className="email-icon" />
          <span>Email</span>
        </a>

      </nav>
    </div>
  )
}
