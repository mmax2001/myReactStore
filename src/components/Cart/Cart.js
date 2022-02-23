import { useContext } from "react"
import { Button } from "react-bootstrap"
import { CartContext } from "../../context/CartContext"
import { BsCartDash } from "react-icons/bs"

export const Cart=()=>{
    
    const {cart,totalItemsPrice,clearCart,removeItem}=useContext(CartContext)    
    
    return(
        <div className="container">
            <h2>Finalizar Compra</h2>
            <hr />
            {
                cart.map((item)=>(

                    <div key={item.id}>
                        <h3>{item.nombre}</h3>
                        <p>Total item :{item.cantidad*item.precio}</p>
                        <p>Total unidades item :{item.cantidad}</p>
                        <Button onClick={()=>removeItem(item.id)}><BsCartDash></BsCartDash></Button>
                    </div>
                ))
                    
            }
            <hr />
            <h3>Importe total :${totalItemsPrice()}</h3>
            <div>
                <Button onClick={clearCart}>
                    Vaciar Carrito
                </Button>
            </div>
        </div>
    )
}