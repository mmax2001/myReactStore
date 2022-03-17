import { useState,useContext } from "react"
import { ItemCounter } from "../ItemCounter/ItemCounter"
import { CartContext } from "../../context/CartContext"
import { Button,Card } from "react-bootstrap"
import { Link} from "react-router-dom";
import './ItemDetail.css'

export const ItemDetail=({nombre,precio,id,categoria,imagen,descrip,cantidadMin,stock})=>{
    
    const [cantidad,setCantidad]=useState(cantidadMin)    
    
    const {cartBuy,addToBuyCart,isInCart}=useContext(CartContext)
    console.log(cartBuy)

    //agrego al carrito el item
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
        <div style={{display:"flex",justifyContent:"center"}}>
        
            <Card style={{ width: '24rem'}} className="cardStyle">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <span>Precio : ${precio}</span>
                    <ItemCounter max={stock} min={cantidadMin} counter={cantidad} setCounter={setCantidad}></ItemCounter>                    
                </Card.Text>
                <p>Descripcion</p>
                <Card.Text>{descrip}</Card.Text>
                                            
                {
                    isInCart(id)?
                    <Link to="/cart">
                        <Button className="my-2" style={{ fontSize:"14px"}}>
                            Ir al carrito    
                        </Button>                                                
                    </Link>
                    :
                    <>
                        <Button onClick={handleAddToCart} style={{ fontSize:"14px"}}>Agregar al carrito</Button>
                    </>
                }
                <span>  </span>
                        <Link to="/">                        
                            <Button style={{ fontSize:"14px"}}>
                                Volver a la tienda    
                            </Button>     
                        </Link>
            </Card.Body>
            </Card>
        </div>
    )
}