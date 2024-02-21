import "./Hero.css"
import "../../../src/assets/Team/Team.css";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import jsonDataHero from "./../Blog/Blog.json"
import { Link } from "react-router-dom";



const Hero = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const [blogs, setBlogs] = useState()



    const handleInputChange = (event) => {
        setBlogs(event.target.value);
    }

    const filteredBlogs = () => {
        return jsonDataHero.filter(blogi => blogi.title.includes(blogs))
    }

    console.log(filteredBlogs())



    return (
        <>
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

            <section id="blog" className="blog">

                <Container data-aos="fade-up" data-aos-delay="100">

                    <div className="posts-list">
                        <Row className="gy-4">

                            {filteredBlogs().map(blog => (
                                <Col xl={4} lg={6} key={blog.id} className="mb-4">
                                    <article>

                                        <div className="post-img">
                                            <img src={blog.imageSrc} alt="" className="img-fluid" />
                                        </div>

                                        <p className="post-category">{blog.category}</p>

                                        <h2 className="title">
                                            <Link to={`/Blog/${blog.id}`}>{blog.title}</Link>
                                        </h2>

                                        <div className="d-flex align-items-center">
                                            <img src={blog.authorImg} alt="" className="img-fluid post-author-img flex-shrink-0" />
                                            <div className="post-meta">
                                                <p className="post-author">{blog.author}</p>
                                                <p className="post-date">
                                                    <time datetime="2022-01-01">{blog.date}</time>
                                                </p>
                                            </div>
                                        </div>

                                    </article>
                                </Col>
                            ))}
                        </Row>
                    </div>


                </Container>

            </section>

        </>


    )
}

export default Hero
