
import { Button } from "react-bootstrap";

export const ItemCounter =({max,min=0,counter,setCounter})=>{

    // const [counter, setCounter] = useState(0)
    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return(

        <div>
            <p>Cantidad : {counter}</p>               
            <Button onClick={handleSumar}>+</Button>
            <span> Modificar cantidad </span>
            <Button onClick={handleRestar}>-</Button>
        </div>
    )

}