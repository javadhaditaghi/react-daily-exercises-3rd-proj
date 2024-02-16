import "./Team.css";
import jsonData from "./Team.json";
import { Col, Row, Container, } from "react-bootstrap";
import { useParams } from "react-router-dom";


const TeamMember = () => {
    const params = useParams();
    // console.log(memberID)

    const getMember = () => {
        const memberID = parseInt(params.TeamId);
        return jsonData.find(member => member.id == memberID)
    };

    const eachMember = getMember();

    return (

        <section id="team" className="team" >
            <Container>
                <Row className="gy-5">
                    <Col lg={4} md={6} className="member" data-aos="fade-up" data-aos-delay="100" key={eachMember.id}>
                        <div className="member-img">
                            <img src={eachMember.imageSrc} className="img-fluid" alt="" />
                            <div className="social">
                                <a href="#"><i className="bi bi-twitter"></i></a>
                                <a href="#"><i className="bi bi-facebook"></i></a>
                                <a href="#"><i className="bi bi-instagram"></i></a>
                                <a href="#"><i className="bi bi-linkedin"></i></a>
                            </div>
                        </div>
                        <div className="member-info text-center">
                            <h4>{eachMember.name}</h4>
                            <span>{eachMember.position}</span>
                            <p>{eachMember.description}</p>
                        </div>
                    </Col>

                </Row>
            </Container>

        </section >


    )
}

export default TeamMember;