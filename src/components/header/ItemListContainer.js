import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li>
                <Link to="category/procesador"> 
                    {props.ItemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/placa madre">
                    {props.ItemDos}
                </Link>
            </li>

            <li>
                <Link to="category/fuente">
                    {props.ItemTres}
                </Link>
            </li>

            <li>
                <Link to="category/placa de video">
                    {props.ItemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;
