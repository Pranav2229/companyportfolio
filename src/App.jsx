import { useState } from 'react'
import carousel1 from './assets/img/carousel-1.jpg'
import carousel2 from './assets/img/carousel-2.jpg'
import about from './assets/img/about.jpg'
import feature from './assets/img/feature.jpg'
import team1 from './assets/img/team-1.jpg'
import team2 from './assets/img/team-2.jpg'
import team3 from './assets/img/team-3.jpg'
import logo from './assets/img/logo.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Header start here  */}
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>123 Street, New York, USA</small>
              <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</small>
              <small className="text-light"><i className="fa fa-envelope-open me-2"></i>info@example.com</small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: '45px' }}>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-twitter fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-facebook-f fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-linkedin-in fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i className="fab fa-instagram fw-normal"></i></a>
              <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href=""><i className="fab fa-youtube fw-normal"></i></a>
            </div>
          </div>
        </div>
      </div>
      {/* Header End here  */}

      {/* Main landing start here */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
          {/* <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0"><i className="fa fa-user-tie me-2"></i>Startup</h1>
          </a> */}
          <img src={logo} alt='image' style={{width: '100px'}}/>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <a href="index.html" className="nav-item nav-link active">Home</a>
              <a href="about.html" className="nav-item nav-link">About</a>
              <a href="service.html" className="nav-item nav-link">Services</a>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
                <div className="dropdown-menu m-0">
                  <a href="blog.html" className="dropdown-item">Blog Grid</a>
                  <a href="detail.html" className="dropdown-item">Blog Detail</a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                <div className="dropdown-menu m-0">
                  <a href="price.html" className="dropdown-item">Pricing Plan</a>
                  <a href="feature.html" className="dropdown-item">Our features</a>
                  <a href="team.html" className="dropdown-item">Team Members</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                  <a href="quote.html" className="dropdown-item">Free Quote</a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">Contact</a>
            </div>
            <button type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
          </div>
        </nav>

        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                  <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                  <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                  <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
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

      {/* Counter start here */}
      <div className="container-fluid facts py-1 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-users text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Happy Clients</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">Projects Done</h5>
                  <h1 className="mb-0" data-toggle="counter-up">12345</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: '150px' }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: '60px', height: '60px' }}>
                  <i className="fa fa-award text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Win Awards</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">12345</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Counter end here */}


      {/* About us start here  */}
      <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
                <h1 class="mb-0">The Best IT Solution With 3 Years of Experience</h1>
              </div>
              <p class="mb-4">Welcome to [Your Company Name], a next-generation digital solutions startup transforming ideas into powerful online experiences.

                We specialize in website development, product development, and mobile application development, helping businesses innovate, scale, and thrive in the digital era. Our mission is to empower startups and enterprises with cutting-edge technology and creative solutions that deliver real impact.

                At [Your Company Name], we believe every digital product should be intuitive, scalable, and built for the future. Our multidisciplinary team of developers, designers, and strategists works closely with clients to craft seamless digital products — from concept to launch and beyond.

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
                <p class="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                <h2 class="text-white mb-0">+012 345 6789</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End  */}

      {/* Quote Start  */}
      <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="row g-5">
            <div class="col-lg-7">
              <div class="section-title position-relative pb-3 mb-5">
                <h5 class="fw-bold text-primary text-uppercase">Request A Quote</h5>
                <h1 class="mb-0">Need A Free Quote? Please Feel Free to Contact Us</h1>
              </div>
              <div class="row gx-3">
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 class="mb-4"><i class="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
                </div>
                <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 class="mb-4"><i class="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
                </div>
              </div>
              <p class="mb-4">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
              <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: '60px', height: '60px' }}>
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <div class="ps-4">
                  <h5 class="mb-2">Call to ask any question</h5>
                  <h4 class="text-primary mb-0">+012 345 6789</h4>
                </div>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                <form>
                  <div class="row g-3">
                    <div class="col-xl-12">
                      <input type="text" class="form-control bg-light border-0" placeholder="Your Name" style={{ height: '55px' }} />
                    </div>
                    <div class="col-12">
                      <input type="email" class="form-control bg-light border-0" placeholder="Your Email" style={{ height: '55px' }} />
                    </div>
                    <div class="col-12">
                      <select class="form-select bg-light border-0" style={{ height: '55px' }}>
                        <option selected>Select A Service</option>
                        <option value="1">Service 1</option>
                        <option value="2">Service 2</option>
                        <option value="3">Service 3</option>
                      </select>
                    </div>
                    <div class="col-12">
                      <textarea class="form-control bg-light border-0" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-dark w-100 py-3" type="submit">Request A Quote</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Quote End  */}

      {/* Team Start  */}
      <div class="container-fluid py-1 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container py-5">
          <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: '600px' }}>
            <h5 class="fw-bold text-primary text-uppercase">Team Members</h5>
            <h1 class="mb-0">Professional Stuffs Ready to Help Your Business</h1>
          </div>
          <div class="row g-5">
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div class="team-item bg-light rounded overflow-hidden">
                <div class="team-img position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={team1} alt="" />
                  <div class="team-social">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                  </div>
                </div>
                <div class="text-center py-4">
                  <h4 class="text-primary">Full Name</h4>
                  <p class="text-uppercase m-0">Designation</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div class="team-item bg-light rounded overflow-hidden">
                <div class="team-img position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={team2} alt="" />
                  <div class="team-social">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                  </div>
                </div>
                <div class="text-center py-4">
                  <h4 class="text-primary">Full Name</h4>
                  <p class="text-uppercase m-0">Designation</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div class="team-item bg-light rounded overflow-hidden">
                <div class="team-img position-relative overflow-hidden">
                  <img class="img-fluid w-100" src={team3} alt="" />
                  <div class="team-social">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-instagram fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
                  </div>
                </div>
                <div class="text-center py-4">
                  <h4 class="text-primary">Full Name</h4>
                  <p class="text-uppercase m-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Team End  */}

      {/* Footer Start  */}
      <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container">
          <div class="row gx-5">
            <div class="col-lg-4 col-md-6 footer-about">
              <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <a href="index.html" class="navbar-brand">
                  <h1 class="m-0 text-white"><i class="fa fa-user-tie me-2"></i>Startup</h1>
                </a>
                <p class="mt-3 mb-4">Lorem diam sit erat dolor elitr et, diam lorem justo amet clita stet eos sit. Elitr dolor duo lorem, elitr clita ipsum sea. Diam amet erat lorem stet eos. Diam amet et kasd eos duo.</p>
                <form action="">
                  <div class="input-group">
                    <input type="text" class="form-control border-white p-3" placeholder="Your Email" />
                    <button class="btn btn-dark">Sign Up</button>
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
                    <p class="mb-0">123 Street, New York, USA</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-envelope-open text-primary me-2"></i>
                    <p class="mb-0">info@example.com</p>
                  </div>
                  <div class="d-flex mb-2">
                    <i class="bi bi-telephone text-primary me-2"></i>
                    <p class="mb-0">+012 345 67890</p>
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
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                    <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div class="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 class="text-light mb-0">Popular Links</h3>
                  </div>
                  <div class="link-animated d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Meet The Team</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                    <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
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
                <p class="mb-0">&copy; <a class="text-white border-bottom" href="#">Your Site Name</a>. All Rights Reserved.
                  Designed by <a class="text-white border-bottom" href="">Company Name</a>
                </p>
                <br />
                {/* Distributed By: <a class="border-bottom" href="" target="_blank">Company Name</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End  */}

      <a class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>

    </>
  )
}

export default App
