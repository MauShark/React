import React from 'react';
import { Menu } from 'semantic-ui-react';
import CarritoContainer from '../CarritoContainer/CarritoContainer';
import {Link} from 'react-router-dom';
import './Navbar.css';
function Navbar () {
  return(
    <div className="nabvar-container">
      <Menu >{/*style={{backgroundColor: "#353434"}}*/}
        <Menu.Item className="nabvar-item"
          name='Nosotros'
        >
          <Link to="/Nosotros" className="link">Nosotros</Link>
        </Menu.Item>

        <Menu.Item className="nabvar-item"
          name='Catalogo'
        >
          <Link to="/Catalogo" className="link">Catalogo</Link>
        </Menu.Item>

        <Menu.Item className="nabvar-item"
          name='Contacto'
        >
          <Link to="/Contacto" className="link">Contacto</Link>
        </Menu.Item>
        
        <Menu.Item className="nabvar-item"
          name="Carrito"
          >
          <Link to="/Carrito">
            <CarritoContainer/>
          </Link>
          
        </Menu.Item> 
      </Menu>
    </div>
  );
}


export default Navbar;