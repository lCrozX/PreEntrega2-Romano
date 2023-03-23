import cart from "../../img/cart.png"

const CartWidget = () => {
    return(
        <div className="containerLength"> 
            <img src={cart} alt="cart"></img>
            <span classname="cantCart">
                1
            </span>
        </div>
    )
}

export default CartWidget
