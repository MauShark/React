import React , {useEffect,useState}from 'react'
import { Card ,Image} from 'semantic-ui-react';
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
            <h1>Detalle</h1>
            {item.filter(producto=>producto.id == itemId).map((productoFiltrado)=>{
                //console.log(item)
                //console.log(itemId)
                return(
                  
                    <Card>
                    <Image id="fondocard"src={productoFiltrado.img} wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{productoFiltrado.title}</Card.Header>
                        <Card.Description>{productoFiltrado.description}</Card.Description>
                    </Card.Content>
                    <Card.Content>{`$${productoFiltrado.precio}`}</Card.Content>
                    </Card>
            );
            })}
            
            
               
        </div>
    )
}

export default ItemDetail
