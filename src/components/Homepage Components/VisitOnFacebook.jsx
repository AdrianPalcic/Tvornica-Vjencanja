import { FaFacebook } from "react-icons/fa"
import image from "./.././..///././/./../public/Rectangle 19.png"
import { Link } from "react-router-dom"

const VisitOnFacebook = () => {
    return (
        <div className="visit-on-facebook-container">
            <div className="visit-on-facebook-wrapper">
                <img src="/visit-on-facebook.jpg" loading="lazy"></img>
                <div className="visit-on-facebook-text">
                    <h1>Posjeti nas na <span>Facebooku</span></h1>
                    <h2>Postani naš član i objavi svoju priču, usluge i iskustva</h2>
                    <Link to="https://web.facebook.com"><button><FaFacebook size={"60px"} /></button></Link>
                </div>
            </div>
        </div>
    )
}

export default VisitOnFacebook