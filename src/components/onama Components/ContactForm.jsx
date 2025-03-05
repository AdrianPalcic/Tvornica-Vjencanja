import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { IoIosSend } from "react-icons/io";

const ContactForm = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    const [userInput, setUserInput] = useState({
        ime: "",
        prezime: "",
        email: "",
        poruka: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted:", userInput);
    };


    return (
        <div className="contact-form" id="contact-form">
            <h2>Kontaktirajte Nas</h2>
            <p>Pošaljite nam upit i pomoći ćemo vam u planiranju vašeg savršenog dana</p>
            <form onSubmit={handleSubmit}>
                <div className="name-and-surname">
                    <div className="name">
                        <label for="name">Ime</label>
                        <input type="text" name="name" id='name' placeholder="Unesite Ime" required onChange={(e) => setUserInput({ ...userInput, ime: e.target.value })} />
                    </div>
                    <div className="surname">
                        <label for="surname">Prezime</label>
                        <input type="text" name="surname" id="surname" placeholder="Unesite Prezime" required onChange={(e) => setUserInput({ ...userInput, prezime: e.target.value })} />
                    </div>
                </div>
                <div className="email">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="email@example.com" required onChange={(e) => setUserInput({ ...userInput, email: e.target.value })} />
                </div>
                <div className="textarea">
                    <label for="message">Vaša Poruka</label>
                    <textarea name="message" id="message" placeholder="Unesite Poruku" required onChange={(e) => setUserInput({ ...userInput, poruka: e.target.value })}>

                    </textarea>
                </div>
                <div className="radio">
                    <input type='checkbox' id="accept" name="accept" required />
                    <label for="accept">Prihvaćam uvjete <Link to="/"><span>Politike Privatnosti</span></Link></label>
                </div>
                <button type='submit' className="form-button"><IoIosSend size={26} />Pošaljite Upit</button>
            </form>
        </div>
    )
}

export default ContactForm