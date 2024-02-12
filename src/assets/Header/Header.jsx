import "./Header.css"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {

    return (
        <header id="header" className="header fixed-top d-flex align-items-center px-md-4 ps-2">
            <Navbar className="container-fluid d-flex align-items-center justify-content-between">
                <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0 d-none d-sm-flex">
                    { /* <img src="assets/img/logo.png" alt=""> */}
                    <h1>Append</h1>
                    <span>.</span>
                </a>
                <Nav id="navmenu" className="navmenu">

                    <Nav.Link><a href="index.html#hero" className="active">Home</a></Nav.Link>
                    <Nav.Link><a href="index.html#about">About</a></Nav.Link>
                    <Nav.Link><a href="index.html#services">Services</a></Nav.Link>
                    <Nav.Link><a href="index.html#team">Team</a></Nav.Link>
                    <Nav.Link><a href="blog.html">Blog</a></Nav.Link>
                    <Nav.Link><a href="index.html#contact">Contact</a></Nav.Link>

                    {/*<i className="mobile-nav-toggle d-xl-none bi bi-list"></i>*/}
                </Nav>

            </Navbar>
        </header>
    )
}


export default Header