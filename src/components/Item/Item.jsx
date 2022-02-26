import { Button,Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item =({nombre,precio,id,imagen,descrip,cantidad,stock})=>{
    return(
        <Card style={{ width: '15rem',fontSize:"14px" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title style={{fontSize:"16px" }}>{nombre}</Card.Title>
                <Card.Text>
                    <span>Precio : ${precio}</span>                  
                </Card.Text>                
                <Link to={`/item/${id}`}>
                    <Button variant="primary" style={{fontSize:"13px" }}>Ver detalles</Button>              
                </Link>
            </Card.Body>
        </Card>
    )
}