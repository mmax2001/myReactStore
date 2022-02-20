import { useContext } from "react"
import {BsCart3} from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./CartWidget.css"

export const CartWidget = ()=>
{

    const {totalItemsCart}=useContext(CartContext)
    return (
        <Link to="/cart">
            <BsCart3 className="cartWidgetStyle"></BsCart3>
            <span className="badge wrapper">{totalItemsCart()}</span>
        </Link>

    )
}