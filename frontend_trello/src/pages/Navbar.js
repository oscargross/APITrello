import React from 'react';
import {  Navbar, Nav, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Main() {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Text><Image  style={{ height: 70 }} /></Navbar.Text>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav  style={{ marginLeft: 100 }}>
                        <Nav.Link><Link to="./" className="nav-link nav--hover">Cards</Link></Nav.Link>
                        <Nav.Link ><Link to="./checkList" className="nav-link nav--hover">CheckLists</Link></Nav.Link>
                        <Nav.Link ><Link to="./checkItem" className="nav-link nav--hover">CheckItems</Link></Nav.Link>
                    </Nav>                   
                </Navbar.Collapse>
            </Navbar>                    
        </>
    )
}