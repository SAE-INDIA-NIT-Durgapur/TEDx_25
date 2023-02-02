import React, { useState } from "react";
import tedxnit from "./tedxnitdgp.png"
import "./Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="tedNavbar">
        <span className="nav-logo"><img src={tedxnit} /></span>
      <div className={`nav-items ${isOpen && "open"}`}>
      <a href="/">Home</a>

        <a href="/gallery">Gallery</a>
        <a href="/members">Members</a>
        <a href="/speakers">Speakers</a>
        <a href="/sponsors">Sponsors</a>
        <a href="/merchandise">Merchandise</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
