import React from 'react';
import './App.css';

//Components
import Header from'./Components/Header/Header';
import Gretting from './Components/Home/Gretting';
import Navbar from './Components/Navbar/Navbar';





class App extends React.Component{
  constructor (){
    super();
    this.state={
      

    }
  }

  render(){
    
      return(
        <div className='container'>
          <Header
            title={'AVION DE PAPEL'}
            subtitle={'Soluciones al instante'}
          />
         <Navbar
         
         />
       
      
      <Gretting
          probando1={"BIENVENIDOS A "}
          probando2={"AVION DE PAPEL !!!!!"}
          />
          
        </div>
        
        
        

      )

    }
  

}

export default App;