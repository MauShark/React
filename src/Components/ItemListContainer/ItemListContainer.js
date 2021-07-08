import React , { useState,useEffect }from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList';

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
        <div className="Container-list row ">
            <ItemList productos={productos}/>
        </div>
);
}
export default ItemListContainer;

