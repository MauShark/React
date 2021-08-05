import React , { useEffect } from 'react';
import { useItemsContext } from '../ItemsContext/ItemContext';

let TicketUser=({ticket})=>{
    let {setCarrit}=useItemsContext();
    //console.log(ticket)
    useEffect(()=>{
        setCarrit([])
    },[])
    return(
        <div>
            <h2>
                {`Su orden esta siendo procesada su ticket es : ${ticket}`}
            </h2>
        </div>
    )


}
export default TicketUser;