import React from 'react';
import Hero from './hero';
import Leftsection from './leftsection';
import Rightsection from './rightsection';
import Leftsection_1 from './leftsection_1';
import Rightsection_1 from './rightsection_1';
import LS_2 from './LS_2';
import RS_2 from './RS_2';
import OpenAccount from '../OpenAccount';
function InvestmentsPage() {
    return ( 
     <>
     <Hero/>
     <Leftsection/>
     <Rightsection/>
        <Leftsection_1/>
        <Rightsection_1/>
        <LS_2/>
        <RS_2/>
        <OpenAccount/>
     
    
     </>
     );

}

export default InvestmentsPage;