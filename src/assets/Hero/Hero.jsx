import "./Hero.css"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <section id="hero" className="hero">
            <img src="../../../public/hero-bg.jpg" alt="" data-aos="fade-in" />
            <Container>
                <Row>
                    <Col lg={10}>
                        <h2 data-aos="fade-up" data-aos-delay="100">Welcome to Our Website</h2>
                        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap
                        </p>
                    </Col>
                    <Col lg={5}>
                        <form action="#" className="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
                            <input type="text" className="form-control" placeholder="Enter email address" />
                            <input type="submit" className="btn btn-primary" value="Sign up" />
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}

export default Hero
