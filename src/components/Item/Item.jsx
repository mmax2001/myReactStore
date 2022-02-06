import { Button,Card } from "react-bootstrap"

export const Item =({nombre,precio,id,image,cantidad,stock})=>{
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <span>{precio}</span>
                    <p>Cantidad</p>                    
                </Card.Text>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
        </Card>
    )
}