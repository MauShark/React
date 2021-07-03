import React from 'react';
import { Menu } from 'semantic-ui-react';
import Carrito from '../Carrito/Carrito';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar () {
  return(
    <div className="nabvar-container">
      <Menu>
        <Menu.Item
          name='Nosotros'
        >
          <Link to="/Nosotros" className="link">Nosotros</Link>
        </Menu.Item>

        <Menu.Item
          name='Catalogo'
        >
          <Link to="/Catalogo" className="link">Catalogo</Link>
        </Menu.Item>

        <Menu.Item
          name='Contacto'
        >
          <Link to="/Contacto" className="link">Contacto</Link>
        </Menu.Item>
        
        <Menu.Item 
          name="Carrito"
          >
          <Carrito/>
        </Menu.Item> 
      </Menu>
    </div>
  );
}


export default Navbar;