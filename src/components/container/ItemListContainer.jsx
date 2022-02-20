import { useEffect, useState } from "react"
import { loaderData } from "../../loaderData/loaderData"
import { ItemList } from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import './ItemListContainer.css'

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
    useEffect( () => {
        setLoading(true)

        loaderData()
            .then((res) => {
                if(catID){
                    setProductos( res.filter((element)=>element.categoria===catID) )
                    console.log(setProductos)
                }else{
                    setProductos(res)
                }
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [catID])

    return (
        <>
        <div className="itemStyles">
            {
                loading 
                    ? <h2>Cargando productos...</h2>
                    : <ItemList productos={productos} className="itemStyles"/>
            } 
        </div>
        </>
    )
}