import { useState ,useContext } from "react"
import { Button,Card } from "react-bootstrap"
import { Link,Navigate } from "react-router-dom"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/CartContext"
import './ItemDetail.css'

export const ItemDetail=({nombre,precio,id,categoria,imagen,descrip,stock})=>{
    
    const [cantidad,setCantidad]=useState(0)

    const {cartBuy,addToBuyCart,isInCart}=useContext(CartContext)
    console.log(cartBuy)

    const handleAddToCart=()=>{
        if (cantidad===0) return

        if(!isInCart(id)){
 
            const addItem={
                id,nombre,precio,cantidad,stock
            }
            console.log(addItem)
            addToBuyCart(addItem)
        }
    }
    
    
    
    return (
        <div style={{justifyContent:"center"}}>            
            <Card style={{ width: '35rem'}} className="cardStyle">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <span>Precio : ${precio}</span>
                    <ItemCounter max={stock} counter={cantidad} setCounter={setCantidad}></ItemCounter>                
                </Card.Text>
                <p>Descripcion :</p>
                <Card.Text>{descrip}</Card.Text>
                <Link>Ir al carrito</Link>
                <Button onClick={handleAddToCart}>Agregar al carrito</Button>            
                {
                    isInCart(id)?
                    <Link>Ir al carrito</Link>
                    :
                    <>
                        <Button onClick={handleAddToCart}>Agregar al carrito</Button>
                    </>
                }
            </Card.Body>
            </Card> 
        </div>
    )
}