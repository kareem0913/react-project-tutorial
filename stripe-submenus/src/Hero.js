import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>payment infrastructure for the internet</h1>
          <p>
            millions of copanies of all seze-from startup to fortune 500s-use
            stripes softwate and apis to accept payments, send payouts, and
            mange theire businesses online.
          </p>
          <button className="btn">start now</button>
        </article>
        <article className="hero-images">
          <img className="phone-img" src={phoneImg} alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
