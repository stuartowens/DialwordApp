import React from 'react';
// import './app.scss';
var Logo = require('./images/logo.png');


class Header extends React.Component {
  render() {
    return (
        <div className="Header">
          <img src={Logo} role="presentation" />
          <p>To speak with a<br />sales representative, call <a>(800)263-9693</a></p>
        </div>
      )
  }
}

export default Header;
