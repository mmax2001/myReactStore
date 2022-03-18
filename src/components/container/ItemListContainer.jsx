import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { databaseStore } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Lottie from "lottie-react"
import loadBitcoinColor from '../../assets/loadBitcoinColor.json'


export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {catID} = useParams()
    
    const options={
        animationData:loadBitcoinColor,
        autoplay:true,
        loop:true,
        style:{
            width:'45%',
        },
    };

    useEffect( () => {

        setLoading(true)
        const dbReference=collection(databaseStore,"stockItems")
        const search = catID ? query(dbReference,where("categoria","==",catID)) : dbReference 
         
        getDocs(search)
            .then((res) => {
                setProductos(res.docs.map((doc)=>{
                    return {
                        id:doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(()=>{
                setLoading(false)
            })

    },[catID])



    return (
        <>              
        
        <div className="container my-5 itemStyles">
            {                   
                loading ?
                <div>
                    <Lottie {...options}><code></code></Lottie>
                    <h2 style={{fontSize:"18px",marginLeft:"60px"}}>Cargando Articulos ...</h2>
                </div>
                : <ItemList productos={productos} className="itemStyles"/>
            } 
        </div>
        </>
    )
}