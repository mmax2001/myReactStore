import { Button,Card } from "react-bootstrap"
import './ItemDetail.css'

export const ItemDetail=({nombre,precio,id,categoria,imagen,descrip,cantidad,stock})=>{
    return (
        <div style={{justifyContent:"center"}}>
            {/* <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
            <p>{descrip}</p>
            <h5>Precio ${precio}</h5> */}
            <Card style={{ width: '35rem'}} className="cardStyle">
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>
                    <span>Precio : ${precio}</span>
                    <p>Cantidad</p>                    
                </Card.Text>
                <Card.Text>{descrip}</Card.Text>
                <Button>+</Button>
                <span> Modificar cantidad </span>
                <Button>-</Button>              
            </Card.Body>
            </Card>
        </div>
    )
}