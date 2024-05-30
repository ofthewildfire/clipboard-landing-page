import React from "react";

const FooterSocials = () => {
  return (
    <ul className="footer-socials">
      <li className="social-list">
        <a href="#" className="social-link">
          <img
            src="images/icon-facebook.svg"
            alt="Facebook logo"
            height={36}
            width={36}
          />
        </a>
      </li>
      <li className="social-list">
        <a href="#" className="social-link">
          <img
            src="images/icon-twitter.svg"
            alt="Facebook logo"
            height={36}
            width={36}
          />
        </a>
      </li>
      <li className="social-list">
        <a href="#" className="social-link">
          <img
            src="images/icon-instagram.svg"
            alt="Facebook logo"
            height={36}
            width={36}
          />
        </a>
      </li>
    </ul>
  );
};

export default FooterSocials;
