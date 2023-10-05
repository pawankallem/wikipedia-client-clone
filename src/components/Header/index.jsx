import React from 'react';
import wikiLogo from "../../assets/wikiLogo.png"

function Header() {
  return (
    <header className="header">
      <img src={wikiLogo} alt="Wikipedia" className="wikipedia-logo" />
      <h2>Wikipedia</h2>
    </header>
  );
}

export default Header;
