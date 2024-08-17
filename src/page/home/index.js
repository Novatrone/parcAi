import React from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Home() {
    return (
        <>
            <div id="go_to_top" className="hero-home">
                <Container>
                    <Row>
                        <Col md={7} xl={6} className='py-5'>
                            <h3 style={{ maxWidth: "75%", fontSize: "36px", lineHeight: 1.3 }}>Ensuring seamless access to your GP services exactly when patients need it most.</h3>
                            <div className='pt-3 pb-4'>
                                <h5>Enable your patients to conveniently book GP appointments and reorder repeat prescriptions online. This approach not only saves time and simplifies tasks but also reduces the strain on practice phone lines, fostering efficient GP practices and empowering patients.</h5>
                            </div>
                            <div className='d-flex gap-4'>
                                <button className='hero_button'>
                                    <span>Contact Us</span>
                                </button>
                            </div>
                        </Col>
                        <Col md={5} lg={4} xl={5}>
                            <Card style={{ width: "400px", position: "relative", borderRadius: "25px", float: "right", overflow: "hidden", marginTop: "115px" }} className='border-0 bg-transparent h-100'>
                                {/* <img style={{ padding: "12px" }} className="w-100" alt="phone-frame" src="/images/image.png" /> */}
                                {/* <img className='hero-home__phone-frame' alt="phone-frame" src="/images/iphone-cutout.png" /> */}
                                <img style={{ padding: "16px", height: "240px" }} alt="phone-frame" src="/images/screenshot_1.png" />
                                {/* <img className='hero-home__phone-frame' alt="phone-frame" src="/images/monitor.png" /> */}
                                <img className='hero-home__phone-frame' alt="phone-frame" src="/images/apple_monitor.png" />
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <div className="hero-home__shapes-wrapper">
                    <img src="/images/hero-shape.svg" alt="shapes" width="100%" height="100%" />
                </div>
                <div class="hero-home__plus-shapes-wrapper">
                    <img src="/images/plus-bg.svg" alt="shapes" width="100%" height="100%" />
                </div>
                <div className="hero-home__blue-shapes-wrapper">
                    <img className="w-100" src="/images/Homepage-Trim-1.svg" alt="shapes" width="100%" height="100%" />
                </div>
            </div>

            <div id="sales_strategy" className='site-content'>
                <div className="back-blue-1 section_stepper text-white">
                    <Container>
                        <Row>
                            <Col xs={12} className=" mb-5">
                                <h2 className="mb-4">Our Product and Sales Strategy</h2>
                                <p className="body-2 lilac-3" style={{ maxWidth: "45%" }}>
                                    Proactively involving customers as early stakeholders in the product development lifecycle.
                                </p>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/focus-group.png" alt="Step 1" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 1</div>
                                    <h5 className="mb-3 white-1">Creating Customer Focus Groups</h5>
                                    <p className="body-2 white-1">Creating Customer Focus Groups for Product Development</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/development-testing.png" alt="Step 2" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 2</div>
                                    <h5 className="mb-3 white-1">Dry Runs and Feedback</h5>
                                    <p className="body-2 white-1">Dry runs in live environment & feedbacks for application testing and enhancement</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/free-trile.jpg" alt="Step 3" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 3</div>
                                    <h5 className="mb-3 white-1">Free Trials</h5>
                                    <p className="body-2 white-1">Free trials for 2 months for the first 50 practices for product enhancement, as an initial experience and freemium model.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/payment.jpg" alt="Step 4" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 4</div>
                                    <h5 className="mb-3 white-1">Payment Initiation</h5>
                                    <p className="body-2 white-1">Payment initiation and reference generation.</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='section_stepper_bottom'>
                    <img style={{ transform: "scale(-1)" }} className="w-100 fix_border_top" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                    <img class="position-absolute top-0 start-0 fix_border_top" src="/images/Homepage-trim-2.svg" alt="" width="100%" />
                </div>
            </div>

            <div id="overview" className='blue_bottom_stepper'>
                <Container>
                    <Row className='gx-5'>
                        <Col xs={12}>
                            <div className='d-flex flex-column align-items-center text-center pb-5'>
                                <div className="h2 pb-4">Why<span className='h1 ps-2 fw-bold'>ParcAi?</span></div>
                                <p style={{ maxWidth: "70%" }} className='body-2 pb-3'>A cutting-edge, AI-driven, cloud-based practice management system that
                                    transforms healthcare operations. Seamlessly streamline appointments,
                                    patient records, health reports, and physician communication with an
                                    intuitive platform accessible anytime, anywhere.</p>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='d-flex flex-column gap-2'>
                                    <h5>01</h5>
                                    <div>
                                        <img src="/images/time_saving.png" alt='time-saving' width="100%" />
                                    </div>
                                    <div>
                                        <h4 className='text-center'>Time Saving</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='d-flex flex-column gap-2'>
                                    <h5>02</h5>
                                    <div>
                                        <img src="/images/cost-saving.png" alt='time-saving' width="100%" />
                                    </div>
                                    <div>
                                        <h4 className='text-center'>Cost Saving</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='d-flex flex-column gap-2'>
                                    <h5>03</h5>
                                    <div>
                                        <img src="/images/security.png" alt='time-saving' width="100%" />
                                    </div>
                                    <div>
                                        <h4 className='text-center'>Security</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='d-flex flex-column gap-2'>
                                    <h5>04</h5>
                                    <div>
                                        <img src="/images/convenience.png" alt='time-saving' width="100%" />
                                    </div>
                                    <div>
                                        <h4 className='text-center'>Convenience</h4>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="contact_us" className='site-content'>
                <div>
                    <img className="w-100" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                </div>
                <div className="back-blue-1 section_stepper text-white">
                    <Container>
                        <Row>
                            <Col xs={12} className="mb-2">
                                <div className='d-flex flex-column align-items-center text-center'>
                                    <h2 className="mb-4">Transform and optimize your GP practice for superior performance and patient care</h2>
                                    <p className="body-2 lilac-3 mb-5" style={{ maxWidth: "70%" }}>
                                        Unlock the full potential of your practice with our integrated, user-friendly patient app. Discover ways to maximize efficiencies, streamline workflows, and empower your patients for an enhanced healthcare experience.                                    </p>
                                    <Button size='lg'>Get in touch</Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='section_stepper_bottom'>
                    <img style={{ transform: "scale(-1)" }} className="w-100 fix_border_top" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                    <img class="position-absolute top-0 start-0 fix_border_top" src="/images/Homepage-trim-2.svg" alt="" width="100%" />
                </div>
            </div>

            <div id="solution" className='blue_bottom_stepper'>
                <Container>
                    <Row className="gx-5">
                        <Col xs={12}>
                            <div className='d-flex flex-column align-items-center text-center pb-5'>
                                <div className="h2 pb-4">The<span className="h1 ps-2 fw-bold">PracAi</span> Solution !</div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img width="100%" src='/images/solution.png' alt='solution' />
                        </Col>
                        <Col xs={12} md={6}>
                            <ul style={{ fontSize: "22px", fontWeight: 500 }} className='lh-lg'>
                                <li>Enhanced Efficiency with GenAI</li>
                                <li>Comprehensive API Integrations</li>
                                <li>Cloud-based architecture</li>
                                <li>Advanced user interface</li>
                                <li>Tailored solution for users</li>
                                <li>Time Saving: 2.5 hrs saved daily</li>
                                <li>Cost-effective solution</li>
                                <li>Advanced security measures</li>
                                <li>Unlimited scope for advancements</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="our_team" className='site-team'>
                <div>
                    <img className="w-100" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                </div>
                <div className="back-blue-1 section_stepper text-white">
                    <Container>
                        <Row className='g-5'>
                            <Col xs={12} className="mb-2">
                                <div className='d-flex flex-column align-items-center text-center'>
                                    <h2 className="mb-4">Introducing Our Expert Team</h2>
                                </div>
                            </Col>
                            <Col className='px-5' xs={12} md={4}>
                                <div className='d-flex justify-content-center'>
                                    <div className='team-stepper__image'>
                                        <img src="/images/team-1.png" alt="Step 1" width="100%" height="100%" />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className="body-2 text-warning">Dr. Jonathan Graham</div>
                                    <div className="mb-3 body-2 text-warning">(Product and PR)</div>
                                </div>
                                <div>
                                    <ul>
                                        <li>10+ yrs experienced GP in Ireland</li>
                                        <li>35 yrs old family owned practice, New Castle</li>
                                        <li>Treated 15,000+ patients</li>
                                    </ul>
                                </div>
                                <div className='text-center'>
                                    <p className='body-2 mb-0'>Mobile No.: +353 (0) 83-876-6862</p>
                                    <p>Email: jonathan.graham@hotmail.com</p>
                                </div>
                            </Col>
                            <Col className='px-5' xs={12} md={4}>
                                <div className='d-flex justify-content-center'>
                                    <div className='team-stepper__image'>
                                        <img src="/images/team-2.png" alt="Step 1" width="100%" height="100%" />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className="body-2 text-warning">Shailesh Sharma</div>
                                    <div className="mb-3 body-2 text-warning">(Technology)</div>
                                </div>
                                <div>
                                    <ul>
                                        <li>Solution architect
                                            Entrepreneur</li>
                                        <li>Developed 200+ web
                                            and Mobile Apps for
                                            SMBs
                                        </li>
                                        <li>UCD MBA
                                        </li>
                                    </ul>
                                </div>
                                <div className='text-center'>
                                    <p className='body-2 mb-0'>Mobile No.: +353 (0) 83-870-7132</p>
                                    <p>Email: shailesh.sharma@aol.com
                                    </p>
                                </div>
                            </Col>
                            <Col className='px-5' xs={12} md={4}>
                                <div className='d-flex justify-content-center'>
                                    <div className='team-stepper__image'>
                                        <img src="/images/team-3.png" alt="Step 1" width="100%" height="100%" />
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <div className="body-2 text-warning">Harsh Mangla</div>
                                    <div className="mb-3 body-2 text-warning">(Sales and Marketing)</div>
                                </div>
                                <div>
                                    <ul>
                                        <li>7 yrs IT Sales
                                            experience</li>
                                        <li>Experience managing
                                            ERP sales team</li>
                                        <li>Launched & Scaled an
                                            EV business in India</li>
                                        <li>UCD MBA</li>
                                    </ul>
                                </div>
                                <div className='text-center'>
                                    <p className='body-2 mb-0'>Mobile No.: +353 (0) 89-463-2739</p>
                                    <p>Email: harshmangla95@gmail.com</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='section_stepper_bottom'>
                    <img style={{ transform: "scale(-1)" }} className="w-100 fix_border_top" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                    <img class="position-absolute top-0 start-0 fix_border_top" src="/images/Homepage-trim-2.svg" alt="" width="100%" />
                </div>
            </div>

            <div id="Offerings" className='blue_bottom_stepper'>
                <Container>
                    <Row className="gx-5">
                        <Col xs={12}>
                            <div className="d-flex flex-column align-items-center text-center pb-5">
                                <div className="h2 pb-4">Discover<span className="h1 ps-2 fw-bold">Our Offerings</span></div>
                            </div>
                        </Col>
                        <Col xs={12} md={8}>
                            <ul style={{ fontSize: "25px", fontWeight: 500 }} className="lh-lg">
                                <Row>
                                    <Col xs={12} md={6}>
                                        <li>Data Analytics Dashboards</li>
                                        <li>Appointment Mgt</li>
                                        <li>Patient Information</li>
                                        <li>E-Prescription Mgt</li>
                                        <li>Clinical Workflow</li>
                                        <li>Telemedicine</li>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <li>AI-driven Admin Automation</li>
                                        <li>API Integration</li>
                                        <li>Payments & Billing</li>
                                        <li>Inventory</li>
                                        <li>Patient Portal</li>
                                        <li>Communications</li>
                                    </Col>
                                </Row>
                            </ul>
                        </Col>
                        <Col xs={12} md={4}>
                            <img width="100%" src="/images/solution.png" alt="solution" />
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="faq" className='site-content'>
                <div>
                    <img className="w-100" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                </div>
                <div className="back-blue-1 section_stepper text-white">
                    <Container>
                        <Row>
                            <Col xs={12} className="mb-2">
                                <div className='d-flex flex-column align-items-center text-center'>
                                    <div className="h2 pb-4">
                                        <div>Explore<span class="h1 ps-2 fw-bold">Our FAQs</span></div>
                                    </div>
                                    <Accordion className='w-100 custom-accordion'>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                                            <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                {/* <div className="w-100"></div> */}
                <hr className='m-0' />
                {/* <div className='section_stepper_bottom'>
                    <img style={{ transform: "scale(-1)" }} className="w-100 fix_border_top" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                    <img class="position-absolute top-0 start-0 fix_border_top" src="/images/Homepage-trim-2.svg" alt="" width="100%" />
                </div> */}
            </div>

        </>
    )
}
