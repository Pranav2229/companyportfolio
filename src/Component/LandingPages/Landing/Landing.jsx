import React from 'react'
import MainLanding from '../MainLanding'
import Counter from '../Counter'
import AboutUs from '../AboutUs'
import Features from '../Features'
import Service from '../Service'
import Quote from '../Quote'
import TeamMates from '../TeamMates'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

function Landing(props) {
    return (
        <>
            <Header />
            <MainLanding />
            <Counter />
            <AboutUs />
            <Features />
            <Service />
            <Quote />
            {/* <TeamMates /> */}
            <Footer />
            <a class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
        </>
    )
}

export default Landing