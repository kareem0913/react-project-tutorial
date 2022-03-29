import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "./context";

const Submenu = () => {
  const {
    submenu,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const sub = container.current;
    const { center, bottom } = location;
    sub.style.left = `${center}px`;
    sub.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside
      ref={container}
      className={`${submenu ? "submenu show" : "submenu"}`}
    >
      <h4>{page}</h4>
      <div className={`submenu-center col-2`}>
        {links.map((item, i) => {
          const { label, icon, url } = item;
          return (
            <a key={i} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
