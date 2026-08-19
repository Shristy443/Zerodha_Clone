import React from 'react';
import './leftsection.css';
function Leftsection() {
    return ( 
        <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/investments-stocks.png" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Stocks</h1>
          <p>Trade stocks for delivery or intraday on over 5000 stocks listed on National Stock Exchange (NSE) and Bombay Stock exchange (BSE).</p>
          <p><i class="fa-solid fa-circle-exclamation"></i>Available on</p>
      <div className="links">
  <div>
    <a href="" style={{textDecoration:"none"}}>Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <a href="" style={{textDecoration:"none"}}>Console <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <a href="" style={{textDecoration:"none"}}>Smallcase <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
  </div>

  <div>
    <a href="" style={{textDecoration:"none"}}>StockReports+ <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <a href="" style={{textDecoration:"none"}}>Streak <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <a href="" style={{textDecoration:"none"}}>Market overview <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
  </div>
</div>
           
          </div>
        </div>
      </div>
      
    

     );
}

export default Leftsection;