import React from 'react';
import {Nav, Navbar,} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';


const NavBar = () => {
    return (

        <Navbar className='navbar__navbar' bg='secondary' variant='dark' expand='lg'>
            <Navbar.Brand size='lg' href='/'>
                ListConverter
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav>
                    <NavLink exact className='navbar__navitem'  to='/'>
                        Home
                    </NavLink>
                    <NavLink exact className='navbar__navitem' to='notfound'>
                        NotFound
                    </NavLink>
                    <NavLink exact className='navbar__navitem' to='testpage'>
                        Test
                    </NavLink>
                    <NavLink exact className='navbar__navitem' to='userprofile'>
                        User Profile
                    </NavLink>
                </Nav>

            </Navbar.Collapse>
        </Navbar>

    );
};


export default NavBar;