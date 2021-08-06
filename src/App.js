import React from "react";
import "./App.css";
import img from "../src/homer.gif";
//Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contacto from "./Pages/Contacto/Contacto";
import Nosotros from "./Pages/Nosotros/Nosotros";
import Catalogo from "./Pages/Catalogo/Catalogo";
import ItemDetail from "./Components/ItemDetail/ItemDetail";
import Footer from "./Components/Footer/Footer";
import { ItemsProvider } from "./Components/ItemsContext/ItemContext";
import Carrito from "./Pages/Carrito/Carrito";
import Products from "./Components/Ticket/Ticket";

function App() {
  return (
    <ItemsProvider>
      <Router>
        <div className="app-container">
          <Header />
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Nosotros" component={Nosotros} />
            <Route path="/Catalogo/" component={Catalogo} />
            <Route path="/Contacto" component={Contacto} />
            <Route path="/Detalle/:id" component={ItemDetail} />
            <Route path="/Carrito" component={Carrito} />
            <Route path="/Comprar" component={Products} />
            <Route path="*">
              <div>
                <img src={img} width="100%" alt="homer's 404" />
              </div>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </ItemsProvider>
  );
}
export default App;
