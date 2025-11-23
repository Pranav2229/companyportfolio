import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import Header from '../Header/Header'
import Service from '../LandingPages/Service'
import Footer from '../Footer/Footer'
function ServiceDetail(props) {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <div class="container-fluid position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    {/* <a class="navbar-brand p-0">
                        <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
                    </a> */}
                    <img src={logo} alt='image' style={{ width: '131px' }} />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link" onClick={() => navigate('/')}>Home</a>
                            <a class="nav-item nav-link" onClick={() => navigate('/about')}>About</a>
                            <a class="nav-item nav-link active" onClick={() => navigate('/Service')}>Services</a>
                            {/* <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item">Blog Grid</a>
                                    <a class="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a class="dropdown-item">Pricing Plan</a>
                                    <a class="dropdown-item">Our features</a>
                                    <a class="dropdown-item">Team Members</a>
                                    <a class="dropdown-item">Testimonial</a>
                                    <a class="dropdown-item">Free Quote</a>
                                </div>
                            </div> */}
                            <a class="nav-item nav-link" onClick={() => navigate('/contact')}>Contact</a>
                        </div>
                        {/* <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton> */}
                        {/* <a class="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a> */}
                    </div>
                </nav>

                <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                    <div class="row py-5">
                        <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 class="display-4 text-white animated zoomIn">Services</h1>
                            <a class="h5 text-white">Swami Tech Solutions</a>
                            {/* <i class="far fa-circle text-white px-2"></i>
                            <a class="h5 text-white">Services</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="searchModal" tabindex="-1">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
                        <div class="modal-header border-0">
                            <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body d-flex align-items-center justify-content-center">
                            <div class="input-group" style={{ maxWidth: '600px' }}>
                                <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                                <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Service />
            <Footer />
        </>
    )
}

export default ServiceDetail