import React from 'react';
import './App.css';

//Components
import Header from'./Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Navbar from './Components/Navbar/Navbar';
import Counter from './Components/ItemCount/ItemCount';
import Prueba from './Components/ItemList/ItemList';



function App(){
return(
        <div className='container'>
          <Header
            title={'AVION DE PAPEL'}
            subtitle={'Soluciones al instante'}
          />
         <Navbar
         
         />
       
      
      <ItemListContainer
          probando1={"asd"}
          probando2={"asdadsadsadsL asddsaadsads!!!!!"}
          />
          
        <Counter/>

        <Prueba/>


        </div>
        
        
        

      )

}
export default App;