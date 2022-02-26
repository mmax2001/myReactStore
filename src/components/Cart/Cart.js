import { useContext } from "react"
import { Button } from "react-bootstrap"
import { BsCartDash } from "react-icons/bs"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import "./Cart.css"

export const Cart=()=>{
    
    const {cartBuy,totalItemsPrice,clearCart,removeItem}=useContext(CartContext)    
    

    if(cartBuy.length === 0 )  {
        return(
                    
            <div className="container">

                <h2 style={{fontSize:"20px" ,marginTop:"10px" }}>Su carrito se encuentra vacio</h2>
                <hr />
                    <Link to="/">
                        <Button variant="primary" style={{fontSize:"15px" }}>Volver a la tienda</Button> 
                    </Link>                
            </div>
        ) 
    }   
    return(
            <div className="container">
                
                <h2>Finalizar Compra</h2>
                    <hr />
                        {
                            cartBuy.map((item)=>(

                                <div key={item.id}>
                                    <h3 style={{fontSize:"18px" }}>{item.nombre}</h3>
                                    <p>Total item : ${item.cantidad*item.precio}</p>
                                    <p>Total unidades item : {item.cantidad}</p>
                                    <Button onClick={()=>removeItem(item.id)} className="iconStyle"><BsCartDash></BsCartDash></Button>
                                    <p>Quitar</p>
                                </div>
                            ))
                                
                        }
                        <hr />
                        <h3 style={{fontSize:"16px" }}>Importe total :${totalItemsPrice()}</h3>
                        <div>
                            <Button onClick={clearCart}>
                                Vaciar Carrito
                            </Button>
                        </div>
                    
            </div>
    )
}
