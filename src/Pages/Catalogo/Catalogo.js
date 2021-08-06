import React, { useState } from "react";
import ItemListContainer from "../../Components/ItemListContainer/ItemListContainer";

function Catalogo() {
  let [category, setCategory] = useState([]);

  //console.log(category)
  let handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="catalogo-container">
      <div style={{ padding: 20, display: "flex", justifyContent: "center" }}>
        <h2>NUESTROS PRODUCTOS</h2>
      </div>
      <div
        className="categoria-selector"
        style={{ position: "relative", margin: 20 }}
      >
        <select onChange={handleChange}>
          <option value="">Seleccione una categoria</option>
          <option value="tecnologia">Tecnologia</option>
          <option value="hogar">Hogar</option>
          <option value="ropa">Ropa</option>
        </select>
      </div>

      <ItemListContainer category={category} />
    </div>
  );
}
export default Catalogo;
