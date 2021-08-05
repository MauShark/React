import React , { useState,useEffect }from 'react';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
import {db} from '../firebase/firebase';
import { useItemsContext } from '../ItemsContext/ItemContext';
import Load from '../Spinner/Spinner';
function ItemListContainer(props) {
    let [productos, setItems] = useState([]);
    let {category}=props
    let {loading,setLoading}=useItemsContext()
    //console.log(category)
    
    
    useEffect(() => {
        // fetch("https://mocki.io/v1/06db9043-d3a3-479f-9144-646997961fe5")
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         setItems(result);
        //     })
        //     console.log(productos)
        (async()=>{
            let products=db.collection("products");
            if(category==""){
            let response =await db.collection("products").get()
            setItems(response.docs.map(item=>({id:item.id,...item.data() })))
            }
            if(category !="") products=db.collection("products").where("category","==",category)
            let response = await products.get();
            setItems(response.docs.map(item=>({id:item.id,...item.data() })))
            setLoading(false)
        })();
        
    },[category])
    
    

    return (
        <div className="Container-list row ">
            {loading?(<Load/>):(
            <ItemList productos={productos}/>
            )}
        </div>
);
}
export default ItemListContainer;

