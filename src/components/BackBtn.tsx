import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function BackBtn() {
  return (
    <div className="BackBtn">
      <Link to="/" className="btn btn-back">
        <FaChevronLeft size={26} color="black"/>
      </Link>
    </div>
  )
}
