import React from 'react';

import './Gretting.css';


function Gretting ({probando1,probando2}) {
    return(
        <div className="queonda">
            <div>{probando1}</div>
            <div><p>{probando2}</p></div>
        </div>
    );
}


export default Gretting;