import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
    return ( 
        <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Investments</h1>
        <h3 className="text-muted mt-3 fs-4">
       Everything from equities and derivatives to mutual funds and fixed income
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <Link to="/product" style={{ textDecoration: "none" }}>
            technology offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </Link>
        </p>
      </div>
      <div className="text-center mb-5">
        <img src='/media/images/investments-head.png' alt="Investments" className="img-fluid" />
      </div>
    </div>
     );

}
export default Hero;