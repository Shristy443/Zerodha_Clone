import React from 'react';
import './leftsection.css';
function RS_2() {
    return ( 
 <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1>Fixed income</h1>
          <p>Invest in bonds with yields better than bank FDs guaranteed by the Government of India.</p>
        <div className="links">
        <a href="" style={{textDecoration:"none"}}>Govt. securities <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
          </div>
          <p>Invest in Gold electronically and gain market returns + fixed 2.5% per year on the invested amount, guaranteed by the Government of India.</p>
         <div className="links">
          <a href="" style={{textDecoration:"none"}}>Soverign Gold Bond(SGB)<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
       </div>
        </div>
        <div className="col-6">
          <img src="media/images/investments-income.png" />
        </div>
      </div>
    </div>

     );
}


export default RS_2;