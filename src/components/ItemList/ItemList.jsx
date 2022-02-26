import {Item} from '../Item/Item';

export const ItemList = ( {productos} ) => {

    return(
        <div style={{marginTop:"10px" ,marginBottom:"20px"}} className="row">
            <h2 style={{fontSize:"20px"}}>Listado de Productos</h2>
            <hr />
            { productos.map( (element) => <Item key={element.id} {...element}/> )}
        </div> 
    )
}
