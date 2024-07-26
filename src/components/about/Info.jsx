import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-laptop about-icon"></i>
        <h3 className="about__title">AI/ML</h3>
        <span className="about__subtitle">Ai integration</span>
      </div>

      <div className="about__box">
        <i class="bx bx-award about-icon"></i>
        <h3 className="about__title">UI/UX</h3>
        <span className="about__subtitle">Modern Design</span>
      </div>

      <div className="about__box">
        <i class="bx bx-code-alt about-icon"></i>
        <h3 className="about__title">Web Dev</h3>
        <span className="about__subtitle">responsive websites</span>
      </div>
    </div>
  );
};

export default Info;
