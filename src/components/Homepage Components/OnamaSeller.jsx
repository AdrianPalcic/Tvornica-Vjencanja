import { Link } from "react-router-dom";
import image from "./..//.././/.//.//././../public/wedding-onama.jpg";

const OnamaSeller = () => {
    return (
        <div className="onama-container">
            <div className="onama-wrapper">
                <div className="onama-image">
                    <img src={image} alt="Onama Image" loading="lazy" />
                </div>
                <div className="onama-text">
                    <h1>Tko smo mi?</h1>
                    <p>
                        Tvornica Vjenčanja nastala je 2012. godine iz osobnog iskustva i potrebe da mladenci na jednom mjestu pronađu odgovore na svoja pitanja o organizaciji vjenčanja. Počeli smo kao grupa „Vjenčanja i sve za vjenčanja“, koja je kasnije prerasla u „Tvornicu Vjenčanja“, a danas okupljamo mladence koji nesebično dijele svoja iskustva, iskrene preporuke i savjete, čineći našu zajednicu najvećom i najzaljubljenijom grupom na ovim prostorima.
                    </p>
                    <Link to={"/onama"}> <button>Saznaj više</button></Link>
                </div>
            </div>
        </div>
    );
};

export default OnamaSeller;
