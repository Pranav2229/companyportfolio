import React from 'react'
import feature from '../../assets/img/feature.jpg'

function Features(props) {
    return (
        <>
            {/* Features Start  */}
            <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                        <h5 class="fw-bold text-primary text-uppercase">Why Choose Us</h5>
                        <h1 class="mb-0">We Are Here to Grow Your Business Exponentially</h1>
                    </div>
                    <div class="row g-5">
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fa-cubes text-white"></i>
                                    </div>
                                    <h4>Best In Industry</h4>
                                    <p class="mb-0">
                                        a) Experienced developers & website managers<br />
                                        b) Fast response & transparent reporting<br />
                                        c) Affordable monthly or annual maintenance plans
                                    </p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fa-award text-white"></i>
                                    </div>
                                    <h4>Fair Prices</h4>
                                    <p class="mb-0">
                                        a) Know exactly what you’re paying for.<br />
                                        b) Flexible plans to fit businesses of all sizes and budgets.<br />
                                        c) Clear breakdowns with every project or service.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: '350px' }}>
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src={feature} style={{ objectFit: 'cover' }} />
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="row g-5">
                                <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fa-users-cog text-white"></i>
                                    </div>
                                    <h4>Customized Solutions</h4>
                                    <p class="mb-0">
                                        a) We analyze your objectives and craft solutions that align perfectly with your goals.<br />
                                        b) We select the best tools, platforms, and frameworks to match your project requirements.
                                    </p>
                                </div>
                                <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                                    <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <i class="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <h4>24/7 Support</h4>
                                    <p class="mb-0">Our team is active online day and night, ensuring your website issues are addressed immediately.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Features Start  */}
        </>
    )
}

export default Features