import React from 'react'
import { Link } from 'react-router-dom'


const BrendCard2 = ({ image, name, id }) => {
    return (
        <Link to={`/brend/${id}`}>
            <div className='brend-card-2'>
                <img src={image || "/public/brand-placeholder.png"} alt='Wedding service image' loading="lazy"></img>
                <h2>{name}</h2>
            </div>
        </Link>
    )
}

export default BrendCard2