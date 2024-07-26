import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://x.com/m_x_ria"
        className="home__social-icon"
        target={"_Blank"}
      >
        <i className="uil uil-twitter"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/maria-kelouaze-7517801a6/"
        className="home__social-icon"
        target={"_Blank"}
      >
        <i className="uil uil-linkedin"></i>
      </a>

      <a
        href="https://github.com/marikel"
        className="home__social-icon"
        target={"_Blank"}
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
