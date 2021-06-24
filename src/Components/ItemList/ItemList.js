import React , { useState,useEffect }from 'react';
import './ItemList.css'

function Prueba() {
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

    //<p>${productos.precio} </p>
    <ul>
        {productos.map(productos => (
            
          <li key={productos.id}>
            <div className="item">
                <img src={productos.img} />
                <h3>{productos.title}</h3>
                <p>{productos.description}</p>
                
                
                </div>
          </li>
        ))}
      </ul>
);
}

export default Prueba;

