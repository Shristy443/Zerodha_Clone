import React from "react";
function Investment() {
    return(
        <div className="container">

  {/* Heading */}
  <div className="row p-3 mt-5">
    <h2 className="text-center">
      Investment options with Zerodha demat account
    </h2>
  </div>


  {/* Investment Options */}
  <div className="row p-3 mt-5">

    {/* LEFT COLUMN */}
    <div className="col-6">

      {/* Stocks */}
      <div className="row mb-5">
        <div className="col-4 text-center">
          <img
            src="media/images/stocks-acop.svg"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-8">
          <h3>Stocks</h3>
          <p className="text-muted">
            Invest in all exchange-listed securities
          </p>
        </div>
      </div>


      {/* IPO */}
      <div className="row mb-5">
        <div className="col-4 text-center">
          <img
            src="media/images/ipo-acop.svg"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-8">
          <h3>IPO</h3>
          <p className="text-muted">
            Apply to the latest IPOs instantly via UPI
          </p>
        </div>
      </div>

    </div>


    {/* RIGHT COLUMN */}
    <div className="col-6">

      {/* Mutual Funds */}
      <div className="row mb-5">
        <div className="col-4 text-center">
          <img
            src="media/images/mf-acop.svg"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-8">
          <h3>Mutual funds</h3>
          <p className="text-muted">
            Invest in commission-free direct mutual funds
          </p>
        </div>
      </div>


      {/* Futures & Options */}
      <div className="row mb-5">
        <div className="col-4 text-center">
          <img
            src="media/images/fo-acop.svg"
            style={{
              width: "80px",
              height: "80px",
              objectFit: "contain",
            }}
          />
        </div>

        <div className="col-8">
          <h3>Futures & options</h3>
          <p className="text-muted">
            Hedge and mitigate market risk through simplified F&O trading
          </p>
        </div>
      </div>

    </div>

  </div>


  {/* Button */}
  <div className="row">
    <div className="col text-center">
      <button onClick={() => window.location.href = "/Investments "}
        className="btn btn-primary"
        style={{
          padding: "12px 35px",
          fontSize: "18px",
        }}
      >
        Explore Investments
      </button>
    </div>
  </div>

</div>
     );
}

export default Investment;