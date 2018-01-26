import React from 'react';
import './Zero.scss'
 class Zero extends React.Component {
   constructor(){
     super()
     this.state ={
       text: 'green'
     }
   }
  componentDidMount(){
    var images = [
      "http://www.sitepronews.com/wp-content/uploads/2012/06/marketing-business.jpg",
      "https://image.freepik.com/free-vector/business-background-design_1300-345.jpg",
    ]
    var styles = [
      'red',
      'green'
    ]
    console.log('zero component loaded')
    var appDiv = document.getElementById("App");
    var zeroH = document.getElementById("zero-header");

    var i = 0;
    console.log(appDiv, 'zeroDiv~~~~~~')
    setInterval(function() {
      appDiv.style.backgroundImage = "url(" + images[i] + ")";
      appDiv.style.color = styles[i];
      zeroH.innerHTML = styles[i];
      var text = styles[i]
      i = i + 1;
      if (i === images.length) {
        i =  0;
      }
    }, 5000);

  };
  render() {
    return (
      <div id="zero">
        <h1 id="zero-header">Green</h1>
      </div>
    )
  }
}

export default Zero;
