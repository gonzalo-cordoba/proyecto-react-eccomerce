import { createContext, useState } from "react";

export const cartContext = createContext();

export const CartProvider = ({children}) => {

    const[items, setItems] = useState([]);

    const clear = () => setItems([]);

    const onAdd = ( item ) => setItems(prev => {return [...prev, item]} )


    return <cartContext.Provider value={{ items, clear, onAdd}}>{children}</cartContext.Provider>
}