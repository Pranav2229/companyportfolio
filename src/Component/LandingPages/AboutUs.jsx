import React from 'react'
import about from '../../assets/img/about.jpg'

function AboutUs(props) {
    return (
        <>
            {/* About us start here  */}
            <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-7">
                            <div class="section-title position-relative pb-3 mb-5">
                                <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                                <h1 class="mb-0">The Best IT Solution With 3 Years of Experience</h1>
                            </div>
                            <p class="mb-4">Welcome to Swami Infotech Solutions, a next-generation digital solutions startup transforming ideas into powerful online experiences.

                                We specialize in website development, product development, and mobile application development, helping businesses innovate, scale, and thrive in the digital era. Our mission is to empower startups and enterprises with cutting-edge technology and creative solutions that deliver real impact.

                                At Swami Infotech Solutions, we believe every digital product should be intuitive, scalable, and built for the future. Our multidisciplinary team of developers, designers, and strategists works closely with clients to craft seamless digital products — from concept to launch and beyond.

                                Our approach is simple:

                                Listen deeply to understand your vision.
                                Design thoughtfully to create intuitive, modern interfaces.
                                Develop efficiently using the latest technologies for performance and scalability.
                                Deliver reliably with ongoing support and optimization.</p>
                            <div class="row g-0 mb-3">
                                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                                    <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Best In Industry</h5>
                                    <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                                </div>
                                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                                    <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                                    <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Customized Solutions</h5>
                                </div>
                            </div>
                            <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                                <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                                    <i class="fa fa-phone-alt text-white"></i>
                                </div>
                                <div class="ps-4">
                                    <h5 class="mb-2">Call to ask any question</h5>
                                    <h4 class="text-primary mb-0">+012 345 6789</h4>
                                </div>
                            </div>
                            {/* <a href="quote.html" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Request A Quote</a> */}
                        </div>
                        <div class="col-lg-5" style={{ minHeight: '500px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={about} style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About us End here  */}
        </>
    )
}

export default AboutUs