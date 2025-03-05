import React from 'react'
import MainNavbar from '../Navbars/MainNavbar'
const BrideHero = () => {
    return (
        <div className="bride-hero">
            <MainNavbar />
            <div className="bride-hero-content">
                <h1>Što kažu <span> mlade </span></h1>
                <h2>
                    Stvarne priče sretnih parova koji su pronašli svoje savršene vjenčane prodavače</h2>
                <input type="text" placeholder="Pretraži priče" />
            </div>
        </div>
    )
}

export default BrideHero