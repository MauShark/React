import React from 'react';
import './App.css';
//Components
import Header from'./Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contacto from './Pages/Contacto/Contacto';
import Nosotros from './Pages/Nosotros/Nosotros';
import Catalogo from './Pages/Catalogo/Catalogo';
import ItemDetail from './Components/ItemDetail/ItemDetail';
import Footer from './Components/Footer/Footer';
import {ItemsProvider} from './Components/ItemsContext/ItemContext';
import Cart from './Components/Cart/Cart';


function App(){
return(
  <ItemsProvider>
    <Router>
        <div className="app-container">
          <Header/>
          <Navbar/>
          <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Nosotros" component={Nosotros} />
          <Route path="/Catalogo" component={Catalogo} />
          <Route path="/Contacto" component={Contacto} />
          <Route path="/Detalle/:id"  component={ItemDetail}/>
          <Route path="/Cart" component={Cart}/>
          </Switch>
          <Footer/>
        </div>
    </Router>
  </ItemsProvider>
  )

}
export default App; 

