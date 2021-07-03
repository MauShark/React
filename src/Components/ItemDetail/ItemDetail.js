import React , {useEffect,useState}from 'react'
import { Card ,Image} from 'semantic-ui-react';
const ItemDetail = ({match}) => {
    //console.log('match',match.params.id)
    let itemId=match.params.id;
    let [item , setItems]= useState([]);
    console.log(itemId)
    useEffect(()=>{
        fetch(`https://mocki.io/v1/06db9043-d3a3-479f-9144-646997961fe5`)
        .then(res => res.json())
        .then(
            (result) => {
                setItems(result);
            })
    },[itemId])
    console.log(itemId)
    console.log(item)
    /* function asd(itemId){
        let {title}=item.find(el=>el.id == itemId)
        console.log({title})
        return title
    }
    let filtro=asd(itemId)
    console.log(filtro) */
     let {filtro}= item.filter(producto=>{
     return (producto.id === itemId.id)
    });  
    
   
    
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
