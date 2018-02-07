import React from 'react';
var logo = require('./images/logo.png');
// import './app.scss';
// var Logo2 = require('../images/logos/logo_trilogy_blk.svg');

//Here I have to require the logo since it's is a svg file but it works fine a

class Footer extends React.Component {
  render() {
    return (
        <div className="Footer">
          <img src={logo} role="presentation" />
          <p>146 Old E King Street, Suite C - PO Box 2078 - Boone, NC 28607<br />Telephone: 1-800-DIALWORD<br />Fax: 1-877-FAXDOCS<br />© 2018 - <strong>1800DIALWORD.COM</strong><br /><strong>All Rights Reserved</strong></p>
        </div>
      )
  }
}

export default Footer;
