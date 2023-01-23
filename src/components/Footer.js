import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function footor() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2022 burger33.com</p>
        <FaInstagramSquare />
        <FaFacebook />
        <FaTwitterSquare />
      </div>
    </div>
  );
}

export default footor;
