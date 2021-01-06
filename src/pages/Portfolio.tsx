/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from "react";
import Logo from "../components/Logo";
import projects from "../projects/projects.json";
import Modal from "react-modal";
import { FaTimes, FaEye, FaCode } from "react-icons/fa";

export default function Portfolio() {
  const [selectedModal, setSelectedModal] = useState(-1);

  return (
    <div className="Portfolio">
      <Logo className="logo" />
      <span className="Portfolio__title">Portfolio</span>
      <span className="Portfolio__description">
        /* These are some projects that I've been working on for the past few
        months */
      </span>
      <div className="projects-container">
        {projects.map((item, index) => (
          <><div className="project-image" onClick={() => setSelectedModal(index)}>
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
                  {item.tags.map(it => <span>{it}</span>)}
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
            </Modal></>
        ))}
      </div>
    </div>
  );
}
