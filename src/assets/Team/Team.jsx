import "./Team.css";
import jsonData from "./Team.json"
import { Col, Row, Container, } from "react-bootstrap";

const Team = () => {
    return (
        <section id="team" className="team">


            <Container className="section-title" data-aos="fade-up">
                <h2>Team</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </Container>

            <Container>

                <Row className="gy-5">

                    {jsonData.map(member => (
                        <Col lg={4} md={6} className="member" data-aos="fade-up" data-aos-delay="100" key={member.id}>
                            <div className="member-img">
                                <img src={member.imageSrc} className="img-fluid" alt="" />
                                <div className="social">
                                    <a href="#"><i className="bi bi-twitter"></i></a>
                                    <a href="#"><i className="bi bi-facebook"></i></a>
                                    <a href="#"><i className="bi bi-instagram"></i></a>
                                    <a href="#"><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info text-center">
                                <h4>{member.name}</h4>
                                <span>{member.position}</span>
                                <p>{member.description}</p>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>

        </section>
    )
}

export default Team