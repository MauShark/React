import React , { useEffect,useState}from 'react'
import { Card ,Image} from 'semantic-ui-react';
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
import {db} from '../firebase/firebase';
import { useParams } from 'react-router';
const ItemDetail = () => {

    let {id} = useParams()
    let [item , setItems]= useState([]);
    
    useEffect(()=>{
        // fetch(`https://mocki.io/v1/06db9043-d3a3-479f-9144-646997961fe5`)
        // .then(res => res.json())
        // .then(
        //     (result) => {
        //         setItems(result);
        //     })
        
        (async()=>{
           let resp = await db.collection("products").doc(id)
           .get()
           setItems({id: resp.id, ...resp.data()})
           //console.log(resp.data())
            
        })()
        
    },[id])
    //console.log(item)
    return (
        <div className="detalle-container">
            <div className="title-container">
                <h2>Detalle</h2>
            </div>
            <div className="detalle-card-container">   
                <div className="detalle-producto">
                    <Card>
                        <Image id="fondocard"src={item.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{item.title}</Card.Header>
                            <Card.Description>{item.description}</Card.Description>
                        </Card.Content>
                        <Card.Content>{`$ ${item.price}`}</Card.Content>
                        <Counter stock={item.stock} producto={item}/>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
