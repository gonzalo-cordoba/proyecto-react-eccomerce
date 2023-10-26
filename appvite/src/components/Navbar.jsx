import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";

export const NavBar = () => {

    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
            <a className='navbar-brand' href="#">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Ethereum_logo_2014.svg" alt="Logo" width="50" height="30" className="d-inline-block align-text-top"/>
                
            </a>
          <Navbar.Brand href="#home">NexGenTech</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Productos</Nav.Link>
            <Nav.Link href="#pricing">Contactanos</Nav.Link>
          </Nav>

          <CartWidget/>
          
        </Container>

        
        
      </Navbar>

        

        
    )
}