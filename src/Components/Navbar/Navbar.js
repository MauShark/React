import React from 'react';
import { Menu } from 'semantic-ui-react';
import Carrito from '../Carrito/Carrito';


function Navbar () {
    

    return(

        <Menu>
        <Menu.Item
          name='Nosotros'
        >
          Nosotros
        </Menu.Item>

        <Menu.Item
          name='Catalogo'
        >
          Catalogo
        </Menu.Item>

        <Menu.Item
          name='Contacto'
        >
          Contacto
        </Menu.Item>
        
        
          <Menu.Item 
          name="Carrito"
          >
         <Carrito/>
          </Menu.Item> 
      </Menu>
      
    );
}


export default Navbar;