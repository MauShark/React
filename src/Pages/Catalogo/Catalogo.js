import React from 'react'
import ItemListContainer from '../../Components/ItemListContainer/ItemListContainer';

function Catalogo(){
    return(
        <div className="catalogo-container">
            <div style={{ padding: 20 , display:"flex" , justifyContent: "center" }}>
                <h2>NUESTROS PRODUCTOS</h2>
            </div>
            <ItemListContainer/>
        </div>
    )
}
export default Catalogo;