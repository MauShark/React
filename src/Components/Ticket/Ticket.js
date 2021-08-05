import React, { useState, useEffect } from 'react';
import FormComponent from '../FormComponent/FormComponent';
import { db } from '../firebase/firebase';
import { useItemsContext } from "../ItemsContext/ItemContext";



let Products=()=>{
    let [products,setProducts]=useState();
    let [data,setData]=useState();
    //console.log("dataguardada",data)
    //console.log(products)
    let buscador=name=>products.find(item=>item.nombre===data.nombre)
    //console.log("buscado",buscador(data))
    
    
    let addProduct=async (object)=>{
        
        await db.collection("Pedidos").doc().set(object);
        console.log("Subido")
        //console.log("obj",object)
        const data=object;
        setData(data)
        
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


    if(data){
       let ticket=buscador(data);
       return(
           <div>
               <h2>
                   {`Su orden esta siendo procesada su ticket es : ${ticket.id}`}
               </h2>
           </div>
       )

    }

    return(
        <div>
            
            <FormComponent addProduct={addProduct} />
            
            
        </div>
    )

}



export default Products;