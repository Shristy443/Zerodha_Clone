import React from "react";

import Hero from "./Hero";
import Investment from './investment';
import Steps from "./steps";
import FAQs from "./FAQ";
import OpenAccount from "../OpenAccount";

function SignupPage() {
    return ( 
        <>
        <Hero />
        <Investment/>
        <Steps/>
        <FAQs/>
        <OpenAccount/>
        </>
     );
}

export default SignupPage;