import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand/>
            </div>
        
            <nav className="containerItemList">
                <ItemListContainer
                    ItemUno = "Procesadores"
                    ItemDos = "Motherboards"
                    ItemTres = "Fuentes"
                    ItemCuatro = "Placas de video"
                />
            </nav>

            <div className="containerCart">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;
