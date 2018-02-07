import React from 'react';
import Collapsible from  './Collapsible.js';

//If I could go back I would simply create these elements using a loop and keep the content
//in a sepperate place to make this look more clean
//I bring in the Collapsible component here to make the faq q and a collapse

class Faq extends React.Component {
  render() {
    return (
        <div className="Faq">
          <div className="faq-questions" id="accordion">
            <h1>Frequently Asked Questions</h1>
            <Collapsible className="faq-1" trigger=' How much is it going to cost me?'>
                <ul id="answer-1">
                  <li>Licensing a toll free vanity number is a very cost effective way to increase the response to your advertising.</li>
                  <li>With monthly costs starting at $79 plus the cost of incoming calls, you can add this great marketing tool for only a few dollars per day.</li>
                  <li>Pricing is number specific and based on the size of the market you want to license the number in.</li>
                </ul>
            </Collapsible>
            <Collapsible className="faq-2" trigger=" Do I have to install extra phone lines or equipment?" >
              <ul id="answer-2">
                <li>No, extra phone lines or equipment are necessary.</li>
                <li>We direct the calls to ring to your already existing phones lines.</li>
                <li>This can be your office, home or even a cell phone.</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-3" trigger=" How do I know that I am receiving the calls within my specific market area?" >
              <ul id="answer-3">
                <li>The technology associated with toll free call routing allows us to “read” where incoming calls are originating from.</li>
                <li>Using that technology and knowing your specific market area, your call routing plan is designed to make sure that all calls with area codes and prefixes in your area route to you.</li>
                <li>Additionally, you will receive a monthly call report that reflects your incoming calls.</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-4" trigger=" Is a licensed number my only option?" >
              <ul id="answer-4">
                <li>No, we offer private consulting for clients with specific number requests.</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-5" trigger="  What do I get for the monthly fees I pay?" >
              <ul id="answer-5">
                <li>You get exclusive rights to a time tested and proven tool to help increase the response to your advertising campaigns.</li>
                <li>As a licensee, you get the exclusive rights to include the toll free vanity number in all of your advertising and marketing campaigns.</li>
                <li>Once you have licensed a number, that number becomes unavailable to the competitors in your market.</li>
                <li>We will carry and deliver your calls to the destination you choose and provide you with a monthly call detail report.</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-6" trigger="  Why should I use a toll free vanity number for local advertising instead of just a local number?" >
              <ul id="answer-6">
                <li>Using a toll free number for local advertising offers many benefits to you. </li>
                <li>First and foremost, using a toll free vanity number in your advertising helps make your unique message more memorable. </li>
                <li>Vanity numbers tell consumers who you are or what you do and how to reach you. </li>
                <li>Studies indicate that consumers equate businesses that offer toll free vanity numbers as being more established and offering quality products and premium services, giving your business an enhanced image and competitive advantage in your market.</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-7" trigger="  Do I have to make a long term commitment?" >
              <ul id="answer-7">
                <li>No, the initial agreement term is only for six months, renewing on a month to month basis after that unless you cancel your service. </li>
                <li>You can cancel at any point after the initial term has been met with a 30-day written notice.</li>
              </ul>
            </Collapsible>
            <Collapsible className="faq-8" trigger="  What do I need to do to get started?" >
              <ul id="answer-8">
                <li>First, we need to get some information from you like your name and the name of your business.</li>
                <li>You can complete our short information form and submit it to us or simply call us at 1-800-DialWord to get started.</li>
              </ul>
            </Collapsible>
          </div>
        </div>
      )
  }
}

export default Faq;
