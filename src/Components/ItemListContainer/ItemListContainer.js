import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { db } from "../firebase/firebase";
import { useItemsContext } from "../ItemsContext/ItemContext";
import Load from "../Spinner/Spinner";
function ItemListContainer(props) {
  let [productos, setItems] = useState([]);
  let { category } = props;
  let { loading, setLoading } = useItemsContext();

  useEffect(() => {
    (async () => {
      let products = db.collection("products");
      if (category == "") {
        let response = await db.collection("products").get();
        setItems(
          response.docs.map((item) => ({ id: item.id, ...item.data() }))
        );
      }
      if (category != "")
        products = db.collection("products").where("category", "==", category);
      let response = await products.get();
      setItems(response.docs.map((item) => ({ id: item.id, ...item.data() })));
      setLoading(false);
    })();
  }, [category]);

  return (
    <div className="Container-list row ">
      {loading ? <Load /> : <ItemList productos={productos} />}
    </div>
  );
}
export default ItemListContainer;
