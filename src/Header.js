import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';

function BasicExample() {
    return (
        <Navbar sticky='top ' className="nav" expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='brand'>
                        <img src={logo} className='img1' />
                        <span className='flex'>     <b >FlexStart</b> </span>
                    </div>


                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto  ">
                        <Nav.Link href="#home" >
                            <b className='home'> Home</b></Nav.Link>
                        <Nav.Link href="#link"> <b className='home'> About</b></Nav.Link>
                        <Nav.Link href="#link"> <b className='home'> Services</b></Nav.Link>
                        <Nav.Link href="#link"> <b className='home'> Portfolio</b></Nav.Link>
                        <Nav.Link href="#link"> <b className='home'> Team</b></Nav.Link>
                        <Nav.Link href="#link"> <b className='home'> Blog</b></Nav.Link>

                        <NavDropdown className='home'  title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link"> <b className='home'> Contact</b></Nav.Link>
                        <Nav.Link href="#link"> <button className='btn1'> Get Started</button></Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;