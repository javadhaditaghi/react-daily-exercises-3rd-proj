import "./Hero.css"
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import jsonDataHero from "./../Blog/Blog.json"



const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);



    const handleInputChange = (event) => {
        console.log(event.target.value);
    }

    return (
        <section id="hero" className="hero">
            <img src="../../../public/hero-bg.jpg" alt="" data-aos="fade-in" />
            <Container>
                <Row>
                    <Col lg={10}>
                        <h2 data-aos="fade-up" data-aos-delay="100">We are blogger.com</h2>
                        <p data-aos="fade-up" data-aos-delay="200">Search the blogs and find the one you need
                        </p>
                    </Col>
                    <Col lg={5}>
                        <form action="#" className="sign-up-form d-flex" data-aos="fade-up" data-aos-delay="300">
                            <input type="text" className="form-control" placeholder="How can we help you?" onChange={handleInputChange} />
                            <input type="submit" className="btn btn-primary" value="Search" />
                        </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}

export default Hero
