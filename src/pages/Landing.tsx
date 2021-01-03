import React from "react";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="Landing">
      <Header />
      <div className="Landing-content">
        <div className="Landing-text">
          <div className="Landing__title">
            <h1>Hi, I'm Bianca</h1>
            <h2>
              <span>A front-end developer located in Canada</span>
            </h2>
          </div>
          
            <Link to="/portfolio" className="btn btn-portfolio">
              <FaCanadianMapleLeaf
                size={50}
                className="canada-icon"
              />
              <span>View Projects</span>
            </Link>
          
        </div>
      </div>
    </div>
  );
}
