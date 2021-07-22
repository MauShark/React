import React , {createContext , useContext, useState}from 'react'


export let ItemsContext = createContext({});

export let useItemsContext = ()=> useContext(ItemsContext);



export let ItemsProvider = ({children}) => {
    let [carrito, setCarrit] = useState([]);
    console.log("carrito",carrito)

    
    
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

    // let eliminarProducto=(id,cantidad)=>{
    //     let borrarproducto;
    //     carrito.findIndex(element=>carrito.id ===id).map(borrarproducto)
        
    //     setCarrit(carrito.slice(borrarproducto,1))

    // }

    return (
        <ItemsContext.Provider value= {{carrito,setCarrit,vaciarCarrito ,AgregarAlCarrito/* ,borrarItems */}}>
            {children}
        </ItemsContext.Provider>
    )
}















