import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';
import { Button } from 'semantic-ui-react';
function Footer() {
    return (
        <div className="Footer-container">
            <div className="Title-container">
                <h2>Footer</h2>
            </div>
            <div className="Button-container">
                <Button>
                <Link to="/Nosotros" className="link">Nosotros</Link>
                </Button>
                <Button>
                <Link to="/Contacto" className="link">Contacto</Link>
                </Button>
                <Button>
                <Link to="/Catalogo" className="link">Catalogo</Link>
                </Button>
                <Button>
                <Link to="/" className="link">Home</Link>
                </Button>
            </div>
        </div>
    )
}

export default Footer

