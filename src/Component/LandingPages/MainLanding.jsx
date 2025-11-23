import React from 'react'
import logo from '../../assets/img/logo.png'
import carousel1 from '../../assets/img/carousel-1.jpg'
import carousel2 from '../../assets/img/carousel-2.jpg'
import { useNavigate } from 'react-router-dom'

function MainLanding(props) {
    const navigate = useNavigate()
    return (
        <>
            {/* Main landing start here */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    {/* <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Startup</h1>
          </a> */}
                    <img src={logo} alt='image' style={{ width: '131px' }} />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <a className="nav-item nav-link active" onClick={() => navigate('/')}>Home</a>
                            <a className="nav-item nav-link" onClick={() => navigate('/about')}>About</a>
                            <a className="nav-item nav-link" onClick={() => navigate('/Service')}>Services</a>
                            {/* <div className="nav-item dropdown">erv
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu m-0">
                                    <a className="dropdown-item">Blog Grid</a>
                                    <a className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu m-0">
                                    <a className="dropdown-item">Pricing Plan</a>
                                    <a className="dropdown-item">Our features</a>
                                    <a className="dropdown-item">Team Members</a>
                                    <a className="dropdown-item">Testimonial</a>
                                    <a className="dropdown-item">Free Quote</a>
                                </div>
                            </div> */}
                            <a className="nav-item nav-link" onClick={() => navigate('/contact')}>Contact</a>
                        </div>
                        {/* <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button> */}
                    </div>
                </nav>

                <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src={carousel1} alt="Image" style={{ height: '770px' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3">
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Tech You Can Trust</h5>
                                    <h3 className="display-1 text-white mb-md-4 animated zoomIn">Empowering Innovation & Delivering Excellence</h3>
                                    <a onClick={() => navigate('/contact')} className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact Us</a>
                                    {/* <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                  <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src={carousel2} alt="Image" style={{ height: '770px' }} />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: '900px' }}>
                                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Reliable Tech & Remarkable Solutions</h5>
                                    <h3 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h3>
                                    <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Contact Us</a>
                                    {/* <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                  <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Main landing end here */}

            <div className="modal fade" id="searchModal">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                        <div className="modal-header border-0">
                            <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body d-flex align-items-center justify-content-center">
                            <div className="input-group" style={{ maxWidth: '600px' }}>
                                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MainLanding