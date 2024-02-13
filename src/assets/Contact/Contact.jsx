import "./Contact.css"
import { Container, Row, Col } from "react-bootstrap"


const Contact = () => {

    return (
        <section id="contact" class="contact">

            <Container>
                <div class="section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
            </Container>


            <Container data-aos="fade-up" data-aos-delay="100">

                <Row class="gy-4">

                    <Col lg={6}>

                        <Row class=" gy-4">
                            <Col md={6} className="pb-4">
                                <div class="info-item" data-aos="fade" data-aos-delay="200">
                                    <i class="bi bi-geo-alt"></i>
                                    <h3>Address</h3>
                                    <p>A108 Adam Street</p>
                                    <p>New York, NY 535022</p>
                                </div>
                            </Col>

                            <Col md={6} className="pb-4">
                                <div class="info-item" data-aos="fade" data-aos-delay="300">
                                    <i class="bi bi-telephone"></i>
                                    <h3>Call Us</h3>
                                    <p>+1 5589 55488 55</p>
                                    <p>+1 6678 254445 41</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div class="info-item" data-aos="fade" data-aos-delay="400">
                                    <i class="bi bi-envelope"></i>
                                    <h3>Email Us</h3>
                                    <p>info@example.com</p>
                                    <p>contact@example.com</p>
                                </div>
                            </Col>

                            <Col md={6}>
                                <div class="info-item" data-aos="fade" data-aos-delay="500">
                                    <i class="bi bi-clock"></i>
                                    <h3>Open Hours</h3>
                                    <p>Monday - Friday</p>
                                    <p>9:00AM - 05:00PM</p>
                                </div>
                            </Col>

                        </Row>

                    </Col>

                    <Col lg={6} className="mt-3 mt-md-0">
                        <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up"
                            data-aos-delay="200">
                            <Row class="gy-4">

                                <Col md={6} className="pb-3">
                                    <input type="text" name="name" class="form-control" placeholder="Your Name" required />
                                </Col>

                                <Col md={6} className="pb-3">
                                    <input type="email" class="form-control" name="email" placeholder="Your Email" required />
                                </Col>

                                <Col md={12} className="pb-3">
                                    <input type="text" class="form-control" name="subject" placeholder="Subject" required />
                                </Col>

                                <Col md={12} className="pb-3">
                                    <textarea class="form-control" name="message" rows="6" placeholder="Message" required></textarea>
                                </Col>

                                <Col md={12} className="text-center">
                                    <div class="loading">Loading</div>
                                    <div class="error-message"></div>
                                    <div class="sent-message">Your message has been sent. Thank you!</div>

                                    <button type="submit">Send Message</button>
                                </Col>

                            </Row>
                        </form>
                    </Col>

                </Row>

            </Container >

        </section >

    )
}

export default Contact