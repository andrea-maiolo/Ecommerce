import React from "react";

function Footer() {
  return (
    <footer className="footerComp">
      <nav className="navBarBot">
        <a href="#" className="tAndS">
          Terms of service
        </a>
        <a href="#" className="sAndR">
          Shipping and returns
        </a>
        <img
          alt="twitter"
          className="twitterLogo"
          src={require(`../../styles/twitter.svg`).default}
        />
        <img
          alt="facebook"
          className="fbLogo"
          src={require(`../../styles/facebook.svg`).default}
        />
        <img
          alt="instagram"
          className="instaLogo"
          src={require(`../../styles/insta.svg`).default}
        />
      </nav>
    </footer>
  );
}

export default Footer;
