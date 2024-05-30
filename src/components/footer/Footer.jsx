import React from "react";
import FooterLink from "./FooterLink";
import FooterLogo from "./FooterLogo";
import FooterSocials from "./FooterSocials";

export const Footer = () => {
  return (
    <footer className="footer">
      <FooterLogo />
      <FooterLink />
      <FooterSocials />
    </footer>
  );
};
