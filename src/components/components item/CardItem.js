import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./Buttondetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image Image={props.imagen}
                />
            <Description 
            title={props.title}
            cantidad = {props.cantidad}
            precio = {props.precio}
            />
            <div className="buttons">
                <ButtonDetalles />
                <ButtonAddCart />
            </div>
        </div>
    )
}

export default CardItem;