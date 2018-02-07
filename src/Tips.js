import React from 'react';
// import './app.scss';
// var phone = require('../images/phone.png')
// var completeProjIcon = require('../images/icons/complete_proj.svg');
// var benefitIcon = require('../images/icons/benefit.svg');
// var dataCodingIcon = require('../images/icons/data_coding.svg');
// var timeIcon = require('../images/icons/time.svg');

//The static feature section, I have to change some things in the css to make the order work right for Mobile

class Tips extends React.Component {
  render() {
    return (
      <div className="lazy-feature">
        <h1>Advertising Tips:</h1>
        <div className="Feature">
          <div className="feature-child" id="feature-1">
            {/* <img src={dataCodingIcon}/> */}
            <p>Identify and state the benefits</p>
            <p>a consumer will get from your using service or product - benefits motivate people to purchase. Remember, people prefer to be offered a solution, not sold a product.</p>
          </div>
          <div className="feature-child" id="feature-2">
            {/* <img src={benefitIcon}/> */}
            <p>Identify the action you want consumers to take</p>
            <p>When they see or hear your ad – obviously when using a toll free vanity number, you want them to call you and transact business or request information. Not identifying the call to action is a huge sales mistake.</p>
          </div>
          <div className="feature-child" id="feature-3">
            {/* <img src={phone} /> */}
            <p>Differentiate yourself from the competition</p>
            <p>what is it that makes your company, your products or your services unique or better. Why you instead of your competitor?</p>
          </div>
          <div className="feature-child" id="feature-4">
            {/* <img src={timeIcon}/> */}
            <p>Utilize your existing customer base.</p>
            <p>Use special promotions aimed at getting them to purchase from you again or to refer a new customer to you.</p>
          </div>
          <div className="feature-child" id="feature-5">
            {/* <img src={completeProjIcon}/> */}
            <p>Give your advertising time to work before changing it or giving up</p>
            <p>It is estimated that potential customers need to see an ad a minimum of seven times before they really notice the ad and that it can take many months to see results.</p>
          </div>
          <div className="feature-child" id="feature-6">
            <p>It is impossible to over expose your toll free vanity number to consumers</p>
            <p>It should be featured prominently on your business cards, your letterhead, your web site, everywhere you currently advertise and have your phone number. Selectively using it  for only a specific advertising medium will not give you optimum results. The longer and more often you expose consumers to your number, the easier it is for them to remember the number and associate it with your business.</p>
          </div>
          <div className="feature-child" id="feature-7">
            <p>If necessary, hire a professional.</p>
            <p>You can locate many freelance professionals on the internet as well as locate great information on business sites. Get local references from successful businsses in your area.</p>
          </div>
          <div className="feature-child" id="feature-8">
            <p>Track your results.</p>
            <p>If you are always advertising but don’t know if you are gaining customers or sales from it, you could be wasting your money. Toll free vanity numbers provide an easy tracking method.</p>
          </div>
          <div className="feature-child" id="feature-9">
            <p>Take the time to figure out who your target audience is and choose the advertising medium(s) that will reach them.</p>
            <p>If you are working with an advertising professional, discuss all available options with them and don’t limit yourself to thinking about one specific medium. Many companies have access to dozens of advertising options, not only newspaper, TV or radio.</p>
          </div>
        </div>
      </div>
      )
  }
}

export default Tips;
