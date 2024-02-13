
import "./BlogPagination.css"

const BlogPagination = () => {
    return (
        <div className="pagination d-flex justify-content-center">
            <ul>
                <li><a href="#">1</a></li>
                <li className="active"><a href="#">2</a></li>
                <li><a href="#">3</a></li>
            </ul>
        </div>
    )
}

export default BlogPagination