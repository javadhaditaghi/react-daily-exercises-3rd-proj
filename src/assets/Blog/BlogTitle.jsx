import "./BlogTitle.css"
import { Container, Row, Col } from "react-bootstrap"

const BlogsTitle = () => {
    return (
        <div data-aos="fade" className="page-title">
            <div className="heading">
                <Container>
                    <Row>
                        <div className="d-flex justify-content-center text-center">
                            <Col lg={8}>
                                <h1>Blog</h1>
                                <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
        </div>

    )
}


export default BlogsTitle

