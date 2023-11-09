import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../App.css"
import { CartWidget } from "./CartWidget";



export const NavBar = () => {

    return (
        <Navbar bg="primary" data-bs-theme="light">
        <Container>
            <a className='navbar-brand' href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" alt="Logo" width="50" height="30" className="d-inline-block align-text-top"/>
                
            </a>
          <Navbar.Brand to="#home">NexGenTech</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="category/procesadores">Procesadores</NavLink>
            <NavLink to="category/teclados">Teclados</NavLink>
          </Nav>

          <CartWidget/>
          
        </Container>

        
        
      </Navbar>

        

        
    )
}