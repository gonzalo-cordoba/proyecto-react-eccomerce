import { Link } from 'react-router-dom';
import cart from '../assets/cart.png';

export const CartWidget = () => {

    return (
        <Link to="/cart" className='nav__car'>
            <img src={cart} width="30" height="25" alt="Cart" />
            <span>5</span> 
        </Link>
        )

}