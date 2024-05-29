import React from "react";
import FeaturesTitle from "./FeaturesTitle";

const Features = () => {
  return (
    <>
      <FeaturesTitle />
      <div className="features">
        <div className="features-image">
          <img
            className="features-computer-image"
            src="images/image-computer.png"
            alt="Image of an Apple Mac Desktop Computer"
            height={300}
            width={300}
          />
        </div>
        <div className="features-list-container">
          <ul className="features-list">
            <li className="feature-item">
              <span className="item-name">Quick Search</span>
              <span className="feature-item-sub-text">
                Easily search your snippets by content, category, web address,
                application, and more.
              </span>
            </li>
            <li className="feature-item">
              <span className="item-name">iCloud Sync</span>
              <span className="feature-item-sub-text">
                Instantly saves and syncs snippets across all your devices.
              </span>
            </li>
            <li className="feature-item">
              <span className="item-name">Complete History</span>
              <span className="feature-item-sub-text">
                Retrieve any snippets from the first moment you started using
                the app.
              </span>
            </li>
          </ul>
        </div>
      </div>{" "}
    </>
  );
};

export default Features;
