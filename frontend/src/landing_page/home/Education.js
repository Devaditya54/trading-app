import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/education.svg"
            style={{ width: "80%" }}
            alt=""
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">

          <h1 className="mb-3">Free and open market education</h1>

          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            Varsity <i className="fa-solid fa-arrow-right"></i>
          </a>

          <p className="text-muted mt-4">
            TradingQ&A, the most active trading and investment community in India
            for all your market related queries.
          </p>

          <a href="#" style={{ textDecoration: "none" }}>
            TradingQ&A <i className="fa-solid fa-arrow-right"></i>
          </a>

        </div>

      </div>
    </div>
  );
}

export default Education;
