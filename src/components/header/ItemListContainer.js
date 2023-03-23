const ItemListContainer = (props) => {
    return(
        <ul>
            <li>{props.ItemUno}</li>
            <li>{props.ItemDos}</li>
            <li>{props.ItemTres}</li>
            <li>{props.ItemCuatro}</li>
        </ul>
    )
}

export default ItemListContainer;