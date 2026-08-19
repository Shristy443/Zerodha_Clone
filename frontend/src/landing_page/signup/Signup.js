// import React from 'react';
// import { useState } from 'react';
// import "./signup.css";
// function Signup() {
//     const [isLogin, setIsLogin] = useState(true);
//     return ( 
//         <div className="col-6 p-5">
//         <div className="container mt-5 ">
//         <div className="form-container">
//         <div className="form-toggle">
//         <button className={isLogin? 'active':""} onClick={()=>setIsLogin(true)}>Login</button>
//         <button className={!isLogin ? 'active' : ""} onClick={()=>setIsLogin(false)}>Signup</button>
//         </div>
//         {isLogin ? 
//         <>
//         <div className=" form">
//             <h2>Login</h2>
//             <input type="   Email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//             <a href="#">Forgot Password?</a>
//             <button>Login</button>
//             <p>Not a Member? <a href="#" onClick={()=>setIsLogin(false)}>Signup</a></p>
//         </div>
//         </> : 
//         <>
//         <div className="form">
//             <h2>Signup</h2>
//             <input type="text" placeholder="Name" />
//             <input type="   Email" placeholder="Email" />
//             <input type="password" placeholder="Password" />
//              <input type="password" placeholder="Confirm Password" />
//               <button>Signup</button>
//              </div>
             
           
//         </>}
//         </div>

//         </div>
//         </div>

//         // // right section
//         // <div className="col-6 p-5">
//         //         <h1>hello</h1>
//         //  </div>

//      );
// }

// export default Signup;