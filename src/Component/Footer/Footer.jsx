import React from 'react'
import onlylogo from '../../assets/img/onlylogo.png'
import { useNavigate } from 'react-router-dom'
function Footer(props) {
    const navigate = useNavigate()
    return (
        <>
            {/* Footer Start  */}
            <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-4 col-md-6 footer-about">
                            <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                                <a class="navbar-brand">
                                    <h1 class="m-0 text-white">
                                        <i class="fa fa-user-tie me-2"></i>
                                        Swami Tech
                                    </h1>
                                </a>
                                <p class="mt-3 mb-4">Stay Connected!
                                    Enter your Gmail and we’ll reach out with everything you need—quick, simple, and secure.</p>
                                <form action="">
                                    <div class="input-group">
                                        <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                                        <button class="btn btn-dark">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-6">
                            <div class="row gx-5">
                                <div class="col-lg-4 col-md-12 pt-5 mb-5">
                                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 class="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-geo-alt text-primary me-2"></i>
                                        <p class="mb-0">Pune , India</p>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-envelope-open text-primary me-2"></i>
                                        <p class="mb-0">info@swamitech.in</p>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-telephone text-primary me-2"></i>
                                        <p class="mb-0">+91 8421052339</p>
                                    </div>
                                    <div class="d-flex mt-4">
                                        <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                                        <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                                        <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                                        <a class="btn btn-primary btn-square" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 class="text-light mb-0">Quick Links</h3>
                                    </div>
                                    <div class="link-animated d-flex flex-column justify-content-start">
                                        <a class="text-light mb-2" onClick={() => navigate('/companyportfolio')}><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                                        <a class="text-light mb-2" onClick={() => navigate('/companyportfolio/about')}><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a class="text-light mb-2" onClick={() => navigate('/companyportfolio/Service')}><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                                        {/* <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                        <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                                        <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a> */}
                                    </div>
                                </div>
                                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 class="text-light mb-0">Popular Links</h3>
                                    </div>
                                    <div class="link-animated d-flex flex-column justify-content-start">
                                        {/* <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a> */}
                                        {/* <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                                        <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a> */}
                                        {/* <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                                        <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a> */}
                                        <a class="text-light" onClick={() => navigate('/companyportfolio/contact')}><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-white" style={{ background: '#061429' }}>
                <div class="container text-center">
                    <div class="row justify-content-end">
                        <div class="col-lg-8 col-md-6">
                            <div class="d-flex align-items-center justify-content-center" style={{ height: '75px' }}>
                                <p class="mb-0">&copy; <a class="text-white border-bottom" href="#">Swami Tech Solutions</a>. All Rights Reserved.
                                    Designed by <a class="text-white border-bottom" href="">Swami Tech Solutions Design Team</a>
                                </p>
                                <br />
                                {/* Distributed By: <a class="border-bottom" href="" target="_blank">Company Name</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End  */}
        </>
    )
}

export default Footer