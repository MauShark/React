import React , { useState,useEffect }from 'react';
import './ItemListContainer.css'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import { Link } from 'react-router-dom';
import {Grid} from 'semantic-ui-react';
function ItemListContainer() {
    let [productos, setItems] = useState([]);
    useEffect(() => {
        fetch("https://mocki.io/v1/06db9043-d3a3-479f-9144-646997961fe5")
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
            })
            //console.log(productos)
    },[])
    return (
        <div className="container-list row">
            {productos.map((producto) => {
                console.log(producto)
                return (
                    <div key={producto.id} style={{paddingBottom: 50}} className="col">
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

