import React from 'react'
import MainNavbar from '../components/Navbars/MainNavbar.jsx'
import OnamaHero from '../components/onama Components/OnamaHero'
import TkoSmoMi from '../components/onama Components/TkoSmoMi.jsx'
import StoNudimo from '../components/onama Components/StoNudimo.jsx'
import ContactForm from '../components/onama Components/ContactForm.jsx'
import Footer from '../components/Footer.jsx'

const Onama = () => {
    return (
        <>
            <MainNavbar />
            <OnamaHero />
            <div className="width">
                <TkoSmoMi />
                <StoNudimo />
                <ContactForm />
            </div>
            <Footer />
        </>
    )
}

export default Onama