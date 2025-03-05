import React from 'react'
import { Link } from 'react-router-dom'
const BrendCard1 = ({ naslov, image, id, cat }) => {
    return (
        <Link to={`/brend/${id}`} className="brend-card">
            <img src={image || "/placeholder.svg"} alt={naslov} loading='lazy' />
            <div className="brend-card-content">
                <h3 className="brend-card-title">{naslov}</h3>
                <h4 className="brend-card-cta">{cat}</h4>
            </div>
        </Link>
    )
}

export default BrendCard1