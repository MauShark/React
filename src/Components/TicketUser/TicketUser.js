import React, { useEffect } from "react";
import { useItemsContext } from "../ItemsContext/ItemContext";
import "./TicketUser.css"
let TicketUser = ({ ticket }) => {
  let { setCarrit } = useItemsContext();
  //console.log(ticket)
  useEffect(() => {
    setCarrit([]);
  }, []);
  return (
    <div className="ticket-container">
      <h2>{`Su orden esta siendo procesada su ticket es : ${ticket}`}</h2>
    </div>
  );
};
export default TicketUser;
