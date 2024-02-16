import "./Blog.css";
import jsonData5 from "./Blog.json";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";


const SingleBlog = () => {
    const params = useParams()




    const getBlog = () => {
        const blogID = parseInt(params.BlogId);
        return jsonData5.find((blog) => blog.id === blogID) || null;
    };
    const finalBlog = getBlog();


    return (
        <section id="blog" className="blog">

            <Container data-aos="fade-up" data-aos-delay="100">

                <div className="posts-list">
                    <Row className="gy-4">
                        <Col xl={4} lg={6} key={finalBlog.id} className="mb-4">
                            <article>
                                <div className="post-img">
                                    <img src={finalBlog.imageSrc} alt="" className="img-fluid" />
                                </div>

                                <p className="post-category">{finalBlog.category}</p>

                                <h2 className="title">
                                    <p>{finalBlog.title}</p>
                                </h2>

                                <div className="d-flex align-items-center">
                                    <img src={finalBlog.authorImg} alt="" className="img-fluid post-author-img flex-shrink-0" />
                                    <div className="post-meta">
                                        <p className="post-author">{finalBlog.author}</p>
                                        <p className="post-date">
                                            <time datetime="2022-01-01">{finalBlog.date}</time>
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </Col>
                    </Row>
                </div>



            </Container>

        </section >

    )
}


export default SingleBlog