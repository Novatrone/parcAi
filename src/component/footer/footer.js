import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Footer({ handleClick }) {
    const navigate = useNavigate()
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <div style={{ marginBottom: "-2px" }} className="pippo-footer__image-wrapper">
                <img className="pippo-footer__image" src="/images/other-screen-footer-trim.svg" alt="shapes" width="100%" />
            </div>
            <div className="back-blue-1 section_stepper text-white">
                <Container>
                    <Row className='gx-2 gy-4 pt-2 pt-md-5'>
                        <Col xs={12} md={4} className='text-center text-md-start'>
                            <div
                                onClick={() => navigate('/')}
                                style={{ cursor: 'pointer' }}
                                className='logo-container'
                            >
                                <img src="/images/Logo.png" width={200} alt="logo" />
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className='d-flex justify-content-center text-center text-md-start'>
                                <ul className="list-inline body-1 lh-lg fw-border">
                                    <li className="menu-item active">
                                        <span role="button" onClick={() => navigate('/contact-us')} className='text-white'>Contact Us</span>
                                    </li>
                                    <li className="menu-item active">
                                        <span role="button" onClick={() => navigate('/offerings')} className='text-white'>Offerings</span>
                                    </li>
                                    {pathname === '/' &&
                                        <>
                                            <li className="menu-item active">
                                                <span role="button" onClick={() => handleClick('sales_strategy')} className='text-white'>Sales Strategy</span>
                                            </li>
                                            <li className="menu-item active">
                                                <span role="button" onClick={() => handleClick('solution')} className='text-white'>Solution</span>
                                            </li>
                                            <li className="menu-item active">
                                                <span role="button" onClick={() => handleClick('our_team')} className='text-white'>Meet the artists</span>
                                            </li>
                                            <li className="menu-item active">
                                                <span role="button" onClick={() => handleClick('overview')} className='text-white'>Overview</span>
                                            </li>
                                            <li className="menu-item active">
                                                <span role="button" onClick={() => handleClick('faq')} className='text-white'>Faq</span>
                                            </li>
                                        </>
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className='d-flex flex-column justify-content-end align-items-center align-items-md-end h-100'>
                                <div className='mb-4'>
                                    <h3>Contact us</h3>
                                </div>
                                <div className='mb-3 d-flex gap-2'>
                                    <a
                                        href="https://www.instagram.com/"
                                        className="active_icon"
                                        target="_blank"
                                        aria-label="Instagram"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/instagram.png" width={60} alt='Instagram' />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        className="active_icon"
                                        target="_blank"
                                        aria-label="Twitter"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/twitter.png" width={60} alt='Twitter' />
                                    </a>
                                    <a
                                        href="https://uk.linkedin.com/"
                                        className="active_icon"
                                        target="_blank"
                                        aria-label="LinkedIn"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/linked_in.png" width={60} alt='LinkedIn' />
                                    </a>
                                </div>
                                <div className='py-2'>
                                    <a href="mailto:info@pracai.eu" className="text-white active text-decoration-none">
                                        <FontAwesomeIcon className='pe-1 icon-color' icon={faEnvelope} /> info@pracai.eu
                                    </a>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <p className="copyright body-1">
                                        © PracAi 2024 <span>|</span> Built by PracAi
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
