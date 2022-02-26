import logo from './dibujoLogo.svg'
import { Link } from 'react-router-dom'
import { CartWidget } from '../cartWidget/CartWidget'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './NavBar.css'

export const NavBar=()=>{
    return(
        <header className="header">
            <Link to="/">
                <img src={logo} alt="logo" className='logoStyle'/>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>
                <h1>Bitba</h1>
            </Link>
            <nav className="header-navbar">
                <Link to="/productos/cables" className="header-link-button">Cables</Link>
                <Link to="/productos/adaptadores"className="header-link-button">Adaptadores</Link>
                <Link to="/productos/fuentes" className="header-link-button">Fuentes</Link>
                <Link to="/productos/rigs"className="header-link-button">Rigs</Link>
                <CartWidget></CartWidget>  
                {/* <div style={{fontSize:"1.3em" ,marginBottom:"15px"}}>             
                    <FontAwesomeIcon icon={faShoppingCart} />
                </div> */}
            </nav>
        </header>
    )
}
