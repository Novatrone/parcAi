import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const offerings = [
    {
        title: "Data Analytics Dashboards",
        description: "Visualize and analyze healthcare data for better decision-making and improved patient outcomes.",
        image: "/images/offering/dashboard-image.png",
        grid: 7
    },
    {
        title: "Appointment Management",
        description: "Streamline the booking process and manage appointments efficiently to reduce no-shows and improve patient satisfaction.",
        image: "/images/offering/appointment-image.png",
        grid: 5
    },
    {
        title: "Patient Information",
        description: "Securely manage and access patient records, ensuring data accuracy and confidentiality.",
        image: "/images/offering/patient-image.png",
        grid: 8
    },
    {
        title: "E-Prescription Management",
        description: "Simplify prescription management with electronic prescriptions, reducing errors and improving efficiency.",
        image: "/images/offering/prescription-image.png",
        grid: 4
    },
    {
        title: "Clinical Workflow",
        description: "Optimize clinical workflows to enhance the productivity of healthcare providers and improve patient care.",
        image: "/images/offering/workflow-image.png",
        grid: 4
    },
    {
        title: "Telemedicine",
        description: "Expand healthcare reach with secure and reliable telemedicine services, providing care remotely.",
        image: "/images/offering/telemedicine-image.png",
        grid: 4
    },
    {
        title: "AI-driven Admin Automation",
        description: "Leverage AI to automate administrative tasks, reducing workload and improving operational efficiency.",
        image: "/images/offering/automation-image.png",
        grid: 4
    },
    {
        title: "API Integration",
        description: "Integrate seamlessly with existing systems using robust APIs, enabling data exchange and interoperability.",
        image: "/images/offering/api-image.png",
        grid: 4
    },
    {
        title: "Inventory Management",
        description: "Manage medical inventory efficiently, ensuring the availability of necessary supplies and reducing wastage.",
        image: "/images/offering/inventory-image.png",
        grid: 8
    },
    {
        title: "Payments & Billing",
        description: "Simplify billing and payments with automated systems, ensuring timely and accurate transactions.",
        image: "/images/offering/billing-image.png",
        grid: 4
    },
    {
        title: "Patient Portal",
        description: "Provide patients with a secure portal to access their health information, schedule appointments, and communicate with healthcare providers.",
        image: "/images/offering/portal-image.png",
        grid: 5
    },
    {
        title: "Communications",
        description: "Enhance communication between healthcare providers and patients, ensuring timely and effective information exchange.",
        image: "/images/offering/communication-image.png",
        grid: 3
    }
];


export default function Offerings() {
    return (
        <>
            <div className="offering_home">
                <Container>
                    <Row className='g-0'>
                        <Col xs={12}>
                            <div className='text-center text-md-start'>
                                <h2
                                    style={{
                                        fontSize: "35px",
                                        lineHeight: 1.3,
                                        letterSpacing: -0.1
                                    }}
                                    className="responsive-heading"
                                >Your AI-Powered Health Tools</h2>
                                <p className='body-2'>
                                    Let your patients make it easy for themselves to book a GP appointment and refill their medicines from the internet. This method does not only help in saving time and simplifying tasks but also reduces the pressure on practice phone lines, thus creating efficient GPs’ offices while making patients feel like they are in control of their health.
                                </p>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <Row className='g-0'>
                                {offerings.map((offering, index) =>
                                    <Col key={index} xs={12} md={offering.grid}>
                                        {/* <Card className="offering-card h-100">
                                    <Card.Img variant="top" src={offering.image} />
                                    <Card.Body className="d-flex flex-column">
                                        <Card.Title>{offering.title}</Card.Title>
                                        <Card.Text className="flex-grow-1">{offering.description}</Card.Text>
                                    </Card.Body>
                                </Card> */}
                                        <div className=' offering-card p-3 mt-5 border h-100 d-flex flex-column justify-content-between'>
                                            <p className='body-2'>{offering.title}</p>
                                            <div className='flex-grow-1 d-flex justify-content-center align-items-center'>
                                                <img src={offering.image} className='w-100' alt='images' />
                                            </div>
                                        </div>
                                    </Col>
                                )}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}
