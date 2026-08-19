import React from 'react';
import './leftsection.css';
function Rightsection() {
    return ( 
 <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>Direct mutual funds</h1>
          <p>Invest in over 2000 direct mutual funds directly without a distributor. Save up to 1.5% in commissions every year.</p>
         <p><i class="fa-solid fa-circle-exclamation"></i>Available on</p>
         <div className="links">
          <a href="" style={{textDecoration:"none"}}>Coin <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
        </div>
        <div className="col-6">
          <img src="media/images/investments-mf.png" />
        </div>
      </div>
    </div>

     );
}

export default Rightsection;