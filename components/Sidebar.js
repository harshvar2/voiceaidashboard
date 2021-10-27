import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Nav, Navbar, Container, Offcanvas, NavDropdown } from 'react-bootstrap';
import * as IoIcons from 'react-icons/io';
import styles from '../styles/Dashboard.module.css'

function Sidebar() {
    return (
        <>
            <Navbar bg="light" expand={false}>
                <Container fluid >
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        className={styles.sidebarHeader}
                    >
                        <Offcanvas.Header closeButton >
                            <Offcanvas.Title id="offcanvasNavbarLabel">MENU</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link href="#DASHBOARD"><AiIcons.AiFillHome />{'  '}DASHBOARD</Nav.Link>
                                <Nav.Link href="#MYSTATS"><AiIcons.AiFillHome />{'  '}MY STATS</Nav.Link>
                                <Nav.Link href="#REVIEW"><AiIcons.AiFillHome />{'  '}REVIEW</Nav.Link>
                                <Nav.Link href="#GUIDELINES"><AiIcons.AiFillHome />{'  '}GUIDELINES</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default Sidebar
