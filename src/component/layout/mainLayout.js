import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import Footer from '../footer/footer';
import { useScroll } from '../../context/scrollContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


export default function MainLayout({ children }) {
    const [show, setShow] = useState(false);
    const [showScrollUp, setShowScrollUp] = useState(false);
    const { scrollTo } = useScroll();
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname;

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const handleClick = (id) => {
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

    // Scroll to the top whenever the pathname changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
        closeOffcanvas();
    }, [pathname]);

    return (
        <>
            <Navbar sticky={isMobile ? "top" : "none"} expand="lg" variant="light" className="main-navbar">
                <Col onClick={() => navigate('/')} className="navigation__logo-wrapper">
                    <img src="/images/Logo.png" width="160" style={{ objectFit: "contain" }} alt="logo" className="navigation__logo" />
                </Col>
                <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={toggleOffcanvas} />
                <Offcanvas show={show} className="w-75" onHide={closeOffcanvas} placement="start">
                    <Offcanvas.Header closeButton>
                        {/* <Offcanvas.Title>Menu</Offcanvas.Title> */}
                    </Offcanvas.Header>
                    <Offcanvas.Body className='d-flex flex-column'>
                        <div className='pb-3'>
                            <img src="/images/Logo-fill-light.png" width="180" style={{ objectFit: "contain" }} alt="logo" className="navigation__logo" />
                        </div>
                        <Nav className="flex-grow-1 ps-3 pe-3">
                            {pathname === '/' &&
                                <>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => handleClick('faq')}>FAQs</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => handleClick('our_team')}>Our Team</Nav.Link>
                                    </Nav.Item>
                                </>}
                            <Nav.Item>
                                <Nav.Link onClick={() => navigate('/offerings')}>Offering</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Button className='mt-3' onClick={() => navigate('/contact-us')} size='lg' variant='primary'>Contact Us</Button>
                            </Nav.Item>
                        </Nav>
                    </Offcanvas.Body>
                </Offcanvas>
                <Container className='d-flex justify-content-end d-none d-sm-block'>
                    <Nav style={{ fontSize: "18px", columnGap: "50px", fontWeight: 600 }} className="justify-content-end" activeKey="/home">
                        {pathname === '/' &&
                            <>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleClick('faq')}>FAQs</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => handleClick('our_team')}>Our Team</Nav.Link>
                                </Nav.Item>
                            </>
                        }
                        <Nav.Item>
                            <Nav.Link onClick={() => navigate('/offerings')}>Offering</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Button onClick={() => navigate('/contact-us')} size='lg' variant='primary'>Contact Us</Button>
                        </Nav.Item>
                    </Nav>
                </Container>
                {isMobile ?
                    <div className='navigation__logo-wrapper_mobile'>
                        <span onClick={() => navigate('/')}>
                            <img src="/images/Logo.png" width="60" style={{ objectFit: "contain" }} alt="logo" className="navigation__logo" />
                        </span>
                    </div>
                    :
                    <></>
                }
            </Navbar>
            <Col className='overflow-x-hidden'>
                {children}
            </Col>
            <Col className='overflow-x-hidden'>
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
        </>
    );
}
