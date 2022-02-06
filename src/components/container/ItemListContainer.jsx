import { useEffect, useState } from "react"
import { loaderData } from '../loaderData/loaderData'
import { ItemList } from "../ItemList/ItemList"
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

    useEffect( () => {
        setLoading(true)

        loaderData()
            .then((res) => {
                setProductos( res )
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
               setLoading(false)
            })

    }, [])

    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
}