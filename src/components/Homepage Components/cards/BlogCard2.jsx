import React from 'react'
import { FaCalendar, FaClock } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const BlogCard2 = ({ naslov, image, cat, intro, id }) => {
    return (
        <Link to={`/blog/${id}`}>
            <div className="blog-page-card-cont">
                <div className="blog-page-card-image">
                    <img src={image || "/placeholder.svg"} alt={naslov} loading='lazy' />
                </div>
                <div className="blog-page-card-text">
                    <div className="category"><span>{cat}</span></div>
                    <h2>{naslov}</h2>
                    <p>{intro}...</p>
                    <div className="misc">
                        <div className="left">
                            <FaCalendar className="misc-icon" size={"22px"} />
                            <p>12.12.2021</p>
                        </div>
                        <div className="right">
                            <FaClock className="misc-icon" size={"22px"} />
                            <p>5 min read</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard2