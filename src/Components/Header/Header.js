import React from 'react';
import './Header.css';
import img from './paper-plane.png';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header-container'>
            <Link to="/" className="link">
                <h1 style={{fontSize:40 ,fontStyle: "oblique"}}>AVION DE PAPEL</h1>
            </Link>
            <img src={img} alt="logo empresa" />  
        </div>
    );
}
export default Header;