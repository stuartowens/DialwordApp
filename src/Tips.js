import React from 'react';

//The static Tips section, I have to change some things in the css to make the order work right for Mobile

class Tips extends React.Component {
  render() {
    return (
      <div className="lazy-tip">
        <h1>Advertising Tips:</h1>
        <div className="Tips">
          <div className="tip-child" id="tip-1">
            <h2>Identify and state the benefits</h2>
            <p>a consumer will get from your using service or product - benefits motivate people to purchase. Remember, people prefer to be offered a solution, not sold a product.</p>
          </div>
          <div className="tip-child" id="tip-2">
            <h2>Identify the action you want consumers to take</h2>
            <p>When they see or hear your ad – obviously when using a toll free vanity number, you want them to call you and transact business or request information. Not identifying the call to action is a huge sales mistake.</p>
          </div>
          <div className="tip-child" id="tip-3">
            <h2>Differentiate yourself from the competition</h2>
            <p>what is it that makes your company, your products or your services unique or better. Why you instead of your competitor?</p>
          </div>
          <div className="tip-child" id="tip-4">
            <h2>Utilize your existing customer base.</h2>
            <p>Use special promotions aimed at getting them to purchase from you again or to refer a new customer to you.</p>
          </div>
          <div className="tip-child" id="tip-5">
            <h2>Give your advertising time to work before changing it or giving up</h2>
            <p>It is estimated that potential customers need to see an ad a minimum of seven times before they really notice the ad and that it can take many months to see results.</p>
          </div>
          <div className="tip-child" id="tip-6">
            <h2>It is impossible to over expose your toll free vanity number to consumers</h2>
            <p>It should be tipd prominently on your business cards, your letterhead, your web site, everywhere you currently advertise and have your phone number. Selectively using it  for only a specific advertising medium will not give you optimum results. The longer and more often you expose consumers to your number, the easier it is for them to remember the number and associate it with your business.</p>
          </div>
          <div className="tip-child" id="tip-7">
            <h2>If necessary, hire a professional.</h2>
            <p>You can locate many freelance professionals on the internet as well as locate great information on business sites. Get local references from successful businsses in your area.</p>
          </div>
          <div className="tip-child" id="tip-8">
            <h2>Track your results.</h2>
            <p>If you are always advertising but don’t know if you are gaining customers or sales from it, you could be wasting your money. Toll free vanity numbers provide an easy tracking method.</p>
          </div>
          <div className="tip-child" id="tip-9">
            <h2>Take the time to figure out who your target audience is and choose the advertising medium(s) that will reach them.</h2>
            <p>If you are working with an advertising professional, discuss all available options with them and don’t limit yourself to thinking about one specific medium. Many companies have access to dozens of advertising options, not only newspaper, TV or radio.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Tips;
