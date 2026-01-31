import React from 'react';

function Award() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>

        {/* Right Content */}
        <div className="col-6 p-5 mt-5">
          <h1>Largest stock broker in India</h1>

          <p className='mb-5'>
            2+ million Zerodha clients contribute to over 15% of all retail order
            volumes in India daily trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. securities</li>
              </ul>
            </div>
          </div>
           <img src="media/images/pressLogos.png"  style={{widht:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Award;
