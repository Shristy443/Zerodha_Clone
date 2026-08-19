import React from "react";
import "./hero.css";
function Hero(

) {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1>Open a free demat and trading account online</h1>
        <h3 className="text-muted mt-3 fs-4">
          Start investing brokerage free and join a community of 1.6+ crore investors and traders
        </h3>

        <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/account_open.svg" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3>Signup now</h3>
          <p>Or track your existing application</p>
          <div>
            {/* phone box */}
            <div className="phone-box ">
  <span>+91</span>
  <input
    type="tel"
    placeholder="Enter your phone number"
  />
</div>

<div className="mt-3"> <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "40%", margin: "0 auto" }}
        >
          Get OTP
        </button></div>
          
      
          </div>
           
          
         
        </div>
          <h2>Already have a demat account?</h2>
        <p>Move your holdings to Zerodha and we'll cover your transfer costs, up to ₹500, 
             <a href="" style={{textDecoration: "none"}}>learn more</a>
        </p>
       
      </div>
    </div>
        {/* <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p> */}
      </div>
    </div>
  );
}

export default Hero;