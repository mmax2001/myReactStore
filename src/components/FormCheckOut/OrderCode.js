import { Container } from "react-bootstrap"

export const OrderCode = ({order}) =>{
    return(
        <Container className="my-5">
            <h3>Gracias por elegirnos! conserve su codigo de orden de compra</h3>
            <hr />
            <h4>Codigo de orden de compra : </h4><h4 style={{color:"blue"}}>{order}</h4>
        </Container>
    )
}