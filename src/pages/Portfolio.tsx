/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Modal from "react-modal";
import Logo from "../components/Logo";

import Todo from "../images/Todo.png";
import IpTracker from "../images/IPtracker.jpg";

export default function Portfolio() {
  const [ modal, setModal ] = useState(false);

  return (
    <div className="Portfolio">
      <Logo className="logo" />
      <button onClick={() => setModal(true)}>Open Modal</button>
      <Modal 
      isOpen={modal} 
      onRequestClose={() => setModal(false)}
      className="project-modal"
      overlayClassName="project-modal-overlay"
      >
        <div className="modal-content">
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <button onClick={() => setModal(false)}>Close Modal</button>
        </div>
      </Modal>
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
