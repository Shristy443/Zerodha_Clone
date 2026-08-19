import React from 'react';
import './leftsection.css';
function Leftsection_1() {
    return ( 
        <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/investments-fo.png" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>
Futures & Options</h1>
          <p>Trade metals, oil, and agri commodities on MCX and stock and index futures and options on NSE.
</p>
               <p><i class="fa-solid fa-circle-exclamation"></i>Available on</p>
      <div className="links">
  <div>
    <a href="" style={{textDecoration:"none"}}>Kite <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <a href="" style={{textDecoration:"none"}}>Margin calculator <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    {/* <a href="" style={{textDecoration:"none"}}>Smallcase <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> */}
  </div>

  <div>
    <a href="" style={{textDecoration:"none"}}>Sensibull <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    <a href="" style={{textDecoration:"none"}}>Streak <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    {/* <a href="" style={{textDecoration:"none"}}>Market overview <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a> */}
  </div>
</div>
         
           
          </div>
        </div>
      </div>

     );
}

export default Leftsection_1;

