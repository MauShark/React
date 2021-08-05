import React from 'react';
import img from'./Portal.png'
import './Home.css'
function Home(){
    return (
        <div className="home-container">
            <div className="title-container">
                <h2>BIENVENIDO ☻♥</h2>
            </div>
            
            <img src={img} width="100%" alt="home"></img>
        </div>
    )
}

export default Home;