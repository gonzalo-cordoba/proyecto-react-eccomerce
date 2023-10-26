import cart from '../assets/cart.png'

export const CartWidget = () => {

    return (
        <a href="#" className='nav__car'>
            <img src={cart} width="30" height="25" alt="Cart" />
            <span>2</span>
        </a>
        )

}