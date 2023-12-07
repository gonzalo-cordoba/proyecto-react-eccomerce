import { useState } from "react"

export const ItemCounter = ({ onAdd, stock, initial }) => {
    const [ count, setCount ] = useState(initial);

    const handleIncreaseCount = () => {
        if(stock > count) {
            setCount(prev => prev + 1); 
        }
        
    };

    const handleDecreaseCount = () => {
        if(count > 1) {
            setCount(prev => prev - 1); 
        }
        
    };

    const handleAdd = () => {
        onAdd(count);
        setCount(initial);
    }

    return(
    <>
        <div style={{display: "flex"}} >
            <div style={{fontSize: 32}} onClick={handleDecreaseCount}>-</div>
            <mark>{count}</mark>
            <div style={{fontSize: 32}} onClick={handleIncreaseCount}>+</div>
        </div>
        <button onClick={handleAdd}>Agregar al carrito</button>
    </>
    )
}