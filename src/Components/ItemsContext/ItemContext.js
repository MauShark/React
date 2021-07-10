import React , {createContext , useContext, useState}from 'react'


export let ItemsContext = createContext({});

export let useItemsContext = ()=> useContext(ItemsContext);



export let ItemsProvider = ({children}) => {
    let [carrito, setCarrit] = useState([]);
    console.log(carrito)
    let vaciarCarrito=()=>setCarrit([]);

    let AgregarAlCarrito=(item,cantidad)=>{
        setCarrit(prev=>[...prev,{...item,cantidad}])
    }

    // let eliminarProducto=(id,cantidad)=>{
    //     let borrarproducto;
    //     carrito.findIndex(element=>carrito.id ===id).map(borrarproducto)
        
    //     setCarrit(carrito.slice(borrarproducto,1))

    // }

    return (
        <ItemsContext.Provider value= {{carrito,setCarrit,vaciarCarrito ,AgregarAlCarrito }}>
            {children}
        </ItemsContext.Provider>
    )
}















