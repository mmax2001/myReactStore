import React from "react";
import { loaderData } from "../../loaderData/loaderData";
import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import  Container from "react-bootstrap/Container";

export const ItemDetailContainer =() => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const {itemID}=useParams()

    useEffect(()=>{
        setLoading(true)

        loaderData()
            
            .then((res)=>{
                
                let lastItem=res[res.length-1]
                console.log(lastItem.id)
                if(itemID<=Number(9)){
                    setItem( res.find((element)=> element.id===parseInt(itemID)) )
                }else{
                    setItem(res)
                }

            })
            .finally(()=>{
                setLoading(false)
            })

    },[itemID])
    
    return (
        <div>
            <Container style={{marginLeft:'550px',marginTop:'20px'}}>
            {
                loading 
                    ? <h2 style={{fontSize:"18px" }}>Cargando producto...</h2>
                    : <ItemDetail {...item} />
            }
            </Container>
        </div>
    )
};