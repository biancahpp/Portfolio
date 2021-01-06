/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Logo from "../components/Logo";
import projects from '../projects/projects.json';

export default function Portfolio() {

  return (
    <div className="Portfolio">
      <Logo className="logo" />
      <span className="Portfolio__title">Portfolio</span>
      <span className="Portfolio__description">
        /* These are some projects that I've been working on for the past few
        months */
      </span>
      <div className="projects-container">
        
        {projects.map(item => 
        <div className="project-image">
          <img src={item.image} alt="project preview"></img>
        </div>
        )}
        
      </div>
    </div>
  );
}
