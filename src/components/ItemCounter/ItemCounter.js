
import { Button } from "react-bootstrap";

export const ItemCounter =({max,min,counter,setCounter})=>{

    // const [counter, setCounter] = useState(0)
    const handleSumar = () => {
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () => {
        counter > min && setCounter(counter - 1)
    }

    return(
        <>
        
            <p>Cantidad Minima : {counter}</p>               
            <Button onClick={handleSumar}>+</Button>
            <span> Modificar cantidad </span>
            <Button onClick={handleRestar}>-</Button>
        
        </>
    )

}