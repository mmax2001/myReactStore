import './App.css';
import './styles.css';
import { ItemListContainer } from "./components/container/ItemListContainer";
import { Component } from 'react';
import { NavBar } from './components/NavBar/NavBar';

function App() {
    return ( <
        >
        <
        div className = 'contenedorGrid' >
        <
        div className = ''
        header > < NavBar > < /NavBar></div >
        <
        div className = 'mainPersonal' > < ItemListContainer greeting = "Hola Coders!" / > < /div> {
            /* <NavBar className='header'></NavBar>
                    <ItemListContainer className='mainPersonal' greeting="Hola Coders!"/> */
        } <
        /div> <
        />
    );
}

export default App;