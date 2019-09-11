import React, { Component } from 'react'
import {Container,Navbar, Nav, Badge} from 'react-bootstrap';
import {FaCartPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'



class Header extends Component {
    render() {
        const { cart } = this.props
        return (
            <div>
                <Navbar bg="dark" variant="dark" fixed="top" className="navbar" expand="lg">

                <Container>
                    <Navbar.Brand>JustOrder</Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>

                    <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ml-auto ml-5 link">
                    <Nav.Link className="nav-link">
                    <Link to="/">Home</Link>
                    </Nav.Link>

                    <Nav.Link className="nav-link">
                    <Link to="/cart"><FaCartPlus/>
                    <Badge variant="light">{cart.length}</Badge>
                    </Link>
                    </Nav.Link>

                    </Nav>
                    </Navbar.Collapse>
                    </Container>
                    </Navbar>
                    </div>
                            )
    }
}
export default Header;
