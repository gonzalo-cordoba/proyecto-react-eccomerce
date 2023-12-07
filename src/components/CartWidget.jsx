import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';
import { useContext } from 'react';
import { cartContext } from '../contexts/CartContext';

export const CartWidget = () => {
    const { items } = useContext(cartContext);

    const total = items.reduce((acumulador, valorActual) => acumulador + valorActual.quantity, 0)

    return (
        <Link to="/cart" className='nav__car'>
            <img src={cart} width="30" height="25" alt="Cart" />
            <span>{total}</span> 
        </Link>
        )

}