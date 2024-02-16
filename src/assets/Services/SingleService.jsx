import { Container, Col, Row } from "react-bootstrap"
import "./Services.css"
import jsonData1 from "./Services.json"
import { useParams } from "react-router-dom";

const SingleService = () => {
    const params = useParams()
    console.log(params)

    const getServices = () => {
        const serviceID = parseInt(params.ServiceId)
        return jsonData1.find((serv) => serv.id == serviceID)
    }
    const finalSevice = getServices()
    console.log(finalSevice.id)

    return (
        <section id="services" className="services">
            <Container>
                <Row className="gy-4">

                    <Col lg={6} data-aos="fade-up" data-aos-delay="100" key={finalSevice.id}>
                        <div className="service-item d-flex">
                            <div className="icon flex-shrink-0"><i className={finalSevice.icon}></i></div>
                            <div>
                                <h4 className="title"><a href="services-details.html" className="stretched-link">{finalSevice.title}</a></h4>
                                <p className="description">{finalSevice.description}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </section >
    )
}

export default SingleService