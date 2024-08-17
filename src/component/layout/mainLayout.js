import React, { useState } from 'react';
import { Button, Col, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Footer from '../footer/footer';

export default function MainLayout({ children }) {
    const [show, setShow] = useState(false);

    const toggleOffcanvas = () => setShow(!show);
    const closeOffcanvas = () => setShow(false);

    return (
        <Col>
            <Navbar expand="lg" variant="light" className="main-navbar">
                <Col className="navigation__logo-wrapper">
                    <img src="/images/Logo-2.png" width="220" style={{ objectFit: "contain" }} alt="logo" class="navigation__logo" />
                </Col>
                <>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
                    <Offcanvas show={show} onHide={closeOffcanvas} placement="start">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Item>
                                    <Nav.Link href="/">FAQs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/practice-resources">Practice Resources</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button size='lg' variant='primary'>Contact us</Button>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
                <Container className='d-flex justify-content-end d-none d-sm-block'>
                    <Nav style={{ fontSize: "18px", columnGap: "50px", fontFamily: "Be Vietnam Pro" }} className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/">FAQs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-1">Practice Resources</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button size='lg' variant='primary'>Contact us</Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Col>
                {children}
            </Col>
            <Col>
                <Footer />
            </Col>
        </Col>
    );
}
