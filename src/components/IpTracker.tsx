import React, { useState } from "react";
import IPtrack from "../images/IPtrack.jpg";
import Modal from "react-modal";
import { FaTimes, FaEye, FaCode } from "react-icons/fa";

export default function IpTracker() {
  const [todoModal, setTodoModal] = useState(false);

  return (
    <div className="IpTracker">
      <div className="project-image" onClick={() => setTodoModal(true)}>
      <img src={IPtrack} alt="IP tracker"></img>
      </div>

      <Modal
        isOpen={todoModal}
        onRequestClose={() => setTodoModal(false)}
        className="project-modal"
        overlayClassName="project-modal-overlay"
      >
        <FaTimes onClick={() => setTodoModal(false)} 
        className="close-icon" />
        <div className="modal-image">
          <img src={IPtrack} alt="IP tracker"></img>
        </div>
        <div className="modal-content">
          <h1>IP Tracker</h1>
          <div className="modal-technologies">
            <span>React</span>
            <span>Javascript</span>
            <span>HTML</span>
            <span>SASS</span>
            <span>API</span>
            <span>Responsive</span>
          </div>
          <h3>About</h3>
          <p>
            With this responsive application the user can enter an IP address
            that he wants to know the information of. It was made using Geo
            Ipify API.
          </p>
          <div className="btn-link-wrapper">
          <a
            href="https://eloquent-engelbart-326571.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaEye className="eye-icon"/>
            <span>Demo</span>
          </a>
          <a
            href="https://github.com/biancahpp/IP-tracker"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            <FaCode className="code-icon"/>
            <span>Code</span>
          </a>
          </div>

          
        </div>
      </Modal>
    </div>
  );
}
