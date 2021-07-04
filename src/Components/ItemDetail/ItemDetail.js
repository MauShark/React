import React , {useEffect,useState}from 'react'
import { Card ,Image} from 'semantic-ui-react';
import './ItemDetail.css';
import Counter from '../ItemCount/ItemCount';
const ItemDetail = ({match}) => {
    //console.log('match',match)
    let itemId=match.params.id;
    let [item , setItems]= useState([]);
    //console.log(itemId)
    useEffect(()=>{
        fetch(`https://mocki.io/v1/06db9043-d3a3-479f-9144-646997961fe5`)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
            })
    },[itemId])
    //console.log(item)
    return (
        <div>
            <div><h2>Detalle</h2></div>
            {item.filter(producto=>producto.id == itemId).map((productoFiltrado)=>{
                //console.log(item)
                //console.log(itemId)
                return(
                    
                    <div className="detalle-producto">
                    <Card >
                        <Image id="fondocard"src={productoFiltrado.img} wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>{productoFiltrado.title}</Card.Header>
                            <Card.Description>{productoFiltrado.description}</Card.Description>
                        </Card.Content>
                        <Card.Content>{`$${productoFiltrado.precio}`}</Card.Content>
                        <Counter stock={productoFiltrado.stock}/>
                    </Card>
                    </div>
                );
            })}
        </div>
    )
}

export default ItemDetail
