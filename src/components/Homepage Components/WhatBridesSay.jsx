import { Link } from "react-router-dom";
import image from ".././/././././/..//./../public/isle-walk.png";
import { GoArrowRight } from "react-icons/go";

const WhatBridesSay = () => {



    return (
        <div className="cta-container">
            <div className="cta-wrapper">
                <div className="cta-text">
                    <h2 className="cta-heading">Doživljaji naših mladenki</h2>
                    <p className="cta-description">
                        Saznajte zašto mladenke vole naše usluge i kako njihov poseban dan činimo nezaboravnim.
                    </p>
                    <Link to={"/brideBlogs"} className="cta-link">
                        Pročitajte svjedočanstva
                        <svg className="cta-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </Link>
                </div>
                <div className="cta-image"></div>
            </div>
        </div>
    )
}

export default WhatBridesSay