import React , {createContext , useContext, useState}from 'react'


export let ItemsContext = createContext({});

export let useItemsContext = ()=> useContext(ItemsContext);



export let ItemsProvider = ({children}) => {
    let [carrito, setCarrit] = useState([]);
    console.log("carrito",carrito)

    let [totalP,setTotal]=useState([0]);
    console.log("PrecioTotal",totalP)
    
    let ActualizarTotal=()=>{
        let PrecioTotal=carrito.reduce((acc,item)=>acc+(item.price*item.cantidad),0)
        setTotal(PrecioTotal)
    }

    let vaciarCarrito=()=>setCarrit([]);


    
    let AgregarAlCarrito=(item,cantidad)=>{
        //setCarrit(prev=>[...prev,{...item,cantidad}])
        if(buscadorCarrito(item.id)){
        let carritoProv=carrito.map(producto=>{
            if(producto.id===item.id){
                return {...producto,cantidad: producto.cantidad + cantidad}
            }else return producto;
        })
        setCarrit(carritoProv);
        } else {
        setCarrit(prev=>[...prev, {...item ,cantidad }]);
        }
      
    };
    let buscadorCarrito=id=>carrito.some(item=>item.id===id);

    
    let borrarItems=(item)=>{
       
        let carritoCop = [...carrito];
        //console.log("COPIA",carritoCop)
        let indexBuscado = carritoCop.findIndex(produc => item.id === item.id);
        if (indexBuscado !== -1) {
            carritoCop.splice(indexBuscado, 1);
            setCarrit(carritoCop);
        }
        


    }

    return (
        <ItemsContext.Provider value= {{carrito,setCarrit,vaciarCarrito ,AgregarAlCarrito ,ActualizarTotal,totalP,borrarItems}}>
            {children}
        </ItemsContext.Provider>
    )
}















