import { Button } from "react-bootstrap"

export const ItemDetail=({nombre,precio,id,categoria,imagen,descrip,cantidad,stock})=>{
    return (
        <div style={{marginLeft:"20px"}}>
            <h3>{nombre}</h3>
            <img src={imagen} alt={nombre} />
            <p>{descrip}</p>
            <h5>Precio ${precio}</h5>
            <Button>+</Button>
            <span> Modificar cantidad </span>
            <Button>-</Button>
        </div>
    )
}