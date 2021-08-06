import React from "react";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import { Link } from "react-router-dom";

function ItemList({ productos }) {
  //console.log(productos);

  return (
    <div className="Container-list row ">
      {productos.map((producto) => {
        //console.log(producto)
        return (
          <div
            key={producto.id}
            style={{ paddingBottom: 20, paddingTop: 20 }}
            className="col"
          >
            <Link to={`/Detalle/${producto.id}`}>
              <ItemDetailContainer data={producto} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ItemList;
