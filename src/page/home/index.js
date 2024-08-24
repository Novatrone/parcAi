import React from 'react'
import { Accordion, Button, Card, Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div id="go_to_top" className="hero-home">
                <Container>
                    <Row>
                        <Col md={7} xl={6} className='py-5'>
                            <h2
                                style={{
                                    fontSize: "35px",
                                    lineHeight: 1.3,
                                    letterSpacing: -0.1
                                }}
                                className="responsive-heading"
                            >
                                Revolutionize Healthcare with Generative AI: Empowering
                                Doctors, Enhancing Efficiency
                            </h2>
                            <div className='pt-3 pb-4 text-center text-lg-start'>
                                <h5>Integrated Generative AI solution that saves doctors an average of 2.5 hours per day by automating note-taking, referrals, analyzing patient health data, and providing intelligent recommendations. Enhance efficiency, reduce administrative burdens, and boost patient engagement</h5>
                            </div>
                            <div className='d-flex gap-4'>
                                {/* <button className='hero_button'>
                                    <span>Contact Us</span>
                                </button> */}
                                <Button onClick={() => navigate('/contact-us')} size='lg'>Contact Us</Button>
                            </div>
                        </Col>
                        <Col md={5} lg={4} xl={5}>
                            <Card className='frame_content'>
                                {/* <img style={{ padding: "12px" }} className="w-100" alt="phone-frame" src="/images/image.png" /> */}
                                {/* <img className='hero-home__phone-frame' alt="phone-frame" src="/images/iphone-cutout.png" /> */}
                                <img style={{ padding: "16px", height: "240px" }} alt="phone-frame" src="/images/screenshot_1.png" />
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
                            <Col xs={12} md={6} className=" mb-5">
                                <h2 className="mb-2">Your Practice, Your System</h2>
                                <p className="body-2 lilac-3">
                                    Co-Create Your AI Healthcare System to fit your needs
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
                                    <h5 className="mb-3 white-1">Envision</h5>
                                    <p className="body-2 white-1">Share your challenges, needs, and ideas. Define what you want your ideal healthcare system to look like.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/development-testing.png" alt="Step 2" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 2</div>
                                    <h5 className="mb-3 white-1">Co-Create</h5>
                                    <p className="body-2 white-1">Partner with our team to build solutions tailored to your vision. Your input drives development.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/free-trile.jpg" alt="Step 3" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 3</div>
                                    <h5 className="mb-3 white-1">Experience</h5>
                                    <p className="body-2 white-1">Test-drive the system with a 2-month free trial. Fine-tune the features and functionalities through real-world feedback.</p>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div className='three-col-stepper__image'>
                                    <img src="/images/reap_the_reward.png" alt="Step 4" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="mb-3 body-2 text-warning">Step 4</div>
                                    <h5 className="mb-3 white-1">Reap the Rewards</h5>
                                    <p className="body-2 white-1">Enjoy a subsidized package for your role in shaping the future of healthcare technology. Your customized system, is built by you!</p>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <div className='d-flex justify-content-center mt-4'>
                                    <Button onClick={() => navigate('/contact-us')} size='lg'>Register your interest</Button>
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
                                <div className="h2 pb-4"><span className='h1 ps-2 fw-bold'>Foundation of Success</span></div>
                                <p className='body-2 pb-3 mw-85'>
                                    A new and advanced AI-powered cloud-based practice management system that revolutionizes healthcare operations. Smoothly integrate appointments, record patients’ information, health reports, and connect to doctors with a user-friendly platform that you can use whenever and wherever.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='card_inner'>
                                    <div className='card_front'>
                                        <h5>01</h5>
                                        <div className='card_image'>
                                            <img src="/images/time_saving.png" alt='time-saving' width="100%" />
                                        </div>
                                        <h4 className='text-center'>Time Saving</h4>
                                    </div>
                                    <div className='card_back'>
                                        <div className='d-flex w-100 h-100 flex-column'>
                                            <h6>TIME SAVING</h6>
                                            <div className='card_back_text'>
                                                <p className='p-2 rounded'>AI-powered Note making: 2.5 hrs/day/Doctor saved</p>
                                                <p className='p-2 rounded'>Healthlink integration: Min. 2 hrs/file saved</p>
                                                <p className='p-2 rounded'>Saves 50% time spent on administrative tasks with new features</p>
                                                <p className='p-2 rounded'>Saves 2 min per patient visit with Voice-recognition/speech-to-text note making</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='card_inner'>
                                    <div className='card_front'>
                                        <h5>02</h5>
                                        <div className='card_image'>
                                            <img src="/images/cost-saving.png" alt='cost-saving' width="100%" />
                                        </div>
                                        <h4 className='text-center'>Cost Saving</h4>
                                    </div>
                                    <div className='card_back'>
                                        <div className='d-flex w-100 h-100 flex-column'>
                                            <h6>COST SAVING</h6>
                                            <div className='card_back_text'>
                                                <p className='p-2 rounded'>Saves up to 40% on operational costs</p>
                                                <p className='p-2 rounded'>About 50% less costly than incumbent</p>
                                                <p className='p-2 rounded'>Easy to add or remove storage as per requirements</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='card_inner'>
                                    <div className='card_front'>
                                        <h5>03</h5>
                                        <div className='card_image'>
                                            <img src="/images/security.png" alt='security' width="100%" />
                                        </div>
                                        <h4 className='text-center'>Security</h4>
                                    </div>
                                    <div className='card_back'>
                                        <div className='d-flex w-100 h-100 flex-column'>
                                            <h6>SECURITY</h6>
                                            <div className='card_back_text'>
                                                <p className='p-2 rounded'>Advanced security measures by AWS</p>
                                                <p className='p-2 rounded'>Three-tier backup system</p>
                                                <p className='p-2 rounded'>3-layered security</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div className='light_card'>
                                <div className='card_inner'>
                                    <div className='card_front'>
                                        <h5>04</h5>
                                        <div className='card_image'>
                                            <img src="/images/convenience.png" alt='convenience' width="100%" />
                                        </div>
                                        <h4 className='text-center'>Convenience</h4>
                                    </div>
                                    <div className='card_back'>
                                        <div className='d-flex w-100 h-100 flex-column'>
                                            <h6>CONVENIENCE</h6>
                                            <div className='card_back_text'>
                                                <p className='p-2 rounded'>Your practice in your pocket</p>
                                                <p className='p-2 rounded'>Access from anywhere, anytime</p>
                                                <p className='p-2 rounded'>Modern and Intuitive user interface</p>
                                                <p className='p-2 rounded'>98% server uptime guaranteed</p>
                                            </div>
                                        </div>
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
                                    <h2 className="mb-4">Elevate Your GP Practice for Peak Performance and Care</h2>
                                    <p className="body-2 lilac-3 mb-5 mw-85">
                                        Unlock the full potential of your practice with our AI-driven, integrated, user-friendly practice management system.
                                        Discover ways to maximize efficiencies, streamline workflows, and empower your patients for an enhanced healthcare
                                        experience.
                                    </p>
                                    <Button onClick={() => navigate('/contact-us')} size='lg'>Get in touch</Button>
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
                                <div className="h2 pb-4"><span className="h1 ps-2 fw-bold">The PracAi Solution !</span> </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img width="100%" src='/images/solution.png' alt='solution' />
                        </Col>
                        <Col xs={12} md={6}>
                            <ul style={{ fontSize: "22px", fontWeight: 500 }} className='lh-lg'>
                                <li>Enhanced efficiency with GenAI integration</li>
                                <li>Seamless HealthMail and HealthLink Integration</li>
                                <li>Medicine Database integration for Allergens alerts</li>
                                <li>Advanced security measures with SSL and TLS certifications</li>
                                <li>Cloud-based infrastructure</li>
                                <li>Web and Mobile Application</li>
                                <li>State-of-the-art user interface for convenience</li>
                                <li>Saves of avg. 60% time and 50% cost</li>
                                <li>Data analytical dashboards</li>
                                <li>Communication & reminders</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div id="our_team" className='site-team'>
                <div>
                    <img className="w-100 -mb-2" src="/images/Homepage-trim-3.svg" alt="shapes" width="100%" height="100%" />
                </div>
                <div className="back-blue-1 section_stepper text-white">
                    <Container>
                        <Row className='g-2 g-md-5'>
                            <Col xs={12} className="mb-2">
                                <div className='d-flex flex-column align-items-center text-center'>
                                    <h2 className="mb-4">Saw the Art? Meet the artists</h2>
                                </div>
                            </Col>
                            <Col className='px-3 pb-5 pb-md-2 d-flex flex-column align-items-center text-center' xs={12} md={4}>
                                <div className='team-stepper__image mb-3'>
                                    <img src="/images/team-1.png" alt="Dr. Jonathan Graham" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="body-2 text-warning">Dr. Jonathan Graham</div>
                                    <div className="mb-3 body-2 text-warning">(Product and PR)</div>
                                </div>
                                <div>
                                    <ul className='h-10 list-unstyled three-col-stepper__content'>
                                        <li className='pb-1'>Seasoned Irish GP with Proven Medical Expertise</li>
                                        <li className='pb-1'>Running a 35-year-old GP practice</li>
                                        <li className='pb-1'>Treated over 15,000 patients</li>
                                    </ul>
                                </div>
                                <div className='three-col-stepper__content'>
                                    <a href='tel:+3530838766862' className='body-2 d-block mb-1 text-white text-decoration-none'><FontAwesomeIcon className='icon-color pe-2' icon={faPhone} /> +353 (0) 83-876-6862</a>
                                    <a href='mailto:Jonathan@pracai.eu' className='body-2 d-block text-white text-decoration-none'><FontAwesomeIcon className='icon-color pe-2' icon={faEnvelope} /> Jonathan@pracai.eu</a>
                                </div>
                            </Col>

                            <Col className='px-3 pb-5 pb-md-2 d-flex flex-column align-items-center text-center' xs={12} md={4}>
                                <div className='team-stepper__image mb-3'>
                                    <img src="/images/team-2.png" alt="Shailesh Sharma" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="body-2 text-warning">Shailesh Sharma</div>
                                    <div className="mb-3 body-2 text-warning">(Technology)</div>
                                </div>
                                <div>
                                    <ul className='h-10 list-unstyled three-col-stepper__content'>
                                        <li className='pb-1'>Solution Architect Entrepreneur</li>
                                        <li className='pb-1'>Engineered Web and Mobile Apps for 200+ Businesses</li>
                                        <li className='pb-1'>Decade of experience managing large tech teams</li>
                                        <li className='pb-1'>UCD MBA Alumnus</li>
                                    </ul>
                                </div>
                                <div className='three-col-stepper__content'>
                                    <a href='tel:+3530838707132' className='body-2 d-block mb-1 text-white text-decoration-none'><FontAwesomeIcon className='icon-color pe-2' icon={faPhone} /> +353 (0) 83-870-7132</a>
                                    <a href='mailto:shailesh@pracai.eu' className='body-2 d-block text-white text-decoration-none'><FontAwesomeIcon className='icon-color pe-2' icon={faEnvelope} /> shailesh@pracai.eu</a>
                                </div>
                            </Col>

                            <Col className='px-3 pb-5 pb-md-2 d-flex flex-column align-items-center text-center' xs={12} md={4}>
                                <div className='team-stepper__image mb-3'>
                                    <img src="/images/team-3.png" alt="Harsh Mangla" width="100%" height="100%" />
                                </div>
                                <div>
                                    <div className="body-2 text-warning">Harsh Mangla</div>
                                    <div className="mb-3 body-2 text-warning">(Sales and Marketing)</div>
                                </div>
                                <div>
                                    <ul className='h-10 list-unstyled three-col-stepper__content'>
                                        <li className='pb-1'>IT SaaS Marketing Aficionado</li>
                                        <li className='pb-1'>Experience managing IT sales team</li>
                                        <li className='pb-1'>Built and Scaled a Successful EV Startup</li>
                                        <li className='pb-1'>UCD MBA Alumnus</li>
                                    </ul>
                                </div>
                                <div className='three-col-stepper__content'>
                                    <a href='tel:+3530894632739' className='body-2 d-block mb-1 text-white text-decoration-none'><FontAwesomeIcon className='icon-color pe-2' icon={faPhone} /> +353 (0) 89-463-2739</a>
                                    <a href='mailto:harsh@pracai.eu' className='body-2 text-white text-decoration-none'><FontAwesomeIcon className='icon-color pe-2' icon={faEnvelope} /> harsh@pracai.eu</a>
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

            <div id="faq" className='blue_bottom_stepper'>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <div className="d-flex flex-column align-items-center text-center pb-3 pb-md-4">
                                <div className="h2 pb-0 pb-md-4"><span className="h1 ps-2 fw-bold">Faq</span></div>
                            </div>
                        </Col>
                        <Col xs={12} className="mb-2">
                            <Accordion className='w-100 custom-accordion'>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>1. What is ThePracAi Solution?</Accordion.Header>
                                    <Accordion.Body>
                                        ThePracAi Solution is a cutting-edge, AI-driven, cloud-based practice management system designed to transform healthcare operations. It streamlines appointments, patient records, health reports, and physician communication through an intuitive platform accessible anytime, anywhere.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>2. How does ThePracAi Solution enhance efficiency?</Accordion.Header>
                                    <Accordion.Body>
                                        By leveraging GenAI, ThePracAi Solution saves up to 2.5 hours daily, allowing healthcare providers to focus more on patient care and less on administrative tasks.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>3. How does ThePracAi Solution ensure data security?</Accordion.Header>
                                    <Accordion.Body>
                                        ThePracAi Solution employs advanced security measures to protect sensitive patient information and ensure compliance with healthcare regulations.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>4. Is ThePracAi Solution customizable for different healthcare practices?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, ThePracAi Solution offers tailored solutions to meet the specific needs of different healthcare practices, ensuring it fits seamlessly into existing workflows.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>5. How does ThePracAi Solution support advancements in healthcare operations?</Accordion.Header>
                                    <Accordion.Body>
                                        ThePracAi Solution is built on a cloud-based architecture with unlimited scope for advancements, allowing it to evolve with the ever-changing landscape of healthcare technology.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>6. What makes ThePracAi Solution cost-effective?</Accordion.Header>
                                    <Accordion.Body>
                                        By automating routine tasks, reducing manual errors, and saving time, ThePracAi Solution helps healthcare practices reduce operational costs while improving efficiency.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>

        </>
    )
}
