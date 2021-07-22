import React, { useState ,useEffect} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useItemsContext } from "../ItemsContext/ItemContext";
import img from './carrito-de-compras.png';
import './Modal.css'
import { Link } from "react-router-dom";
const CarritoModal = () => {
  let {carrito,vaciarCarrito/* ,borrarItems */}=useItemsContext()
  let [totalP,setTotal]=useState([0])
  //console.log(totalP)

  let vaciar=()=>vaciarCarrito([]);

  const [modal, setModal] = useState(false);
  

  const toggle = () => setModal(!modal);
  useEffect(()=>{

    let PrecioTotal=carrito.reduce((acc,item)=>acc+(item.price*item.cantidad),0)
    setTotal(PrecioTotal)
  },[carrito]) 
    
  
  return (
    <div>
      <Button onClick={toggle} className="button-modal">
          <img src={img} height="30" width="30" alt="Carrito de compras" /><span>{carrito.length}</span>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Carrito</ModalHeader>
        <ModalBody>
          {carrito.map((productoSelect)=>{
              return(
              <div className="carrito-detail-container">
                <div className="carrito-detail">
                    {` Producto: ${productoSelect.title} 
                       Precio: $${productoSelect.price} 
                       Cantidad: ${productoSelect.cantidad}
                    `}
                  <Button style={{backgroundColor:"red" , fontSize:10}}>X</Button>
                </div>   
                
              </div>
              
              )
          })}
        </ModalBody>
        <ModalFooter>
            <p>Total:<span>{totalP}</span></p>
          <Button color="secondary" onClick={toggle}><Link to="/Cart" className="link" total={totalP}>¡Comprar!</Link></Button>
          <Button color="dark" onClick={toggle}>Seguir</Button>
          <Button color="blue" className="button-delete" onClick={vaciar}>Vaciar Carrito</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CarritoModal;