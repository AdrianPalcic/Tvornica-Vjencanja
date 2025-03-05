import React from 'react'
import { Link } from 'react-router-dom'

const BrideBlogCard = ({ id, ime, date, image, text }) => {

    const formattedDate = new Date(date).toLocaleDateString("hr-HR", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const removeBoldWords = (text) => {
        return text.replace(/\*\*(.*?)\*\*/g, "");
    }

    const finalIntro = removeBoldWords(text);


    return (
        <Link to={`/brideDetails/${id}`}>
            <div className="bride-blog-card">
                <div className="up">
                    <div className="avatar">
                        <img src={image} loading='lazy'></img>
                    </div>
                    <div className="name-and-date">
                        <h3>{ime}</h3>
                        <p>{formattedDate}</p>
                    </div>
                </div>
                <div className="down">
                    <p>{finalIntro}...</p>
                </div>
            </div>
        </Link>
    )
}

export default BrideBlogCard