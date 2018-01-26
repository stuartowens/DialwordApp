import React from 'react';
import './Zero.scss'
 class Zero extends React.Component {
  componentDidMount(){
    var images = [
      "http://www.sitepronews.com/wp-content/uploads/2012/06/marketing-business.jpg",
      "https://image.freepik.com/free-vector/business-background-design_1300-345.jpg",
      "https://dollars-online.com/wp-content/uploads/2017/11/Free-Marketing.jpg"
    ]
    console.log('zero component loaded')
    var zeroDiv = document.getElementById("App");
    var i = 0;
    console.log(zeroDiv, 'zeroDiv~~~~~~')
    setInterval(function() {
      zeroDiv.style.backgroundImage = "url(" + images[i] + ")";
      i = i + 1;
      if (i === images.length) {
        i =  0;
      }
    }, 5000);

  };
  render() {
    return (
      <div id="zero">
        <h1>Hey here I am</h1>
      </div>
    )
  }
}

export default Zero;
