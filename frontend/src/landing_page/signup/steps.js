import React from 'react';
function Steps() {
    return (  
         <div className="container">

  {/* Heading */}
  <div className="row p-3 mt-5">
    <h2 className="text-center">
      Steps to open a demat account with Zerodha

    </h2>
  </div>
  <div className='row'>
   <div className="col-6">
          <img src="media/images/steps-acop.svg" />
          
        </div>
        <div className="col-6 p-5 mt-5">
            <div className="d-flex align-items-center gap-3">
         
             <div
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "1px solid grey",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    01
  </div>
  <p>
  Enter the requested details</p>
  </div>
  <hr />
   <div className="d-flex align-items-center gap-3">
         
             <div
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "1px solid grey",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    02
  </div>
  <p>
  Complete e-sign & verification</p>
  
  </div>
  <hr />
   <div className="d-flex align-items-center gap-3">
         
             <div
    style={{
      width: "30px",
      height: "30px",
      borderRadius: "50%",
      border: "1px solid grey",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    03
  </div>
  <p>
  Start investing!</p>
  </div>


         
          </div>
          </div>


          {/* next */}

          <div className="row p-3 mt-5">
   
  </div>
  <div className="container">
  <div className='row '>
   <div className="col-6">
          <img src="media\images\acop-benefits.svg"  style={{
    width: "600px",
    height: "400px",
    objectFit: "contain",
  }} />
          <h3>Benefits of opening a Zerodha demat account</h3>
          
        </div>
        <div className="col-6 p-5 mt-5">
            <h4>Unbeatable pricing</h4>
            <p>Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.</p>

<h4>Best investing experience</h4>
<p>Simple and intuitive trading platform with an easy-to-understand user interface.</p>
         
         <h4>No spam or gimmicks</h4>
         <p>Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.</p>
         <h4>The Zerodha universe</h4>
         <p>More than just an app — gain free access to the entire ecosystem of our partner products.</p>
         
          </div>
          </div>
  </div>

  {/* next */}

  <div className="container text center">
    <h3 className='mb-5 text center'>Explore different account types</h3>
    <div className="container">
         <div className="row g-4">
             <div className="col-4">
    <div className="border p-3 mb-4"style={{ border: "1px solid black",
    padding: "20px",height:"200px"}}>
        <h4>Individual Account</h4>
        <p>
Invest in equity, mutual funds and derivatives</p>
    </div>
    </div>
    
  <div className="col-4">
       <div className="border p-3 mb-4"style={{ border: "1px solid black",
    padding: "20px",height:"200px"}}>
        <h4>HUF Account</h4>
        <p>
Make tax-efficient investments for your family</p>
    </div>
  </div>
 
 <div className="col-4">
       <div className="border p-3 mb-4"style={{ border: "1px solid black",
    padding: "20px",height:"200px"}}>
        <h4>NRI Account</h4>
        <p>
Invest in equity, mutual funds, debentures, and more</p>
    </div>
 </div>
  
    </div>

      {/* Second row - 2 divs */}

      <div className="row g-4 mt-2">
 <div className="col-6">
<div className="border p-3 mb-4 h-500"style={{ border: "1px solid black",
    padding: "20px",height:"200px"}}>
        <h4>Minor Account</h4>
        <p>
Teach your little ones about money & invest for their future with them</p>
    </div>

 </div>

<div className='col-6'>
      <div className="border p-3 mb-4"style={{ border: "1px solid black",
    padding: "20px",height:"200px"}}>
        <h4>Corporate/LLP/Partnership</h4>
        <p>
Manage your business surplus and investments easily</p>
    </div>
</div>
      </div>


    
  </div>
  </div>
  </div>
    );
}

export default Steps;