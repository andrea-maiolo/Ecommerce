import React from "react";

function Footer() {
  return (
    <footer className="footerComp">
      <nav className="navBarBot">
        <a href="#">Terms of service</a>
        <a href="#">Shipping and returns</a>
        <img alt="twitter" src={require(`../../styles/twitter.svg`).default} />
        <img
          alt="facebook"
          src={require(`../../styles/facebook.svg`).default}
        />
        <img alt="instagram" src={require(`../../styles/insta.svg`).default} />
      </nav>
    </footer>
  );
}

export default Footer;
