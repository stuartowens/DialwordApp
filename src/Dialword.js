import React from 'react';
// import './app.scss';
// import Form from './Form.jsx';
import Header from './Header';

//Here I use the function from HeroContent to change the background Image every five seconds
//The only issue here is that it is flashing upon loading the first few times it moves back and forth
//This is most likely due to the way I am changing the content. I'd like to find a better way to do this
//in the css using a mixin.
//Like I said in the CSS file the instrucitons weren't completely clear on what kind of transition wanted
//for the paragraph element, ie if it's literally supposed to move up or if it can simply change the content

class Dialword extends React.Component {
  constructor(props){
    super(props)
    this.state= {
      // heroId: 'Hero_code'
    }
  }
  componentDidMount () {
    // heroContent();
  }
  render() {
    return (
        <div>
          <div className="Hero" id="Hero_code">
            <Header />
            <div className="Learn-Head">
              <h1>Learn Coding<br /> in 24 Weeks</h1>
              <p>Class starts May 15, 2018</p>
            </div>
            <div className="Top-Content">
              <h2 id="Top-Content-H">CODING</h2>
              <p id="Top-Content-P">Coding Boot Camp equips students skills for full-stack web development through <br /> dynamic, in-person classes.</p>
            </div>
            <div className="Bottom-Content">
              <h2 id="Bottom-Content-H">DATA ANALYTICS</h2>
              <p id="Bottom-Content-P">Data Boot Camp equips students with the key skills for full-stack web development<br /> through dynamic, in-person classes.</p>
            </div>
            {/* <Form /> */}
          </div>
        </div>
      )
  }
}

export default Dialword;
