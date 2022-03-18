import React from "react";
import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css"
import  Container from "react-bootstrap/Container";
import { databaseStore } from "../../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer =() => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)
    const {itemID}=useParams()

    useEffect(()=>{
        
        setLoading(true)

        const docReference = doc(databaseStore,"stockItems",itemID)
                
        getDoc(docReference)
            .then((doc)=>{
                setItem({id:doc.id,...doc.data()})
            })
            .finally(()=>{
                 setLoading(false)
            })
       

    },[itemID])
    
    
    
    //Control para gestionar un itemID mal ingresado el la URL
    // if(item===[]){
    //      return <Navigate to="/"/>
    // }



    return (
        
        <Container className="my-5">
            
            {
                loading 
                    ? <h2 style={{fontSize:"18px" }}>Cargando producto...</h2>
                    : <ItemDetail {...item} className="cardStyle"/>
            }
        </Container>
        
    )
};