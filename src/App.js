
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamplogo.png'
function App() {
  return (
    <div className="App">
       <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
             src={freeCodeCampLogo} 
             alt='logo de freeCodeCamp'/>

       </div>
    </div>
  );
}

export default App;
