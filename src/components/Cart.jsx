import { useContext } from "react";
import { Container } from "react-bootstrap";

import { cartContext } from "../contexts/CartContext";

export const Cart = () => {
     const { clear, items } = useContext(cartContext);


    return (
        <Container className="mt-4">
            <h1>Carrito</h1>
            {items?.map(item => <div key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.price}</h3>
                <img src={item.pictureUrl}/>
            </div>)}
                <button onClick={clear}>Vaciar carrito</button>
        </Container>
    );
}