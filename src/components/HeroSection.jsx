import React from 'react'
import heroimage from "/public/tvornica-naslovna.jpg";
import Dropdown from './Dropdown';
import MainNavbar from './Navbars/MainNavbar'

const HeroSection = () => {
    return (
        <div className="hero-section"
            style={{
                backgroundImage: `url(${heroimage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}>
            <MainNavbar />
            <div className="overlay"></div>
            <div className="content">
                <h1>Uz Vas pri svakom koraku organizacije vjenčanja i ostalih svečanosti</h1>
                <h3>Otkrijte inspiracije, savjete i trendove za vaše savršeno vjenčanje.</h3>
                <Dropdown />
                <h3>Pogledajte naše najnovije članke o svemu što trebate znati za organizaciju savršenog vjenčanja.</h3>
            </div>
        </div >
    )
}

export default HeroSection