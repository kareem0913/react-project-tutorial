import React, { useState, useRef, useEffect, StrictMode } from "react";
import { FaBars, FaRegStickyNote, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [show, SetShow] = useState(false);
  const containerRef = useRef(null);
  const linkRef = useRef(null);

  useEffect(() => {
    const linksHight = linkRef.current.getBoundingClientRect().height;
    if (show) {
      containerRef.current.style.height = `${linksHight} px`;
    } else {
      containerRef.current.style.height = "0 px";
    }
  }, [show]);
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
          <button className="nav-toggle" onClick={() => SetShow(!show)}>
            <FaBars />
          </button>
        </div>
        <div
          className={`links-container ${show ? "show-container" : null}`}
          ref={containerRef}
        >
          <ul className="links" ref={linkRef}>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
