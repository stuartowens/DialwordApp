import React from 'react';
// import './app.scss';
// var Logo = require('../images/logos/logo_trilogy.svg');
// var svgFile2 = require('../images/logos/logo_trilogy_blk.svg');

//Here I load the svg file and make a simple header, I could make this phoine number a real link if need be

class Header extends React.Component {
  render() {
    return (
        <div className="Header">
          {/* <img src={Logo} /> */}
          <p>To speak with an<br />admissions advisor call <a>(555)123-4567</a></p>
        </div>
      )
  }
}

export default Header;
