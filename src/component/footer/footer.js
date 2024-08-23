import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Footer({ handleClick }) {
    const navigate = useNavigate()

    return (
        <>
            <div style={{ marginBottom: "-2px" }} className="pippo-footer__image-wrapper">
                <img className="pippo-footer__image" src="/images/other-screen-footer-trim.svg" alt="shapes" width="100%" />
            </div>
            <div className="back-blue-1 section_stepper text-white">
                <Container>
                    <Row className='gx-2 pt-5'>
                        <Col xs={6} md={4}>
                            <div
                                onClick={() => navigate('/')}
                                style={{ cursor: 'pointer' }}
                                className='logo-container'
                            >
                                <img src="/images/Logo.png" width={200} alt="logo" />
                            </div>
                        </Col>
                        <Col xs={6} md={4}>
                            <div className='d-flex justify-content-center'>
                                <ul className="list-inline body-1 lh-lg fw-border">
                                    <li className="menu-item">
                                        <span role="button" onClick={() => navigate('/contact-us')} className='text-white'>Contact Us</span>
                                    </li>
                                    <li className="menu-item">
                                        <span role="button" onClick={() => navigate('/offerings')} className='text-white'>Offerings</span>
                                    </li>
                                    <li className="menu-item">
                                        <span role="button" onClick={() => handleClick('sales_strategy')} className='text-white'>Sales Strategy</span>
                                    </li>
                                    <li className="menu-item">
                                        <span role="button" onClick={() => handleClick('solution')} className='text-white'>Solution</span>
                                    </li>
                                    <li className="menu-item">
                                        <span role="button" onClick={() => handleClick('our_team')} className='text-white'>Meet the artists</span>
                                    </li>
                                    <li className="menu-item">
                                        <span role="button" onClick={() => handleClick('overview')} className='text-white'>Overview</span>
                                    </li>
                                    <li className="menu-item">
                                        <span role="button" onClick={() => handleClick('faq')} className='text-white'>Faq</span>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xs={12} md={4}>
                            <div className='d-flex flex-column justify-content-end align-items-center align-items-md-end h-100'>
                                <div className='mb-3 d-flex gap-2'>
                                    <a
                                        href="https://www.instagram.com/"
                                        className=""
                                        target="_blank"
                                        aria-label="Instagram"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/instagram.png" width={60} alt='Instagram' />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        className=""
                                        target="_blank"
                                        aria-label="Twitter"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/twitter.png" width={60} alt='Twitter' />
                                    </a>
                                    <a
                                        href="https://uk.linkedin.com/"
                                        className=""
                                        target="_blank"
                                        aria-label="LinkedIn"
                                        rel="noopener noreferrer"
                                    >
                                        <img src="/images/linked_in.png" width={60} alt='LinkedIn' />
                                    </a>
                                </div>
                                <div className='py-2'>
                                    <a href="mailto:info@pracai.eu" className="text-white text-decoration-none">
                                        info@pracai.eu
                                    </a>
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <p className="copyright body-1">
                                        © PracAi 2024 <span>|</span> Built by <a
                                            className="no-link"
                                            href="/"
                                            target="_blank"
                                            aria-label="SoBold"
                                            rel="noopener noreferrer"
                                        >
                                            PracAi
                                        </a>
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
