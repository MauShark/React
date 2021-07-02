import React , {useEffect,useState}from 'react'
import { Card ,Image} from 'semantic-ui-react';
const ItemDetail = ({match}) => {
    //console.log('match',match.params.id)
    let itemId=match.params.id;
    let [item , setItems]= useState([]);
    console.log(itemId)
    useEffect(()=>{
        fetch(`https://mocki.io/v1/1f5c0fb9-b390-49bd-8569-ca2fe348bf8c`)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
            })
    },[itemId])
    console.log(itemId)
    console.log(item)
    let filtro= item.filter(producto=>{
        return (producto.id === itemId)
    });
    
    console.log(filtro)
    return (
        
        <div>
            <h1>Detalle</h1>
            {filtro.map((productoFiltrado)=>{
                
                return(
                  
                <Card>
                <Image id="fondocard"src={productoFiltrado.img} wrapped ui={false} />
                <Card.Content>
                    <Card.Header>{productoFiltrado.title}</Card.Header>
                    <Card.Description>{productoFiltrado.description}</Card.Description>
                </Card.Content>
                <Card.Content>{productoFiltrado.precio}</Card.Content>
                </Card>
            );
            })}
            
            
               
        </div>
    )
}

export default ItemDetail
