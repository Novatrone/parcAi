import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { createUser } from '../../service/contect';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        consentChecked: false
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleCheckboxChange = (event) => {
        setFormData(prevData => ({ ...prevData, consentChecked: event.target.checked }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Validate form fields
        const { name, email, phone, message, consentChecked } = formData;
        if (!name || !email || !phone || !message) {
            console.log("All fields are required");
            return;
        }

        // Only submit if all fields are filled and consent is checked
        if (consentChecked) {
            try {
                const result = await createUser({ name, email, phone, message });
                console.log("result:", result);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    consentChecked: false
                })
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        } else {
            console.log("Accept terms and conditions");
        }
    };

    return (
        <>
            <div className="contact_home">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <div className='d-flex flex-column justify-content-center g-2 h-100'>
                                <h1>Get in touch</h1>
                                <p className='body-2'>
                                    For GPs and GP Practice Management queries, please complete the form below and a member of the team will be in touch.
                                </p>
                                <p className='body-2'>
                                    For patient queries, please contact your GP practice directly.
                                </p>
                                <Form className='mt-5' onSubmit={handleSubmit}>
                                    <Form.Group className="mb-3" controlId="formFirstName">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            placeholder="Enter First Name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="email"
                                            placeholder="Enter Email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                                        <Form.Label>Phone number</Form.Label>
                                        <Form.Control
                                            type="tel"
                                            name="phone"
                                            placeholder="Enter Phone Number"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            rows={4}
                                            name="message"
                                            placeholder="Enter your message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formConsentCheckbox">
                                        <Form.Check
                                            type="checkbox"
                                            label="I consent to my submitted data being processed and stored by ParcAi in compliance with our Privacy Policy."
                                            name="consentChecked"
                                            checked={formData.consentChecked}
                                            onChange={handleCheckboxChange}
                                        />
                                    </Form.Group>

                                    <Button disabled={!formData.consentChecked} variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="hero-contact__image-wrapper">
                    <img
                        src="https://pippo.ie/wp-content/uploads/2022/10/contact-phone-block.svg"
                        alt="shapes"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
            <div className="pippo-footer__image-wrapper">
                <img className="pippo-footer__image" src="https://pippo.ie/wp-content/uploads/2022/10/other-screen-footer-trim.svg" alt="shapes" width="100%" />
            </div>
        </>
    );
}
