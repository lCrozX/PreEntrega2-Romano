import Image from "./Image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButttonAddCart from "./ButtonAddCart";
import { Link } from "react-router-dom";
import cart from "../../img/cart-white.png"

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image 
                imagen={props.imagen}
                />
            <Description 
                title= {props.title}
                cantidad = {props.cantidad}
                precio={props.precio}
                />
            <div className="buttons">
                <Link to={ `/item/${props.id}`}>
                    <ButtonDetalles 
                        txt="Ver detalles" 
                    />
                </Link>

                <ButttonAddCart 
                    id={props.id}
                    svg={cart}
                />
            </div>
        </div>
    )
}

export default CardItem;