import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { cartContext } from "../contexts/CartContext";

export const ItemDetail = ({item}) => {
    const { onAdd } = useContext(cartContext);

    const add = (quantity) => {
        onAdd(item, quantity);
    }

    return <>
        <h1>{item.title}</h1>
        <img src = {item.pictureUrl}/>
        <h2>Stock: {item.stock}</h2>
        <ItemCounter onAdd={add} stock={item.stock} initial={1} />
    </>;
}