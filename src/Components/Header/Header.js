import React from 'react';
import './Header.css';
import img from './paper-plane.png';


const Header = (props) => {
    return (
        <div className='Header-container'>
            <h1 style={{fontSize:40 ,fontStyle: "oblique"}}>{props.title}</h1>
            <h2 >{props.subtitle}</h2>
            <img src={img} alt="logo empresa" />
        </div>
        
    );
}

export default Header;