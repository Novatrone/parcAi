import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <div className="back-blue-1 section_stepper text-white">
            <Container>
                <Row className='gx-2 pt-5'>
                    <Col xs={12} md={4}>
                        <img src="/images/Logo.png" width={200} alt="logo" class="navigation__logo" />
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex justify-content-center'>
                            <ul className="list-inline body-1 lh-lg fw-border">
                                <li className="menu-item">
                                    <a className='text-white text-decoration-none me-4' rel="privacy-policy" href="/">Faq</a>
                                </li>
                                <li className="menu-item">
                                    <a className='text-white text-decoration-none' href="/">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='d-flex flex-column justify-content-end align-items-end h-100'>
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
    )
}
