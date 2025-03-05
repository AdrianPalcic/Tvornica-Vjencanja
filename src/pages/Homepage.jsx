import React from 'react'
import HeroSection from '../components/HeroSection'
import NewestBlogs from '../components/Homepage Components/NewestBlogs'
import PopularServices from '../components/Homepage Components/PopularServices'
import WhatBridesSay from '../components/Homepage Components/WhatBridesSay'
import Footer from '../components/Footer'
import OnamaSeller from '../components/Homepage Components/OnamaSeller'
import VisitOnFacebook from '../components/Homepage Components/VisitOnFacebook'

const Homepage = () => {
    return (
        <>
            <HeroSection />
            <div className="width">
                <NewestBlogs />
                <WhatBridesSay />
                <PopularServices />
                <OnamaSeller />
                <VisitOnFacebook />
                <div className="small-cta">
                    <h1>Ili</h1>
                    <h3>Kontaktirajte nas putem maila</h3>
                    <h3><a href='mailto:adrian.palcic@gmail.com'><span>Klikni me!</span></a></h3>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Homepage