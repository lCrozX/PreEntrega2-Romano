import CardItem from "./CardItem"
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect} from "react";

const ContainerCardItems = () => {
    const[ datos, setDatos ] = useState( [] );

    useEffect( () => {
        fetchSimulation(productos, 3000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [])

    return(
        <>
            {
                datos.map( product =>(
                    <CardItem
                        key={product.id}
                        imagen={product.ImageProduct?.firstImage}
                        tittle={product.title}
                        cantidad={product.stock}
                        precio={product.price}
                    />
                ))
            }        
        </>
    )
}

export default ContainerCardItems;