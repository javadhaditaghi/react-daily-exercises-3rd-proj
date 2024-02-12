
import "./About-us.css"
import jsonData from "./About-us.json"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const AboutUs = () => {
    return (
        <section id="about" className="about" >

            <Container data-aos="fade-up" data-aos-delay="100">
                <Row className="align-items-xl-center gy-5">

                    <Col xl={5} className="content">
                        <h3>About Us</h3>
                        <h2>Ducimus rerum libero reprehenderit cumque</h2>
                        <p>Ipsa sint sit. Quis ducimus tempore dolores impedit et dolor cumque alias maxime. Enim reiciendis minus
                            et rerum hic non. Dicta quas cum quia maiores iure. Quidem nulla qui assumenda incidunt voluptatem tempora
                            deleniti soluta.</p>
                        <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                    </Col>

                    <Col xl={7}>
                        <Row className="gy-4 icon-boxes">
                            {
                                jsonData.map(infoCard => (
                                    <Col md={6} data-aos="fade-up" data-aos-delay="200">
                                        <div className="icon-box">
                                            <i className={infoCard.icon}></i>
                                            <h3>{infoCard.title}</h3>
                                            <p>{infoCard.description}</p>
                                        </div>
                                    </Col>
                                ))}

                        </Row>
                    </Col>

                </Row>
            </Container>

        </section >
    )



}


export default AboutUs