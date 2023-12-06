import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({children}) => {

    const[items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onAdd = ( item ) => setItems(prev => {return [...prev, item]} )

    const onRemove = ( id ) => {
        const filterItems = items.filter(item => item.id !== id);
        setItems(filterItems);
    } 


    return <cartContext.Provider value={{ items, clear, onAdd, onRemove}}>{children}</cartContext.Provider>
}