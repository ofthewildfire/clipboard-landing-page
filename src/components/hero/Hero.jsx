import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <img className="logo" src="/images/logo.svg" alt="logo" />
      <h1 className="hero--title">A history of everything you copy</h1>
      <p className="hero--sub-heading">
        Clipboard allows you to track and organize everthing you copy. Instantly
        access your clipboard on all your devices.
      </p>
      <div className="hero--btns btn-container">
        <button className="btn btn--primary">Download for iOS</button>
        <button className="btn btn--secondary">Download for Mac</button>
      </div>
    </div>
  );
};

export default Hero;
