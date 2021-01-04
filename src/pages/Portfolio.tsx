import React from "react";
import Logo from "../components/Logo";

import Todo from "../images/Todo.png";
import IpTracker from "../images/IPtracker.jpg";

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
        <div className="project-image">
          <a
            href="https://affectionate-khorana-2a1719.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link--1"
          >
            <img src={Todo} alt="Todo list"></img>
          </a>
        </div>
        <div className="project-image">
          <a
            href="https://eloquent-engelbart-326571.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link--1"
          >
            <img src={IpTracker} alt="IP tracker"></img>
          </a>
        </div>
        <div className="project-image">
          <a
            href="https://eloquent-engelbart-326571.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link--1"
          >
            <img src={IpTracker} alt="IP tracker"></img>
          </a>
        </div>
      </div>
    </div>
  );
}
