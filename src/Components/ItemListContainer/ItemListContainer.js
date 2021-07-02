import React , { useState,useEffect }from 'react';
import './ItemListContainer.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';
function ItemListContainer() {
    let [productos, setItems] = useState([]);
    useEffect(() => {
        fetch("https://mocki.io/v1/1f5c0fb9-b390-49bd-8569-ca2fe348bf8c")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
            })
            //console.log(productos)
        },[])
return (

    <div className="item">
        {productos.map((producto) => {
            console.log(producto)
            return (
                <div key={producto.id}>
                    <Link to={`/Detalle/${producto.id}`}>
                        <ItemDetailContainer data={producto}/>
                    </Link>
                </div>
            );
        })}
    </div>

);
}
export default ItemListContainer;

