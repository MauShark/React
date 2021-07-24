import React, { useState, useEffect } from 'react';
import FormComponent from '../FormComponent/FormComponent';
import { db } from '../firebase/firebase';



let Products=()=>{
    let [products,setProducts]=useState();
    //console.log(products)
    let addProduct=async (object)=>{
        await db.collection("Pedidos").doc().set(object);
        console.log("Subido")
    }
    const getProducts = () => {
		db.collection("Pedidos").onSnapshot((querySnapshot) => {
			const docs = [];
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducts(docs);
		});
	};
    useEffect(() => {
		getProducts();
	}, []);
    return(
        <div>
            <FormComponent addProduct={addProduct} />
        </div>
    )

}



export default Products;