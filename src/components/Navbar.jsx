import { CartWidget } from "./CartWidget";

export const NavBar = () => {

    return (
        <nav className='navbar bg-body-tertiary ' >
            <div className='container-fluid ' style={{ backgroundColor: 'lightblue' }}>
                <a className='navbar-brand' href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" alt="Logo" width="50" height="30" className="d-inline-block align-text-top"/>
                NexGenTech
                </a>

                <ul className="nav justify-content-center">

                    <li className="nav-item mx-auto">
                        <a className="nav-link active display-1" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link display-6" href="#">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link display-6" href="#">Contactanos</a>
                    </li>
                    
                </ul>

                <CartWidget/>
            </div>

           

            
        </nav>

        

        
    )
}