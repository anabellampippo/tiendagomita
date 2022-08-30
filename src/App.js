import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Menu }  from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';

function App() {
  return ( 
   <>
    <Menu/>
    <ItemListContainer greeting="Hola"/>
   </> 
 
    
  );
}

export default App;
