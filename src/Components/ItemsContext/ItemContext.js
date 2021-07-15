import React , {createContext , useContext, useState}from 'react'


export let ItemsContext = createContext({});

export let useItemsContext = ()=> useContext(ItemsContext);



export let ItemsProvider = ({children}) => {
    let [carrito, setCarrit] = useState([]);
    let [precioTotal,setTotal]=useState([])
    
    //console.log(carrito)
    
    let vaciarCarrito=()=>setCarrit([]);

    let totalCarrito=(item,cantidad)=>{
        
        let prueba=carrito.reduce((acc,item)=>acc+(item.price*item.cantidad),0)
        
        setTotal(prueba)
        console.log(precioTotal)
    }

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
        <ItemsContext.Provider value= {{carrito,setCarrit,vaciarCarrito ,AgregarAlCarrito }}>
            {children}
        </ItemsContext.Provider>
    )
}















