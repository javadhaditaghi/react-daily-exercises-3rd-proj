import { Container, Col, Row } from "react-bootstrap"
import "./Services.css"
import jsonData1 from "./Services.json"
import Aos from "aos";
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";

const Services = () => {
    useEffect(() => {
        Aos.init();
    }, []);
    return (
        <section id="services" className="services">
            <Container className="section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>
            <Container>
                <Row className="gy-4">
                    {jsonData1.map(service => (
                        <Col lg={6} data-aos="fade-up" data-aos-delay="100" key={service.id}>
                            <div className="service-item d-flex">
                                <div className="icon flex-shrink-0"><i className={service.icon}></i></div>
                                <div>
                                    <h4 className="title"><Link to={`/Services/${service.id}`} className="stretched-link">{service.title}</Link></h4>
                                    <p className="description">{service.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>

        </section>
    )
}


export default Services
