import {Item} from '../Item/Item';

export const ItemList = ( {productos} ) => {

    return(
        <div className="row">
            { productos.map( (element) => <Item key={element.id} {...element}/> )}
        </div> 
    )
}
