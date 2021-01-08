/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Logo from "../components/Logo";
import projects from "../projects/projects.json";
import Modal from "react-modal";
import { FaTimes, FaEye, FaCode } from "react-icons/fa";
import { v4 as uuidv4 } from 'uuid';

export default function Portfolio() {
  const [selectedModal, setSelectedModal] = useState(-1);

  return (
    <div className="Portfolio">
      <Logo className="logo" />
      <div className="Wrapper">
      <span className="Portfolio__title">Portfolio</span>
      <span className="Portfolio__description">
        /* These are some projects that I've been working on for the past few
        months */
      </span>
      <div className="projects-container">
        {projects.map((item, index) => (
          <React.Fragment key={uuidv4()}>
            <div className="project-image" onClick={() => setSelectedModal(index)} key={uuidv4()}>
            <img src={item.image} alt="project preview"></img>
          </div>
            <Modal
              isOpen={index === selectedModal}
              onRequestClose={() => setSelectedModal(-1)}
              className="project-modal"
              overlayClassName="project-modal-overlay"
            >
              <FaTimes
                onClick={() => setSelectedModal(-1)}
                className="close-icon" />
              <div className="modal-image">
                <img src={item.image} alt={item.title}></img>
              </div>
              <div className="modal-content">
                <h1>{item.title}</h1>
                <div className="modal-technologies">
                  {item.tags.map(it => <span key={uuidv4()}>{it}</span>)}
                </div>
                <h3>About</h3>
                <p>{item.description}</p>
                <div className="btn-link-wrapper">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaEye className="eye-icon" />
                    <span>Demo</span>
                  </a>
                  <a
                    href={item.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <FaCode className="code-icon" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </Modal></React.Fragment>
        ))}
        </div>
      </div>
    </div>
  );
}
