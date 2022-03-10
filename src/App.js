import {ItemListContainer} from "./components/container/ItemListContainer";
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Cart } from "./components/Cart/Cart";
import { CartCustomProvider } from "./context/CartContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';
import { NavBar } from './components/NavBar/NavBar';
import {Form} from './components/Form/Form.js';


function App() {
  
  

  return (
    
    <CartCustomProvider>
    <>  
    <BrowserRouter>
          <div className='contenedorGrid'>
            <div className='header'><NavBar></NavBar></div>
              <Routes>
                <Route path="/" element={ <div className='mainPersonal'><ItemListContainer greeting="Hola Coders!"/></div> }/>
                <Route path='/productos/:catID' element={ <ItemListContainer/> }/>
                <Route path='/item/:itemID' element={ <ItemDetailContainer/> } />
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/contacto" element={<Form/>}/>
                <Route path="*" element={ <Navigate to ="/"/>}/>            
              </Routes>
          </div>
    </BrowserRouter>
    </>
    </CartCustomProvider>
       
  )
}

export default App;
