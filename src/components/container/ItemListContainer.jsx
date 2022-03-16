import { useEffect, useState } from "react"
//import { loaderData } from "../../loaderData/loaderData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'
import { databaseStore } from "../../firebase/config"
import { collection, getDocs, query, where } from "firebase/firestore"
import Lottie from "lottie-react"
import loadBitcoinColor from '../../assets/loadBitcoinColor.json'




//import { productStock } from "../../dataStore/prod"

// export const ItemListContainer=({greeting})=>{
//     return(
//         <section>
//             <h2>{greeting}</h2>
//             <hr/>
//         </section>
//     )
// }

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {catID} = useParams()
    console.log("El id de categoria es ",catID)
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
        const search = catID ? query(dbReference.orderByValue("nombre"),where("categoria","==",catID)) : dbReference 

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


        // uso una promesa con un mock como base de datos
        // loaderData()
        //     .then((res) => {
        //         if(catID){
        //             setProductos( res.filter((element)=>element.categoria===catID) )
        //             console.log(setProductos)
        //         }else{
        //             setProductos(res)
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        //     .finally(() => {
        //        setLoading(false)
        //     })
        // }, [catID])

    return (
        <>              
        {/* <div className="itemStyles"> */}
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