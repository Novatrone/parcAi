import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Footer from '../footer/footer';
import { useScroll } from '../../context/scrollContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function MainLayout({ children }) {
    const [show, setShow] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(false);
    const { scrollTo } = useScroll();

    const handleClick = (id) => {
        console.log("id: ", id);
        scrollTo(id);
        closeOffcanvas();
    };

    const toggleOffcanvas = () => setShow(!show);
    const closeOffcanvas = () => setShow(false);

    const handleScroll = () => {
        if (window.scrollY > 200) { // Show button after scrolling 200px
            setShowScrollUp(true);
        } else {
            setShowScrollUp(false);
        }
    };

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Col>
            <Navbar expand="lg" variant="light" className="main-navbar">
                <Col className="navigation__logo-wrapper">
                    <img src="/images/Logo.png" width="140" style={{ objectFit: "contain" }} alt="logo" className="navigation__logo" />
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
                                    <Nav.Link onClick={() => handleClick('faq')}>FAQs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleClick('our_team')}>Our Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Button onClick={() => handleClick('contact_us')} size='lg' variant='primary'>Contact us</Button>
                                </Nav.Item>
                            </Nav>
                        </Offcanvas.Body>
                    </Offcanvas>
                </>
                <Container className='d-flex justify-content-end d-none d-sm-block'>
                    <Nav style={{ fontSize: "18px", columnGap: "50px", fontFamily: "Be Vietnam Pro" }} className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link onClick={() => handleClick('faq')}>FAQs</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={() => handleClick('our_team')}>Our Team</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button onClick={() => handleClick('contact_us')} size='lg' variant='primary'>Contact us</Button>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Col>
                {children}
            </Col>
            <Col>
                <Footer handleClick={handleClick} />
            </Col>
            {showScrollUp && (
                <Button
                    onClick={scrollUp}
                    style={{
                        position: 'fixed',
                        bottom: '50px',
                        right: '30px',
                        zIndex: 1000,
                        borderRadius: '50%',
                        padding: '8px 16px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        border: 'none',
                        fontSize: '20px',
                    }}
                >
                    <FontAwesomeIcon icon={faArrowUp} />
                </Button>
            )}
        </Col>
    );
}
