import React from 'react'
import { useNavigate } from 'react-router-dom'
import AboutUs from '../LandingPages/AboutUs'
import TeamMates from '../LandingPages/TeamMates'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function About(props) {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div class="container-fluid position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <a href="index.html" class="navbar-brand p-0">
                        <h1 class="m-0"><i class="fa fa-user-tie me-2"></i>Startup</h1>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0">
                            <a class="nav-item nav-link" onClick={() => navigate('/companyportfolio')}>Home</a>
                            <a class="nav-item nav-link active" onClick={() => navigate('/companyportfolio/about')}>About</a>
                            <a href="service.html" class="nav-item nav-link">Services</a>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                                <div class="dropdown-menu m-0">
                                    <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                    <a href="detail.html" class="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <div class="nav-item dropdown">
                                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div class="dropdown-menu m-0">
                                    <a href="price.html" class="dropdown-item">Pricing Plan</a>
                                    <a href="feature.html" class="dropdown-item">Our features</a>
                                    <a href="team.html" class="dropdown-item">Team Members</a>
                                    <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                                    <a href="quote.html" class="dropdown-item">Free Quote</a>
                                </div>
                            </div>
                            <a href="contact.html" class="nav-item nav-link">Contact</a>
                        </div>
                        <butaton type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></butaton>
                        <a href="https://htmlcodex.com/startup-company-website-template" class="btn btn-primary py-2 px-4 ms-3">Download Pro Version</a>
                    </div>
                </nav>

                <div class="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: '90px' }}>
                    <div class="row py-5">
                        <div class="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 class="display-4 text-white animated zoomIn">About Us</h1>
                            <a href="" class="h5 text-white">Home</a>
                            <i class="far fa-circle text-white px-2"></i>
                            <a href="" class="h5 text-white">About</a>
                        </div>
                    </div>
                </div>
            </div>
            <AboutUs />
            <TeamMates />
            <Footer />
        </>
    )
}

export default About