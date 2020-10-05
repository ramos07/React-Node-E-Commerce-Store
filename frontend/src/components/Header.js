import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <div>
            <header>
                <Navbar
                    bg='primary'
                    variant='dark'
                    expand='lg'
                    collapseOnSelect
                >
                    <Container>
                        <LinkContainer to='/'>
                            <Navbar.Brand>React E-Commerce</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='ml-auto'>
                                <LinkContainer to='/cart'>
                                    <Nav.Link>
                                        <i className='fa fa-shopping-cart mr-2'></i>
                                        Cart
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/login'>
                                    <Nav.Link>
                                        <i className='fa fa-user mr-2'></i>Sign
                                        In
                                    </Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </div>
    )
}

export default Header
