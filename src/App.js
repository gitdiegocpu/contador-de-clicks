
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import freeCodeCampLogo from './imagenes/freecodecamplogo.png'
import { useState } from 'react';


function App() {

  const[ numClicks, setNumClicks ] = useState(0);

  const manejarClick = () => {
     setNumClicks( numClicks + 1 );
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }
  return (
    <div className="App">
       <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
             src={freeCodeCampLogo} 
             alt='logo de freeCodeCamp'/>

       </div>
       <div className='contenedor-principal'>
          <Contador numClicks = { numClicks } />
          <Boton
          texto='Click'
          esBtoondeClick={true}
          manejarClick={manejarClick} />
          <Boton 
          texto='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador} /> 
       </div>
    </div>
  );
}

export default App;
