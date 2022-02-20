import { Button,Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item =({nombre,precio,id,imagen,descrip,cantidad,stock})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <span>Precio : ${precio}</span>                  
                </Card.Text>                
                <Link to={`/item/${id}`}>
                    <Button variant="primary">Ver detalles</Button>              
                </Link>
            </Card.Body>
        </Card>
    )
}