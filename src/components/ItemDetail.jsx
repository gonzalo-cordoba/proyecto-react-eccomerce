import { useContext } from "react";

import { ItemCounter } from "./ItemCounter";
import { cartContext } from "../contexts/CartContext";

export const ItemDetail = ({item}) => {
    const { onAdd } = useContext(cartContext);

    const add = () => {
        onAdd(item);
    }

    return <>
        <h1>{item.title}</h1>
        <img src = {item.pictureUrl}/>
        <ItemCounter onAdd={add} />
    </>;
}