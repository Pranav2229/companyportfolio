import React, { useEffect } from 'react'

function Service(props) {
    useEffect(() => {
        window.scroll(0, 0)
    })
    return (
        <>
            {/* Service Start  */}
            <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
                        <h1 class="mb-0">Custom IT Solutions for Your Successful Business</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon">
                                    <i class="fa fa-shield-alt text-white"></i>
                                </div>
                                <h4 class="mb-3">Web Development</h4>
                                <p class="m-0">Custom websites that are responsive, scalable, and visually engaging.</p>
                                <a class="btn btn-lg btn-primary rounded" href="">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon">
                                    <i class="fa fa-chart-pie text-white"></i>
                                </div>
                                <h4 class="mb-3">Mobile App Development</h4>
                                <p class="m-0">High-performance apps for iOS and Android that deliver seamless user experiences.</p>
                                <a class="btn btn-lg btn-primary rounded" href="">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon">
                                    <i class="fa fa-code text-white"></i>
                                </div>
                                <h4 class="mb-3">Product Development</h4>
                                <p class="m-0">Innovative digital products designed to meet your business goals.</p>
                                <a class="btn btn-lg btn-primary rounded" href="">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon">
                                    <i class="fab fa-android text-white"></i>
                                </div>
                                <h4 class="mb-3">Digital Asset Care & Maintenance </h4>
                                <p class="m-0">Comprehensive management and upkeep of your websites and apps, keeping them secure, updated, and optimized.</p>
                                <a class="btn btn-lg btn-primary rounded" href="">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
                                <div class="service-icon">
                                    <i class="fa fa-search text-white"></i>
                                </div>
                                <h4 class="mb-3">SEO Optimization</h4>
                                <p class="m-0">Strategies to boost visibility, drive traffic, and improve your search engine rankings.</p>
                                <a class="btn btn-lg btn-primary rounded" href="">
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                            <div class="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                                <h3 class="text-white mb-3">Call Us For Quote</h3>
                                {/* <p class="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p> */}
                                <h2 class="text-white mb-0">+918421052339</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service End  */}
        </>
    )
}

export default Service