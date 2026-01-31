import React from "react";

function Stats() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Left Image Section */}
        <div className="col-md-6 text-center">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "90%" }}
            alt=""
          />

          <div className="mt-3">
            <a href="#" className="me-4" style={{ textDecoration: "none" }}>
              Explore our products <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a href="#" style={{ textDecoration: "none" }}>
              Try kite demo
            </a>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="col-md-6">

          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with 3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just facilitate
            transactions, but actively help you do better with your money.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Stats;
