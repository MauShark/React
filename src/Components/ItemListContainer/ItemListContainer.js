import React from 'react';

import './ItemListContainer.css';


function ItemListContainer ({probando1,probando2}) {
    return(
        <div className="queonda">
            <div>{probando1}</div>
            <div><p>{probando2}</p></div>
        </div>
    );
}
    

export default ItemListContainer;