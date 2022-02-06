import logo from './dibujoLogo.svg'
import './NavBar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

export const NavBar=()=>{
    return(
        <header className="header">
            <img src={logo} class Name="App-logo" alt="logo" />
            <h1>Bitba</h1>
            <nav className="header-navbar">
                <p className="header-link-button">Section1</p>
                <p className="header-link-button">Section2</p>
                <p className="header-link-button">Section3</p>
                <div style={{fontSize:"1.3em" ,marginBottom:"15px"}}>             
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div>
            </nav>
        </header>
    )
}
