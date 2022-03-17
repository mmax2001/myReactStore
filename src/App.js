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
import { FooterBitba } from "./components/footer/footer";
import FormCheckOut from "./components/FormCheckOut/FormCheckOut";

function App() {
  
  

  return (
    
    <CartCustomProvider>
    <>  
      <BrowserRouter>
          
            <div className='header'><NavBar></NavBar></div>
              <Routes>
                <Route exact path="/" element={ <div className='mainPersonal'><ItemListContainer greeting="Hola Coders!"/></div> }/>
                <Route exact path='/productos/:catID' element={ <ItemListContainer/> }/>
                <Route exact path='/item/:itemID' element={ <ItemDetailContainer/> } />
                <Route exact path="/cart" element={<Cart/>}/>
                <Route exact path="/contacto" element={<Form/>}/>
                <Route exact path="/formCheckOut" element={<FormCheckOut/>}/>
                <Route path="*" element={ <Navigate to ="/"/>}/>            
              </Routes>
          
            <div><FooterBitba></FooterBitba></div>
    
      </BrowserRouter>
    </>
    </CartCustomProvider>
       
  )
}

export default App;
