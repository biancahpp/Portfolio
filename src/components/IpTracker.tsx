import React, { useState } from 'react';
import Todo from "../images/Todo.png";
import Modal from "react-modal";

export default function IpTracker() {
  const [ todoModal, setTodoModal ] = useState(false);

  return (
    <div className="IpTracker">

      <div className="project-image" onClick={() => setTodoModal(true)}>
      <Modal 
      isOpen={todoModal} 
      onRequestClose={() => setTodoModal(false)}
      className="project-modal"
      overlayClassName="project-modal-overlay">
        <div className="modal-content">
        <h2>Modal title</h2>
        <p>Modal Body</p>
        <div 
        onClick={() => {
          setTodoModal(false)
          console.log(todoModal);
        }
          }>VSF</div>
        </div>
      </Modal>
          {/* <a
            href="https://affectionate-khorana-2a1719.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-link--1"
          > */}
            <img src={Todo} alt="Todo list"></img>
          {/* </a> */}
        </div>
    </div>
  )
}
