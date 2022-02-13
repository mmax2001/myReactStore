import React from "react";
import { loaderData } from "../../loaderData/loaderData";
import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer =() => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const {itemID}=useParams()

    useEffect(()=>{
        setLoading(true)

        loaderData()
            .then((res)=>{
                setItem(res.find((element)=> element.id===parseInt(itemID)))
                
            })
            .finally(()=>{
                setLoading(false)
            })

    },[])
    
    return (
        <div>
            {
                loading 
                    ? <h2>Cargando producto...</h2>
                    : <ItemDetail {...item}/>
            }
        </div>
    )
};