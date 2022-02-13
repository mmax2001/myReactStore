import {ItemListContainer} from "./components/container/ItemListContainer";
import { NavBar } from './components/NavBar/NavBar';
import {BrowserRouter,Routes,Route,Navigate} from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './styles.css';

function App() {
  return (
    <>
    <BrowserRouter>
          <div className='contenedorGrid'>
            <div className='header'><NavBar></NavBar></div>
              <Routes>
                <Route path="/" element={ <div className='mainPersonal'><ItemListContainer greeting="Hola Coders!"/></div> }/>
                <Route path='/productos/:catID' element={ <ItemListContainer/> }/>
                <Route path='/item/:itemID' element={ <ItemDetailContainer/> } />
                <Route path="*" element={ <Navigate to ="/"/>}></Route>            
              </Routes>
          </div>
    </BrowserRouter>
    </>
  );
}

export default App;
