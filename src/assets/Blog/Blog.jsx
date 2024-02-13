import "./Blog.css"
import jsonData5 from "./Blog.json"
import { Container, Row, Col } from "react-bootstrap"
import BlogsTitle from "./BlogTitle"
import BlogPagination from "./BlogPagination"

const Blog = () => {
    return (
        <main id="main">
            <BlogsTitle />
            <section id="blog" class="blog">

                <Container data-aos="fade-up" data-aos-delay="100">

                    <div class="posts-list">
                        <Row class="gy-4">

                            {jsonData5.map(blog => (
                                <Col xl={4} lg={6} key={blog.id} className="mb-4">
                                    <article>

                                        <div class="post-img">
                                            <img src={blog.imageSrc} alt="" class="img-fluid" />
                                        </div>

                                        <p class="post-category">{blog.category}</p>

                                        <h2 class="title">
                                            <a href="blog-details.html">{blog.title}</a>
                                        </h2>

                                        <div class="d-flex align-items-center">
                                            <img src={blog.authorImg} alt="" class="img-fluid post-author-img flex-shrink-0" />
                                            <div class="post-meta">
                                                <p class="post-author">{blog.author}</p>
                                                <p class="post-date">
                                                    <time datetime="2022-01-01">{blog.date}</time>
                                                </p>
                                            </div>
                                        </div>

                                    </article>
                                </Col>
                            ))}
                        </Row>
                    </div>

                    <BlogPagination />

                </Container>

            </section>

        </main>
    )
}


export default Blog